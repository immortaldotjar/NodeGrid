import React, { useState } from 'react'
import { LuEye, LuEyeClosed, LuMail } from "react-icons/lu";

const UserInput = ({ label, type, ph }) => {
    const [show, setShow] = useState(false)
    const spanStyle = 'flex border border-gray-200 bg-muted-olive shadow rounded p-1.5 px-2.5 h-10 mt-1 '
    const inputStyle = 'outline-none w-full text-xs font-bold h-full'
    return (
        <div className=''>
            <label className='capitalize text-[14px] font-bold'>{label}</label>
            {(type === "password") ? (
                <span className={spanStyle}>
                    <input type={(!show) ? type : "text"} placeholder={ph} className={inputStyle} /> 
                    <span className='h-full w-fit center cursor-pointer' onClick={() => setShow(!show)}>
                        {!show ? <LuEyeClosed /> : <LuEye />}
                    </span>
                </span>
            ) : (
                <span className={spanStyle}>
                    <input type={type} placeholder={ph} className={inputStyle} /> 
                    <span className='h-full w-fit center'>
                        <LuMail />
                        
                    </span>
                </span>
            )}
        </div>
    )
}

export default UserInput