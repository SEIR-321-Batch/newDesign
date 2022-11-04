import React from 'react'
import IMG1 from '../images/2048_game.png'
import IMG2 from '../images/imdb_logo.png'
import '../styles/portfolio.css'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5 className='portfolio_header'>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        <article className="portfolio_item">
          <div className="portfolio_item-img">
            <img src={IMG1} alt="2048" />

            <div className="portfolio_body">
              <h3>2048 Game</h3>
              <a href="https://royal0817.github.io/Project-1/" className='btn button_style' target='_blank' rel='noreferrer'>Try it Out!</a>
            </div>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-img">
            <img src={IMG2} alt="2048" />

            <div className="portfolio_body">
              <h3>IMDB Mock Website</h3>
              <a href="https://imdb-project2.herokuapp.com/movies" className='btn button_style' target='_blank' rel='noreferrer'>Full Crud App</a>
            </div>
          </div>
        </article>
      </div>
 

    </section>
  )
}

export default Portfolio