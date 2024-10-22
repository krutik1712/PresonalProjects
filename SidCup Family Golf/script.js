// CURSOR ANIMATION EFFECT
function cursorAnimation() {
    let cursor = document.querySelector(".cursor")
    let cursorBlur = document.querySelector(".cursor-blur")

    document.addEventListener("mousemove", function (dets) {
        cursor.style.top = dets.y - 8 + "px"
        cursor.style.left = dets.x - 8 + "px"
        cursorBlur.style.top = dets.y - 135 + "px"
        cursorBlur.style.left = dets.x - 135 + "px"
    })

    let navH4 = document.querySelectorAll(".nav h4");

    navH4.forEach(function (ele) {
        ele.addEventListener("mouseenter", function () {
            cursor.style.scale = 4,
                cursor.style.border = "1px solid #fff",
                cursor.style.backgroundColor = "transparent"
        });
        ele.addEventListener("mouseleave", function () {
            cursor.style.scale = 1,
                cursor.style.border = "0px #95C11E",
                cursor.style.backgroundColor = "#95C11E"
        });
    });
};
cursorAnimation();


// NAVBAR ANIMATION EFFECT
function navAnimation() {
    gsap.to(".nav", {
        backgroundColor: "#000",
        duration: 1,
        height: "16vh",
        scrollTrigger: {
            trigger: ".nav",
            scroller: "body",
            start: "top -10%",
            end: "top -11%",
            scrub: 0.7
        }
    });

    gsap.to(".main", {
        backgroundColor: "#000",
        scrollTrigger: {
            trigger: ".main",
            scroller: "body",
            start: "top -25%",
            end: "top -70%",
            scrub: 1
        }
    });
};
navAnimation();

function scallingEffect() {
    gsap.from(".about, .about-us-content img", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.4,
        scrollTrigger: {
            trigger: ".about",
            scroller: "body",
            start: "top 70%",
            end: "top 69%",
            scrub: 1
        }
    });

    gsap.from(".card", {
        scale: .9,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
            trigger: ".card",
            scroller: "body",
            start: "top 80%",
            end: "top 79%",
            scrub: 1
        }
    });
};
// scallingEffect();

function collonAnimation() {
    gsap.from(".collon-1", {
        y: -70,
        x: -70,
        scrollTrigger: {
            trigger: ".collon-1",
            scroller: "body",
            start: "top 55%",
            end: "top 40%",
            scrub: 3
        }
    });

    gsap.from(".collon-2", {
        y: 70,
        x: 70,
        scrollTrigger: {
            trigger: ".collon-1",
            scroller: "body",
            start: "top 55%",
            end: "top 40%",
            scrub: 3
        }
    });
}
collonAnimation();


function page4Animation() {
    gsap.from(".page4 h1", {
        y: 50,
        scrollTrigger: {
            trigger: ".page4 h1",
            scroller: "body",
            markes: "true",
            start: "top 95%",
            end: "top 100%",
            scrub: 3
        }
    });
};
page4Animation();