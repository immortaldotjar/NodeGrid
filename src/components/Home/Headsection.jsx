import React from 'react'
import Homecard from './Homecard'
import Homebtns from './Homebtns'
import Button from '../Button'
import { BsStars } from "react-icons/bs";
import { motion } from "motion/react"

const Headsection = () => {
    const cards = [
        { head: "100MS", line: "SEARCH RESPONSE" },
        { head: "TACTILE", line: "GRID LAYOUT" },
    ]
    const btns = [
        { cont: "START TAKING NOTES INSTANTLY" },
    ]
    return (
        <div className="bg-secondary bg-[url('./assets/bg_hero.jpeg')] bg-center bg-no-repeat bg-cover h-full px-8.5 py-9 border-b border-zinc-400">
            <div className=' w-1/3 space-y-1.5 font-sans'>
                <p className='h-fit w-fit text-xs font-extrabold bg-gray-50 border-2 border-dashed border-zinc-600 rounded-full px-6 py-2 flex gap-1.5'><span className='center h-full '><BsStars /></span>TACTICLE, HIGH-PRODUCTIVITY SPACE</p>
                <p className='text-6xl font-extrabold  mt-3'>DITCH DOCUMENT BLOAT. WRITE ON</p>
                <motion.p
                    initial={{ rotateX: 10 ,}}
                    animate={{
                        rotateY: [-10,10,-10],
                        transition: {
                            duration: 1,  
                            ease: "easeInOut",
                            repeat: Infinity,  
                            repeatDelay: 2,
                            
                        },
                    }}

                    className='text-6xl font-extrabold bg-card  border-4 border-dashed border-zinc-600 p-1 px-4 shadow-[8px_8px] shadow-zinc-800 my-2.5
'>TACTICAL CARDS.</motion.p>
                <p className='text-zinc-500 my-8'>NodeGrid reimagines organizations aroung high-density index cards. Capture, classify, search and recall ideas in workspace built for speed and visual focus.</p>
                <div className='flex gap-4 mt-5'>
                    {btns.map((cont, index) => (
                        <Button key={index} text={cont.cont} />
                    ))}
                </div>
                <div className='flex gap-4 mt-5'>
                    {cards.map((cards, index) => (
                        <Homecard key={index} head={cards.head} line={cards.line} />
                    ))}
                </div>
            </div>

        </div>
    )

}

export default Headsection
