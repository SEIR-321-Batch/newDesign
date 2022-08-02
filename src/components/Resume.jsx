import React from 'react'
import CV from '../images/Resume_PDF_format.pdf'

const Resume = () => {
  return (
    <div className='resume'>
    <a href={CV} download className='btn'>Download CV</a>
    <a href='#contact' className='btn btn-primary'>Let's Talk</a>
    </div>
    )
}

export default Resume