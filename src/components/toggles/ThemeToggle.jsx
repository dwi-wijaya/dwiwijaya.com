// ThemeToggle.js

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
    const { theme, setTheme } = useTheme( );
    const [mounted, setMounted] = useState(false) 
    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        document.documentElement.setAttribute("data-color-mode", newTheme);
        setTheme(newTheme);
    };
    useEffect(() => {
        document.documentElement.setAttribute("data-color-mode", theme);

        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }
    return (
        <button aria-label="theme toggle" className='group  active:ring toggle right-5 theme__toggle' onClick={toggleTheme}>
            <i className={`group-active:rotate-90 transition-3s bx bx-${theme == 'dark' ? 'moon' : 'sun'}`}  />
        </button>
    );
};

export default ThemeToggle;
