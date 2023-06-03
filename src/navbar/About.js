import React from 'react'
import Header from '../Header/Header';
import MYPICC from '../My-doc/mypicc.jpg';


const About = () => {
  return (
    <>
    <div className='about'>
      <div className='about_first'>
       
        <h2>I'M</h2>
        <p> a <b>Web Developer</b>, <br/>
         I create web pages with React.js. <br/>
          I have one year of experience and i create secure websites <br/> 
          for many clients and they are happy with the projects carried out.</p>

          <Header/>

      </div>
       
      <div className='about_second'>
         <img src={MYPICC} alt="" mypicc/>
     
      </div>  

       
      
    </div>
      
    </>
  );
};

export default About
