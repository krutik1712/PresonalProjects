import React, { useEffect, useState } from 'react'

function MovingEyes() {
   const [rotate, setRotate] = useState(0);

    useEffect(()=>{
        window.addEventListener ("mousemove", (e)=>{
            let mouseX = e.clientX; 
            let mouseY = e.clientY;

            let deltaX = mouseX - window.innerWidth/2;
            let deltaY = mouseY - window.innerHeight/2;

            var angle = Math.atan2(deltaY, deltaX) * (180/Math.PI);
            setRotate(angle-180);
        })
    })

  return (
    <div className='eyes w-full h-screen overflow-hidden'>
        <div data-scroll data-scroll-speed="-.7" className="relative w-full h-full bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg')]">
            <div className="absolute flex gap-8 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
                <div className="flex items-center justify-center w-[14vw] h-[14vw] rounded-full bg-[#F4F4F4]">
                    <div className="w-[8vw] h-[8vw] relative rounded-full bg-[#212121]">
                        <h1 className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] uppercase text-[1.3vw]'>Play</h1>
                        <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className="line w-full h-10 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
                            <div className="w-5 h-5 rounded-full bg-white"></div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center w-[14vw] h-[14vw] rounded-full bg-[#F4F4F4]">
                    <div className="w-[8vw] h-[8vw] relative rounded-full bg-[#212121]">
                        <h1 className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] uppercase text-[1.3vw]'>Play</h1>
                        <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className="line w-full h-10 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
                            <div className="w-5 h-5 rounded-full bg-white"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MovingEyes
