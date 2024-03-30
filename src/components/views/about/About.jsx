import Freelance from '@/assets/freelance.svg'
import Image from 'next/image'
import Info from './Info'
import PageSubHeading from '../../common/PageSubHeading'
import Skills from './Skills'
import Certificates from './Certificates'

const Story = `I'm Dwi Wijaya from Indonesia a seasoned Full Stack Developer with over 2 years of professional experience.
Currently pursuing further education while working, adept in frontend and backend development, 
specializing in PHP and JavaScript, with experience in Yii, Laravel, React, Node.js, etc. 
Passionate about creating intuitive user experiences, adaptable, efficient, committed to excellence, with problem-solving skills, and a passion for innovation. 
Excels in teamwork, eager to contribute to collective achievements.`

const About = () => {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-x-16 gap-y-8">
        <Image src={Freelance} alt="Freelance" className='justify-self-center w-[420px] lg:w-full' />
        <div className="text-center lg:text-start">
          <Info />
          <p className='p-2 mb-3 text-subtext text-md'>
            {Story}
          </p>
          <a aria-label='download cv' href="" className="btn !inline-block">
            <i className="icon-doc"></i>
            Download CV</a>
        </div>
      </div>

      <hr className="hr !my-8" />
      <PageSubHeading title='Skills' description='My professional skillset .' icon='bx bx-code-alt' />
      <Skills/>
      <hr className="hr !my-8" />
      <PageSubHeading title='Certificates' description='A showcase of my professional certificates .' icon='bx bx-file-blank' />
      <Certificates/>

    </>
  )
}

export default About