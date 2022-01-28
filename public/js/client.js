async function doSearch() {
  var select = document.getElementById('categoryDropdown');
  var value = select.options[select.selectedIndex].value;
  document.location.replace(`/partsPage/${value}`);
};

