import React from 'react'
import ME from '../images/royal_persons_back_hacking_on_a_computer_glowing_screen__dark_r_064d7695-9f54-4a63-8219-299e61954126.png'
import {MdOutlineWork} from 'react-icons/md'
import {HiUsers} from 'react-icons/hi'
import {FaRegFolderOpen} from 'react-icons/fa'
import '../styles/about.css'

const About = () => {
  // let compression = require('compression')

  return (
    <section id='about'>
      <h5>Get To Know </h5>
      <h2>Me</h2>

      

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me_img">
            <img src={ME} alt="about me img" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <MdOutlineWork className='about-icon' />
              <h5>Experience</h5>
              <small>6+ months</small>
            </article>

            <article className="about_card">
              <HiUsers className='about-icon' />
              <h5>clients</h5>
              <small></small>
            </article>

            <article className="about_card">
              <FaRegFolderOpen className='about-icon' />
              <h5>Projects</h5>
              <small>4+ completed</small>
            </article>

          </div>

          <p>
            About me 
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About