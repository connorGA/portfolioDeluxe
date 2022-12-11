import React from 'react'
import './about.css'
import ME from '../../assets/Peerless Headshots -10 (1).jpg'
import {FaAward} from 'react-icons/fa'
import {ImBooks} from 'react-icons/im'
import {RiFolderOpenLine} from 'react-icons/ri'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>General Assembly's SE Immersive Bootcamp</small>
            </article>

            <article className='about__card'>
              <ImBooks className='about__icon' />
              <h5>Education</h5>
              <small>University of California, Santa Barbara Bachelor of Communication</small>
            </article>

            <article className='about__card'>
              <RiFolderOpenLine className='about__icon' />
              <h5>Projects</h5>
              <small>View some of my favorites below</small>
            </article>
          </div>
          <p>
           I am excited to launch my career in a field that cultivates continual learning and rewards dedication and hard work. The gratification I’ve felt from completing personal projects has made me eager to contribute to larger projects that solve real world problems. With my background, I can provide a strong work ethic and cooperative attitude, which I believe will make me a valuable asset to any team.

          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About