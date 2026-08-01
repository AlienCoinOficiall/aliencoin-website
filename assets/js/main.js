/*==========================================================
  ALIEN COIN UFO
  Premium Edition v2.0
==========================================================*/

"use strict";

/*==========================================================
  DOM
==========================================================*/

const loader =
document.getElementById("loader");

const header =
document.getElementById("header");

const backToTop =
document.getElementById("backToTop");

const mobileMenu =
document.querySelector(".mobile-menu");

const navMenu =
document.querySelector(".nav-menu");

const navLinks =
document.querySelectorAll(".nav-menu a");

const hero =
document.querySelector(".hero");

/*==========================================================
  WINDOW LOAD
==========================================================*/

window.addEventListener("load",()=>{

    setTimeout(()=>{

        loader.style.opacity="0";

        loader.style.visibility="hidden";

        loader.style.pointerEvents="none";

    },1800);

});

/*==========================================================
  STICKY HEADER
==========================================================*/

window.addEventListener("scroll",()=>{

    if(window.scrollY>80){

        header.classList.add("scrolled");

    }else{

        header.classList.remove("scrolled");

    }

});

/*==========================================================
  BACK TO TOP
==========================================================*/

window.addEventListener("scroll",()=>{

    if(window.scrollY>500){

        backToTop.classList.add("show");

    }else{

        backToTop.classList.remove("show");

    }

});

backToTop.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

/*==========================================================
  SMOOTH NAVIGATION
==========================================================*/

navLinks.forEach(link=>{

    link.addEventListener("click",e=>{

        e.preventDefault();

        const id=

        link.getAttribute("href");

        const target=

        document.querySelector(id);

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});
/*==========================================================
  MOBILE MENU
==========================================================*/

mobileMenu.addEventListener("click",()=>{

    navMenu.classList.toggle("open");

    mobileMenu.classList.toggle("active");

});

/* Close menu after click */

navLinks.forEach(link=>{

    link.addEventListener("click",()=>{

        navMenu.classList.remove("open");

        mobileMenu.classList.remove("active");

    });

});

/*==========================================================
  ACTIVE MENU
==========================================================*/

const sections=document.querySelectorAll("section");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const top=section.offsetTop-180;

        const height=section.offsetHeight;

        if(window.scrollY>=top){

            current=section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#"+current){

            link.classList.add("active");

        }

    });

});

/*==========================================================
  SCROLL REVEAL
==========================================================*/

const revealItems=document.querySelectorAll(

    ".about-card, \
     .vision-card, \
     .token-card, \
     .timeline-item, \
     .faq-item, \
     .transmission-panel"

);

const revealObserver=new IntersectionObserver(

(entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";

            entry.target.style.transform="translateY(0)";

        }

    });

},

{

    threshold:.15

}

);

revealItems.forEach(item=>{

    item.style.opacity="0";

    item.style.transform="translateY(60px)";

    item.style.transition="all .8s ease";

    revealObserver.observe(item);

});
/*==========================================================
  HERO PARALLAX
==========================================================*/

window.addEventListener("mousemove",(e)=>{

    const x=(e.clientX/window.innerWidth-.5)*30;
    const y=(e.clientY/window.innerHeight-.5)*30;

    const heroImage=document.querySelector(".hero-image");

    if(heroImage){

        heroImage.style.transform=
        `translate(${x}px,${y}px)`;

    }

});

/*==========================================================
  HERO GLOW FOLLOW
==========================================================*/

const heroGlow=document.querySelector(".hero-glow");

window.addEventListener("mousemove",(e)=>{

    if(!heroGlow) return;

    heroGlow.style.left=e.clientX+"px";

    heroGlow.style.top=e.clientY+"px";

});

/*==========================================================
  SIGNAL PULSE
==========================================================*/

const waves=document.querySelectorAll(".signal-wave");

setInterval(()=>{

    waves.forEach((wave,index)=>{

        wave.style.animation="none";

        wave.offsetHeight;

        wave.style.animation=

        `signalWave 4s linear ${index*1.2}s infinite`;

    });

},8000);

/*==========================================================
  FLOATING EFFECT
==========================================================*/

const floatingItems=document.querySelectorAll(

".about-card,.vision-card,.token-card,.timeline-item"

);

floatingItems.forEach(item=>{

    item.addEventListener("mouseenter",()=>{

        item.style.transition=".35s";

        item.style.transform=

        "translateY(-12px) rotateX(6deg)";

    });

    item.addEventListener("mouseleave",()=>{

        item.style.transform=

        "translateY(0) rotateX(0deg)";

    });

});
/*==========================================================
  COUNTER ANIMATION
==========================================================*/

const counters=document.querySelectorAll(".stat-box h3");

const counterObserver=new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(!entry.isIntersecting) return;

        const counter=entry.target;

        const target=parseInt(

            counter.dataset.target ||

            counter.textContent.replace(/\D/g,"")

        );

        if(isNaN(target)) return;

        let current=0;

        const speed=Math.max(1,Math.ceil(target/80));

        const timer=setInterval(()=>{

            current+=speed;

            if(current>=target){

                current=target;

                clearInterval(timer);

            }

            counter.textContent=current.toLocaleString()+"+";

        },20);

        counterObserver.unobserve(counter);

    });

});

counters.forEach(counter=>{

    counterObserver.observe(counter);

});

/*==========================================================
  TYPING EFFECT
==========================================================*/

const typingTarget=document.querySelector(".message");

if(typingTarget){

    const originalText=typingTarget.textContent.trim();

    typingTarget.textContent="";

    let index=0;

    function typeMessage(){

        if(index<originalText.length){

            typingTarget.textContent+=originalText.charAt(index);

            index++;

            setTimeout(typeMessage,22);

        }

    }

    const typingObserver=new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                typeMessage();

                typingObserver.disconnect();

            }

        });

    });

    typingObserver.observe(typingTarget);

}

/*==========================================================
  PERFORMANCE OPTIMIZER
==========================================================*/

document.addEventListener("visibilitychange",()=>{

    if(document.hidden){

        document.documentElement.classList.add("pause-animation");

    }else{

        document.documentElement.classList.remove("pause-animation");

    }

});
/*==========================================================
  GALAXY PARTICLE ENGINE
==========================================================*/

const particleContainer=document.createElement("div");

particleContainer.className="galaxy-particles";

document.body.appendChild(particleContainer);

function createParticle(){

    const particle=document.createElement("span");

    particle.className="particle";

    particle.style.left=Math.random()*100+"vw";

    particle.style.animationDuration=

    (6+Math.random()*10)+"s";

    particle.style.opacity=

    (.2+Math.random()*.8);

    particle.style.transform=

    `scale(${.4+Math.random()*1.8})`;

    particleContainer.appendChild(particle);

    setTimeout(()=>{

        particle.remove();

    },16000);

}

setInterval(createParticle,350);

/*==========================================================
  SHOOTING STAR
==========================================================*/

function shootingStar(){

    const star=document.createElement("div");

    star.className="shooting-star";

    star.style.left=Math.random()*window.innerWidth+"px";

    star.style.top=Math.random()*250+"px";

    document.body.appendChild(star);

    setTimeout(()=>{

        star.remove();

    },2500);

}

setInterval(shootingStar,5000);

/*==========================================================
  CURSOR GLOW
==========================================================*/

const cursor=document.createElement("div");

cursor.className="cursor-glow";

document.body.appendChild(cursor);

window.addEventListener("mousemove",(e)=>{

    cursor.style.left=e.clientX+"px";

    cursor.style.top=e.clientY+"px";

});

/*==========================================================
  BUTTON GLOW
==========================================================*/

document.querySelectorAll(

".btn-primary,.btn-secondary"

).forEach(button=>{

    button.addEventListener("mouseenter",()=>{

        button.style.filter=

        "brightness(1.15)";

    });

    button.addEventListener("mouseleave",()=>{

        button.style.filter="brightness(1)";

    });

});

/*==========================================================
  OPTIMIZATION
==========================================================*/

window.addEventListener("resize",()=>{

    document.documentElement.style.setProperty(

        "--window-width",

        window.innerWidth+"px"

    );

});

/*==========================================================
  CONSOLE MESSAGE
==========================================================*/

console.log(

"%cALIEN COIN UFO",

"color:#39ff14;font-size:22px;font-weight:bold;"

);

console.log(

"%cWebsite Premium Successfully Loaded",

"color:#00e5ff;font-size:14px;"

);

/* ==========================================
   HEADER SCROLL EFFECT
========================================== */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});
