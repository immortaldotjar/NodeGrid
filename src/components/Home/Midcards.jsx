import React from 'react'

const Midcards = ({icon,head,para}) => {
  return (
    <div className='border-2 border-dashed shadow-[6px_6px] shadow-zinc-800 px-6 py-4 bg-secondary'>
      <span>{icon}</span>
      <h2 className='font-black text-[20px] '>{head}</h2>
      <p className='mt-3 text-sm text-gray-600 w-fit'>{para}</p>
    </div>
  )
}

export default Midcards
