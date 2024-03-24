import React from 'react'
import './about.css'
import Freelance from '../../assets/freelance.svg'
import Info from './Info'
import PageHeading from '../elements/PageHeading'
import PageSubHeading from '../elements/PageSubHeading'


const About = () => {
  return (
    <>
      <PageHeading
        title='About Me'
        description='Get to know me a little better, beyond the resume.'
      />

      <div className="about__container grid">
        <img src={Freelance} alt="Freelance" className='about__img' />
        <div className="about__data">
          <Info />
          <p className='about_descriprion'>I'm Dwi Wijaya from Indonesia a seasoned Full Stack Developer with over 2 years of professional experience.
            Currently pursuing further education while working, adept in frontend and backend development, specializing in PHP and JavaScript, with experience in Yii, Laravel, React, Node.js, etc. Passionate about creating intuitive user experiences, adaptable, efficient, committed to excellence, with problem-solving skills, and a passion for innovation. Excels in teamwork, eager to contribute to collective achievements.
          </p>
          <a aria-label='download cv' href="" className="btn btn__flex">
            <i className="icon-doc"></i>
            Download CV</a>
        </div>

      </div>

      
      

    </>
  )
}

export default About