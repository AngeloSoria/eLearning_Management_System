
window.addEventListener("scroll", () => {
    let nav = document.querySelector("nav");
    let navContext = nav.querySelector(".context");
    let navLogo = nav.querySelector(".logo");
    if (window.scrollY === 0) {
        // nav
        nav.style.color = "white";
        nav.style.backgroundColor = "transparent";
        nav.style.borderBottom = "6px solid transparent";
        
    } else if (window.scrollY > 200) {
        // nav
        nav.style.color = "rgb(46, 46, 46)";
        nav.style.backgroundColor = "white";
        nav.style.borderBottom = "6px solid var(--dark-spring-green)";
    }
})
