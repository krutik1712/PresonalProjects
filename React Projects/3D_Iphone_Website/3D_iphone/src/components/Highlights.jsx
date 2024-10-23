import { useEffect } from 'react';
import gsap from 'gsap';
import React from 'react';
import { rightImg, watchImg } from '../utils';
import VideoSlider from './VideoSlider';

export default function Highlights() {
  useEffect(() => {
    gsap.to('#title', { opacity: 1, y: 0, ease: 'power2.out' });
    gsap.to('#link', { opacity: 1, y: 0, duration: 1, stagger: 0.25, ease: 'power2.out', delay: 0.5 });
  }, []);

  return (
    <section id='highlights' className='w-screen overflow-hidden h-full common-padding bg-zinc'>
      <div className='screen-max-width'>
        <div className='mb-12 w-full md:flex items-end justify-between'>
          <h1 id='title' className='section-heading'>Get the highlights.</h1>
          <div className='flex flex-wrap items-end gap-5'>
            <p id='link' className='link opacity-0'>Watch the film
              <img src={watchImg} alt="Watch" className='ml-2' />
            </p>
            <p id='link' className='link opacity-0'>Watch the film
              <img src={rightImg} alt="right" className='ml-2' />
            </p>
          </div>
        </div>
        <VideoSlider/>
      </div>
    </section>
  );
}
