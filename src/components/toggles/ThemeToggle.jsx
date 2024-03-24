// ThemeToggle.js
import React, { useEffect, useState } from 'react';
import LightIcon from '../../assets/theme-light.svg';
import DarkIcon from '../../assets/theme-dark.svg';
import Image from 'next/image';
import { useTheme } from 'next-themes';

const ThemeToggle = () => {
    const { resolvedTheme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false)

    const toggleTheme = () =>
    setTheme(resolvedTheme === 'light' ? 'dark' : 'light');
    // useEffect only runs on the client, so now we can safely show the UI
    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    return (
        <button className='toggle theme__toggle' onClick={toggleTheme}>
            <Image src={resolvedTheme == 'dark' ? DarkIcon : LightIcon} alt="Theme Icon" />
        </button>
    );
};

export default ThemeToggle;
