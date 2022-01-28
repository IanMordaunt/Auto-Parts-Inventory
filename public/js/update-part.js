async function updateFormHandler(event) {
    event.preventDefault();

    const partId = document.getElementById('card-id');
    const  partName = document.getElementById('card-name');
    const  partPrice = document.getElementById('card-price')
    const  partStock = document.getElementById('card-stock')
    const  partDescription = document.querySelector('.card-description')
    const  storeId = document.querySelector('card-store_id')

   
      const response = await fetch(`/updatePart/${partId.value}`, {
        method: 'PUT',
        body: JSON.stringify({
          part_name: partName.value,
          price: partPrice.value,
          stock: partStock.value,
          description: partDescription.value,
          store_id: storeId.value
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
      if (response.ok) {
        document.location.replace('/partsPage/');
      } else {
        alert(response.statusText);
      }

}

document.getElementById('updatebtn').addEventListener('click', updateFormHandler);


   
