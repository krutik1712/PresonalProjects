import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {
  motion
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className='w-full py-[5vw] rounded-tl-[2vw] rounded-tr-[2vw] bg-[#004D43]'>
        <div className="text border-t-2 border-b-2 border-zinc-500 overflow-hidden flex whitespace-nowrap">
            <motion.h1 initial={{x: 0}} animate={{x: "-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 10}} className='text-[21vw] -mt-[2.5vw] font-["Founders Grotesk"] tracking-tighter leading-none font-bold pr-10'>
              WE ARE OCHI
            </motion.h1>
            <motion.h1 initial={{x: 0}} animate={{x: "-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 10}} className='text-[21vw] -mt-[2.5vw] font-["Founders Grotesk"] tracking-tighter leading-none font-bold pr-10'>
              WE ARE OCHI
            </motion.h1>
            <motion.h1 initial={{x: 0}} animate={{x: "-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 10}} className='text-[21vw] -mt-[2.5vw] font-["Founders Grotesk"] tracking-tighter leading-none font-bold pr-10'>
              WE ARE OCHI
            </motion.h1>
        </div>
    </div>
  )
}

export default Marquee