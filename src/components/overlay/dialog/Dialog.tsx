import React, { useMemo } from 'react';
import { Portal } from '@/components/navigation/portal';
import { DialogOverlay } from './DialogOverlay';
import { DialogContext } from './DialogContext';
import { cn } from '@/utils';

type DialogProps = {
  placement?: 'top' | 'center' | 'bottom';
  isOpen: boolean;
  onClose: () => void;
} & React.HTMLAttributes<HTMLDivElement>;

export const Dialog = ({
  className,
  placement = 'center',
  isOpen,
  onClose,
  children,
}: DialogProps) => {
  const dialogPlacement =
    placement === 'top'
      ? 'items-start'
      : placement === 'bottom'
        ? 'items-end'
        : 'items-center';

  const contextValue = useMemo(
    () => ({ isOpen, onClose }),
    [isOpen, onClose],
  );

  if (isOpen) {
    return (
      <Portal>
        <DialogContext.Provider value={contextValue}>
          <div
            className={cn(
              'fixed flex',
              `left-0 top-0 ${dialogPlacement} justify-center`,
              'h-screen w-screen',
              className,
            )}
          >
            <DialogOverlay />

            {children}
          </div>
        </DialogContext.Provider>
      </Portal>
    );
  }

  return null;
};
