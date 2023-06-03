import React from 'react';
import SKILLSPIC from '../My-doc/skillspic.jpg';


const Skills = () => {
  return (
    <div className='skills'>
      <div className='skills_first'>
        <h2>FrontEnd Technology</h2>
        <uL>
          <li>Html</li>
          <li>Css</li>
          <li>Bootstrap</li>
          <li>Javascript</li>
          <li>React.js</li>

        </uL>

        <h2>BackEnd Technology</h2>
        <ul>
          <li>C language</li>
          <li>Core Java</li>
          <li>Python</li>
          <li>MySql</li>

        </ul>
      </div>

      <div className='skills_second'>
        <img src={SKILLSPIC} alt="skillspic"></img>
       
      </div>
      
    </div>
  )
}

export default Skills;
