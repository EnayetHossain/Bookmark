const hamBar = document.querySelector(".hambar");
const hamBarMenu = document.querySelector(".ham-bar-menu");
const hamClose = document.querySelector(".ham-close");

hamBar.addEventListener("click", ()=>{
    hamBarMenu.style.left = "0";
});

hamClose.addEventListener("click", ()=>{
    hamBarMenu.style.left = "100%";
});