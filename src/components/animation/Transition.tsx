import React from 'react';
import { useIsMounted } from '@/hooks/useIsMounted';
import { cn } from '@/utils';

type TransitionProps = {
  className?: string;
  translateX?: number;
  translateY?: number;
  scale?: number;
  duration?: number;
  delay?: number;
  children: React.ReactNode;
};

export const Transition = React.memo(
  ({
    className,
    translateX = 0,
    translateY = 0,
    scale = 1,
    duration = 150,
    delay = 0,
    children,
  }: TransitionProps) => {
    const { isMounted } = useIsMounted(delay);

    const opacityValue = isMounted ? 1 : 0;
    const translateValue = isMounted
      ? '0px, 0px'
      : `${translateX}px, ${translateY}px`;

    const scaleValue = isMounted ? '1' : `${scale}`;

    const style: React.CSSProperties = {
      opacity: opacityValue,
      transform: `translate(${translateValue}) scale(${scaleValue})`,
      transitionDuration: `${duration}ms`,
      // transitionDelay: `${delay}ms`,
    };

    return (
      <div
        style={style}
        className={cn(`transition-all`, className)}
      >
        {children}
      </div>
    );
  },
);
