import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/SuperMarioSaiyans.png'
import IMG2 from '../../assets/SongSearch.png'
import IMG3 from '../../assets/TalkTotal.png'
import IMG4 from '../../assets/airhouse.png'
import IMG5 from '../../assets/DevMeme.png'
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
          <small className='text-light'>Classic 2D sidescroller game built with HTML5, CSS and JavaScript.</small>
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
          <small className='text-light'>Search for any song and curate your own playlists! Built with Node.js, PostgreSQL, and Genius' API.</small>
          <small className='text-light'>Test View - Email: useremail@fake.com Password: fakepassword </small>
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
          <small className='text-light'>Chatroom site built with Python, Django, and PostgreSQL.</small>
          <div className='portfolio__item-cta'>
            <a href="https://github.com/connorGA/TalkTotal" className='btn' target='_blank'>Github</a>
            <a href="https://talktotal.herokuapp.com" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG4} alt="project 1" />
          </div>
          <h3>Airhouse Clone</h3>
          <small className='text-light'>Inventory management dashboard built with Django, AWS RDS, PostgreSQL, Bootstrap, and a sprinkle of JavaScript.</small>
          <div className='portfolio__item-cta'>
            <a href="https://github.com/connorGA/Airhouse_Clone" className='btn' target='_blank'>Github</a>
            <a href="https://airhouse-clone-0cd160f36786.herokuapp.com/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG5} alt="project 1" />
          </div>
          <h3>DevMeme</h3>
          <small className='text-light'>Social Media application utilizing Python, Django, PostgreSQL, and AWS.</small>
          <div className='portfolio__item-cta'>
            <a href="https://github.com/connorGA/DevMeme" className='btn' target='_blank'>Github</a>
            <a href="https://devmeme.herokuapp.com/" className='btn btn-primary' target='_blank'>Live Demo</a>
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