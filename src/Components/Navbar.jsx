import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center p-5'>
        <p className='text-3xl font-bold'>NOTEGRID</p>
        <div className='flex gap-3'>
            <button className='text-gray-700 font-semibold'>SIGN IN</button>
            <button className='bg-black text-white p-2.5  '>GET STARTED FREE</button>
        </div>
    </div>
  )
}

export default Navbar

