import React from 'react'
import Resume from './Resume'
import ME from '../images/83360261-9D76-4831-8515-40F9D2E9C042.jpeg'
import Social from './Social'
import '../styles/header.css'

const Header = () => {
  return (
    <section id='home'>
      <header>
          <div className="container header_container">
              <h5>Hello I'm </h5>
              <h1>Luis</h1>
              <h5 className="text-light">FullStack Developer</h5>
              <Resume />
              <Social />

              <div className="me">
                  <img src={ME} alt="Me" />
              </div>

              <a href='#contact' className='scroll_down'>Scroll Down</a>

          </div>
      </header>
    </section>
  )
}

export default Header