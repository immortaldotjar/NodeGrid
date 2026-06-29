import React from 'react'
import { LuPencil, LuTrash2 } from "react-icons/lu"

const NoteCard = ({ category, head, cont, color, handleEdit, deletefun }) => {


    return (
        <div className={`p-5 h-50 space-y-3 rounded shadow-[2px_2px] shadow-zinc-300 sm:w-full ${color}`}>
            <div className="flex">
                <div className="w-fit h-fit border rounded-full border-zinc-400 text-xs font-bold bg-white/70 px-3 py-0.5 mr-auto">
                    {category}
                </div>
                <div className="flex items-center space-x-4">
                    <LuPencil className="hover:text-blue-500 cursor-pointer" onClick={handleEdit} />
                    <LuTrash2 className="text-red-500 hover:text-red-700 cursor-pointer" onClick={deletefun} />
                </div>
            </div>
            <div className="font-extrabold uppercase">
                <h3>{head}</h3>
            </div>
            <div className="h-18 overflow-x-hidden scrollbar-thin scrollbar-thumb-amber-400/50">
                <p>{cont}</p>
            </div>
            <hr />
        </div>
    )
}

export default NoteCard
