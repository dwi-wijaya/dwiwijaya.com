import React from 'react'
import About from '../components/about/About'
import Skills from '../components/skills/Skills'
import PageSubHeading from '../components/elements/PageSubHeading'
import Certificates from '../components/about/Certificates'

const AboutPage = () => {
  return (
    <section className='about container section' id='about' data-aos='fade-up'>
      <About />
      <hr className="border" />
      <PageSubHeading title='Skills' description='My professional skillset .' icon='bx bx-code-alt' />
      <Skills/>
      <hr className="border" />
      <PageSubHeading title='Certificates' description='A showcase of my professional certificates .' icon='bx bx-file-blank' />
      <Certificates/>
    </section>
  )
}

export default AboutPage