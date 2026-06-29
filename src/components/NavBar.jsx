import React from 'react'
import { Link, useNavigate } from "react-router-dom"
import Logo from './Logo'
import Button from './Button'
const NavBar = () => {
  const nav = useNavigate()


  return (
    <div className='md:h-18 h-30 flex shadow border-olive-200 border-b z-10 scrollbar-gutter-stable'>
      <ul className='flex items-center md:w-dvw px-6 bg-primary space-x-3.5'>
        <li className="mr-auto font-extrabold text-2xl flex space-x-2.5" style={{ fontFamily: "Orbitron" }}
          onClick={() => {
            nav("/")
          }}>
          <Logo /><span>NoteGrid</span>
        </li>
        <li className="center h-full" onClick={() => {
          nav("/signin")
        }}>

          <p className='font-semibold uppercase '>Sign in</p>

        </li>
        <li onClick={() => {
          nav("/signup")
        }}>
            <Button text={"get started"} />
        </li>
      </ul>
    </div>
  )
}

export default NavBar

