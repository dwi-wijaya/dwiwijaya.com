'use client'

import React, { useEffect, useRef, useState } from 'react';
import './sidebar.css';
import LogoDark from '../../assets/logo-dark.svg';
import LogoLight from '../../assets/logo-light.svg';
import { useTheme } from '../../context/ThemeContext';
import 'simple-line-icons'
import Image from 'next/image';

const Sidebar = () => {
    const [activeSection, setActiveSection] = useState('home');
    const sections = useRef([]);
    const { theme } = useTheme();

    const handleScroll = () => {
        const sections = document.querySelectorAll('section');
        let foundActive = false;
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                setActiveSection(section.id);
                foundActive = true;
            }
        });
        if (!foundActive) {
            setActiveSection('home');
        }

    };

    useEffect(() => {
        sections.current = document.querySelectorAll('[data-section]');
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const [toggle, showMenu] = useState(false);

    // Define your navigation items and icons using an object
    const navItems = [
        { id: 'home', iconClass: 'icon-home', label: 'home' },
        { id: 'about', iconClass: 'icon-user', label: 'about' },
        { id: 'services', iconClass: 'icon-briefcase', label: 'servies' },
        { id: 'resume', iconClass: 'icon-graduation', label: 'resume' },
        { id: 'portfolio', iconClass: 'icon-layers', label: 'portofolio' },
        { id: 'blog', iconClass: 'icon-note', label: 'blog' },
        { id: 'contact', iconClass: 'icon-envelope', label: 'contact' }
    ];

    return (
        <>
            <aside className={`aside ${toggle && 'show-menu'}`}>
                <a aria-label='go home' href="#home" className="nav__logo">
                    <Image src={theme == 'dark' ? LogoDark : LogoLight} alt="Dwi-logo" />
                </a>
                <nav className="nav">
                    <div className="nav__menu">
                        <ul className="nav__list">
                            {navItems.map(item => (
                                <li key={item.id} className={`nav__item ${activeSection === item.id ? 'active' : ''}`}>
                                    <a aria-label={`go to ${item.label}`} href={`#${item.id}`} className="nav__link">
                                        <i className={item.iconClass}></i>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </nav>
                <div className="nav__footer">
                    <span className="copyright">&copy; {new Date().getFullYear()}</span>
                </div>
            </aside>
            <div onClick={() => showMenu(!toggle)} className={`toggle nav__toggle ${toggle ? 'nav__toggle-open' : ''}`}>
                <i className="icon-menu"></i>
            </div>
        </>

    );
};

export default Sidebar;
