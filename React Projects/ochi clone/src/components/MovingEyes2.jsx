import { motion } from 'framer-motion'
import React from 'react'

function MovingEyes2() {
    motion
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className='w-full bg-[#CDEA68] rounded-t-xl overflow-hidden pt-48 pb-36'>
      <div className='text-center uppercase text-[#212121] font-["Founders_Grotesk_X"] font-semibold text-[32vh] leading-[11vw] tracking-tight'>
        <h1>ready</h1>
        <h1>to start</h1>
        <h1>the project ?</h1>
      </div>
      <div className="flex justify-center items-center">
        <a className='w-[40vh] h-[8vh] cursor-pointer flex justify-center items-center border border-black rounded-full text-black tracking-tight font-semibold flex gap-10 items-center justify-center uppercase'>
          start the project
        <div className='w-2.5 h-2.5 bg-black rounded-full'></div>
        </a>
      </div>
      <h1 className='pt-[1vh] pb-[1vh] text-black text-center font-semibold'>OR</h1>
      <div className="flex justify-center items-center">
        <a className='w-[40vh] h-[8vh] cursor-pointer flex justify-center items-center bg-black rounded-full text-white tracking-tight font-semibold flex gap-10 items-center justify-center uppercase'>
          hello@chi.design
        <div className='w-2.5 h-2.5 bg-white rounded-full'></div>
        </a>
      </div>
    </div>
  )
}

export default MovingEyes2

// data-scroll data-scroll-section data-scroll-speed=".1"