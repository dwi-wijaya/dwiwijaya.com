import React from "react";  

  const PageHeading = ({ title, description }) => {
    return (
      <>
        <h2 className="ml-3 relative font-bold text-3xl text-text dots">{title}</h2>
        <p className="leading-5 text-subtext">
          {description}
        </p>
        <hr className="hr" />
      </>
    );
  };
  
  export default PageHeading;
  