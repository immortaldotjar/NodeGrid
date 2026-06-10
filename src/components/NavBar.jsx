import React from 'react'
import {Link } from "react-router-dom"
import Logo from './Logo'
const NavBar = () => {
  return (
    <div className='w-full h-18 flex px-6 shadow border-b-gray-400 border-b z-10'>
      <ul className='flex items-center w-full'>
        <li className='mr-auto'>
          <Link to = "/" className = "font-extrabold text-2xl flex space-x-2.5" style={{fontFamily : "Orbitron"}}>
            <Logo/><span>NoteGrid</span>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default NavBar

