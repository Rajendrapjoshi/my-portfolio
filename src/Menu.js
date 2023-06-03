import React from 'react'
import { NavLink } from 'react-router-dom';
import "./menu.css";

const Menu = () => {
  return (
  <>
   <div className='menu'>
    <div className="menu_bar">
        <h2 className='menu_head'>Portfolio</h2>
    </div>

    <div className='menu_comp'>
      <NavLink className='menu_home' to="/">Home</NavLink>
      <NavLink className='menu_about' to="/about">About</NavLink>
      <NavLink className='menu_contact' to="/contact">Contact</NavLink>
      <NavLink className='menu_skills' to="/skills">Skills</NavLink>
    </div>
   </div>
  </>
  );
};
export default Menu;
