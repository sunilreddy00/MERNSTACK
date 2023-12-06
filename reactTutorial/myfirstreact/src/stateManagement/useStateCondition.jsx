import React from 'react'
import { useState } from 'react'

const Usestateconditions = () => {
  const[city,setCity] = useState("Hyderabad")
  if(city === "Hyderabad"){
    setCity("Bangalore")
  }
  return (
    <div>{city}</div>
  )
}

export default Usestateconditions;