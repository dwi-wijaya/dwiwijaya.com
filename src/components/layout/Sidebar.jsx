import React, { useEffect, useRef, useState } from 'react';
import LogoDark from '@/assets/logo-dark.svg';
import LogoLight from '@/assets/logo-light.svg';
import 'simple-line-icons'
import { MENU_ITEMS } from '@/constants/data/menu';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { usePathname } from 'next/navigation';
import ThemeToggle from '../toggles/ThemeToggle';
import CollabsToggle from '../toggles/CollabsToggle';

const Sidebar = ({ className, lastUpdate }) => {
    const [mounted, setMounted] = useState(false)
    const [toggle, setToggle] = useState(false);
    const { theme } = useTheme();
    const sidebarRef = useRef(null);
    const pathname = usePathname()

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                setToggle(false);
            }
        };
        document.querySelector('main').classList.toggle('sidebar-expanded', toggle);

        const handleBodyScroll = () => {
            if (toggle) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        handleBodyScroll();

        const handleResize = () => {
            if (window.innerWidth <= 1024) {
                setToggle(false); // If the screen width is <= 1024px, close the sidebar
            }
        };

        window.addEventListener('resize', handleResize); // Add event listener for resize

        // Cleanup event listeners when the component unmounts
        return () => {
            window.removeEventListener('resize', handleResize);
            document.removeEventListener('mousedown', handleClickOutside);
            document.body.style.overflow = ''; // Reset body overflow when component unmounts
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
            <aside ref={sidebarRef} className={`${className} ${toggle && '!left-0'} max-h-[100svh] scrollbar-hide overflow-x-auto fixed -left-64 lg:left-0 top-0 bg-container border border-stroke pl-0 p-6 w-64 min-h-screen flex flex-col gap-8 justify-between text-center transition-3s z-10 shadow-sm`}>
                <div className="flex flex-col gap-8">
                    <div className="ml-6 flex flex-col gap-8">
                        <Link onClick={() => setToggle(false)} aria-label='go home' href="/" className="nav__logo flex gap-2 items-center text-xl  tracking-wider">
                            <Image width={32} src={theme == 'dark' ? LogoDark : LogoLight} alt="Dwi-logo" />
                        </Link>
                        <div className="text-left mt-8">
                            <h2 className='text-2xl mb-2 leading-6 font-se'>Welcome to my website</h2>
                            <span className="text-sm text-subtext">
                                Last update, {new Date(lastUpdate).toLocaleDateString('en-GB', {
                                    day: 'numeric',
                                    month: 'short',
                                    year: 'numeric'
                                })}
                            </span>
                        </div>

                        <div className="flex gap-2 flex-col">
                            <ThemeToggle />
                            <CollabsToggle handleClick={() => setToggle(false)} />
                        </div>
                    </div>
                    <nav className="nav">
                        <div className="nav__menu p-6 bg-background rounded-l-none rounded-2xl">
                            <ul className="flex flex-col items-center gap-y-6">
                                {MENU_ITEMS.map((item, index) => (
                                    <li key={index} className='nav__item w-full group'>
                                        <Link onClick={() => setToggle(false)} href={item.href} title={item.label} className={`${pathname === item.href ? '!text-primary' : ''} hover:text-primary  text-text   h-full transition-300 flex items-center justify-between`}>
                                            <span className='flex items-center gap-3'><i className={`${item.iconClass} min-w-5 flex justify-center items-center group-hover:-rotate-[8deg] duration-300 transition-all`}></i> {item.label}</span> {pathname === item.href && <i className="fad fa-arrow-right animate-pulse"></i>}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </nav>
                </div>
                <div className="nav__footer text-left pl-6">
                    <span className="text-subtext text-sm transform rotate-180 ">&copy; {new Date().getFullYear()} Dwi Wijaya</span>
                </div>
                <div onClick={() => setToggle(!toggle)} className={`toggle lg:-left-64 left-5 sidebar__toggle ${toggle ? '!left-[17rem]' : ''}`}>
                    <i className="fa-duotone fa-bars text-primary"></i>
                </div>
            </aside>
        </>
    );
};

export default Sidebar
