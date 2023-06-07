import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import Hompage from './materials/Hompage';
import Login from './materials/Login';
import Navigation from './materials/Navigation';
import Registration from './materials/Registration';
import About from './materials/About';
import getStarted from './materials/getStarted';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<getStarted />} />
          <Route path="/hompage" element={<Hompage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;