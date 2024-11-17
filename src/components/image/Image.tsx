import React, { forwardRef } from 'react';

import { useImage } from './useImage';
import { cn } from '@/utils';

import fallbackImg from '@/assets/trophy.png';

type ImageProps = {
  objectFit?:
    | 'contain'
    | 'cover'
    | 'fill'
    | 'scale-down'
    | 'none';
  dataTestid?: string;
} & React.ImgHTMLAttributes<HTMLImageElement>;

export const Image = React.memo(
  forwardRef<HTMLImageElement, ImageProps>(
    (
      {
        className = '',
        src,
        alt,
        objectFit = 'contain',
        dataTestid,
        ...restProps
      },
      ref,
    ) => {
      const {
        isLoaded,
        isError,
        handleImageLoad,
        handleImageError,
      } = useImage();

      return (
        <img
          ref={ref}
          className={cn(
            `object-${objectFit}`,
            'duration-250 transition-opacity ease-in-out',
            className,
            isLoaded
              ? 'opacity-1 visible'
              : 'invisible opacity-0',
          )}
          src={isError ? fallbackImg : src}
          alt={alt ?? ''}
          crossOrigin="anonymous"
          onLoad={handleImageLoad}
          onError={handleImageError}
          data-testid={dataTestid}
          {...restProps}
        />
      );
    },
  ),
);

Image.displayName = 'Image';
