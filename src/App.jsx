import React from 'react'
import {Routes,Route} from "react-router-dom";
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About';
import Project from './Components/Project';
import Aminities2 from './Components/Aminities2';
import Contact from './Components/Contact';
import AboutDir from './Components/AboutDir';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project/>} />
        <Route path="/aminities2" element={<Aminities2 />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/about-director" element={<AboutDir />} />
      </Routes>
    </div>
  )
}

export default App
