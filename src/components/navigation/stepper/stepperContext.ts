import { createContext, useContext } from 'react';

type StepperContextValue = {
  activeStep: number;
};

export const StepperContext =
  createContext<StepperContextValue | null>(null);

export const useStepperContext = () => {
  try {
    const stepperContext = useContext(StepperContext);
    return stepperContext;
  } catch (error) {
    throw new Error(
      'context has to be used within <StepperContext.Provider>',
    );
  }
};
