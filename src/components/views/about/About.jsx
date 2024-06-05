import Freelance from '@/assets/freelance.svg'
import Image from 'next/image'
import Info from './Info'
import PageSubHeading from '../../common/PageSubHeading'
import Skills from './Skills'
import Certificates from './Certificates'

const About = ({skills, certificates,about}) => {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-x-16 gap-y-8">
        <Image src={Freelance} alt="Freelance" className='justify-self-center w-[420px] lg:w-full' />
        <div className="text-center lg:text-start">
          <Info about={about}/>
          <p className='p-2 mb-3 text-subtext text-md'>
            {about.description}
          </p>
          <a aria-label='download cv' href={about.resume.replace('preview','edit')} target='_blank' className="btn inline-flex !gap-3">
            <i className="fad fa-file-lines"></i>
            Download CV</a>
        </div>
      </div>

      <hr className="hr !my-8" />
      <PageSubHeading title='Skills' description='My professional skillset .' icon='bx bx-code-alt' />
      <Skills skills={skills}/>
      <hr className="hr !my-8" />
      <PageSubHeading title='Certificates' description='A showcase of my professional certificates .' icon='fad fa-file-certificate' />
      <Certificates certificates={certificates}/>

    </>
  )
}

export default About