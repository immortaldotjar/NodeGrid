import React, { useState ,useEffect} from 'react'
import NoteCompGrp from "../components/NoteCompGrp"
import NoteCardGrp from '../components/NoteCardGrp'
const Dashboard = () => {

  const [cards,setCards] = useState(() => {
    const cardGrp = localStorage.getItem('cards');
    return cardGrp? JSON.parse(cardGrp) : [];
  })

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(cards));
  }, [cards]);

  return (
    <div className=' flex h-full w-full p-6 space-x-10'>
      <div className='w-1/3 h-full'>
        <NoteCompGrp />
      </div>
      <div className='w-2/3 h-full'>
        <NoteCardGrp cards={cards}/>
      </div>
    </div>
  )
}

export default Dashboard