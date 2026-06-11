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
    <div className='center h-lvh bg-muted-olive p-10' >
      <div className='h-fit w-[400px] shadow-[0_0_1px_black] p-8 border rounded-2xl border-gray-800 bg-olive-light space-y-3.5 shadow-2xs'>
        <UserHead text={"create your account"} subtext={"Are your ready to save your Notes? - It's Free!"}/>
        {
          data.map((item, index) => (
            <UserInput key={index} label={item.l} type={item.t} ph={item.p} />
          ))
        }
        <div className='flex space-x-2.5'>
          <Button text={"sign up"} /><Button text={"cancel"}/>
        </div>
        <div className='center'>
          <p className='text-gray-500 text-xs'>Already have an Account? <span className='text-black font-bold'><Link to = "signin">Login</Link></span></p>
        </div>
      </div>
    </div>
  )
}

export default Signup