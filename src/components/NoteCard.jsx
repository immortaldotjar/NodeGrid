import React from 'react'
import { LuPencil,LuTrash2 } from "react-icons/lu";

const NoteCard = ({ category, title, details, color }) => {
    const def = {category : "Work" ,title : "Hello World" , details : "Something Must be written here..." , color : "bg-yellow-200"}
    return (
        <div className={`p-5 md:max-w-2/7 h-60 space-y-3 rounded shadow sm:w-full ${color ? color : def.color}`}>
            <div className='flex'>
                <div className="w-fit h-fit border rounded-full border-gray-400 text-xs font-bold bg-white/70 px-3 py-0.5 mr-auto">
                    {category ? category : def.category }
                </div>
                <div className='flex items-center space-x-4'>
                    <LuPencil />
                    <LuTrash2 className='text-red-500'/>
                </div>
            </div>
            <div className='font-extrabold uppercase'>
                {title ? title : def.title}
            </div>
            <div className='h-30 overflow-x-hidden scrollbar-thin scrollbar-thumb-amber-400/50 '>
                {details ? details : def.details} Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae culpa laudantium dicta pariatur obcaecati odit! Nostrum, facilis earum amet, dolor suscipit eum et dolore quod minima aut minus blanditiis autem voluptates. Repellendus debitis, voluptas quis voluptatem minima ad magnam obcaecati vero excepturi cupiditate ex voluptate, odio nesciunt accusantium id! Eveniet, impedit esse? Laboriosam consectetur quo saepe, porro expedita fugiat dignissimos vitae, quibusdam labore eveniet voluptatem impedit. Cupiditate alias totam pariatur excepturi eos nam voluptate eius voluptatibus distinctio fugiat ab asperiores rerum provident, quas hic! Molestias enim itaque consequatur, illo adipisci dolores quibusdam. Laborum, ipsa quidem. Voluptas dolores totam sequi accusantium?
            </div>

        </div>
    )
}

export default NoteCard