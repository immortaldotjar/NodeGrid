import React from 'react'

const NoteHead = ({head}) => {
  return (
    <div>
        <h1 className='font-bold text-xl border-b border-b-gray-200 w-full pb-1.5 uppercase'>{head}</h1>
    </div>
  )
}

export default NoteHead