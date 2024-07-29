
// NAVIGATION
let btnNavMenu = document.querySelector(".btn-menu");
let modalNav = document.querySelector("nav");
let isNavOpen = false;
btnNavMenu.addEventListener('click', () => {
    let icon = btnNavMenu.querySelector(".icon");
    if(!isNavOpen) {
        isNavOpen = true;
        icon.textContent = "close";
    } else {
        isNavOpen = false;
        icon.textContent = "menu";
    }
    modalNav.classList.toggle("nav-expanded");
})




// CAROUSEL EFFECT
const bgCarousel = document.querySelector(".bgCarousel");
const bgcImgContent = bgCarousel.querySelector(".imgContent");
// const carouselContent = bgCarousel.querySelector(".content");
const carouselPaginator = bgCarousel.querySelector(".paginator");
const carouselPaginatorBullets = carouselPaginator.querySelector(".bullets");
const carouselBtnControlLeft = carouselPaginator.querySelector("#control-left");
const carouselBtnControlRight = carouselPaginator.querySelector("#control-right");

const imgResources = [
    "Home-2.jpg",
    "1-Student-Life.jpg",
    "2-Student-Life.jpg",
    "3-UCC-Life.jpg",
];

// Load images
let firstLoad = 0;
imgResources.forEach(imagePath => {
    firstLoad++;
    // Create image
    const thisImage = document.createElement("div");
    thisImage.classList.add("content");
    thisImage.style.backgroundImage = `url('./src/img/${imagePath}')`;
    thisImage.alt = imagePath;

    if (firstLoad === 1) {
        thisImage.classList.add("active");
    }

    bgcImgContent.appendChild(thisImage); 
});
console.log("Images loaded.");

let currentIndex = 0;
let inCooldown = false;
function changeImage(request) {
    if (inCooldown) { return };
    inCooldown = true;
    
    if (request === "next") {
        if (currentIndex === imgResources.length - 1) {
            currentIndex = 0;
        } else {
            currentIndex++;
        }
    } else if (request === "prev") {
        if (currentIndex === 0) {
            currentIndex = imgResources.length - 1;
        } else {
            currentIndex--;
        }
    }
    // console.log(currentIndex);
    // carouselContent.src = "./src/img/" + imgResources[currentIndex];
    const contents = bgcImgContent.querySelectorAll(".content")
    for (let index = 0; index < contents.length; index++) {
        if (index === currentIndex) {
            contents[index].classList.add("active");
        } else {
            contents[index].classList.remove("active");
        }
    }
    // bgcImgContent.querySelectorAll(".content")[currentIndex]


    const bullets = carouselPaginatorBullets.querySelectorAll(".bullet");
    for (let index = 0; index < bullets.length; index++) {
        const thisBullet = bullets[index].querySelector("span");
        if (index === currentIndex) {
            thisBullet.textContent = "radio_button_checked";
        } else {
            thisBullet.textContent = "radio_button_unchecked";
        }
    }

    setTimeout(() => {
        inCooldown = false;
    }, 1000);
}

carouselBtnControlLeft.addEventListener('click', () => {
    changeImage("prev");
})
carouselBtnControlRight.addEventListener('click', () => {
    changeImage("next");
})

// AUTOMATIC CAROUSEL
window.onload = () => {
    setTimeout(() => {}, 3000);
    setInterval(() => {
        changeImage("next");
    }, 7000);
}
