import React from 'react'

const Login = (props) => {
    return (
        <div className='flex items-center justify-center py-15'>
            <div className="flex flex-col gap-3 p-9 w-400px bg-gray-50 border border-black-200 p-2 rounded-3xl ">
                <h1 className="text-2xl font-bold">{props.head}</h1>
                <p>{props.text}</p>
                <label>Email</label>
                <input type="email" placeholder="you@gmail.com" className="border border-gray-300 p-2 rounded" />
                <label>Password</label>
                <input type="password" placeholder="At least 8 characters" className="border border-gray-300 p-2 rounded" />
                <button className="bg-black text-white p-2 rounded">{props.btn}</button>
                <div className='flex gap-2'>
                    <p>{props.confirm}</p>
                    <p className='font-bold'>{props.sign}</p>
                </div>
            </div>
        </div>
    )
}

export default Login
