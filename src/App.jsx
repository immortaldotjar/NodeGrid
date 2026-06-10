import React from 'react'
import Login from './Components/Login'
import Signup from './Components/Signup'
import MergedCard from './Components/MergedCard'
import NavBar from "./components/NavBar"
import NoteCard from './Components/NoteCard'
import Home from './Components/Home/Home'

const App = () => {
  return (
    <div>
      <NavBar/>
      {/* <Login/> */}
      {/* <Signup/> */}

      {/* <MergedCard/> */}

      {/* <NoteCompGrp/> */}
      {/* <NoteCard/> */}
      <Home/>
    </div>
  )
}

export default App