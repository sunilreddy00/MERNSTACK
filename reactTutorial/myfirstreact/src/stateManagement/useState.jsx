import React from 'react'
import { useState } from 'react'

const Usestate = () => {
  const[city,setCity] = useState("Hyderabad")
  return (
    <div>{city}</div>
  )
}

export default Usestate;