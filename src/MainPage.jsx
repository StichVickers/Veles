import React, { useState } from 'react'
import Header_p1 from './Components/Header'
import Home from './Components/Home'
function MainPage() {
  const [count, setCount] = useState(0)
  return (
    <>
      <Header_p1></Header_p1>
      <Home></Home>
    </>
  )
}

export default MainPage
