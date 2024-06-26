import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Lk from './Components/Lk';
function calc() {
  
  const [count, setCount] = useState(0)
  return (
    <>
      <Lk></Lk>
    </>
  )
}

export default calc
