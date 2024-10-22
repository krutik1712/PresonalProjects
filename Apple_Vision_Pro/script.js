// LOVOMOTIVE & SCROLLTRIGGER CODE
function locomotiveScrollTrigger() {
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
}
locomotiveScrollTrigger();

// All the Video's and Text's GASP Code
function allEvenPages() {
    function page2Scroll() {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".page2",
                scroller: ".main",
                start: "top top",
                scrub: 1,
                pin: true,
            }
        });
        tl.to(".page2>.page2-content", {
            top: "-50%"
        });
    };
    page2Scroll();

    function page4Scroll() {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".page4",
                scroller: ".main",
                start: "top top",
                scrub: 1,
                pin: true,
            }
        });
        tl.to(".page4>.page4-content", {
            top: "-50%"
        });
    };
    page4Scroll();

    function page6Scroll() {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".page6",
                scroller: ".main",
                start: "top top",
                scrub: 1,
                pin: true,
            }
        });
        tl.to(".page6>.page6-content", {
            top: "-50%"
        });
    };
    page6Scroll();

    function page8Scroll() {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".page8",
                scroller: ".main",
                start: "top top",
                scrub: 1,
                pin: true,
            }
        });
        tl.to(".page8>.page8-content", {
            top: "-50%"
        });
    };
    page8Scroll();

    function page10Scroll() {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".page10",
                scroller: ".main",
                start: "top top",
                scrub: 1,
                pin: true,
            }
        });
        tl.to(".page10>.page10-content", {
            top: "-50%"
        });
    };
    page10Scroll();

    function page12Scroll() {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".page12",
                scroller: ".main",
                start: "top top",
                scrub: 1,
                pin: true,
            }
        });
        tl.to(".page12>.page12-content", {
            top: "-50%"
        });
    };
    page12Scroll();

    function page14Scroll() {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".page14",
                scroller: ".main",
                start: "top top",
                scrub: 1,
                pin: true,
            }
        });
        tl.to(".page14>.page14-content", {
            top: "-50%"
        });
    };
    page14Scroll();
}
allEvenPages();

// CANVAS CODE
function canvasCode() {
    const canvas = document.querySelector(".page17>canvas");
    const context = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;


    window.addEventListener("resize", function () {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        render();
    });

    function files(index) {
        var data = `
        ./images/canvas/0000.jpg
        ./images/canvas/0001.jpg
        ./images/canvas/0002.jpg
        ./images/canvas/0003.jpg
        ./images/canvas/0004.jpg
        ./images/canvas/0005.jpg
        ./images/canvas/0006.jpg
        ./images/canvas/0007.jpg
        ./images/canvas/0008.jpg
        ./images/canvas/0009.jpg
        ./images/canvas/0010.jpg
        ./images/canvas/0011.jpg
        ./images/canvas/0012.jpg
        ./images/canvas/0013.jpg
        ./images/canvas/0014.jpg
        ./images/canvas/0015.jpg
        ./images/canvas/0016.jpg
        ./images/canvas/0017.jpg
        ./images/canvas/0018.jpg
        ./images/canvas/0019.jpg
        ./images/canvas/0020.jpg
        ./images/canvas/0021.jpg
        ./images/canvas/0022.jpg
        ./images/canvas/0023.jpg
        ./images/canvas/0024.jpg
        ./images/canvas/0025.jpg
        ./images/canvas/0026.jpg
        ./images/canvas/0027.jpg
        ./images/canvas/0028.jpg
        ./images/canvas/0029.jpg
        ./images/canvas/0030.jpg
        ./images/canvas/0031.jpg
        ./images/canvas/0032.jpg
        ./images/canvas/0033.jpg
        ./images/canvas/0034.jpg
        ./images/canvas/0035.jpg
        ./images/canvas/0036.jpg
        ./images/canvas/0037.jpg
        ./images/canvas/0038.jpg
        ./images/canvas/0039.jpg
        ./images/canvas/0040.jpg
        ./images/canvas/0041.jpg
        ./images/canvas/0042.jpg
        ./images/canvas/0043.jpg
        ./images/canvas/0044.jpg
        ./images/canvas/0045.jpg
        ./images/canvas/0046.jpg
        ./images/canvas/0047.jpg
        ./images/canvas/0048.jpg
        ./images/canvas/0049.jpg
        ./images/canvas/0050.jpg
        ./images/canvas/0051.jpg
        ./images/canvas/0052.jpg
        ./images/canvas/0053.jpg
        ./images/canvas/0054.jpg
        ./images/canvas/0055.jpg
        ./images/canvas/0056.jpg
        ./images/canvas/0057.jpg
        ./images/canvas/0058.jpg
        ./images/canvas/0059.jpg
        ./images/canvas/0060.jpg
        ./images/canvas/0061.jpg
        ./images/canvas/0062.jpg
        ./images/canvas/0063.jpg
        ./images/canvas/0064.jpg
        ./images/canvas/0065.jpg
        ./images/canvas/0066.jpg
        ./images/canvas/0067.jpg
        ./images/canvas/0068.jpg
        ./images/canvas/0069.jpg
        ./images/canvas/0070.jpg
        ./images/canvas/0071.jpg
        ./images/canvas/0072.jpg
        ./images/canvas/0073.jpg
        ./images/canvas/0074.jpg
        ./images/canvas/0075.jpg
        ./images/canvas/0076.jpg
        ./images/canvas/0077.jpg
        ./images/canvas/0078.jpg
        ./images/canvas/0079.jpg
        ./images/canvas/0080.jpg
        ./images/canvas/0081.jpg
        ./images/canvas/0082.jpg
        ./images/canvas/0083.jpg
        ./images/canvas/0084.jpg
        ./images/canvas/0085.jpg
        ./images/canvas/0086.jpg
        ./images/canvas/0087.jpg
        ./images/canvas/0088.jpg
        ./images/canvas/0089.jpg
        ./images/canvas/0090.jpg
        ./images/canvas/0091.jpg
        ./images/canvas/0092.jpg
        ./images/canvas/0093.jpg
        ./images/canvas/0094.jpg
        ./images/canvas/0095.jpg
        ./images/canvas/0096.jpg
        ./images/canvas/0097.jpg
        ./images/canvas/0098.jpg
        ./images/canvas/0099.jpg
        ./images/canvas/0100.jpg
        ./images/canvas/0101.jpg
        ./images/canvas/0102.jpg
        ./images/canvas/0103.jpg
        ./images/canvas/0104.jpg
        ./images/canvas/0105.jpg
        ./images/canvas/0106.jpg
        ./images/canvas/0107.jpg
        ./images/canvas/0108.jpg
        ./images/canvas/0109.jpg
        ./images/canvas/0110.jpg
        ./images/canvas/0111.jpg
        ./images/canvas/0112.jpg
        ./images/canvas/0113.jpg
        ./images/canvas/0114.jpg
        ./images/canvas/0115.jpg
        ./images/canvas/0116.jpg
        ./images/canvas/0117.jpg
        ./images/canvas/0118.jpg
        ./images/canvas/0119.jpg
        ./images/canvas/0120.jpg
        ./images/canvas/0121.jpg
        ./images/canvas/0122.jpg
        ./images/canvas/0123.jpg
        ./images/canvas/0124.jpg
        ./images/canvas/0125.jpg
        ./images/canvas/0126.jpg
        ./images/canvas/0127.jpg
        ./images/canvas/0128.jpg
        ./images/canvas/0129.jpg
        ./images/canvas/0130.jpg
        ./images/canvas/0131.jpg
        ./images/canvas/0132.jpg
        ./images/canvas/0133.jpg
        ./images/canvas/0134.jpg
        ./images/canvas/0135.jpg
        ./images/canvas/0136.jpg
        ./images/canvas/0137.jpg
        ./images/canvas/0138.jpg
        ./images/canvas/0139.jpg
        ./images/canvas/0140.jpg
        ./images/canvas/0141.jpg
        ./images/canvas/0142.jpg
        ./images/canvas/0143.jpg
        ./images/canvas/0144.jpg
        ./images/canvas/0145.jpg
        ./images/canvas/0146.jpg
        ./images/canvas/0147.jpg
        ./images/canvas/0148.jpg
        ./images/canvas/0149.jpg
        ./images/canvas/0150.jpg
        ./images/canvas/0151.jpg
        ./images/canvas/0152.jpg
        ./images/canvas/0153.jpg
        ./images/canvas/0154.jpg
        ./images/canvas/0155.jpg
        ./images/canvas/0156.jpg
        ./images/canvas/0157.jpg
        ./images/canvas/0158.jpg
        ./images/canvas/0159.jpg
        ./images/canvas/0160.jpg
        ./images/canvas/0161.jpg
        ./images/canvas/0162.jpg
        ./images/canvas/0163.jpg
        ./images/canvas/0164.jpg
        ./images/canvas/0165.jpg
        ./images/canvas/0166.jpg
        ./images/canvas/0167.jpg
        ./images/canvas/0168.jpg
        ./images/canvas/0169.jpg
        ./images/canvas/0170.jpg
        ./images/canvas/0171.jpg
        ./images/canvas/0172.jpg
        ./images/canvas/0173.jpg
        ./images/canvas/0174.jpg
        ./images/canvas/0175.jpg
        ./images/canvas/0176.jpg
        ./images/canvas/0177.jpg
        ./images/canvas/0178.jpg
        ./images/canvas/0179.jpg
        ./images/canvas/0180.jpg
        ./images/canvas/0181.jpg
        ./images/canvas/0182.jpg
        ./images/canvas/0183.jpg
        ./images/canvas/0184.jpg
        ./images/canvas/0185.jpg
        ./images/canvas/0186.jpg
        ./images/canvas/0187.jpg
        ./images/canvas/0188.jpg
        ./images/canvas/0189.jpg
        ./images/canvas/0190.jpg
        ./images/canvas/0191.jpg
        ./images/canvas/0192.jpg
        ./images/canvas/0193.jpg
        ./images/canvas/0194.jpg
        ./images/canvas/0195.jpg
        ./images/canvas/0196.jpg
        ./images/canvas/0197.jpg
        ./images/canvas/0195.jpg
        ./images/canvas/0199.jpg
        `;
        return data.split("\n")[index];
    }

    const frameCount = 200;

    const images = [];
    const imageSeq = {
        frame: 1,
    };

    for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        img.src = files(i);
        images.push(img);
    }

    gsap.to(imageSeq, {
        frame: frameCount - 1,
        snap: "frame",
        ease: `none`,
        scrollTrigger: {
            scrub: 0.15,
            trigger: `canvas`,
            start: `top top`,
            end: `600% top`,
            scroller: `.main`,
        },
        onUpdate: render,
    });

    images[1].onload = render;

    function render() {
        scaleImage(images[imageSeq.frame], context);
    }

    function scaleImage(img, ctx) {
        var canvas = ctx.canvas;
        var hRatio = canvas.width / img.width;
        var vRatio = canvas.height / img.height;
        var ratio = Math.min(hRatio, vRatio);
        var centerShift_x = (canvas.width - img.width * ratio) / 2;
        var centerShift_y = (canvas.height - img.height * ratio) / 2;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(
            img,
            0,
            0,
            img.width,
            img.height,
            centerShift_x,
            centerShift_y,
            img.width * ratio,
            img.height * ratio
        );
    }
    ScrollTrigger.create({
        trigger: "canvas",
        pin: true,
        scroller: `.main`,
        start: `top top`,
        end: `600% top`,
    });
};
canvasCode();

// Canvas Code for Page28
function canvasCodePage28() {
    const canvas = document.querySelector(".page27-bot>canvas");
    const context = canvas.getContext("2d");

    const frameCount = 25;
    const images = [];
    const imageSeq = { frame: 0 };

    function files(index) {
        const data = `
        ./images/Apple_Vision_Pro_Canvas_Images/Vision00001.png
        ./images/Apple_Vision_Pro_Canvas_Images/Vision00002.png
        ./images/Apple_Vision_Pro_Canvas_Images/Vision00003.png
        ./images/Apple_Vision_Pro_Canvas_Images/Vision00004.png
        ./images/Apple_Vision_Pro_Canvas_Images/Vision00005.png
        ./images/Apple_Vision_Pro_Canvas_Images/Vision00006.png
        ./images/Apple_Vision_Pro_Canvas_Images/Vision00007.png
        ./images/Apple_Vision_Pro_Canvas_Images/Vision00008.png
        ./images/Apple_Vision_Pro_Canvas_Images/Vision00009.png
        ./images/Apple_Vision_Pro_Canvas_Images/Vision00010.png
        ./images/Apple_Vision_Pro_Canvas_Images/Vision00011.png
        ./images/Apple_Vision_Pro_Canvas_Images/Vision00012.png
        ./images/Apple_Vision_Pro_Canvas_Images/Vision00013.png
        ./images/Apple_Vision_Pro_Canvas_Images/Vision00014.png
        ./images/Apple_Vision_Pro_Canvas_Images/Vision00015.png
        ./images/Apple_Vision_Pro_Canvas_Images/Vision00016.png
        ./images/Apple_Vision_Pro_Canvas_Images/Vision00017.png
        ./images/Apple_Vision_Pro_Canvas_Images/Vision00018.png
        ./images/Apple_Vision_Pro_Canvas_Images/Vision00019.png
        ./images/Apple_Vision_Pro_Canvas_Images/Vision00020.png
        ./images/Apple_Vision_Pro_Canvas_Images/Vision00021.png
        ./images/Apple_Vision_Pro_Canvas_Images/Vision00022.png
        ./images/Apple_Vision_Pro_Canvas_Images/Vision00023.png
        ./images/Apple_Vision_Pro_Canvas_Images/Vision00024.png
        ./images/Apple_Vision_Pro_Canvas_Images/Vision00025.png
        `;
        return data.trim().split("\n")[index];
    }

    for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        img.src = files(i).trim();
        images.push(img);
    }

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        render();
    }

    let resizeTimeout;
    window.addEventListener("resize", () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(resizeCanvas, 100);
    });

    function render() {
        requestAnimationFrame(() => {
            scaleImage(images[imageSeq.frame], context);
        });
    }

    function scaleImage(img, ctx) {
        const canvas = ctx.canvas;
        const hRatio = canvas.width / img.width;
        const vRatio = canvas.height / img.height;
        const ratio = Math.min(hRatio, vRatio);
        const centerShift_x = (canvas.width - img.width * ratio) / 2;
        const centerShift_y = (canvas.height - img.height * ratio) / 2;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, img.width, img.height, centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);
    }

    gsap.to(imageSeq, {
        frame: frameCount - 1,
        snap: "frame",
        ease: "power1.inOut",
        scrollTrigger: {
            scrub: 0.15,
            trigger: `.page27-bot`,
            start: `top top`,
            end: `80% top`,
            scroller: `.main`,
            onUpdate: render,
        },
    });

    images[0].onload = render;

    resizeCanvas();

    ScrollTrigger.create({
        trigger: ".page27-bot",
        pin: true,
        scroller: `.main`,
        start: `top top`,
        end: `80% top`,
    });
}
canvasCodePage28();

// On-Off Effect in Page30
function trakingOnOffEffect() {
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".page30",
            scroller: ".main",
            start: "top top",
            scrub: 1,
            pin: true,
        }
    });
    tl.to("#traking-off", {
        opacity: 0
    });
}
trakingOnOffEffect();

// On-Off Effect in Page32
function sensorsOnOffEffect() {
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".page32",
            scroller: ".main",
            start: "top top",
            scrub: 1,
            pin: true,
        }
    });
    tl.to("#sensors-off", {
        opacity: 0
    });
}
sensorsOnOffEffect();

// Glowing Effect in Page34
function glowingEffectPage34() {
    gsap.to(".page34>img", {
        scrollTrigger : {
            trigger : ".page34>img",
            start : "top bottom",
            end : "bottom top",
            scrub : .5,
            scroller : ".main"
        },
        opacity :1,
        scale : 1
    })
}
glowingEffectPage34()