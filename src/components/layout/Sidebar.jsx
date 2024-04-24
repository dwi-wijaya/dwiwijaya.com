import React, { useEffect, useRef, useState } from 'react';
import LogoDark from '@/assets/logo-dark.webp';
import LogoLight from '@/assets/logo-light.webp';
import 'simple-line-icons'
import { MENU_ITEMS } from '@/constants/data/menu';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { usePathname } from 'next/navigation';

const Sidebar = () => {
    const [mounted, setMounted] = useState(false)
    const [toggle, setToggle] = useState(false);
    const { theme } = useTheme();
    const sidebarRef = useRef(null);
    const pathname = usePathname()

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (sidebarRef.current &&  !sidebarRef.current.contains(event.target)) {
                setToggle(false);
            }
        };
        document.querySelector('main').classList.toggle('sidebar-expanded', toggle);


        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [toggle]);

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    return (
        <>
            <aside ref={sidebarRef} className={`${toggle && '!left-0'} fixed -left-[80px] lg:left-0 top-0 bg-container border-r border-stroke p-6 w-20 min-h-screen flex flex-col justify-between text-center transition-3s z-10`}>
                <Link aria-label='go home' href="/" className="nav__logo">
                    <Image src={theme == 'dark' ? LogoDark : LogoLight} alt="Dwi-logo" />
                </Link>
                <nav className="nav">
                    <div className="nav__menu">
                        <ul className="flex flex-col items-center gap-y-7">
                            {MENU_ITEMS.map((item, index) => (
                                <li key={index} className='nav__item '>
                                    <Link href={item.href} title={item.label} className={`${pathname === item.href ? 'active p-2 border border-primary !text-primary rounded-md' : ''} hover:text-primary text-2xl text-text font-bold flex items-center h-full transition-3s`}>
                                        <i className={item.iconClass}></i>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </nav>
                <div className="nav__footer">
                    <span className="text-subtext text-sm transform rotate-180 [writing-mode:vertical-lr]">&copy; {new Date().getFullYear()}</span>
                </div>
                <div className="glass top-0 left-2 w-[4rem] rounded-b-lg lg:hidden"></div>
                <div onClick={() => setToggle(!toggle)} className={`toggle lg:-left-[45px] left-5 sidebar__toggle ${toggle ? '!left-[100px]' : ''}`}>
                    <i className="icon-menu"></i>
                </div>
            </aside>
        </>
    );
};

export default Sidebar
