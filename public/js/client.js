async function doSearch() {
  
  var select = document.getElementById('categoryDropdown');
  var value = select.options[select.selectedIndex].value;
  if (value === "engine" || value === "transmission" || value === "electrical" || value === "suspension" || value === "ac" || value === "exhaust system" || value === "brake system"){
  document.location.replace(`/partsPage/${value}`);
} else {
  alert("nothing was selected in a search bar")
}

};



