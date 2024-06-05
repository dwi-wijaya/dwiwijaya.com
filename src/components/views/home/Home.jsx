import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Collabs from '@/assets/handshake-regular.svg'
import Profile from '@/assets/avatar-profile.jpg'
import HomeSocials from './HomeSocials'
const Home = () => {
    return (
        <div className='absolute -top-[175%] w-[calc(100%-40px)] '>
            <div className="flex justify-between gap-2 items-end  mb-8">
                <Image
                    width={108}
                    height={108}
                    src={Profile}
                    alt="Avatar Dwi"
                    className="outline outline-[.5rem] outline-background rounded-2xl"
                />
                <div className="badge text-sm h-fit mb-1 w-full sm:w-fit text-end !gap-3 !py-[.6rem] !rounded-xl">
                    <i className="fad fa-location-dot text-primary"></i> Based in Yogyakarta, ID
                </div>
            </div>
            <h2 className='text-xl text-subtext mb-0 flex items-center gap-1 '>Hi there<span className="animate-waving-hand">👋</span> </h2>
            <div className="flex gap-2 self-center items-center mb-1">
                <h1 className="font-bold text-3xl text-text">
                    I&apos;m <span className='text-primary'>Dwi Wijaya</span>
                </h1>

            </div>
            <span className="flex items-center gap-2">
                I&apos;m a Full-stack developer <i className="bx bx-code-alt"></i> &nbsp;
            </span>
            <HomeSocials/>
            <hr className="hr" />
            <div className='card mb-6'>
                <div className='flex gap-3 items-center'>
                    <i className='fad fa-rocket-launch text-primary'></i>
                    <h2 className='text-xl font-medium'>Lets work together!</h2>
                </div>
                <p className='text-subtext mt-2 mb-5'>
                    I&apos;m open for freelance projects, feel free to email me to see how
                    can we collaborate.
                </p>
                <Link href='contact'
                    aria-label='contact me'
                    className='btn mb-1 !gap-3'
                >
                    <i className="fad fa-envelope"></i>Get in Touch
                </Link>
            </div>
        </div>
    )
}

export default Home