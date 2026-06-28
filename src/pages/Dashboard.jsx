import React, { useState, useEffect } from 'react'
import NoteCompGrp from "../components/NoteCompGrp"
import NoteCardGrp from '../components/NoteCardGrp'
const Dashboard = () => {

  const [cards, setCards] = useState(() => {
    const cardGrp = localStorage.getItem('cards');
    return cardGrp ? JSON.parse(cardGrp) : [];
  })

  useEffect(() => {
    localStorage.setItem("cards", JSON.stringify(cards));
  }, [cards]);

  const [head, setHead] = useState("")
  const [detail, setDetail] = useState("")
  // console.log(head, detail);
  const [task, setTask] = useState([])

  const btnclick = (e) => {
    const copytask = [...task]
    copytask.push({ head, detail })
    console.log(task);
    setTask(copytask)
    setHead("")
    setDetail("")
  }
  const deleteitem =(index)=>{
    const copytask = {...task}
    copytask.splice(index,1)
    setTask(copytask)
  }


  return (
    <div className=' flex h-full w-full p-6 space-x-10'>
      <div className='w-1/3 h-full'>
        <NoteCompGrp
          valueone={head}
          setvalueone={setHead}
          valuetwo={detail}
          setvaluetwo={setDetail}
          fun={btnclick} />
      </div>
      <div className='w-2/3 h-full'>
        <NoteCardGrp
          cards={cards}
          headnote={head}
          para={detail} 
          show={task}
          fundel={deleteitem}/>
      </div>
    </div>
  )
}

export default Dashboard