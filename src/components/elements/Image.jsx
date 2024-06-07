import NextImage, { ImageProps as NextImageProps } from 'next/image';
import { useState } from 'react';


const Image = (props) => {
  const { alt, src, className, rounded, ...rest } = props;
  const [isLoading, setLoading] = useState(true);

  return (
    <div
      className={`overflow-hidden ${isLoading ? 'animate-pulse' : ''} ${rounded} relative`}
    >
      <NextImage
        className={`
          duration-700 ease-in-out
          ${className} ${isLoading
            ? 'scale-[1.02] blur-xl grayscale'
            : 'scale-100 blur-0 grayscale-0'} `}
        src={src}
        alt={alt}
        loading='lazy'
        // priority={true}
        quality={100}
        onLoadingComplete={() => setLoading(false)}
        {...rest}
      />
    </div>
  );
};
export default Image;
