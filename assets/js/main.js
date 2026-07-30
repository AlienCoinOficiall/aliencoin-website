/* ===================================================
   ALIEN COIN UFO
   script.js v1.0
=================================================== */

// Loading Screen

window.addEventListener("load", () => {

    const loader = document.querySelector(".loading-screen");

    setTimeout(() => {
        loader.classList.add("hide");
    }, 1500);

});

// Reveal Animation

const reveals = document.querySelectorAll(".reveal");

function revealSection() {

    const windowHeight = window.innerHeight;

    reveals.forEach(item => {

        const top = item.getBoundingClientRect().top;

        if (top < windowHeight - 100) {
            item.classList.add("active");
        }

    });

}

window.addEventListener("scroll", revealSection);
window.addEventListener("load", revealSection);

// Smooth Navigation

document.querySelectorAll('nav a').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});
/* ===================================================
   PART 2
   ACTIVE MENU • PARALLAX • BACK TO TOP
=================================================== */

// Active Navigation

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href")==="#" + current){

            link.classList.add("active");

        }

    });

});

// Hero Parallax

window.addEventListener("scroll", () => {

    const hero = document.querySelector(".hero");

    if(hero){

        hero.style.backgroundPositionY =
            window.pageYOffset * 0.35 + "px";

    }

});

// Floating Stars Effect

const stars = document.querySelector(".stars");

window.addEventListener("mousemove",(e)=>{

    if(stars){

        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;

        stars.style.transform =
            `translate(${x*10}px,${y*10}px)`;

    }

});

// Back To Top Button

const topButton = document.querySelector(".back-to-top");

window.addEventListener("scroll",()=>{

    if(!topButton) return;

    if(window.scrollY > 500){

        topButton.classList.add("show");

    }else{

        topButton.classList.remove("show");

    }

});

if(topButton){

    topButton.addEventListener("click",()=>{

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });

}/* ===================================================
   PART 3
   COUNTER • GLOW • PERFORMANCE • FINAL
=================================================== */

// Token Counter Animation

const counters = document.querySelectorAll("[data-count]");
let counterStarted = false;

function startCounter() {

    if (counterStarted) return;

    const tokenSection = document.querySelector("#tokenomics");

    if (!tokenSection) return;

    const trigger =
        tokenSection.getBoundingClientRect().top;

    if (trigger < window.innerHeight - 100) {

        counterStarted = true;

        counters.forEach(counter => {

            const target =
                Number(counter.dataset.count);

            let current = 0;

            const increment = Math.max(1, target / 120);

            const update = () => {

                current += increment;

                if (current >= target) {

                    counter.innerText =
                        target.toLocaleString();

                } else {

                    counter.innerText =
                        Math.floor(current).toLocaleString();

                    requestAnimationFrame(update);

                }

            };

            update();

        });

    }

}

window.addEventListener("scroll", startCounter);
window.addEventListener("load", startCounter);

// Button Glow Effect

document.querySelectorAll(".btn").forEach(btn => {

    btn.addEventListener("mouseenter", () => {

        btn.style.boxShadow =
            "0 0 20px #19ffb2,0 0 50px #19ffb2";

    });

    btn.addEventListener("mouseleave", () => {

        btn.style.boxShadow = "";

    });

});

// Navbar Background

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (!header) return;

    if (window.scrollY > 80) {

        header.style.background =
            "rgba(2,4,10,.92)";

        header.style.backdropFilter =
            "blur(18px)";

    } else {

        header.style.background =
            "rgba(2,4,10,.75)";

    }

});

// Console Welcome

console.log("%cALIEN COIN UFO",
"color:#19ffb2;font-size:24px;font-weight:bold;");

console.log("%cGalactic Transmission Online",
"color:#7ffff0;font-size:14px;");

// End

console.log("Website Ready 🚀");
