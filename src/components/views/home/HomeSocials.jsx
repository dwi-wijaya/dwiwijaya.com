import React from 'react'
const socials = ['instagram', 'twitter', 'behance', 'dribbble', 'github', 'facebook'];

const HomeSocials = () => {
    return (
        <div className="flex gap-3 mt-3">
            {socials.map((social, index) => (
                <a aria-label={`go to ${social}`} key={index} href={`https://${social}.com`} target='_blank' className="h-fit flex text-xl text-text hover:text-primary">
                    <i className={`bx bx-tada bxl-${social}`}></i>
                </a>
            ))}
        </div>
    )
}

export default HomeSocials