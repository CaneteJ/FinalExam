import { BrowserRouter, Routes, Route} from 'react-router-dom'
import React from 'react'
import './App.css'
import Hompage from './materials/Hompage'
import Login from './materials/Login'
import Navigation from './materials/Navigation'
import Registration from './materials/Registration'
import 'bootstrap/dist/css/bootstrap.css'


function App() {
  return (
    <div>
      <Navigation />
      <BrowserRouter>
        <Routes>
        <Route index element = {<Hompage />} />
        <Route path= "hompage" element ={<Hompage />} />
        <Route path = "login" element ={<Login/>}/>
        <Route path = "registration" element ={<Registration/>}/>
       </Routes>
      </BrowserRouter>
    </div>

  );
}
export default App;
   