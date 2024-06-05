import { Socials } from '@/constants/data/socials'
import React from 'react'

const HomeSocials = () => {
    return (
        <div className="flex gap-3 mt-6">
            {Socials.map((social, index) => (
                <a aria-label={`go to ${social.label}`} key={index} href={social.link} target='_blank' className="h-fit flex text-xl text-text hover:text-primary badge items-center">
                    <i className={`bx bxl-${social.boxIcon}`}></i>
                </a>
            ))}
        </div>
    )
}

export default HomeSocials