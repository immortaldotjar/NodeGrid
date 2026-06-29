import React from 'react'

const Homecard = ({head,line}) => {
  return (
    <div className='text-center md:text-left backdrop-blur-xs flex flex-col py-3 font-sans h-fit w-full border-2 border-dashed shadow-[6px_6px] shadow-zinc-800 px-3.5'>
      <p className='font-extrabold'>{head}</p>
      <p className='text-zinc-600 mt-1 text-xs'>{line}</p>
    </div>
  )
}

export default Homecard
