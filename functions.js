function toggleMenu() {
  let menu = document.getElementById("menu");
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}

function togglePage(id) {
    toggleMenu();
    let pages = ["home", "schedule", "artists-vendors", "about-us"]
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
    let pages = ["home", "schedule", "artists-vendors", "about-us"]
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