'use client'

import React, { useEffect } from 'react';
import './home.css'
import Me from '../../assets/avatar-1.svg'
import HeaderSocials from "./HeaderSocials";
import ScrollDown from "./ScrollDown";
import Shapes from "./Shapes";
import Image from 'next/image';

const Home = () => {

    return (
        <section data-section className="home container" id="home">
            <div className="intro">
                <Image
                    width={108}
                    height={108} 
                    fetchPriority="high"
                    src={Me}
                    alt="Avatar Dwi"
                    className="home__img"
                />
                <h1 className="home__name">
                    Dwi Wijaya
                </h1>
                <span className="home__education">
                    I'm a Full-stack developer
                </span>
                <HeaderSocials />
                <a aria-label='hire me' href="#contact" className="btn">Hire Me</a>
                <ScrollDown />

            </div>
            <Shapes />
        </section>
    )
}
export default Home
