
import React from 'react'
import './App.css';
import { useState } from 'react';
import FirstComponent from './propsContainer/FirstComponent';
import ClickEvent from './ClickEvent';
import Resize from './Events';
import FormExample from './FormExample';


const App=()=> {
  const [sampleCondition,setSampleCondition]=useState(true)


  return (
    <div>
      
      {/* <h1>Welcome to React</h1>
      {sampleCondition? <FirstComponent/>:"I am False Statement"} */}
      {/* <ClickEvent/> */}
      {/* <Resize/> */}
      <FormExample/>
    </div>
  )
}

export default App