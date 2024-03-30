import { ReactNode } from 'react';

const Container = ({ children, className = '', ...others }) => {
  return (
    <div className={`mt-[4.5rem] mb-10 p-6 ${className} `} {...others}>
      <section className='mx-auto max-w-[1024px]'>
        {children}
      </section>
    </div>
  );
};

export default Container;
