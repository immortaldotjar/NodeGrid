import React, { useState, useContext, useEffect } from 'react'
import NoteHead from './NoteHead'
import NoteInput from './NoteInput'

import NoteLabel from './NoteLabel'
import Button from './Button'
import { CardContext } from './Context/Context'

const NoteCompGrp = () => {
    const { addCard, saveCard, cards, edit } = useContext(CardContext)

    const [activeColor, setActiveColor] = useState("bg-yellow-200")
    const [category, setCategory] = useState("Work")
    const [head, setHead] = useState("")
    const [detail, setDetail] = useState("")

    const opt = ["Work", "Personal", "Ideas", "Quick"]
    const color = ["bg-yellow-200", "bg-green-200", "bg-blue-200", "bg-purple-200"]

    useEffect(() => {
        if (edit !== null) {
            const card = cards[edit]
            setHead(card.head)
            setDetail(card.detail)
            setCategory(card.category)
            setActiveColor(card.color)
        }

    }, [edit, cards])

    const handleCreate = () => {

        if (head.trim() && detail.trim()) {
            addCard(head, detail, category, activeColor)
            setHead("")
            setDetail("")

        }
    }

    const handleSave = () => {

        if (head.trim() && detail.trim()) {
            saveCard(head, detail, category, activeColor)
            setHead("")
            setDetail("")
        }
    }

    console.log(activeColor)
    console.log(head)
    console.log(detail)
    console.log(category)
    

    return (
        <div className="md:w-full h-full border border-gray-200 p-8 space-y-5 rounded bg-gray-10 sm:w-full shadow-[2px_2px] shadow-zinc-100">
            <NoteHead head={edit !== null ? "edit note" : "create new note"} />
            <NoteInput
                title="note title"
                ph="Enter title..."
                value={head}
                handleChange={setHead} />
            <NoteInput
                title="note details"
                ph="Write your note content here..."
                h={5}
                value={detail}
                handleChange={setDetail} />

            <div className="flex space-x-4.5">
                <div className="space-y-1.5 flex flex-col w-[50%]">
                    <NoteLabel text="category" />
                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="focus:outline-1 border border-gray-300 p-1.5 w-full rounded h-9 text-xs"
                    >
                        {opt.map((item, index) => (
                            <option key={index} value={item}>{item}</option>
                        ))}
                    </select>
                </div>

                <div className="space-y-1.5 flex flex-col w-[50%]">
                    <NoteLabel text="color card" />
                    <ul className="flex space-x-3.5 h-9 items-center">
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

            {edit !== null ? (
                <Button text="Save note" funbtn={handleSave} />
            ) : (
                <Button text="Create note" funbtn={handleCreate} />
            )}
        </div>
    )
}

export default NoteCompGrp;
