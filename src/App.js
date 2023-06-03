import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import Navbar from './navbar/Navbar';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Menu from './Menu';



export const App = () => {
  return (
    <BrowserRouter>

    <Menu/>
    <Navbar/>
    <Footer/>
    
    </BrowserRouter>
  );
};
export default App;
