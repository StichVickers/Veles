import React, { useState } from 'react'
import Header_p1 from './Components/Header'
import Comm from './Components/Comments'
function comm() {
  const [count, setCount] = useState(0)
  return (
    <>
      <Header_p1></Header_p1>
     <Comm/>
    </>
  )
}

export default comm
