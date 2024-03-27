
import React, { useEffect } from 'react';
import Me from '../../assets/avatar-profile.webp'
import HomeSocials from "./HomeSocials";
import Image from 'next/image';
import Link from 'next/link';
import s from "./_home.module.scss"

const Home = () => {

    return (
        <>
            <div className={s.header__wrapper}>
            </div>
            <section data-aos="fade-right" data-section className={`${s.home} container`} id="home">
                <div className="">
                    <div className={s.intro}>
                        <Image
                            width={108}
                            height={108}
                            src={Me}
                            alt="Avatar Dwi"
                            className={s.home__img}
                        />
                        <div className={s.home__greeting}>
                            <h1 className={s.home__name}>
                                Hi, Dwi Wijaya
                            </h1>
                            <div className={s['animate-waving-hand']}>👋</div>
                        </div>
                        <span className={s.home__role}>
                            {` I'm a Full-stack developer `}<i className="bx bx-code-alt"></i>
                        </span>
                        <HomeSocials style={s} />
                        <hr className="border" />
                        <div className='card'>
                            <div className={s.contact__header}>
                                <i className='bx bx-rocket'></i>
                                <h2 className='text-xl font-medium'>Lets work together!</h2>
                            </div>
                            <p className={s.contact__content}>
                                {`I'm open for freelance projects, feel free to email me to see how
                                can we collaborate.`}
                            </p>
                            <Link href='contact'
                                aria-label='contact me'
                                className='btn'
                            >
                                <i className="bx bx-envelope"></i>Contact me
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
export default Home
