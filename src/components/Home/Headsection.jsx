import React from 'react'
import Homecard from './Homecard'
import Homebtns from './Homebtns'

const Headsection = () => {
        const cards = [
            { head: "100MS", line: "SEARCH RESPONSE"},
            { head: "TACTILE", line: "GRID LAYOUT"},
            { head: "SAFE", line: "SUPABASE BACKUP"}
        ]
        const btns=[
            {cont:"START TAKING NOTES INSTANTLY"},
            {cont:"TRY LIVE DEMO BELOW"}
        ]
    return (
        <div className='bg-muted-olive h-full px-8.5 py-9'>
            <p className='h-fit w-fit bg-white rounded-2xl p-2'>TACTICLE, HIGH-PRODUCTIVITY SPACE</p>
            <p className='text-6xl font-extrabold w-1/3 mt-3'>DITCH DOCUMENT BLOAT. WRITE ON</p>
            <p className='text-6xl font-extrabold w-1/3 bg-card -rotate-1 border border-dashed border-gray-700 p-1 px-4 shadow-[4px_4px_1px_black] shadow-black '>TACTICAL CARDS.</p>

            <p className='w-1/3 text-gray-500 mt-5'>NodeGrid reimagines organizations aroung high-density index cards. Capture, classify, search and recall ideas in workspace built for speed and visual focus.</p>
             <div className='flex gap-4 mt-5'>
                {btns.map((cont,index)=> (
                    <Homebtns key={index} cont={cont.cont}/>
                ))}
            </div>
             <div className='flex gap-4 mt-5'>
                {cards.map((cards, index) => (
                    <Homecard key={index} head={cards.head} line={cards.line} />
                ))}
            </div>
        </div>
    )

}

export default Headsection
