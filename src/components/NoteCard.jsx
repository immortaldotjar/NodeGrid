import React from 'react'
import { LuPencil,LuTrash2 } from "react-icons/lu";

const NoteCard = ({ category, title, details, color,handleEdit,handleRemove }) => {
    const def = {category : "Work" ,title : "Hello World" , details : "Something Must be written here..." , color : "bg-yellow-200"}
    
    return (
        <div className={`p-5 h-60 space-y-3 rounded shadow-[2px_2px] shadow-zinc-300 sm:w-full ${color ? color : def.color}`}>
            <div className='flex'>
                <div className="w-fit h-fit border rounded-full border-zinc-400 text-xs font-bold bg-white/70 px-3 py-0.5 mr-auto">
                    {category ? category : def.category }
                </div>
                <div className='flex items-center space-x-4'>
                    <LuPencil className='hover:text-blue-500 cursor-pointer' onClick={handleEdit}/>
                    <LuTrash2 className='text-red-500 hover:text-red-700 cursor-pointer' onClick={handleRemove}/>
                </div>
            </div>

            

            <div className='font-extrabold uppercase'>
                {title ? title : def.title}
            </div>
            <div className='h-25 overflow-x-hidden scrollbar-thin scrollbar-thumb-amber-400/50 '>
                {details ? details : def.details} Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae culpa laudantium dicta pariatur obcaecati odit! Nostrum, facilis earum amet, dolor suscipit eum et dolore quod minima aut minus blanditiis autem voluptates. Repellendus debitis, voluptas quis voluptatem minima ad magnam obcaecati vero excepturi cupiditate ex voluptate, odio nesciunt accusantium id! Eveniet, impedit esse? Laboriosam consectetur quo saepe, porro expedita fugiat dignissimos vitae, quibusdam labore eveniet voluptatem impedit. Cupiditate alias totam pariatur excepturi eos nam voluptate eius voluptatibus distinctio fugiat ab asperiores rerum provident, quas hic! Molestias enim itaque consequatur, illo adipisci dolores quibusdam. Laborum, ipsa quidem. Voluptas dolores totam sequi accusantium?
            </div>
            <hr />
            <div>
                
            </div>

        </div>
    )
}

export default NoteCard