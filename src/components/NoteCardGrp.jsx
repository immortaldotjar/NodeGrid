import React, { useState } from 'react'
import NoteCard from './NoteCard'
const NoteCardGrp = ({ cards }) => {
  const [active, setActive] = useState("all")
  const grp = ["all", "work", "personal", "ideas", "quick"]
  return (
    <div className='w-full h-full space-y-2'>
      <div className='border-b border-zinc-200 w-full'>
        <ul className='flex uppercase text-xs font-extrabold w-full' >
          {grp.map((item, index) => { return <li key={index} className={`center cursor-pointer h-full w-20 py-3.5 px-2 transition select-none ${active === item ? "text-black border-b-2" : "text-zinc-500"}`} onClick={() => { setActive(item) }}>{item}</li> })}
        </ul>
      </div>
      <div className='border border-dashed border-zinc-300 grid grid-cols-2 gap-4 p-1'>
        {cards.map((item,index) => {
          <NoteCard />
        })}
      </div>
    </div>
  )
}

export default NoteCardGrp