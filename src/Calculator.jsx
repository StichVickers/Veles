import React, { useState } from 'react'
import Header_p1 from './Components/Header';
import Calc from './Components/Calculator'
function calc() {
  const [count, setCount] = useState(0)
  return (
    <>
      <Header_p1></Header_p1>
     <Calc/>
    </>
  )
}

export default calc
