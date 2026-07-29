// ==========================================
// ALIEN COIN UFO
// MAIN.JS
// ==========================================

// Reveal Animation on Scroll

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {

    reveals.forEach((element) => {

        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const visible = 120;

        if (elementTop < windowHeight - visible) {
            element.classList.add("active");
        }

    });

}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// Navbar Background

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        header.style.background = "rgba(0,0,0,.75)";
    } else {
        header.style.background = "rgba(0,0,0,.35)";
    }

});
