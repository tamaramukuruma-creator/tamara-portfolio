/*==================================================
            TAMARA WEBWORKS
            VERSION 3
==================================================*/


/*==============================
        PAGE LOADER
==============================*/

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";
        loader.style.visibility = "hidden";

    }, 1000);

});





/*==============================
        SHRINK NAVBAR
==============================*/

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 60) {

        navbar.style.padding = "14px 28px";
        navbar.style.marginTop = "10px";

    }

    else {

        navbar.style.padding = "18px 30px";
        navbar.style.marginTop = "18px";

    }

});
/*==================================================
            TYPING EFFECT
==================================================*/

const typingText = document.getElementById("typing-text");

const roles = [

    "Front-End Web Developer",

    "UI / UX Enthusiast",

    "Creative Problem Solver",

    "Responsive Website Designer"

];

let roleIndex = 0;

let charIndex = 0;

let deleting = false;

function typeEffect() {

    const currentRole = roles[roleIndex];

    if (!deleting) {

        typingText.textContent = currentRole.substring(0, charIndex++);

        if (charIndex > currentRole.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;

        }

    } else {

        typingText.textContent = currentRole.substring(0, charIndex--);

        if (charIndex < 0) {

            deleting = false;

            roleIndex++;

            if (roleIndex >= roles.length) {

                roleIndex = 0;

            }

        }

    }

    setTimeout(typeEffect, deleting ? 40 : 90);

}

typeEffect();

/*==================================================
            SCROLL REVEAL
==================================================*/

const observer = new IntersectionObserver(

(entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},

{

    threshold:.2

}

);

document.querySelectorAll("section").forEach(section=>{

    section.classList.add("hidden");

    observer.observe(section);

});
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
    reveals.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const revealPoint = 100;

        if (elementTop < windowHeight - revealPoint) {
            element.classList.add("active");
        }
    });
});
/*==============================
        MOBILE MENU
==============================*/
const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");
const closeMenu = document.querySelector(".close-menu");

menuToggle.addEventListener("click", () => {
    mobileMenu.classList.add("active");
});

closeMenu.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
});

document.querySelectorAll(".mobile-menu a").forEach(link => {
    link.addEventListener("click", () => {
        mobileMenu.classList.remove("active");
    });
});