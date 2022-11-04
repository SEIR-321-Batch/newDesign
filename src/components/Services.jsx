import React from 'react'
import {FiCheck} from 'react-icons/fi'
import '../styles/services.css'

const Services = () => {
  return (
    <section id='services'>
      <h5 className='services_header'>What I Offer</h5>
      <h2>Services</h2>

    <div className="container services_container">
      <article className="services">
        <div className="service_head">
          <h3>UI/UX Design</h3>
        </div>

        <ul className="service_list">
          <li>
            <FiCheck className='service_list-icon' />
            <p>Brand Strengthening</p>
          </li>
          <li>
            <FiCheck className='service_list-icon' />
            <p>Visual apealing websites</p>
          </li>
          <li>
            <FiCheck className='service_list-icon' />
            <p>Improve customer interaction</p>
          </li>
          <li>
            <FiCheck className='service_list-icon' />
            <p>UI Schemas</p>
          </li>
          <li>
            <FiCheck className='service_list-icon' />
            <p>AI art with  Midjourney</p>
          </li>
        </ul>
        
      </article>

      <article className="services">
        <div className="service_head">
          <h3>Web Development</h3>
        </div>

        <ul className="service_list">
          <li>
            <FiCheck className='service_list-icon' />
            <p>Google Api's</p>
          </li>
          <li>
            <FiCheck className='service_list-icon' />
            <p>Databases</p>
          </li>
          <li>
            <FiCheck className='service_list-icon' />
            <p>Blog's</p>
          </li>
          <li>
            <FiCheck className='service_list-icon' />
            <p>Portfolio Showcase</p>
          </li>
          <li>
            <FiCheck className='service_list-icon' />
            <p>User Interface</p>
          </li>
        </ul>
        
      </article>

      <article className="services">
        <div className="service_head">
          <h3>Database Managment </h3>
        </div>

        <ul className="service_list">
          <li>
            <FiCheck className='service_list-icon' />
            <p>Creating/Maintaining</p>
          </li>
          <li>
            <FiCheck className='service_list-icon' />
            <p>Relational Database
            </p>
          </li>
          <li>
            <FiCheck className='service_list-icon' />
            <p>Object Oriented Database</p>
          </li>
          <li>
            <FiCheck className='service_list-icon' />
            <p>Hierarchial Database</p>
          </li>
          <li>
            <FiCheck className='service_list-icon' />
            <p>Networking Database with MongoDB</p>
          </li>
        </ul>
        
      </article>

    </div>
    </section>
  )
} 

export default Services