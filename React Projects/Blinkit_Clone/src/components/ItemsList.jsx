import React from 'react'
import ImagesContainer from './ImagesContainer'
import SlideItems from './SlideItems'

function ItemsList() {
  return (
    <div className='flex flex-col gap-8 py-[6vw] px-[9vw] pb-[3vw]'>
        <ImagesContainer/>
        <SlideItems/>
        <SlideItems/>
        <SlideItems/>
        <SlideItems/>
        <SlideItems/>
        <SlideItems/>
        <SlideItems/>
    </div>
  )
}

export default ItemsList