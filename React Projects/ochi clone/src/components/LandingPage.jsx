import { motion } from 'framer-motion';
import React from 'react'
import { GoArrowUpRight } from "react-icons/go";

function LandingPage() {
    motion
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className='w-full h-screen bg-zinc-900 pt-2'>
        <div className='textstructure px-20 mt-40'>
            {["We Create", "Eye-Opening", "Presentations"].map((item, index)=>{
                return (
                    <div className="masker">
                        <div className="w-fit flex items-end">
                            {index === 1 && (
                                <motion.div initial={{width: 0}} animate={{width: "9vw"}} transition={{ease: [0.76, 0, 0.24, 1], duration: 1}} className='mr-2 w-[9vw] h-[5.2vw] rounded-md relative top-[vw]'>
                                    <motion.img initial={{width: 0}} animate={{width: "9vw"}} transition={{ease: [0.76, 0, 0.24, 1], duration: 1}} src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg" alt="" />
                                </motion.div>
                            )}
                            <h1 className='flex items-center uppercase leading-[6vw] tracking-tighter text-[7.3vw] font-["Founders Grotesk"] font-bold'>
                              {item}
                            </h1>
                        </div>
                    </div>
                );
            })}
        </div>
        <div className="border-t-[1px] border-zinc-800 mt-32 flex justify-between items-center py-5 px-20">
            {[
                "From public and private companies",
                "From the first pitch to IPO",
            ].map((item, index)=>(
                <p className='text-md font-light tracking-tight leading-none'>{item}</p>
            ))}
            <div className="start flex item-center gap-1.5">
                <div className="px-3 py-1.5 border-[1px] border-zinc-400 font-light cursor-pointer text-md rounded-full">START THE PROJECT</div>
                <div className="w-10 h-10 border-[2px] border-zinc-500 flex justify-center items-center cursor-pointer rounded-full">
                    <GoArrowUpRight />
                </div>
            </div>
        </div>
        <div className="w-full flex items-center justify-center pt-10">
            <h1 className='font-light text-lg font-["Neue_Montreal"] animate-bounce text-zinc-500'>Scroll down</h1>
        </div>
    </div>
  )
}

export default LandingPage