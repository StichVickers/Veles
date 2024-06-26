import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Lk from './Components/Lk';
import Calculator from '../src/Components/Calculator';
function calc() {
  
  const [count, setCount] = useState(0)
  return (
    <>
      <Router>
      <Switch>
        <Route path="/Calc" exact component={Calculator} />
        <Route path="/Profile" component={Profile} />
      </Switch>
    </Router>
      <Lk></Lk>
    </>
  )
}

export default calc
