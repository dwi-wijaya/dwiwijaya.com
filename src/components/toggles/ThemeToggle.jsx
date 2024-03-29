// ThemeToggle.js

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
    const { resolvedTheme, setTheme } = useTheme( );
    const [mounted, setMounted] = useState(false) 
    const toggleTheme = () =>

    setTheme(resolvedTheme === 'light' ? 'dark' : 'light');
    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }
    return (
        <button className='group  active:ring toggle top-5 right-6 bg-container theme__toggle' onClick={toggleTheme}>
            <i className={`group-active:rotate-90 transition-3s bx bx-${resolvedTheme == 'dark' ? 'moon' : 'sun'}`}  />
        </button>
    );
};

export default ThemeToggle;
