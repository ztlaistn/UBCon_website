let pageDir = ["home", "about-us"];

function toggleMenu() {
  let menu = document.getElementById("menu");
  let logo = document.getElementById("menu-button");
  let toggled_logo = document.getElementById("menu-button-toggled");
  if (menu.style.display === "block") {
    menu.style.display = "none";
    logo.style.display = "block";
    toggled_logo.style.display = "none";
  } else {
    menu.style.display = "block";
    logo.style.display = "none";
    toggled_logo.style.display = "block";
  }
}

function togglePage(id) {
    toggleMenu();
    let pages = pageDir;
    for(let i=0; i<pages.length; i++){
        if(pages[i] != id){
            let page = document.getElementById(pages[i]);
            page.style.display = "none";
        } else {
            let page = document.getElementById(id);
            page.style.display = "block";
        }
    }
}

function firstLoad(id) {
    let pages = pageDir;
    for(let i=0; i<pages.length; i++){
        if(pages[i] != id){
            let page = document.getElementById(pages[i]);
            page.style.display = "none";
        } else {
            let page = document.getElementById(id);
            page.style.display = "block";
        }
    }
}