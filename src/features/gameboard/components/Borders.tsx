import { useLayoutEffect, useRef } from 'react';
import { cn } from '@/utils';

export const Borders = () => {
  const orientations = ['horizontal', 'vertical'] as const;
  const borders = Array(2).fill(null);

  return (
    <>
      {orientations.map((orientation) =>
        borders.map((_, index) => (
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

const orientationClasses = {
  horizontal: 'left-0 right-0 h-[3px] w-[calc(100%-50px)]',
  vertical: 'bottom-0 top-0 h-[calc(100%-50px)] w-[3px]',
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
        'absolute m-auto rounded-lg bg-red-50',
        orientationClasses[orientation],
        className,
      )}
    />
  );
};
