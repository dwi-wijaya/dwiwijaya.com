import React, { useState, useEffect } from 'react';

const WorkDuration = ({ startMonth, endMonth }) => {
    const [duration, setDuration] = useState(null);

    useEffect(() => {
        const calculateDuration = () => {
            const start = new Date(startMonth);
            const end = endMonth ? new Date(endMonth) : new Date();

            const yearDiff = end.getFullYear() - start.getFullYear();
            const monthDiff = Math.abs(end.getMonth() - start.getMonth());

            if (yearDiff === 0 && monthDiff === 0) {
                setDuration("Less than a month");
            } else if (yearDiff === 0) {
                setDuration(`${monthDiff} month${monthDiff > 1 ? 's' : ''}`);
            } else if (yearDiff === 1 && monthDiff === 0) {
                setDuration("1 year");
            } else {
                setDuration(`${yearDiff} year${yearDiff > 1 ? 's' : ''} ${monthDiff} month${monthDiff > 1 ? 's' : ''}`);
            }
        };

        calculateDuration();
    }, [startMonth, endMonth]);

    return (
        <p className='text-subtext'><i class='bx bx-calendar' ></i> {duration}</p>
    );
};

export default WorkDuration;
