// LOCOMOTIVE + SCROLLTRIGGER CODE
function locomotiveScrollTriggerAnimation() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".main"),
        smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(".main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
};
locomotiveScrollTriggerAnimation();

// NAV SCROLLING ANIMATION EFFECT
function navIconAnimation() {
    gsap.to(".nav-svg-container svg", {
        transform: "translateY(-100%)",
        scrollTrigger: {
            trigger: ".page1",
            scroller: ".main",
            start: "top 0",
            end: "top -20%",
            scrub: true
        }
    });
    gsap.to(".nav-links", {
        transform: "translateY(-100%)",
        opacity: 0,
        scrollTrigger: {
            trigger: ".page1",
            scroller: ".main",
            start: "top 0",
            end: "top -20%",
            scrub: true
        }
    });
};
navIconAnimation();

// WEBSITE LOADING ANIMATION EFFECT
function loadingAnimation() {
    gsap.from(".page1 h1", {
        y: 80,
        opacity: 0,
        delay: .5,
        duration: .9,
        stagger: .3
    });
    gsap.from(".page1 .img-container", {
        sacle: .85,
        opacity: 0,
        delay: 1.5,
        duration: .3,
    });
};
loadingAnimation();

// PAGE 2 BLOCK BOX ANIMATION EFFECT
function page2BlockBoxAnimation() {
    let boxes = document.querySelectorAll(".boxes");
    boxes.forEach(box => {
        let over = box.nextElementSibling;

        box.addEventListener("mouseenter", function () {
            gsap.to(over, {
                height: "30vh",
                opacity: 1,
                duration: .2
            });
        });

        box.addEventListener("mouseleave", function () {
            gsap.to(over, {
                height: "0vh",
                opacity: 0,
                duration: .2
            });
        });
    });
};
page2BlockBoxAnimation();

// HOVERING CIRCLE DIV ANIMATION EFFECT
function courserPointerAnimation() {
    document.addEventListener("mousemove", function (dets) {
        gsap.to(".pointer", {
            left: dets.x,
            top: dets.y
        });
    });

    document.querySelectorAll(".child").forEach(function (cursor) {
        cursor.addEventListener("mouseenter", function () {
            gsap.to(".pointer", {
                transform: "translate(-50%, -50%) scale(1)"
            });
        });
    });
    document.querySelectorAll(".child").forEach(function (cursor) {
        cursor.addEventListener("mouseleave", function () {
            gsap.to(".pointer", {
                transform: "translate(-50%, -50%) scale(0)"
            });
        });
    });
};
courserPointerAnimation();

