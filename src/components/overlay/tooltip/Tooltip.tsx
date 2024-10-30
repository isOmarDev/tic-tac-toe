import { Children } from 'react';
import { Portal } from '@/components/navigation/portal';
import { useTooltip } from './useTooltip';
import { cn } from '@/utils';

export type TooltipProps = {
  className?: string;
  label: string | number;
  placement?: 'left' | 'top' | 'right' | 'bottom';
  children: React.ReactNode;
};

export const Tooltip = ({
  className,
  label,
  placement = 'bottom',
  children,
}: TooltipProps) => {
  const {
    isVisible,
    tooltipRef,
    getTooltipPosition,
    handleMouseEnter,
    handleMouseLeave,
  } = useTooltip(placement);

  const trigger = Children.only(children) as React.ReactElement;

  if (!label) {
    return <>{children}</>;
  }

  return (
    <div
      ref={tooltipRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {trigger}
      {isVisible && (
        <Portal>
          <div
            className={cn(
              'fixed',
              'px-3 py-2',
              'w-max',
              'rounded-full',
              'text-sm font-medium text-white',
              'bg-cyan-950',
              'fade-in',
              className,
            )}
            style={{ ...getTooltipPosition }}
            role="tooltip"
            aria-label={String(label)}
          >
            {label}
          </div>
        </Portal>
      )}
    </div>
  );
};
