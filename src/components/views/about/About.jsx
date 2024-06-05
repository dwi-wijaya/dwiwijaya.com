import Freelance from '@/assets/freelance.svg'
import Image from 'next/image'
import Info from './Info'
import PageSubHeading from '../../common/PageSubHeading'

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
          <a aria-label='download cv' href={about.resume.replace('preview','edit')} target='_blank' className="btn !inline-flex !gap-3">
            <i className="fad fa-file-lines"></i>
            Download CV</a>
        </div>
      </div>
    </>
  )
}

export default About