import React from 'react'
import Midcards from './Midcards'

const Midsection = () => {

    const midcard=[
      {
        icon:"", 
        heading:"INSTANT SPATIAL AWARENESS", 
        para:"By representng your ideas as discrete grid cards with color categories your brain maps idea spatially, boosting retention and context call"
      },
      {
        icon:"", 
        heading:"UlTRA LOW-LATENCY SYNC ", 
        para:"Powered by Next.js Server Actions and supabase, every single edit. addition, or color change resolve instantly and presists securely"
      },
      {
        icon:"", 
        heading:"UNCOMPROMISED SECURITY", 
        para:"Robust Row-Level Security(RLS) built into Supabase guarantees that only you can select, modify, or delet your tactical cards. "
      }
    ]
  return (
    <div className='p-9 mt-9'>
      <p className='font-bold text-gray-600'>ENGINEERED FOR HIGH THROUGHPUTD</p>
      <p className='font-[900] text-[30px] w-[550px]'>A MINIMALIST NOTE ENVIRONMENT FOR DEEP INTTELLECTUAL WORK.</p>
      <div className="flex mt-8 gap-10">
        {midcard.map((mid,index)=>(
          <Midcards key={index} icon={mid.icon} head={mid.heading} para={mid.para}/>
        ))}
      </div>
    </div>
  )
}

export default Midsection
