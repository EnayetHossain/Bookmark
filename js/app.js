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

underline.style.width = `${tabBtns[0].offsetWidth}px`
underline.style.left = `${tabBtns[0].offsetLeft}px`

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

const accordions = document.querySelectorAll(".accordion");
console.log(accordions)

accordions.forEach((accordion)=>{
    accordion.addEventListener("click", ()=>{
        accordion.classList.toggle("active");
    });
});

// scroll animation
let cards = [...document.querySelectorAll(".card")];
let options = {
    rootMargin: "-10%",
    threshold: 0.0
};

const showItem = (entries)=>{
    entries.forEach(entry =>{
        if(entry.isIntersecting){
            cards.forEach((card, index) =>{
                setTimeout(() => {
                    card.classList.add("active");
                }, index * 300);
            });
        }
    });
}

let observer = new IntersectionObserver(showItem, options);

cards.forEach(card =>{
    observer.observe(card);
});