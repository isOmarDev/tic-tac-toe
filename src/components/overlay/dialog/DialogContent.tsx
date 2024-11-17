import React from 'react';
import { DialogCloseTrigger } from './DialogCloseTrigger';
import { cn } from '@/utils';

type DialogContentProps = React.HTMLAttributes<HTMLDivElement>;

export const DialogContent = ({
  className,
  children,
}: DialogContentProps) => {
  return (
    <div
      className={cn(
        'relative flex',
        'flex-col',
        'my-16',
        'w-full max-w-[450px]',
        'rounded-[30px]',
        'bg-white shadow-2xl',
        'z-[1000]',
        'scale-in',
        className,
      )}
    >
      <DialogCloseTrigger />
      {children}
    </div>
  );
};
