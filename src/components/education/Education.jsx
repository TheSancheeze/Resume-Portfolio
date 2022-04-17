import React from 'react'
import './education.css'
import CSUN1 from '../../assets/CSUN1.png'
import CSUN2 from '../../assets/CSUN2.png'
import {FaSchool} from 'react-icons/fa'
import {MdMenuBook} from 'react-icons/md'
import {BsFillPatchCheckFill} from 'react-icons/bs'

const Education = () => {
  return (
    <section id='education'>
      <h5>What I Have Learned</h5>
      <h2>My Education</h2>

      <div className="container education__container">

        <div className="education__content">
          <div className="education__cards">
            <div className="education__degree">
              <FaSchool className='education__icon' />
              <h3>Bachelor's Degree</h3>
              <h4>BS in Computer Science with a Minor in Mathematics.</h4>
              <h4>Graduating May 2022</h4>
            </div>
            <div className='education__coursework'>
              <MdMenuBook className='education__icon' />
              <h3>Relevant Coursework</h3>
              <div className='education__details'>
                <article className='education__coursework-details'>
                  <BsFillPatchCheckFill className='education__details-icon' />
                  <div>
                    <h4>Operating Systems</h4>
                  </div>
                </article>
                <article className='education__coursework-details'>
                  <BsFillPatchCheckFill className='education__details-icon' />
                  <div>
                    <h4>Discrete Structures</h4>
                  </div>
                </article>
                <article className='education__coursework-details'>
                  <BsFillPatchCheckFill className='education__details-icon' />
                  <div>
                    <h4>Data Mining</h4>
                  </div>
                </article>
                <article className='education__coursework-details'>
                  <BsFillPatchCheckFill className='education__details-icon' />
                  <div>
                    <h4>Language Design</h4>
                  </div>
                </article>
                <article className='education__coursework-details'>
                  <BsFillPatchCheckFill className='education__details-icon' />
                  <div>
                    <h4>Human Computer Interaction</h4>
                  </div>
                </article>
                <article className='education__coursework-details'>
                  <BsFillPatchCheckFill className='education__details-icon' />
                  <div>
                    <h4>Numerical Analysis</h4>
                  </div>
                </article>
                <article className='education__coursework-details'>
                  <BsFillPatchCheckFill className='education__details-icon' />
                  <div>
                    <h4>Discrete Mathematics</h4>
                  </div>
                </article>
                <article className='education__coursework-details'>
                  <BsFillPatchCheckFill className='education__details-icon' />
                  <div>
                    <h4>Applied Statistics</h4>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
        
        <div className="education__picture">
          <div className="education__pics">
            <img src={CSUN1} alt="CSUN1 Photo" />
            <img src={CSUN2} alt="CSUN3 Photo" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education