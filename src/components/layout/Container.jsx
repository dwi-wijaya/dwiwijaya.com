import { ReactNode } from 'react';

const Container = ({ children, className = '', ...others }) => {
  return (
    <div className={`mt-14 mb-10 lg:mt-0 p-8 ${className} `} {...others}>
      {children}
    </div>
  );
};

export default Container;
