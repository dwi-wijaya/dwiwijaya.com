import { ReactNode } from 'react';

const Container = ({ children, className = '', ...others }) => {
  return (
    <div className={`group-[.sidebar-expanded]/main:blur-[1px] mb-10 m-6 mt-24 h-full ${className} `} {...others}>
      <section className='mx-auto max-w-[1024px]'>
        {children}
      </section>
    </div>
  );
};

export default Container;
