import React from 'react'
import Button from './Button'
import UserInput from './UserInput'
import UserHead from './UserHead'
import { Link } from 'react-router-dom'
const data = [
  { l: "email", t: "email", p: "Enter Email" },
  { l: "password", t: "password", p: "Enter Password" }
]

const Signup = () => {
  return (
    <div className='center h-lvh bg-secondary p-10' >
      <div className='h-fit w-100 p-8 border-2 border-dashed shadow-[5px_5px] shadow-zinc-700 rounded-2xl border-gray-800 bg-primary space-y-3.5'>
        <UserHead text={"create your account"} subtext={"Are your ready to save your Notes? - It's Free!"}/>
        {
          data.map((item, index) => (
            <UserInput key={index} label={item.l} type={item.t} ph={item.p} />
          ))
        }
        <div className='flex space-x-2.5'>
          <Button text={"sign up"} /><Link to = "/"><Button text={"cancel"}/></Link>
        </div>
        <div className='center'>
          <p className='text-gray-500 text-xs'>Already have an Account? <span className='text-black font-bold'><Link to = "/signin">Login</Link></span></p>
        </div>
      </div>
    </div>
  )
}

export default Signup