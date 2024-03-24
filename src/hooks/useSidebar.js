import { useEffect, useRef, useState } from 'react';

const useSidebar = () => {
    const [toggle, setToggle] = useState(false);
    const sidebarRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                setToggle(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return { toggle, setToggle, sidebarRef };
};

export default useSidebar;
