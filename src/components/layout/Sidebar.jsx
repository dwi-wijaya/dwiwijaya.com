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

const Sidebar = ({ className }) => {
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


        document.addEventListener("mousedown", handleClickOutside);
        const handleResize = () => {
            if (window.innerWidth <= 1024) {
                setToggle(false); // Jika lebar layar <= 767px, kelas dihapus
            }
        };

        window.addEventListener('resize', handleResize); // Tambahkan event listener untuk resize

        // Hapus event listener saat komponen di-unmount
        return () => {
            window.removeEventListener('resize', handleResize);
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
            <aside ref={sidebarRef} className={`${className} ${toggle && '!left-0'} max-h-[100vh] scrollbar-hide overflow-x-auto fixed -left-64 lg:left-0 top-0 bg-container border border-stroke pl-0 p-6 w-64 min-h-screen flex flex-col gap-8 text-center transition-3s z-10 shadow-sm`}>
                <Link aria-label='go home' href="/" className="nav__logo pl-6 flex gap-2 items-center text-xl  tracking-wider">
                    <Image width={32} src={theme == 'dark' ? LogoDark : LogoLight} alt="Dwi-logo" />

                </Link>
                <div className="ml-6  text-left">
                    <h2 className='text-2xl mb-2 leading-6 font-se'>Welcome to my website</h2>
                    <span className="text-sm text-subtext">
                        Last update, 06 Jun 2024
                    </span>
                </div>

                <div className="flex ml-6 gap-2 flex-col">
                    <ThemeToggle />
                    <div className="flex gap-2 items-center bg-background border border-stroke px-5 py-3 rounded-2xl" >
                        <div className="fad fa-toggle-on text-primary"></div>
                        Open for collabs !
                    </div>
                </div>
                <nav className="nav">
                    <div className="nav__menu p-6 bg-background rounded-l-none rounded-2xl">
                        <ul className="flex flex-col items-center gap-y-6">
                            {MENU_ITEMS.map((item, index) => (
                                <li key={index} className='nav__item w-full'>
                                    <Link href={item.href} title={item.label} className={`${pathname === item.href ? '!text-primary' : ''} hover:text-primary  text-text  flex items-center h-full transition-3s gap-3`}>
                                        <i className={`${item.iconClass} min-w-5 flex justify-center items-center`}></i> {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </nav>
                <div className="nav__footer text-left pl-6">
                    <span className="text-subtext text-sm transform rotate-180 ">&copy; {new Date().getFullYear()} Dwi Wijaya</span>
                </div>
                <div onClick={() => setToggle(!toggle)} className={`toggle lg:-left-64 left-5 sidebar__toggle ${toggle ? '!left-[17rem]' : ''}`}>
                    <i className="fa-duotone fa-bars-staggered"></i>
                </div>
            </aside>
        </>
    );
};

export default Sidebar
