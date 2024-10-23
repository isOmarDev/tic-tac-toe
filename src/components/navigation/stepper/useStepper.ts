import { useCallback, useEffect, useRef, useState } from 'react';

export const useStepper = (initialStep: number = 0) => {
  const [activeStep, setActiveStep] = useState(initialStep);

  const prevStepRef = useRef(activeStep);

  useEffect(() => {
    prevStepRef.current = activeStep;
  }, [activeStep]);

  const handlePrev = useCallback(
    () => setActiveStep((prevActiveStep) => prevActiveStep - 1),
    [],
  );

  const handleNext = useCallback(
    () => setActiveStep((prevActiveStep) => prevActiveStep + 1),
    [],
  );

  const handleReset = () => {
    setActiveStep(0);
  };

  return {
    activeStep,
    prevStep: prevStepRef.current,
    handlePrev,
    handleNext,
    handleReset,
  };
};
