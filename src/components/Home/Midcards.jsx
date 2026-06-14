import React from 'react'

const Midcards = ({icon,head,para}) => {
  return (
    <div className='border-2 border-dashed shadow-[6px_6px] shadow-zinc-800 px-6 py-4 bg-secondary space-y-1.5'>
      <p className='bg-olive-300 w-fit h-fit p-2 rounded '>{icon}</p>
      <h2 className='font-black font-bold text-xl '>{head}</h2>
      <p className='text-sm text-gray-600 w-fit'>{para}</p>
    </div>
  )
}

export default Midcards
