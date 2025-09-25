import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './pagess/Home';
import About from './pagess/About';
import Contact from './pagess/Contact';

function App() {
  return (
   <BrowserRouter>
   <div>
    <Navbar />
    <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/about' element={<About/>}></Route>
    <Route path='/contact' element={<Contact/>}></Route>
    <Route path='/carriers' element ></Route>
    </Routes>
   </div>
   </BrowserRouter>
  );
}

export default App;
