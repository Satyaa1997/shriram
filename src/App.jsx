import React from 'react'
import {Routes,Route} from "react-router-dom";
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About';
import Project from './Components/Project';
import Aminities2 from './Components/Aminities2';
import Contact from './Components/Contact';
import AboutDir from './Components/AboutDir';
import Footer from './Components/Footer';
import Gallery from './Components/Gallery';
import Scrool from './Components/Scrool';
import Gall from './Components/Gall';
import Testimonial from './Components/Testimonial';
import Projectimg from './Components/Projectimg';

const App = () => {
  return (
    <div>
      <Scrool />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project/>} />
        <Route path="/aminities2" element={<Aminities2 />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/gallery" element= {<Gallery />} />
        <Route path="/about-director" element={<AboutDir />} />
        <Route path="/gall" element={<Gall />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route psth="/projectimg" element={<Projectimg />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
