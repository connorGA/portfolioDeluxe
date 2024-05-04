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
              <small>Python Developer at The Arc of San Diego</small>
            </article>

            <article className='about__card'>
              <ImBooks className='about__icon' />
              <h5>Education</h5>
              <ul>
                <li><small>General Assembly's Software Engineering Bootcamp</small></li>
                <li>-</li>
                <li><small>University of California, Santa Barbara Bachelor of Communications</small></li>
              </ul>
            </article>

            <article className='about__card'>
              <RiFolderOpenLine className='about__icon' />
              <h5>Projects</h5>
              <small>View some of my favorites below</small>
            </article>
          </div>
          <p>
            I'm thrilled to embark on my journey in a field that thrives on continuous learning and values perseverance and dedication. Over the past two years I've gained valuable experience as a Python developer that has solidified my passion for coding and problem-solving. I'm confident that my blend of experience and enthusiasm positions me as a valuable asset, ready to make meaningful contributions and grow alongside like-minded professionals.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About