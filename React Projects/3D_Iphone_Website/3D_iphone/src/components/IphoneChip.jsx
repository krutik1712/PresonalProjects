import React, { useRef } from 'react'
import { chipImg, frameImg, frameVideo } from '../utils'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

function IphoneChip() {

    const videoRef = useRef()

    useGSAP(() => {
        gsap.from('#chip', {
            scrollTrigger: {
                trigger: '#chip',
                start: '20% bottom'
            },
            opacity: 0,
            scale: 2,
            duration: 2,
            ease: 'power2.inOut'
        })
    }, [])

    return (
        <section className='common-padding'>
            <div className='screen-max-width'>
                <div id='chip' className='flex-center w-full my-20'>
                    <img src={chipImg} alt="chip" width={180} height={180} />
                </div>
                <div className='flex flex-col items-center'>
                    <h2 className="hiw-title">
                        A17 Pro chip.
                        <br />
                        A monster win for gamming.
                    </h2>
                    <p className='hiw-subtitle'>
                        It's here. The biggest redesign in the history of Apple GPUs.
                    </p>
                </div>
                <div className='mt-10 md:mt-20 mb-14'>
                    <div className='h-full flex-center relative'>
                        <div className='overflow-hidden'>
                            <img src={frameImg} alt="frame" className='bg-transparent relative z-10' />
                        </div>
                        <div className='hiw-video'>
                            <video className='pointer-events-none' playsInline preload='none' ref={videoRef} autoPlay muted>
                                <source src={frameVideo} type='video/mp4' />
                            </video>
                        </div>
                    </div>
                    <p className='text-gray font-semibold text-center mt-3'>Honkai: Star Rail</p>
                </div>
            </div>
        </section>
    )
}

export default IphoneChip