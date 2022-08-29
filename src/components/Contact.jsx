import React from 'react'
import {HiOutlineMail} from 'react-icons/hi'
import { useRef, useState } from 'react';
import '../styles/contact.css'
import emailjs from 'emailjs-com';

const Contact = (props) => {

  const [{ name, email, message }, setState] = useState()
  const [statusMessage, setStatusMessage] = useState("");

  let data = {
    service_id: 'service_cmdgi25',
    template_id: 'template_vfunysh',
    user_id: 'IcyKnpon5aBsuBGRI',
    template_params: {
        'username': 'John Doe',
        'g-recaptcha-response': '03AHJ_ASjnLA214KSNKFJAK12sfKASfehbmfd...'
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target
    setState((prevState) => ({ ...prevState, [name]: value }))
  }

  const clearState = () => setState({ })

  const form = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message)
    emailjs.sendForm(data.service_id, data.template_id, form.current, data.user_id)
      .then((result) => {
          console.log(result.text);
          clearState();
          setStatusMessage('Email Sent!')
      }, (error) => {
          console.log(error.text);
          setStatusMessage(`${error.text} happened`);
    });


  };

  return (
    <section id='contact'>
      <h5>Lets Connect!</h5>
      <h2>Contact Me</h2>

      <div className='container contact_container'>
        <div className='contact_options'>
          <article className='contact_option'>
            <HiOutlineMail className='Contact_option-icon'/>
            <h4>Email</h4>
            <h5>Martinezl27737@gmail.com</h5>
            <a href='mailto:Martinezl27737@gmail.com'>Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={handleSubmit} >
          <input type='text' name='name' placeholder='Name' required/>
          <input type='email' name='email' placeholder='Your Email' required/>
          <textarea name="message" id="" cols="30" rows="10" placeholder='your message here'></textarea>
          <button type='submit' className='btn btn-primary'>{statusMessage}</button>
        </form>
      </div>
    </section>
  )
}

export default Contact