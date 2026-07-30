/* ==========================================
   ALIEN COIN UFO
   MAIN.JS
========================================== */

// Navbar Scroll Effect

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        navbar.classList.add("scrolled");

    }else{

        navbar.classList.remove("scrolled");

    }

});

// Smooth Scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({

            behavior:"smooth"

        });

    });

});

// Fade Animation

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.2
});

document.querySelectorAll(".fade-up").forEach(el=>{

    observer.observe(el);

});/* ==========================================
   BACK TO TOP BUTTON
========================================== */

const backToTop = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {

    if(window.scrollY > 400){

        backToTop.classList.add("active");

    }else{

        backToTop.classList.remove("active");

    }

});

backToTop?.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

/* ==========================================
   ACTIVE NAVIGATION
========================================== */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-menu a");

window.addEventListener("scroll",()=>{

    let current = "";

    sections.forEach(section=>{

        const sectionTop = section.offsetTop - 120;

        if(window.scrollY >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });

});

/* ==========================================
   PAGE LOADER
========================================== */

window.addEventListener("load",()=>{

    document.body.classList.add("loaded");

});

/* ==========================================
   BUTTON RIPPLE EFFECT
========================================== */

document.querySelectorAll(".btn").forEach(button=>{

    button.addEventListener("click",function(e){

        const circle = document.createElement("span");

        const size = Math.max(this.clientWidth,this.clientHeight);

        const x = e.clientX - this.getBoundingClientRect().left - size/2;

        const y = e.clientY - this.getBoundingClientRect().top - size/2;

        circle.style.width = size + "px";
        circle.style.height = size + "px";
        circle.style.left = x + "px";
        circle.style.top = y + "px";

        circle.classList.add("ripple");

        this.appendChild(circle);

        setTimeout(()=>{

            circle.remove();

        },600);

    });

});/* ==========================================
   PARALLAX EFFECT
========================================== */

window.addEventListener("scroll", () => {

    const stars = document.querySelector(".stars");

    if(stars){

        stars.style.transform =
            `translateY(${window.scrollY * 0.3}px)`;

    }

});

/* ==========================================
   TOKEN COUNTER
========================================== */

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    const target = Number(counter.dataset.target);

    let count = 0;

    const speed = target / 120;

    function updateCounter(){

        if(count < target){

            count += speed;

            counter.innerText = Math.floor(count).toLocaleString();

            requestAnimationFrame(updateCounter);

        }else{

            counter.innerText = target.toLocaleString();

        }

    }

    updateCounter();

});

/* ==========================================
   RANDOM GLOW EFFECT
========================================== */

setInterval(()=>{

    document.querySelectorAll(".card").forEach(card=>{

        card.style.boxShadow =
            "0 0 20px rgba(25,255,178,.15)";

        setTimeout(()=>{

            card.style.boxShadow = "";

        },800);

    });

},5000);

/* ==========================================
   TYPING EFFECT
========================================== */

const typingText = document.querySelector(".typing");

if(typingText){

    const text =
        "WE ARE NOT FROM EARTH.";

    let i = 0;

    function typing(){

        if(i < text.length){

            typingText.innerHTML += text.charAt(i);

            i++;

            setTimeout(typing,70);

        }

    }

    typing();

}

/* ==========================================
   YEAR AUTO UPDATE
========================================== */

const year = document.querySelector("#year");

if(year){

    year.textContent = new Date().getFullYear();

}

/* ==========================================
   CONSOLE MESSAGE
========================================== */

console.log("%cALIEN COIN UFO",
"color:#19ffb2;font-size:22px;font-weight:bold;");

console.log("The Signal Has Been Sent.");

/* ==========================================
   END OF MAIN.JS
========================================== */
