import AnimateCounter from "@/components/elements/AnimateCounter";
import React from "react";

const Number = ({ className, value }) => (
    <AnimateCounter
        className={className}
        total={value}
    />
);

const DashboardCard = ({ title, value, isMultiple = false, unit = '' }) => (
    <div className="card  !px-3 !py-2 !rounded-lg">
        <span className="leading-5 text-xs whitespace-nowrap">{title}</span>
        <div className="mb-1">
            {isMultiple ? (
                value.map((val, index) => (
                    <React.Fragment key={index}>
                        <Number className="!my-2 text-green-500 leading-7 text-2xl" value={val} /> {index !== value.length - 1 && <span> - </span>}
                    </React.Fragment>
                ))
            ) : (
                <Number className="!my-2 text-green-500 leading-7 text-2xl" value={value} />
            )}
            {unit && <span className="text-xs text-subtext"> {unit}</span>}
        </div>
    </div>
);

export default DashboardCard;
