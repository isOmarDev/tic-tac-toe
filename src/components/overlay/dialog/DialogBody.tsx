import React from 'react';
import { cn } from '@/utils';

type DialogBodyProps = React.HTMLAttributes<HTMLDivElement>;

export const DialogBody = ({
  className,
  children,
}: DialogBodyProps) => {
  return (
    <div
      className={cn(
        'grow',
        'p-[30px] pt-4',
        'font-ubuntu',
        className,
      )}
    >
      {children}
    </div>
  );
};
