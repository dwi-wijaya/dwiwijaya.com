// ThemeToggle.js
import React, { useEffect, useState } from 'react';
import LightIcon from '../../assets/theme-light.svg';
import DarkIcon from '../../assets/theme-dark.svg';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import dynamic from 'next/dynamic'
const ThemeToggle = () => {
    const { resolvedTheme, setTheme } = useTheme();

    const toggleTheme = () =>
    setTheme(resolvedTheme === 'light' ? 'dark' : 'light');
    // useEffect only runs on the client, so now we can safely show the UI
    
    return (
        <button className='toggle theme__toggle' onClick={toggleTheme}>
            <i className={` bx bx-${resolvedTheme == 'dark' ? 'moon' : 'sun'}`} alt="Theme Icon" />
        </button>
    );
};

export default ThemeToggle
