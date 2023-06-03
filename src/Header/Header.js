import React from 'react'
import "./Header.css"
import CV from '../My-doc/cv.pdf';
import {FiDownload} from 'react-icons/fi';

const Header = () => {
  return (
    <>
    <div className='header'>
    <button className='cv_button' ><a href={CV} download>Download Cv <FiDownload/></a></button>
  </div>

    </>
  );
};

export default Header;