import React from 'react'
import { Routes,Router,Route } from 'react-router-dom'
import Home from './pages/Home'
import NavBar from './components/NavBar'
import Footer from './components/Home/Footer'
import Signup from './components/Signup'
import Login from './components/Login'
const App = () => {
  return (
    <div>      
      <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="signup" element={<Signup/>}/>
          <Route path="signin" element={<Login/>}/>
        </Routes>
      <Footer/>
      
    </div>
  )
}

export default App