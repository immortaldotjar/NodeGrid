import React from 'react'

const Homecard = ({head,line}) => {
  return (
    <div className='flex flex-col py-5 mx-3'>
      <button className='font-bold'>{head}</button>
      <button className='text-gray-600 mt-1'>{line}</button>
    </div>
  )
}

export default Homecard
