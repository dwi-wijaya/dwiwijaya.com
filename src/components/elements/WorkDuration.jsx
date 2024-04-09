import React, { useState, useEffect } from 'react';

const WorkDuration = ({ startMonth, endMonth }) => {
    const [duration, setDuration] = useState(null);

    useEffect(() => {
        const calculateDuration = () => {
            const start = new Date(startMonth);
            const end = endMonth ? new Date(endMonth) : new Date();

            let yearDiff = end.getFullYear() - start.getFullYear();
            let monthDiff = end.getMonth() - start.getMonth();

            yearDiff = monthDiff < 0 ? yearDiff - 1 : yearDiff;
            monthDiff = monthDiff < 0 ? 12  + monthDiff : monthDiff;

            if (yearDiff === 0 && monthDiff === 0) {
                setDuration("Less than a Month");
            } else if (yearDiff === 0) {
                setDuration(`${monthDiff} Month${monthDiff > 1 ? 's' : ''}`);
            } else if (yearDiff === 1 && monthDiff === 0) {
                setDuration("1 Year");
            } else {
                setDuration(`${yearDiff} Year${yearDiff > 1 ? 's' : ''} ${monthDiff} Month${monthDiff > 1 ? 's' : ''}`);
            }
        };

        calculateDuration();
    }, [startMonth, endMonth]);

    return (
        <p className='text-sm text-subtext mt-1'><i className='bx bx-calendar' ></i> {duration}</p>
    );
};

export default WorkDuration;
