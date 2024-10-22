import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { animateWithGsap } from '../utils/animation';
import { explore1Img, explore2Img, exploreVideo } from '../utils/index';

gsap.registerPlugin(ScrollTrigger);

export default function Features() {
    const videoRef = useRef();

    useEffect(() => {
        // Video scroll animation
        gsap.to('#exploreVideo', {
            scrollTrigger: {
                trigger: '#exploreVideo',
                toggleActions: 'play pause reverse restart',
                start: '-10% bottom',
            },
            onComplete: () => {
                if (videoRef.current) {
                    videoRef.current.play();
                }
            },
        });

        // Title animation
        animateWithGsap('#features_title', { y: 0, opacity: 1 });

        // Image grow animation
        animateWithGsap('.g_grow', { scale: 1, opacity: 1, ease: 'power1', scrub: 5.5 });

        // Text animation with ScrollTrigger
        gsap.to('.g_text', {
            scrollTrigger: {
                trigger: '.feature-text-container', // Ensure this is the correct trigger
                start: 'top 80%',
                toggleActions: 'play none none none', // Play when scrolling to this point
                markers: false, // Set to true for debugging
            },
            y: 0,
            opacity: 1,
            ease: 'power2.inOut',
            duration: 1
        });

    }, []);

    return (
        <section className="h-full common-padding bg-zinc relative overflow-hidden">
            <div className="screen-max-width">
                <div className="mb-12 w-full">
                    <h1 id="features_title" className="section-heading">Explore the full story.</h1>
                </div>
                <div className="flex flex-col justify-center items-center overflow-hidden">
                    <div className="mt-32 mb-24 pl-24">
                        <h2 className="text-5xl lg:text-7xl font-semibold">iPhone.</h2>
                        <h2 className="text-5xl lg:text-7xl font-semibold">Forged in titanium.</h2>
                    </div>
                    <div className="flex-center flex-col sm:px-10">
                        <div className="relative h-[50vh] w-full flex items-center">
                            <video
                                autoPlay
                                muted
                                playsInline
                                id="exploreVideo"
                                className="w-full h-full object-cover object-center"
                                preload="none"
                                ref={videoRef}
                            >
                                <source src={exploreVideo} type="video/mp4" />
                            </video>
                        </div>
                        <div className="w-full flex-col flex relative">
                            <div className="feature-video-container flex">
                                <div className="overflow-hidden flex-1 h-[50vh]">
                                    <img
                                        src={explore1Img}
                                        alt="titanium 1"
                                        className="feature-video g_grow opacity-0 scale-0"
                                    />
                                </div>
                                <div className="overflow-hidden flex-1 h-[50vh]">
                                    <img
                                        src={explore2Img}
                                        alt="titanium 2"
                                        className="feature-video g_grow opacity-0 scale-0"
                                    />
                                </div>
                            </div>
                            <div className="feature-text-container">
                                <div className="flex-1 flex-center">
                                    <p className="feature-text g_text">
                                        iPhone 15 Pro is{' '}
                                        <span className="text-white">
                                            the first iPhone to feature an aerospace-grade titanium design
                                        </span>{' '}
                                        using the same alloy that spacecrafts use for missions to Mars.
                                    </p>
                                </div>
                                <div className="flex-1 flex-center">
                                    <p className="feature-text g_text">
                                        Titanium has one of the best strength-to-weight ratios of any metal, making these our{' '}
                                        <span className="text-white">
                                            lightest Pro models ever.
                                        </span>{' '}
                                        You'll notice the difference the moment you pick one up.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}