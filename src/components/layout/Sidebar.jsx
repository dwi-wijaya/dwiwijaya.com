import React, { useEffect, useRef, useState } from 'react';
import LogoDark from '../../assets/logo-dark.webp';
import LogoLight from '../../assets/logo-light.webp';
import 'simple-line-icons'
import { MENU_ITEMS } from '../../constants/menu';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import dynamic from 'next/dynamic';

const Sidebar = () => {
    const [mounted, setMounted] = useState(false)
    const [toggle, setToggle] = useState(false);
    const { resolvedTheme } = useTheme();
    const sidebarRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                setToggle(false);
            }
        };

        if (typeof document !== 'undefined') {
            document.addEventListener("mousedown", handleClickOutside);

            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }
    }, [toggle]);

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }
    
    return (
        <>
            <aside ref={sidebarRef} className={`aside ${toggle && 'show-menu'}`}>
                <Link aria-label='go home' href="/" className="nav__logo">
                    <Image src={resolvedTheme == 'dark' ? LogoDark : LogoLight} alt="Dwi-logo" />
                </Link>
                <nav className="nav">
                    <div className="nav__menu">
                        <ul className="nav__list">
                            {MENU_ITEMS.map((item, index) => (
                                <li key={index} className='nav__item '>
                                    <Link href={`${item.href}`} title={item.label} className="nav__link">
                                        <i className={item.iconClass}></i>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </nav>
                <div className="nav__footer">
                    <span className="copyright">&copy; {new Date().getFullYear()}</span>
                </div>
                <div onClick={() => setToggle(!toggle)} className={`toggle sidebar__toggle ${toggle ? 'sidebar__toggle-open' : ''}`}>
                    <i className="icon-menu"></i>
                </div>
            </aside>
        </>
    );
};

export default Sidebar
