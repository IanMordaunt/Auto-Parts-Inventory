const showUpdateModal = () => {
  $('#insertUpdateModal').modal('show');
}

const closeUpdateModal = () => {
  $('#insertUpdateModal').modal('hide');
}

const insertUpdateNewPart = async () => {
  const id = document.getElementById("insertUpdatePartId").value
  const part_name = document.getElementById("insertUpdatePartName").value;
  const price = document.getElementById("insertUpdatePrice").value;
  const stock = document.getElementById("insertUpdateStock").value;
  const description = document.getElementById("insertUpdateDescription").value;
  const category = document.getElementById("insertUpdateCategory").value;
  const store_id = document.getElementById("insertUpdateStore").value;

  const response = await fetch(`/updatePart/${id}`, {
      method: "PUT",
      body: JSON.stringify({ part_name, price, stock, description, category, store_id }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
        alert("part updated")
      document.location.replace("/parts");
    } else {
      alert(response.statusText);
    }
  $('#insertUpdateModal').modal('hide');
}
   
