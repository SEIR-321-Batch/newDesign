import React from 'react'
import {FiCheck} from 'react-icons/fi'
import '../styles/services.css'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

    <div className="container services_container">
      <article className="services">
        <div className="service_head">
          <h3>UI/UX Design</h3>
        </div>

        <ul className="service_list">
          <li>
            <FiCheck className='service_list-icon' />
            <p>more info</p>
          </li>
          <li>
            <FiCheck className='service_list-icon' />
            <p>more info</p>
          </li>
          <li>
            <FiCheck className='service_list-icon' />
            <p>more info</p>
          </li>
          <li>
            <FiCheck className='service_list-icon' />
            <p>more info</p>
          </li>
          <li>
            <FiCheck className='service_list-icon' />
            <p>more info</p>
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
            <p>more info</p>
          </li>
          <li>
            <FiCheck className='service_list-icon' />
            <p>more info</p>
          </li>
          <li>
            <FiCheck className='service_list-icon' />
            <p>more info</p>
          </li>
          <li>
            <FiCheck className='service_list-icon' />
            <p>more info</p>
          </li>
          <li>
            <FiCheck className='service_list-icon' />
            <p>more info</p>
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
            <p>more info</p>
          </li>
          <li>
            <FiCheck className='service_list-icon' />
            <p>more info</p>
          </li>
          <li>
            <FiCheck className='service_list-icon' />
            <p>more info</p>
          </li>
          <li>
            <FiCheck className='service_list-icon' />
            <p>more info</p>
          </li>
          <li>
            <FiCheck className='service_list-icon' />
            <p>more info</p>
          </li>
        </ul>
        
      </article>

    </div>
    </section>
  )
} 

export default Services