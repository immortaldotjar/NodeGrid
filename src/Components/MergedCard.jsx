import React from 'react'
import Login from './Login'
import Signup from './Signup'

const MergedCard = () => {
  
  return (
    <div>
      
     <Login
        head="Sign in to NoteGrid"
        text="Welcome back to NoteGrid - your tactile, productive workspace"
        btn="Login"
        confirm="Don't have an account?"
        sign="Signup"/> 
        <Signup 
        head="Create Your account"
        text="Start your free trial - no credit card required"
        btn="Sign up"
        confirm="Already have an account?"
        sign="Login"
        />
    </div>
  )
}

export default MergedCard
