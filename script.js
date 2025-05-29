  function onToggleMenu() {
    const nav = document.getElementById("nav_list_element");
    if (nav.style.display === "flex") {
      nav.style.display = "none";
    } else {
      nav.style.display = "flex";
    }
  }
