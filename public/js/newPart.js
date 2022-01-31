const showModal = () => {
  $('#insertModal').modal('show');
};

const closeModal = () => {
  $('#insertModal').modal('hide');
};

const newPartConfirmModalHide = () => {
  $('#newPartConfirmModal').modal('hide');
};

const insertNewPart = async () => {
  const part_name = document.getElementById("insertPartName").value;
  const price = document.getElementById("insertPrice").value;
  const stock = document.getElementById("insertStock").value;
  const description = document.getElementById("insertDescription").value;
  const category = document.getElementById("insertCategory").value;
  const store_id = document.getElementById("insertStore").value;

  const response = await fetch("/newPart", {
    method: "POST",
    body: JSON.stringify({ part_name, price, stock, description, category, store_id }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    $('#newPartConfirmModal').modal('show');
  } else {
    alert(response.statusText);
  }
  $('#insertModal').modal('hide');
}

















