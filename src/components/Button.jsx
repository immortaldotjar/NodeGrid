import React from 'react'

const Button = ({text}) => {

  const color = text === "cancel" ? 'border-gray-200 bg-muted-olive text-black hover:bg-olive-muted/90 text-semibold' : "bg-black text-white hover:bg-black/90"
  const size = text !== "sign up" && text !== "login" && text !== "cancel" ? "uppercase " : "capitalize text-xs font-bold"
  return (
    <button className={` rounded ${color} ${size} hover:scale-[0.98] transition border shadow p-1.5 px-2.5 py-2.5 h-fit rounded mt-1 w-full `} >{text ? text :"hello world"}</button>
  )
}

export default Button