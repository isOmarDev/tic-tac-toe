import React from 'react';
import { cn } from '@/utils';

type DialogFooterProps = React.HTMLAttributes<HTMLDivElement>;

export const DialogFooter = ({
  className,
  children,
}: DialogFooterProps) => {
  return (
    <div
      className={cn(
        'flex items-center justify-end gap-3',
        'p-[30px] pt-2',
        className,
      )}
    >
      {children}
    </div>
  );
};
