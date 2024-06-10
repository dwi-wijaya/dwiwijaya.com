import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        document.documentElement.setAttribute("data-color-mode", newTheme);
        setTheme(newTheme);
    };

    useEffect(() => {
        document.documentElement.setAttribute("data-color-mode", theme);
        setMounted(true);
    }, [theme]);

    if (!mounted) {
        return null;
    }

    return (
        <div className="w-full p-1 bg-background rounded-2xl border border-stroke">
            <label className="relative flex h-10 items-center cursor-pointer">
                <input
                    data-umami-event={`Switch to ${theme === "dark" ? "Light" : "Dark"} Mode`}
                    type="checkbox"
                    className="sr-only peer"
                    checked={theme === "dark"}
                    onChange={toggleTheme}
                />
                <div className="slider bg-background peer-checked:bg-background flex rounded-2xl justify-between items-center w-full h-full  transition-all duration-300 relative">
                    <span
                        className={`absolute left-0 w-1/2 h-full bg-container border border-stroke rounded-xl transition-all duration-300 transform ${theme === "dark" ? 'translate-x-full' : ''}`}
                        style={{ content: '""', zIndex: 1 }}
                    />
                    <p className={`z-10 pl-4 leading-4 flex items-center gap-2 text-slate-500 ${theme == 'light' ? '!text-slate-800' : ''}`}><i className="bx bxs-sun"></i>Light</p>
                    <p className={`z-10 pr-4 leading-4 flex items-center gap-2 text-slate-500 ${theme == 'dark' ? '!text-slate-300' : ''}`}><i className="bx bxs-moon rotate-45"></i>Dark</p>
                </div>
            </label>
        </div>
    );
};

export default ThemeToggle;
