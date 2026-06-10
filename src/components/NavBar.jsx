import React from 'react'
import {Link } from "react-router-dom"
const NavBar = () => {
  return (
    <div className='w-full h-18 flex px-6 shadow border-b-gray-400 border-b z-10'>
      <ul className='flex items-center w-full'>
        <li className='mr-auto'>
          <Link to = "/" className = "font-extrabold text-2xl" style={{fontFamily : "Orbitron"}}>
            NoteGrid
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default NavBar

