'use client'
import React from 'react'

const Info = () => {
  return (
    <section className="about__info grid">
      <div className="about__box">
        <i className='bx bx-award about__icon'></i>
        <h3 className="about__title">Experience</h3>
        <div className="about__subtitle">2 Years Working</div>
      </div>
      <div className="about__box">
        <i className='bx bx-briefcase-alt about__icon'></i>
        <h3 className="about__title">Completed</h3>
        <div className="about__subtitle">48 + Projects</div>
      </div>
      <div className="about__box">
        <i className='bx bx-support about__icon'></i>
        <h3 className="about__title">Support</h3>
        <div className="about__subtitle">Online 24/7</div>
      </div>
    </section>
  )
}

export default Info