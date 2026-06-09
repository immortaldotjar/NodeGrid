import React from 'react'
import Navbar from './Navbar'
import Hometext from './Hometext'
import Para from './HomeRightContent/para'
import Rightbtns from './HomeRightContent/Rightbtns'

const Home = () => {
  return (
    <div className='bg-gray-300 h-screen p-9'>
      <Navbar/>
      <Hometext/>
      <Para />
      <Rightbtns/>
    </div>
  )
}

export default Home
