import { useState } from 'react';

export const useMultiStepForm = (steps: Array<any>) => {
  const [currentStep, setCurrentStep] = useState(0);

  const next = () => {
    setCurrentStep(prev => {
      if (prev < steps.length - 1) return prev + 1;
      return prev;
    });
  };

  const back = () => {
    setCurrentStep(prev => {
      if (prev > 0) return prev - 1;
      return prev;
    });
  };

  const goTo = (index: number) => {
    setCurrentStep(index);
  };

  return {
    next,
    back,
    goTo,
    Step: steps[currentStep],
    currentStep,
    isLastStep: currentStep === steps.length - 1,
    isFirstStep: currentStep === 0,
  };
};
