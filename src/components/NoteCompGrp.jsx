import React, { useState } from 'react'
import NoteHead from './NoteHead'
import NoteInput from './NoteInput'
import NoteLabel from './NoteLabel'
import Button from './Button'
const NoteCompGrp = () => {
    const [activeColor, setActiveColor] = useState("bg-yellow-200")

    const opt = ["Work", "Personal", "Ideas", "Quick"]
    const section = "space-y-1.5 flex flex-col w-[50%]"
    const color = ["bg-yellow-200", "bg-green-200", "bg-blue-200", "bg-purple-200"]

    return (
        <div className='md:w-full h-full border border-gray-200 p-8 space-y-5 rounded bg-gray-10 sm:w-full shadow-[2px_2px] shadow-zinc-100'>
            <NoteHead head={"create new note"} />
            <NoteInput title={"note title"} ph={"Enter title..."} type={"text"} />
            <NoteInput title={"note details"} ph={"Write your note content here..."} type={"text"} h={5} />
            <div className='flex space-x-4.5'>
                <div className={section}>
                    <NoteLabel text={"category"} />
                    <select className='focus:outline-1 placeholder:text-gray-400 border border-gray-300 p-1.5 w-full rounded h-9 text-xs'>
                        {opt.map((item, index) => (
                            <option key={index} value={item.toLowerCase()} className='text-xs'>
                                {item}
                            </option>
                        ))}
                    </select>
                </div>
                <div className={section}>
                    <NoteLabel text={"color card"} />
                    <ul className='flex space-x-3.5 h-9 items-center'>
                        {color.map((item, index) => (
                            <li
                                key={index}
                                className={`w-6 h-6 rounded-full border hover:border-black ${item} ${activeColor === item ? "border-black" : "border-gray-400"}`}
                                onClick={() => setActiveColor(item)}
                            ></li>
                        ))}
                    </ul>
                </div>
            </div>
            <div>

                <Button text={"Create note"} />
            </div>
        </div>
    )
}

export default NoteCompGrp
