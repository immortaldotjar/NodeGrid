import React from 'react'
import {Link } from "react-router-dom"
import Logo from './Logo'
import Button from './Button'
const NavBar = () => {
  return (
    <div className=' h-18 flex shadow border-olive-200 border-b z-10 scrollbar-gutter-stable'>
      <ul className='flex items-center md:w-dvw px-6 bg-primary space-x-3.5'>
        <li className='mr-auto'>
          <Link to = "/" className = "font-extrabold text-2xl flex space-x-2.5" style={{fontFamily : "Orbitron"}}>
            <Logo/><span>NoteGrid</span>
          </Link>
        </li>
        <li className = "center h-full">
          <Link to="/signin" >
            <p className='font-semibold uppercase '>Sign in</p>
          </Link>
        </li>
        <li>
          <Link to="/signup">
            <Button text={"get started"}/>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default NavBar

