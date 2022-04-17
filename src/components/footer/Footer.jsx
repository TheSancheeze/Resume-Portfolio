import React from 'react'
import './footer.css'
import {FaFacebookSquare} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>Erick Sanchez</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#education'>Education</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href='https://facebook.com/erick.sanchez.56829'><FaFacebookSquare/></a>
        <a href='https://instagram.com/thesancheeze'><BsInstagram/></a>
        <a href='https://github.com/TheSancheeze'><BsGithub/></a>
        <a href='https://www.linkedin.com/in/erick-sanchez-738b6b123/'><BsLinkedin/></a>
      </div>
    </footer>
  )
}

export default Footer