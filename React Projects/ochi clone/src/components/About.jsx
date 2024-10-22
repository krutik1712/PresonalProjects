import React from 'react'

function About() {
  return (
  <div data-scroll data-scroll-section data-scroll-speed="-.08" className='w-full'>
    <div data-scroll data-scroll-direction="horizontal" data-scroll-speed="-.2" className='w-full px-20 py-20 bg-[#CDEA68] text-black rounded-tl-[2vw] rounded-tr-[2vw]'>
      <h1 className='font-["Neue_Montreal"] text-[4vw] leading-[4vw] tracking-tight'>
        Ochi is a strategic partner for fast-growing tech businesses that 
        need to raise funds, sell products, explain complex ideas, 
        and hire great people.
      </h1>
      <div className="w-full flex gap-5 border-t-[2px] pt-3 mt-20 border-[#99AD53]">
        <div className="w-1/2">
          <h1 className='text-[4vw] font-["Neue_Montreal"]'>
            Our approach:
            </h1>
          <button className='flex gap-10 items-center uppercase py-5 px-10 bg-zinc-900 text-white rounded-full'>
            Read More
            <div className="w-3 h-3 bg-zinc-100 rounded-full mt-1"></div>
          </button>
        </div>
        <div className="w-1/2">
          <img className='rounded-xl' src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt=""/>
        </div>
      </div>
    </div>
  </div>
  )
}

export default About