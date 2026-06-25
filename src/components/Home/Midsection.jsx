import React from 'react'
import Midcards from './Midcards'
import { LuLayoutGrid,LuLayers3 } from "react-icons/lu";
import { TiFlashOutline } from "react-icons/ti";

const Midsection = () => {

    const midcard=[
      {
        icon:<LuLayoutGrid/>, 
        heading:"INSTANT SPATIAL AWARENESS", 
        para:"By representng your ideas as discrete grid cards with color categories your brain maps idea spatially, boosting retention and context call"
      },
      {
        icon:<TiFlashOutline/>, 
        heading:"REAL-TIME COLLABORATION", 
        para:"Edits, highlights, and notes update instantly across all devices, ensuring your workspace stays perfectly in sync without delays."
      },
      {
        icon:<LuLayers3 />, 
        heading:"MINIMALIST DESIGN", 
        para:"A clean, distraction-free interface that highlights your ideas, not the clutter—crafted for clarity, balance, and effortless usability."
      }
    ]
  return (
    <div className='p-9 h-full font-sans bg-primary '>
      <p className='font-bold text-olive-500 text-sm tracking-wider'>ENGINEERED FOR HIGH THROUGHPUT</p>
      <p className='font-extrabold text-3xl w-1/2'>A MINIMALIST NOTE ENVIRONMENT FOR DEEP INTTELLECTUAL WORK.</p>
      <div className="flex mt-8 gap-10 ">
        {midcard.map((mid,index)=>(
          <Midcards key={index} icon={mid.icon} head={mid.heading} para={mid.para}/>
        ))}
      </div>
    </div>
  )
}

export default Midsection
