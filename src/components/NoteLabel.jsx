import React from 'react'

const NoteLabel = ({text}) => {
  return (
    <label className='text-gray-500 uppercase font-bold text-xs '>{text}</label>
  )
}

export default NoteLabel