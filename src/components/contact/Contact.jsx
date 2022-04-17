import React from 'react'
import './contact.css'
import {MdOutlineMail} from 'react-icons/md'
import {BsLinkedin} from 'react-icons/bs'
import { useRef } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_97nzdqd', 'template_8i8qma1', form.current, 'GebK0MLE-yrt7Mg6W');

    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMail className='contact__icon' />
            <h4>Email</h4>
            <h5>ericksanchez96@yahoo.com</h5>
            <a href="mailto:erickanchez96@yahoo.com">Send a message</a>
          </article>
          <article className="contact__option">
            <BsLinkedin className='contact__icon' />
            <h4>LinkedIn</h4>
            <a href="https://www.linkedin.com/in/erick-sanchez-738b6b123/">Send a message</a>
          </article>
        </div>
        {/*END OF CONTACT OPTIONS*/}
        <form ref={form} onSubmit={sendEmail} >
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact