async function doSearch() {
    var select = document.getElementById('categoryDropdown');
    var value = select.options[select.selectedIndex].value;
    
    const client = await fetch(`/parts/${value}`, {
        method: "Get", 
      });
    
      if (response.ok) {
        document.location.replace("/");
      } else {
        alert("Failed to log in");
}
};

