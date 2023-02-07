const hamBar = document.querySelector(".hambar");
const hamBarMenu = document.querySelector(".ham-bar-menu");
const hamClose = document.querySelector(".ham-close");

hamBar.addEventListener("click", ()=>{
    hamBarMenu.style.left = "0";
});

hamClose.addEventListener("click", ()=>{
    hamBarMenu.style.left = "100%";
});

const tabBtns = document.querySelectorAll(".tab-btn");
const contents = document.querySelectorAll(".content");
const underline = document.querySelector(".underline");

tabBtns.forEach((tab, index)=>{
    tab.addEventListener("click", (e)=>{

        tabBtns.forEach(tab => { 
            tab.classList.remove("active"); 
        });
        tab.classList.add("active");
        underline.style.width = `${e.target.offsetWidth}px`;
        underline.style.left = `${e.target.offsetLeft}px`;

        contents.forEach(content => {
            content.classList.remove("active");
        });
        contents[index].classList.add("active");
    });

});