import React from 'react'
import { Routes,Route } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import Skills from './Skills';


 const Navbar = () => {
  return (
    <Routes>

    <Route exact path ="/" element={<Home/>} />
    <Route exact path = "/about" element={<About/>} />
    <Route exact path ="/contact" element={<Contact/>} />
    <Route exact path ="/skills" element={<Skills/>} />
    

    </Routes>
  );
};
export default Navbar;
