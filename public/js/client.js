async function doSearch() {

  var select = document.getElementById('categoryDropdown');
  var value = select.options[select.selectedIndex].value;
  if (value === "engine" || value === "transmission" || value === "electrical" || value === "suspension" || value === "ac" || value === "exhaust system" || value === "brake system" || value === "misc") {
    document.location.replace(`/partsPage/${value}`);
  } else {
    //do nothing
  }

};



