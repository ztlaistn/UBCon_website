function autoScroll(id) {
    toggleMenu();
    var element = document.getElementById(id);
    element.scrollIntoView({behavior: "auto", block: "center", inline: "nearest"});
}

function toggleMenu() {
  var menu = document.getElementById("menu");
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}