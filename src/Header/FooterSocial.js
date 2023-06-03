import React from 'react'
import {BsLinkedin} from "react-icons/bs";
import {CiFacebook} from 'react-icons/ci';
import {FaGithubAlt} from 'react-icons/fa';
import {BsInstagram} from 'react-icons/bs';

const FooterSocial = () => {
  return (
    <div className='footer_social'>
      <a href='https://www.linkedin.com/in/rajendra-joshi-627789250' target="_blank"><BsLinkedin/></a>
      <a href='https://www.facebook.com/profile.php?id=100009571269048' target="_blank"><CiFacebook/></a>
      <a href='https://instagram.com/rajendra.joshi_?igshid=Mzc0YWU1OWY=' target=''><BsInstagram/></a>
      <a href='https://github.com/Rajendrapjoshigithub.com' target="_blank"><FaGithubAlt/></a>


    </div>
  )
};

export default FooterSocial;