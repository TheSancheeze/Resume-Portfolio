import React from 'react'
import './about.css'
import ME from '../../assets/me2.jpeg'
import {ImLab} from 'react-icons/im'
import {FaSchool} from 'react-icons/fa'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className='about__cards'>
            <article className='about__card'>
              <ImLab className='about__icon'/>
              <h5>Lab Experience</h5>
              <small>3+ Years Working in a Clinical Lab Setting</small>
            </article>
            <article className='about__card'>
              <FaSchool className='about__icon'/>
              <h5>Bachelor's Degree</h5>
              <small>Computer Science, Minor in Mathematics 2022</small>
            </article>
            {/* <article className='about__card'>
              <ImLab className='about__icon'/>
              <h5>Languages</h5>
              <small>3+ Working in a Clinical Lab </small>
            </article> */}
          </div>
          <p>
          My name is Erick Sanchez, a soon-to-be graduate from California State University of Northridge (CSUN) with a 
          BS in Computer Science and Minor in Mathematics. I am eager to enter the tech industry and apply my knowledge, 
          as well as expand my proficiency in writing code. I am open to working remotely, on-site, and would even consider 
          relocating for the right position.
        </p>

        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About