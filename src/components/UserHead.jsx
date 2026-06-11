import React from 'react'

const UserHead = ({ text,subtext }) => {
    return (
        <div>

            <h1 className='font-extrabold text-xl capitalize'>{text ? text : "hello world"}</h1>
            <p className='text-gray-500 text-xs font-bold'>{subtext ? subtext : "hello world"}</p>
        </div>
    )
}

export default UserHead