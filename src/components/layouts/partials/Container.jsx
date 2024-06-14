import { ReactNode } from 'react';
import Overlay from './Overlay';

const Container = ({ children, className = '', ...others }) => {
  return (
    
    <div className={`main group/main pb-6 p-6 pt-24 h-full ${className}`} {...others}>
      <section className='group-[.sidebar-expanded]/main:blur-[2px]  mx-auto max-w-[1024px]'>
        {children}
      </section>
    </div>
  );
};

export default Container;
