import React from 'react'
import {BsFillPatchCheckFill} from 'react-icons/bs'
import '../styles/experience.css'

const Experience = () => {
  return (
    <section id='experience'> 
    <h5>What Skills I Bring</h5>
    <h2>My Experience</h2>

    <div className="container experience_container">
      <div className="experience_frontend">
        <h3>Frontend Development</h3>

        <div className="experience_content">
          
          <article className="experience_details">
            <BsFillPatchCheckFill className='experience_details-icon' />
            <h4>HTML</h4>
            <small>Expert</small>
          </article>

          <article className="experience_details">
            <BsFillPatchCheckFill className='experience_details-icon'/>
            <h4>CSS</h4>
            <small>Intermediate</small>
          </article>

          <article className="experience_details">
            <BsFillPatchCheckFill className='experience_details-icon'/>
            <h4>Javascript</h4>
            <small>Intermediate</small>
          </article>

          <article className="experience_details">
            <BsFillPatchCheckFill className='experience_details-icon'/>
            <h4>React</h4>
            <small>Intermediate</small>
          </article>

          <article className="experience_details">
            <BsFillPatchCheckFill className='experience_details-icon'/>
            <h4>SCSS</h4>
            <small>Basic</small>
          </article>

        </div>
      </div>
      <div className="experience_backend">
        <h3>Backend Development</h3>
        <div className="experience_content">
            <article className="experience_details">
              <BsFillPatchCheckFill className='experience_details-icon'/>
              <h4>Python</h4>
              <small>Intermediate</small>
            </article>

            <article className="experience_details">
              <BsFillPatchCheckFill className='experience_details-icon'/>
              <h4>MongoDB</h4>
              <small>Intermediate</small>
            </article>

            <article className="experience_details">
              <BsFillPatchCheckFill className='experience_details-icon'/>
              <h4>PostGre</h4>
              <small>Intermediate</small>
            </article>

            <article className="experience_details">
              <BsFillPatchCheckFill className='experience_details-icon'/>
              <h4>NoSQL</h4>
              <small>Intermediate</small>
            </article>

            <article className="experience_details">
              <BsFillPatchCheckFill className='experience_details-icon'/>
              <h4>Heroku/Netlify</h4>
              <small>Intermediate</small>
            </article>

            <article className="experience_details">
              <BsFillPatchCheckFill className='experience_details-icon'/>
              <h4>Express</h4>
              <small>Intermediate</small>
            </article>

            <article className="experience_details">
              <BsFillPatchCheckFill className='experience_details-icon'/>
              <h4>Node.js</h4>
              <small>Intermediate</small>
            </article>
          </div>
      </div>
    </div>

    </section>
  )
}

export default Experience