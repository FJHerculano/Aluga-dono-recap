import { FormEvent, ReactElement, useState } from "react";

type UseFormProps = {
  steps: ReactElement<any, string | React.JSXElementConstructor<any>>[];
}

export function useForm({ steps }: UseFormProps) {
  const [currentStep, setCurrentStep] = useState(0);

  function changeStep(i: number, e?: FormEvent) {
    if (e) e.preventDefault();

    if (i < 0 || i >= steps.length) return;

    setCurrentStep(i);
  }

  return {
    currentStep,
    isLastStep: currentStep + 1 === steps.length ? true : false,
    currentComponent: steps[currentStep],
    changeStep,
  };
}
