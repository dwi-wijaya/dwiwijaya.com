import Freelance from '@/assets/freelance.svg'
import Image from 'next/image'
import Info from './Info'
import PageSubHeading from '../../common/PageSubHeading'

const About = ({ skills, certificates, about }) => {
  return (
    <>
      <div className="">
        <p className='mb-6'>
          Hi, I&apos;m Dwi Wijaya, a passionate full-stack web developer with a love for creating dynamic and user-friendly websites.
          With over 2 years of experience in the industry, I specialize in front-end development and have a keen eye for design and detail.
          My goal is to create pixel-perfect websites that not only meet the client&apos;s needs but also exceed their expectations.
        </p>

        <PageSubHeading icon={'fad fa-route'} title="My Journey" />
        <p className='mb-3'>My career in web development began during my college years at the High School,
          where I majored in Software Engineering. My first job was at a small software house,
          where I learned the ropes of web development and discovered my passion for coding.
          Over the years, I have had the opportunity to work on numerous exciting projects.
          Each experience has contributed to my growth as a developer and has helped me hone my skills.</p>

        <PageSubHeading icon={'fad fa-lightbulb'} title="Values and Philosophy" />
        <p className='mb-3'>I believe in continuous learning and improvement.
          I am driven by a desire to create websites that are not only functional but also aesthetically pleasing.
          My work is guided by the principles of simplicity, usability, and accessibility.
          I strive to keep up with the latest trends and technologies in web development to ensure that my skills are always up to date.</p>

        <PageSubHeading icon={'fad fa-laugh-beam'} title="Fun Facts" />

        <ul>
          <li>I don&apos;t have any fun facts yet 😭.</li>
        </ul>

      </div>
    </>
  )
}

export default About