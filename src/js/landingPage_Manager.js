
// NAVIGATION
let isNavOpen = false;
function toggleNav() {
    // console.log(`Nav state before: ${isNavOpen}`);
    $("nav").toggleClass("nav-expanded");
    
    let icon = $(".btn-menu").find(".icon");
    if (isNavOpen == true) {
        icon.text("menu");
    } else {
        icon.text("close");
    }
    isNavOpen = !isNavOpen;
    // console.log(`Nav state after: ${isNavOpen}`);
}
$(".btn-menu").on('click', toggleNav);


// CAROUSEL EFFECT
const bgCarousel = document.querySelector(".bgCarousel");
const bgcImgContent = bgCarousel.querySelector(".imgContent");
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
$.each(imgResources, function(index, imagePath) {
    firstLoad++;
    // Create image
    const thisImage = $("<div></div>", {
        class: "content",
        css: {
            backgroundImage: `url('../../img/${imagePath}')`
        },
        alt: imagePath
    });

    if (firstLoad === 1) {
        thisImage.addClass("active");
    }

    $(bgcImgContent).append(thisImage);
});


// CAROUSEL
let currentIndex = 0;
let inCooldown = false;

function changeImage(request) {
    if (inCooldown) return;
    inCooldown = true;
    
    if (request === "next") {
        currentIndex = (currentIndex + 1) % imgResources.length;
    } else if (request === "prev") {
        currentIndex = (currentIndex - 1 + imgResources.length) % imgResources.length;
    }

    // Update images
    $(".content").removeClass("active").eq(currentIndex).addClass("active");

    // Update bullets
    $(".bullet span").text("radio_button_unchecked").eq(currentIndex).text("radio_button_checked");

    setTimeout(() => {
        inCooldown = false;
    }, 1000);
}

$("#control-left").on('click', function() {
    changeImage("prev");
});

$("#control-right").on('click', function() {
    changeImage("next");
});

// AUTOMATIC CAROUSEL
$(window).on('load', function() {
    setTimeout(() => {}, 3000);
    setInterval(() => {
        changeImage("next");
    }, 7000);
});
//================================================

// Login POPUP
$loginModal = $(".popup");
$("#btnLogin").on('click', function() {
    if($loginModal.is(":hidden")) {
        $loginModal.fadeIn(100);
        toggleNav();
    } else {
        $loginModal.fadeOut(100);
    }
});
$("#btnPopupLoginClose").on('click', function() {
    $loginModal.fadeOut(100);
});