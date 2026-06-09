import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className=' flex h-18 items-center px-7 border border-gray-300 shadow'>
      <ul>
        <li className='mr-auto'>
          <Link to="/" style={{ fontFamily: "Orbitron" }} className='font-extrabold text-2xl'>
            NoteGrid
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default NavBar