import { motion, useAnimation } from 'framer-motion'
import React from 'react'

function FeatureProjects() {
  motion

  const cards = [useAnimation(), useAnimation(), useAnimation(), useAnimation()];

  const handleHoverStart = (index)=>{
    cards[index].start({y: "0"});
  };

  const handleHoverEnd = (index)=>{
    cards[index].start({y: "100%"});
  };

  motion
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.1" className='w-full pt-20'>
      <div className="w-full px-[5vw] border-b-2 border-[#535454] pb-10">
        <h1 className='text-[3.8vw] tracking-tight font-["Neue_Montreal"]'>
          Featured projects
        </h1>
      </div>

      {/* Main Container */}
      <div className="px-10">

        {/* First Container */}
        <div className="cards w-full flex gap-7 mt-[4vw]">

          <motion.div onHoverStart={()=>handleHoverStart(0)} onHoverEnd={()=>handleHoverEnd(0)} className="cardcontainer relative w-1/2 h-[40vw]">
            <div className='text-white flex items-center gap-1 uppercase pb-5'><div className='w-2.5 h-2.5 bg-white rounded-full'></div>fyde</div>
              <div className='absolute flex overflow-hidden left-full -translate-x-1/2 top-1/2 text-[#CDEA68] z-[9] leading-none text-8xl tracking-tighter font-semibold'>
                {"FYDE".split('').map((item, index)=>(
                  <motion.span initial={{y: "100%"}} animate={cards[0]} transition={{ease: [0.33, 1, 0.68, 1], delay: index*.02}} className='inline-block'>{item}</motion.span>
                ))}
              </div>
              <img className='w-full h-full rounded-xl' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />
            <div className="flex gap-3 pt-5">
              <button className='border rounded-full py-1 px-3 text-sm uppercase'>audit</button>
              <button className='border rounded-full py-1 px-3 text-sm uppercase'>copywriting</button>
              <button className='border rounded-full py-1 px-3 text-sm uppercase'>seales deck</button>
              <button className='border rounded-full py-1 px-3 text-sm uppercase'>slides design</button>
            </div>
          </motion.div>

          <motion.div onHoverStart={()=>handleHoverStart(1)} onHoverEnd={()=>handleHoverEnd(1)} className="cardcontainer relative w-1/2 h-[40vw]">
            <h1 className='text-white flex items-center gap-1 uppercase pb-5'><div className='w-2.5 h-2.5 bg-white rounded-full'></div>vise</h1>
              <div className='absolute flex overflow-hidden right-full translate-x-1/2 top-1/2 text-[#CDEA68] z-[9] leading-none text-8xl tracking-tighter font-semibold'>
                {"VISE".split('').map((item, index)=>(
                  <motion.span initial={{y: "100%"}} animate={cards[1]} transition={{ease: [0.33, 1, 0.68, 1], delay: index*.05}} className='inline-block'>{item}</motion.span>
                ))}
              </div>
              <img className='w-full h-full rounded-xl' src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="" />
            <div className="flex gap-3 pt-5">
              <button className='border rounded-full py-1 px-3 text-sm uppercase'>agency</button>
              <button className='border rounded-full py-1 px-3 text-sm uppercase'>company presentation</button>
            </div>
          </motion.div>

        </div>

        {/* Second Container */}
        <div className="cards w-full pt-20 flex gap-7 mt-[4vw]">

          <motion.div onHoverStart={()=>handleHoverStart(2)} onHoverEnd={()=>handleHoverEnd(2)} className="cardcontainer relative w-1/2 h-[40vw]">
              <h1 className='text-white flex items-center gap-1 uppercase pb-5'><div className='w-2.5 h-2.5 bg-white rounded-full'></div>tarwa</h1>
              <div className='absolute flex overflow-hidden left-full -translate-x-1/2 top-1/2 text-[#CDEA68] z-[9] leading-none text-8xl tracking-tighter font-semibold'>
                {"TRAWA".split('').map((item, index)=>(
                  <motion.span initial={{y: "100%"}} animate={cards[2]} transition={{ease: [0.33, 1, 0.68, 1], delay: index*.05}} className='inline-block'>{item}</motion.span>
                  ))}
              </div>
              <img className='w-full h-full rounded-xl' src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-1326x1101.jpg" alt="" />
            <div className="flex gap-3 pt-5">
              <button className='border rounded-full py-1 px-3 text-sm uppercase'>brand identity</button>
              <button className='border rounded-full py-1 px-3 text-sm uppercase'>desigin research</button>
              <button className='border rounded-full py-1 px-3 text-sm uppercase'>investor deck</button>
            </div>
          </motion.div>

          <motion.div onHoverStart={()=>handleHoverStart(3)} onHoverEnd={()=>handleHoverEnd(3)} className="cardcontainer relative w-1/2 h-[40vw]">
              <h1 className='text-white flex items-center gap-1 uppercase pb-5'><div className='w-2.5 h-2.5 bg-white rounded-full'></div>premium blend</h1>
              <div className='absolute flex overflow-hidden right-full translate-x-1/2 top-1/2 text-[#CDEA68] w-full z-[9] leading-none text-8xl tracking-tighter font-semibold'>
                {"PREMIUM BLEND".split('').map((item, index)=>(
                  <motion.span initial={{y: "100%"}} animate={cards[3]} transition={{ease: [0.33, 1, 0.68, 1], delay: index*.05}} className='inline-block'>{item}</motion.span>
                ))}
              </div>
              <img className='w-full h-full rounded-xl' src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png" alt="" />
            <div className="flex gap-3 pt-5">
              <button className='border rounded-full py-1 px-3 text-sm uppercase'>branded template</button>
            </div>
          </motion.div>

        </div>

        {/* Third Container */}
        <div className="w-full h-[10vh] flex justify-center items-center pb-36 pt-[35vh]">
          <a className='w-[40vh] h-[8vh] bg-white cursor-pointer rounded-full text-black tracking-tight font-semibold flex gap-10 items-center justify-center uppercase'>
            View all case studies
            <div className='w-2.5 h-2.5 bg-black rounded-full'></div>
          </a>
        </div>

      </div>

      {/* <div className="w-full border-b-2 border-[#3a3b3b] pb-32"></div> */}
    
    </div>
  )
}

export default FeatureProjects