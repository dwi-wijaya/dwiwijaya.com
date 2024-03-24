import React from "react";
import { PAGESPEED_URL } from "../../constants/pagespeed";

const PageSubHeading = ({ title, description, icon, link, linkText }) => {
  return (
    <>
      <h3 className="section__title-secondary">
        {icon && <i className={icon}></i>}{title}
      </h3>
     <div className="section__subtitle">
     <p className="section__subtitle-text">
        {description}
      </p>
      {link && linkText && <a target="_blank" className="section__subtitle-link" href={link}>{linkText}</a>}
     </div>
    </>
  );
};

export default PageSubHeading;
