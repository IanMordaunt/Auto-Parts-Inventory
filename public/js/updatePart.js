const showUpdateModal = (part_id, category, name, price, stock, description, store_id) => {
  let cat;
  switch (category) {
    case "Engine":
      cat = 1;
      break;
    case "Transmission":
      cat = 2;
      break;
    case "Electrical":
      cat = 3;
      break;
    case "Suspension":
      cat = 4;
      break;
    case "AC":
      cat = 5;
      break;
    case "Exhaust System":
      cat = 6;
      break;
    case "Brake System":
      cat = 7;
      break;
    case "Misc":
      cat = 8;
      break;
    default:
      alert("ERROR ERROR");
      break;
  }

  document.getElementById("insertUpdateCategory").selectedIndex = cat;

  $('#insertUpdatePartId').val(part_id);
  $('#insertUpdatePartName').val(name);
  $('#insertUpdatePrice').val(price);
  $('#insertUpdateStock').val(stock);
  $('#insertUpdateDescription').val(description);
  $('#insertUpdateStore').val(store_id);
  $('#updateModalLabel').text(`Update ${name}`);

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
    document.location.replace("/parts");
  } else {
    alert(response.statusText);
  }
  $('#insertUpdateModal').modal('hide');
}
