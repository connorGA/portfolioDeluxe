import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/SuperMarioSaiyans.png'
import IMG2 from '../../assets/SongSearch.png'
import IMG3 from '../../assets/TalkTotal.png'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="project 1" />
          </div>
          <h3>Super Mario Saiyans</h3>
          {/* <small className='text-light'>Classic 2D sidescroller game</small> */}
          <div className='portfolio__item-cta'>
            <a href="https://github.com/connorGA/Super-Mario-Knockoff" className='btn' target='_blank'>Github</a>
            <a href="https://connorga.github.io/Super-Mario-Knockoff/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG2} alt="project 1" />
          </div>
          <h3>SongSearch</h3>
          {/* <small className='text-light'>Classic 2D sidescroller game</small> */}
          <div className='portfolio__item-cta'>
            <a href="https://github.com/connorGA/Song-Search" className='btn' target='_blank'>Github</a>
            <a href="https://genius-songsearch.herokuapp.com/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG3} alt="project 1" />
          </div>
          <h3>TalkTotal</h3>
          <div className='portfolio__item-cta'>
            <a href="https://github.com/connorGA/TalkTotal" className='btn' target='_blank'>Github</a>
            <a href="https://talktotal.herokuapp.com" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG4} alt="project 1" />
          </div>
          <h3>Coming Soon!</h3>
          <div className='portfolio__item-cta'>
            <a href="https://github.com" className='btn' target='_blank'>Github</a>
            <a href="https://github.com" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG5} alt="project 1" />
          </div>
          <h3>Coming Soon!</h3>
          <div className='portfolio__item-cta'>
            <a href="https://github.com" className='btn' target='_blank'>Github</a>
            <a href="https://github.com" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG6} alt="project 1" />
          </div>
          <h3>Coming Soon!</h3>
          <div className='portfolio__item-cta'>
            <a href="https://github.com" className='btn' target='_blank'>Github</a>
            <a href="https://github.com" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        

        
      </div>

    </section>
  )
}

export default Portfolio