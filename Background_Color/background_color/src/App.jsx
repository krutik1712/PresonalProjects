import React from 'react'
import UseColor from './BackgroundChanger'

export default function App() {
  let [color, setColor] = UseColor("")

  // const black = () => {
  //   setColor("black")
  //   console.log("Black button is clicked.")
  // }

  // const red = () => {
  //   setColor("red")
  //   console.log("Red button is clicked.")
  // }

  // const green = () => {
  //   setColor("green")
  //   console.log("Green button is clicked.")
  // }

  // const orange = () => {
  //   setColor("orange")
  //   console.log("Orange button is clicked.")
  // }

  // const blue = () => {
  //   setColor("blue")
  //   console.log("Blue button is clicked.")
  // }

  return (
    <div className='h-screen w-full duration-200' style={{ backgroundColor: color }}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='fixed flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl'>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "black" }} onClick={() => setColor("black")}>Black</button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "red" }} /* onClick={red}  */ onClick={() => setColor("red")}>Red</button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "green" }} onClick={() => setColor("green")}>Green</button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "orange" }} onClick={() => setColor("orange")}>Orange</button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "blue" }} onClick={() => setColor("blue")}>Blue</button>
        </div>
      </div>
    </div>
  )
}