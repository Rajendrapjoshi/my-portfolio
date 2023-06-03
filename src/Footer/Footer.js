import React from 'react';
import {RxHome} from 'react-icons/rx';
import {MdCall} from 'react-icons/md';
import {MdEmail} from 'react-icons/md'
import {BiCopyright} from 'react-icons/bi'
import FooterSocial from '../Header/FooterSocial';

const Footer = () => {
  return (
    <>
     <hr/>
    <div className='footer'>
      
      <div className='footer_left'>
        {/* <hr/> */}
        <p className='icon_home'><RxHome/> Bhimdatt-09 Mahendranagar <br/> kanchanpur,nepal.</p>
        <p><MdCall/> 9865925734 , 9812790127</p>
        <p><MdEmail/>rajendrajoshirj420@gmail.com</p>

      </div>

      <div className='footer_right'>
        {/* <hr/> */}
        <h3>More about me</h3>
        <p>I'm a self taught web developer based in Mahendranagar,Nepal.<br/> And I m currently pursuing BCA from TU.</p>
        <FooterSocial/>
        <p>Made with React.js by Rajendra Joshi.</p>
        <p className='footer_rpara'> Copyright <BiCopyright/> 2023| All Rights Reserved</p>
      </div>
  

    
    
   </div>
    </>
  );
};
export default Footer;
