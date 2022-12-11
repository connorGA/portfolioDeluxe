import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {CgMail} from 'react-icons/cg'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/connor-cappello/" target='_blank'><BsLinkedin/></a>
        <a href="https://github.com/connorGA" target='_blank'><FaGithub/></a>
        <a href="#contact" ><CgMail/></a>
    </div>
  )
}

export default HeaderSocials