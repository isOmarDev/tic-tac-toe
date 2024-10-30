import React from 'react';
import { cn } from '@/utils';

type DialogHeaderProps = React.HTMLAttributes<HTMLDivElement>;

export const DialogHeader = ({
  className,
  children,
}: DialogHeaderProps) => {
  return (
    <div
      className={cn(
        'p-[30px] pb-4',
        'text-xl tracking-wide',
        className,
      )}
    >
      {children}
    </div>
  );
};
