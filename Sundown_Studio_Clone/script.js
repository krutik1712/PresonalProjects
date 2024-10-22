// Locomotive Code for Smooth Scrolling
const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

// Page Reload Animation Code
function loaderAnimation() {
    let loader = document.querySelector(".loader");
    setTimeout(function () {
        loader.style.top = "-100%";
    }, 4200);
};
loaderAnimation();

// Menu Bar For Mobile Screen Code
function menuAnimation() {
    let menu = document.querySelector("nav h3");
    let fullScreen = document.querySelector(".full-screen");
    let navImage = document.querySelector("nav img");
    let flag = 1

    menu.addEventListener("click", function () {
        if (flag == 1) {
            fullScreen.style.top = 0;
            navImage.style.opacity = 0;
            flag = 0;
        }
        else {
            fullScreen.style.top = "-100%";
            navImage.style.opacity = 1;
            flag = 1;
        }
    })
};
menuAnimation();

// Page4 Content Animation Code
function page4Animation() {
    let elementContainer = document.querySelector(".element-container");
    let fix = document.querySelector(".fix-img");
    
    elementContainer.addEventListener("mouseenter", function () {
        fix.style.display = "block"
    });
    
    elementContainer.addEventListener("mouseleave", function () {
        fix.style.display = "none"
    });
    
    let elements = document.querySelectorAll(".element");
    elements.forEach(function (es) {
        es.addEventListener("mouseenter", function () {
            let image = es.getAttribute("data-img-address");
            fix.style.backgroundImage = `url(${image})`;
        })
    })
};
page4Animation();

// Page4 Swiper Animation Code
function swiperAnimation() {
    let swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 100,
    });
};
swiperAnimation();