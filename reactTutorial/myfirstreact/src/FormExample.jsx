import React from 'react'
import { useState } from 'react'

const FormExample = () => {

  const [userName, setUserName]= useState("")

  const [newUserDetails, setNewUserDetails] = useState()

  const getUserName = (event)=>{
    setUserName(event.target.value)
  }

  const userDetails = (e) =>{
    e.preventDefault()
    setNewUserDetails(userName)
  }
  return (
    <section className='formSection'>
      <h2>{newUserDetails}</h2>
      <div className='inputdiv'>

        <form onSubmit={userDetails}>
          <input type='text' placeholder='Enter your name' onChange={getUserName}/>
          <br/>
          <button className='submitbtn' type='submit'>Submit</button>
        </form>
      </div>
    </section>
    
  )
}

export default FormExample