import { motion } from 'framer-motion'
import React from 'react'

function Cards() {
  motion
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className='w-full h-screen flex items-center gap-5 pt-44 px-10'>

        {/* First Part */}
        <div className="cardcontainer h-[60vh] w-1/2">
            <div className="card relative w-full h-full rounded-xl bg-[#004D43] flex items-center justify-center">
              <img className='w-[24vh]' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
              <button className='absolute left-5 bottom-5 border border-[#cdea68] text-[#cdea68] px-3 py-1  rounded-full'>©2019–2022</button>
            </div>
        </div>

        {/* Second Part */}
        <div className="cardcontainer flex gap-5 w-1/2 h-[60vh]">
            <div className="card relative w-1/2 h-full rounded-xl bg-[#212121] flex items-center justify-center">
              <img className='w-[23vh]' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
              <button className='absolute left-5 bottom-5 border uppercase px-3 py-1  rounded-full'>Rating 5.0 on Clutch</button>
            </div>
            <div className="card relative w-1/2 h-full rounded-xl bg-[#212121] flex items-center justify-center">
              <img className='w-[15vh]' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
              <button className='absolute left-5 bottom-5 border uppercase px-3 py-1  rounded-full'>Business Bootcamp Alumni</button>
            </div>
        </div>

    </div>
  )
}

export default Cards