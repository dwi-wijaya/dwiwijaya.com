import { animate } from 'framer-motion';
import { useEffect, useRef } from 'react';

const AnimateCounter = ({ total, ...rest }) => {
    const countRef = useRef(null);
    const initialCount = 0;

    useEffect(() => {
        const count = countRef.current;

        const controls = animate(initialCount, total, {
            duration: 1,
            onUpdate: (value) => {
                if (count) {
                    count.textContent = Math.floor(value).toString();
                }
            },
        });

        return () => controls.stop();
    }, [total, countRef, initialCount]); // Include countRef and initialCount in the dependency array

    return <span {...rest} ref={countRef} />;
};

export default AnimateCounter;
