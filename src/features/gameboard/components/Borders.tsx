import { useLayoutEffect, useRef } from 'react';
import { cn } from '@/utils';

export const Borders = () => {
  const orientations = ['horizontal', 'vertical'] as const;

  return (
    <>
      {orientations.map((orientation) =>
        Array(2)
          .fill(null)
          .map((_, index) => (
            <Border
              key={`${orientation}-${index}`}
              orientation={orientation}
              index={index}
            />
          )),
      )}
    </>
  );
};

type BorderProps = {
  className?: string;
  orientation: 'horizontal' | 'vertical';
  index: number;
};

const baseClasses = 'absolute m-auto rounded-lg bg-red-50';
const orientationClasses = {
  horizontal: 'left-0 right-0 h-[3px] w-[350px]',
  vertical: 'bottom-0 top-0 h-[350px] w-[3px]',
};

const Border = ({
  className = '',
  orientation,
  index,
}: BorderProps) => {
  const divRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const borderElement = divRef.current;
    const parentElement = borderElement?.parentElement;

    if (!borderElement || !parentElement) {
      throw new Error('divRef or its parent is not assigned');
    }

    const gridSize =
      orientation === 'horizontal'
        ? parentElement.getBoundingClientRect().width
        : parentElement.getBoundingClientRect().height;

    const position = `calc((${gridSize}px / 3) * ${index + 1} - 1px)`;

    if (orientation === 'horizontal') {
      borderElement.style.top = position;
    } else {
      borderElement.style.left = position;
    }
  }, [index, orientation]);

  return (
    <div
      ref={divRef}
      className={cn(
        baseClasses,
        orientationClasses[orientation],
        className,
      )}
    />
  );
};
