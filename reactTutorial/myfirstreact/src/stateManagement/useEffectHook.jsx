import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Useeffecthook = () => {
  const[city,setCity] = useState("Hyderabad")
  useEffect (()=>{
  if(city === "Mumbai"){
    setCity("Bangalore")
  }else{
    setCity("Delhi")
  }
 },[])
 return (
  <div>
    <h1>I live in {city}</h1>
  </div>
)
}

export default Useeffecthook;