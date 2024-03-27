import React from "react";
import AnimateCounter from "../elements/AnimateCounter";

const Number = ({ className, value }) => (
  <AnimateCounter
    className={className}
    total={value}
  />
);

const DashboardCard = ({ style, title, value, isMultiple = false, unit = '' }) => (
  <div className={style.card__item}>
    <span className={style.card__title}>{title}</span>
    <div>
      {isMultiple ? (
        value.map((val, index) => (
          <React.Fragment key={index}>
            <Number className={style.card__number} value={val} /> {index !== value.length - 1 && <span> - </span>}
          </React.Fragment>
        ))
      ) : (
        <Number className={style.card__number} value={value} />
      )}
      {unit && <span className={style.card__unit}> {unit}</span>}
    </div>
  </div>
);

export default DashboardCard;
