import React, { useMemo } from 'react';
import { StepperContext } from './stepperContext';
import { cn } from '@/utils';

type StepperProps = {
  activeStep?: number;
} & React.HTMLAttributes<HTMLDivElement>;

export const Stepper = ({
  activeStep = 0,
  className,
  children,
}: StepperProps) => {
  const contextValue = useMemo(
    () => ({ activeStep }),
    [activeStep],
  );

  const steps = React.Children.map(children, (child, index) => {
    // Ensure child is a valid ReactElement
    if (React.isValidElement<{ index: number }>(child)) {
      return React.cloneElement(child, {
        index,
      });
    }
    return child;
  });

  return (
    <StepperContext.Provider value={contextValue}>
      <div className={cn('', className)}>{steps}</div>
    </StepperContext.Provider>
  );
};
