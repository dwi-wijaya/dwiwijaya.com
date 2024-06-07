import Link from 'next/link'
import React from 'react'
import Profile from '@/assets/avatar-profile.jpg'
import HomeSocials from './HomeSocials'
import Image from '@/components/elements/Image'

const Home = () => {
    return (
        <div className='absolute -top-[175%] w-[calc(100%-40px)] '>
            <div className="flex justify-between gap-2 items-end  mb-8">
                <div className="!min-w-[108px] max-w-[108px] outline outline-[.5rem] outline-background rounded-2xl bg-container">
                    <Image
                        src={Profile}
                        alt='Dwi Wijaya'
                        rounded='rounded-2xl'
                        className=""
                    />
                </div>
                <div className="badge text-sm h-fit w-full sm:w-fit text-end !gap-3 !py-[.7rem] !px-4 !rounded-xl">
                    <i className="fad fa-location-dot text-primary"></i> Based in Yogyakarta, ID
                </div>
            </div>
            <h2 className='text-xl text-subtext mb-0 flex items-center gap-1 '>Hey there  <span className="">👋</span> </h2>
            <div className="flex gap-2 self-center items-center">
                <h1 className="font-bold text-3xl text-text">
                    I&apos;m <span className='text-primary'>Dwi Wijaya</span>
                </h1>

            </div>
            <p className="flex items-center gap-2 my-2 text-text">
                I&apos;m a Full-stack developer <i className="bx bx-code-alt text-primary"></i> &nbsp;
            </p>
            <p className='text-subtext text-sm'>
                Passionate about crafting seamless web experiences,
                I specialize in building efficient, scalable, and attractive web applications.
                Bringing digital dreams to life.
            </p>
            <HomeSocials />
            <hr className="hr" />
            <div className='card mb-6 !pb-4'>
                <div className='flex gap-3 items-center'>
                    <i className='fad fa-rocket-launch text-primary'></i>
                    <h2 className='text-xl font-medium'>Lets work together!</h2>
                </div>
                <p className='text-subtext mt-2 mb-5'>
                    I&apos;m open for freelance projects, feel free to email me to see how
                    can we collaborate.
                </p>
                <div className="flex gap-2">
                    <Link
                        href='contact'
                        aria-label='contact me'
                        className='btn sm:!gap-3 justify-center !w-1/2 sm:!w-fit whitespace-nowrap text-sm sm:text-base !py-3 sm:!py-2'
                    >
                        <i className="fad fa-envelope"></i>Get in Touch
                    </Link>
                    <a
                        href="https://docs.google.com/document/d/1O7gzfe11VSWRa-zy8hzBO9ndZ-f4IFQlVgPITh2O8tY/preview"
                        aria-label="resume"
                        rel="noopener noreferrer"
                        target='_blank'
                        className="btn sm:!gap-3 justify-center !w-1/2 sm:!w-fit whitespace-nowrap text-sm sm:text-base !py-3 sm:!py-2"
                    >
                        <i className="fad fa-file-lines"></i>Get Resume
                    </a>
                </div>

            </div>
        </div>
    )
}

export default Home