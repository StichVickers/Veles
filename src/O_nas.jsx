import React, { useState } from 'react';
import Header_p1 from './Components/Header';
import O_nas_page from './Components/O_nas_page'
function O_nas() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header_p1></Header_p1>
      <O_nas_page></O_nas_page>
    </>
  )
}

export default O_nas
