import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {TfiInstagram} from 'react-icons/tfi'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>BACK TO TOP</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        {/* <li><a href="#services">Services</a></li> */}
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/connor-cappello/" target='_blank'><BsLinkedin/></a>
        <a href="https://github.com/connorGA" target='_blank'><FaGithub/></a>
        {/* <a href="https://www.instagram.com/cj_cappello/" target='_blank'><TfiInstagram/></a> */}
      </div>

      <div className="footer__copyright">
        <small>&copy;2022 All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer