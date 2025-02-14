import { useState } from 'react';

export const useStep = (initialStep = 0) => {
  const [activeStep, setActiveStep] = useState(initialStep);

  const handleNext = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setActiveStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setActiveStep((prev) => prev - 1);
  };

  const resetStep = () => setActiveStep(0);

  return {
    activeStep,
    handleNext,
    handleBack,
    resetStep,
  };
};
