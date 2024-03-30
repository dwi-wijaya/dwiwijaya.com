import React from "react";

const PageSubHeading = ({ title, description, icon, link, linkText }) => {
  return (
    <>
      <h3 className="flex items-center gap-2 font-medium text-lg">
        {icon && <i className={icon}></i>}{title}
      </h3>
      <div className="flex flex-col md:flex-row  text-subtext mb-3 flex justify-between leading-relaxed">
        <p className="text-sm leading-5">
          {description}
        </p>
        {link && linkText && <a target="_blank" className="section__subtitle-link" href={link}>{linkText}</a>}
      </div>
    </>
  );
};

export default PageSubHeading;
