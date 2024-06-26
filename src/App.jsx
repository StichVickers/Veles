import React, { useEffect,useState } from 'react'
import {Route,Routes} from 'react-router-dom'
import MainPage from './MainPage'
import O_nas from './O_nas.jsx'
import Calc from './Calculator'
import Tarif from './Tarif'
import Comm from './Comments'
import ProfilePage from "./Components/Lk";
import Privacy from './Components/Privacy'
export default function App(){

const [setState] = useState(null);

const callBackendApi = async() =>{
  const responce = await fetch('/express_backend');
  const body = await responce.json();
  if(responce.status !==200){
    throw Error(body.message)
  }
  return body;
};

useEffect(() => {
  callBackendApi()
  .then(res => setState(res.express))
  .catch(err => console.log(err))
})


return(
  
  <Routes>
    <Route path='/' element={<MainPage/>}></Route>
    <Route path='/o_nas' element={<O_nas/>}></Route>
    <Route path='/Calc' element={<Calc/>}></Route>
    <Route path='/Tarif' element={<Tarif/>}></Route>
    <Route path='/Comm' element={<Comm/>}></Route>
    <Route path='/Profile' element={<ProfilePage/>}></Route>
    <Route path='/Privacy' element={<Privacy/>}></Route>
  </Routes>
);
}