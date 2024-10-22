// TO PREFORM LOCOMOTIVE & SCROLLTRIGGER BOTH ACTIVITY AT THE SAME TIME
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
            return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
        },
    });
    
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
};
locomotiveScrollTriggerAnimation();


// LOADING ANIMATION EFFECT
function startLoadingAnimation() {
    let tl = gsap.timeline();
    
    tl.from(".page1", {
        opacity: 0,
        duration: .3,
        delay: .2
    });
    tl.from(".page1", {
        transform: "scaleX(0.7) scaleY(0) translatey(80%)",
        borderRadius: "50px",
        duration: 2,
        ease: "expo.out",
    });
    tl.from("nav", {
        opacity: 0,
        delay: -.2
    });
    tl.from(".page1 h1, .page1 p, .page1 div", {
        opacity: 0,
        duration: .5,
        stagger: .2
    });
};
startLoadingAnimation();


// NAVBAR ANIMATION EFFECT
function navAnimation() {
    let allelements = document.querySelectorAll(".nav-elements");

    allelements.forEach(function (all) {
        all.addEventListener("mouseenter", function () {
            let tl = gsap.timeline();

            tl.to(".nav-bottompart", {
                height: "16vh"
            });
            tl.to("nav h5", {
                display: "block"
            });
            tl.from(".nav-items h5 span", {
                y: 20,
                stagger: {
                    amount: .6
                },
            });
        });

        all.addEventListener("mouseleave", function () {
            let tl = gsap.timeline();

            tl.from(".nav-items h5 span", {
                y: 25,
                stagger: {
                    amount: .6
                },
            });
            tl.to(".nav-items h5", {
                display: "none",
                duration: .2
            });
            tl.to(".nav-bottompart", {
                height: 0,
                duration: .2
            })
        });
    });
};
navAnimation();


// PAGE 2 RIGHT SIDE DIV's MOUSE EFFECT
function page2MouseHoverAnimation() {
    let rightElements = document.querySelectorAll(".right-element");

    rightElements.forEach(function (ritEle) {
        ritEle.addEventListener("mouseenter", function () {
            gsap.to(ritEle.childNodes[5], {
                opacity: 1,
                scale: 1
            });
        });
        ritEle.addEventListener("mouseleave", function () {
            gsap.to(ritEle.childNodes[5], {
                opacity: 0,
                scale: 0
            });
        });
        ritEle.addEventListener("mousemove", function (event) {
            gsap.to(ritEle.childNodes[5], {
                x: event.clientX - ritEle.getBoundingClientRect().x - 60,
                y: event.clientY - ritEle.getBoundingClientRect().y - 90
            });
        });
    });
};
page2MouseHoverAnimation();


// PAGE 3 VIDEO ANIMATION EFFECT
function page3VideoAnimation() {
    let clickButton = document.querySelector(".page3-button");
    let video = document.querySelector(".page3 video");

    clickButton.addEventListener("click", function () {
        video.play();
        gsap.to(video, {
            transform: "scaleX(1) scaleY(1)",
            opacity: 1,
            borderRadius: 0,
            top: 0
        });
    });
    video.addEventListener("click", function () {
        video.pause()
        gsap.to(video, {
            transform: "scaleX(.7) scaleY(0)",
            opacity: 0,
            borderRadius: "30px",
            top: "25%",
        })
    })
};
page3VideoAnimation();


// PAGE 7 RIGHT SIDE VIDEO ANIMATION EFFECT
function page7RightVideoAnimation() {
    let sections = document.querySelectorAll(".right-section");

    sections.forEach(function (secElement) {
        secElement.addEventListener("mouseenter", function () {
            secElement.childNodes[3].style.opacity = 1
            secElement.childNodes[3].play()
        });
        secElement.addEventListener("mouseleave", function () {
            secElement.childNodes[3].style.opacity = 0
            secElement.childNodes[3].load()
        });
    });
};
page7RightVideoAnimation();


// PAGE 9 BOTTOM PART SCROLLING ANIMATION EFFECT
function page9ScrollingEffectAnimation() {
    gsap.from(".bot-parts h5", {
        x: 0,
        duration: 1,
        scrollTrigger: {
            trigger: ".bot-parts",
            scroller: "body",
            start: "top 80%",
            end: "top 10%",
            scrub: true
        },
    });
};
page9ScrollingEffectAnimation();