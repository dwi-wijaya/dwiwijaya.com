import React from "react";  

  const PageHeading = ({ title, description }) => {
    return (
      <>
        <h2 className="section__title">{title}</h2>
        <p className="section__subtitle">
          {description}
        </p>
        <hr className="border" />
      </>
    );
  };
  
  export default PageHeading;
  