
let btnNavMenu = document.querySelector(".btn-menu");
let modalNav = document.querySelector("nav");
let isNavOpen = false;
btnNavMenu.addEventListener('click', () => {
    modalNav.classList.toggle("nav-expanded");
})


let bgCarousel = document.querySelector(".bgCarousel");
let carouselContent = bgCarousel.querySelector(".content");
let carouselPaginator = bgCarousel.querySelector(".paginator");
let carouselBtnControlLeft = carouselPaginator.querySelector("#control-left");
let carouselBtnControlRight = carouselPaginator.querySelector("#control-right");

carouselBtnControlLeft.addEventListener('click', () => {
    console.log("Hello World!");
})
carouselBtnControlRight.addEventListener('click', () => {
    console.log("Hello World!");
})