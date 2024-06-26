import React, { useState } from 'react'
import Header_p1 from './Components/Header';
import Tar from './Components/Tarif'
function tarif() {
  const [count, setCount] = useState(0)
  return (
    <>
      <Header_p1></Header_p1>
    <Tar/>
    </>
  )
}

export default tarif
