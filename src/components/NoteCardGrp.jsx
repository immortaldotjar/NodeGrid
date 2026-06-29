import React, { useContext, useState } from 'react'
import NoteCard from './NoteCard'
import { CardContext } from './Context/Context'

const NoteCardGrp = () => {
  const { cards, deleteCard, startEdit } = useContext(CardContext)
  const [active, setActive] = useState("all")

  const grp = ["all", "Work", "Personal", "Ideas", "Quick"]
  const filterCard = active === "all" ? cards : cards.filter(c => c.category === active)

  return (
    <div className="w-full h-full space-y-2">
      <div className="border-b border-zinc-200 w-full">
        <ul className="flex uppercase text-xs font-extrabold w-full">
          {grp.map((item, index) => (
            <li
              key={index}
              className={`center cursor-pointer h-full w-20 py-3.5 px-2 transition select-none ${active === item ? "text-black border-b-2" : "text-zinc-500"}`}
              onClick={() => setActive(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className={`border border-dashed border-zinc-300 ${filterCard.lenght ? "grid grid-cols-2 gap-4" : "flex justify-center text-zinc-400"}  p-1 min-h-106`}>
        {filterCard.lenght ? (
          filterCard.map((item, index) => (
            <NoteCard
              key={index}
              category={item.category}
              head={item.head}
              cont={item.detail}
              color={item.color}
              handleEdit={() => startEdit(index)}
              deletefun={() => deleteCard(index)}
            />
          ))
        ) : (<h1 className='center'>No cards here... Create a note</h1>)}
      </div>
    </div>
  )
}

export default NoteCardGrp
