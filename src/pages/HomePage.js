import React from 'react'
import Home from '../components/home/Home'
import styles from '../styles/HomePage.module.scss'

const HomePage = () => {
  return (
    <>
      <div className="header__wrapper">
      </div>
      <section data-aos="fade-right" data-section className="home container" id="home">
        <Home />
      </section>
    </>
  )
}

export default HomePage