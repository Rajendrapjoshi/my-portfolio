import React from 'react';
import ME from "../My-doc/Me.jpg";
import WELCOME from '../My-doc/welcome.gif';




const Home = () => {
  return (
    <>
    <div className='home'>
      <div className='home_div'>
        <img src={WELCOME} alt="welcome"/>
        <p className='home_para'>It's me </p>
        <h3 className='headingf_home'>Rajendra Prasad Joshi</h3>
        <h1 className='headings_home'>Web Developer</h1>
    </div>
    
      <div className='home_image'>
      <img src={ME} alt="Me" />
      </div>
    </div>
    </>
  );
};

export default Home;
