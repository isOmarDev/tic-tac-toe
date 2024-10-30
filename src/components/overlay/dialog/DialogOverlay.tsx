import React from 'react';
import { useDialogContext } from './DialogContext';
import { cn } from '@/utils';

type DialogBodyProps = React.HTMLAttributes<HTMLDivElement>;

export const DialogOverlay = ({
  className,
}: DialogBodyProps) => {
  const dialogContext = useDialogContext();

  return (
    <div
      className={cn(
        'fixed left-0 top-0',
        'h-screen w-screen',
        'bg-neutral-500 opacity-50',
        className,
      )}
      onClick={dialogContext?.onClose}
    />
  );
};
