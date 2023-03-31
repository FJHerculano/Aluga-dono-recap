import { FormEvent, ReactElement } from "react";
import { useForm } from "../../hooks/useForm";
import SpecificationsFormFour from "./SpecificationsFormFour";
import SpecificationsFormOne from "./SpecificationsFormOne";
import SpecificationsFormThree from "./SpecificationsFormThree";
import SpecificationsFormTwo from "./SpecificationsFormTwo";
import SpecificationsTitles from "./SpecificationsTitles";

function Specification() {

  const formComponents = [
    <SpecificationsFormOne/>,
    <SpecificationsFormTwo/>,
    <SpecificationsFormThree/>,
    <SpecificationsFormFour/>
  ];

  const { currentComponent, changeStep, currentStep, isLastStep } = useForm({
    steps: formComponents,
  });

  const handleNext = () => {
    changeStep(currentStep + 1);
  };

  const handlePrevious = () => {
    changeStep(currentStep - 1);
  };


  return (
    <div>
      <div className="container col-11 col-md-9" id="form-container">
        <SpecificationsTitles/>
        {currentComponent}

        <div className="d-flex justify-content-center mt-3">
          <button disabled={currentStep === 0} onClick={handlePrevious}>
            Prev
          </button>
          <button disabled={isLastStep} onClick={handleNext}>
            Next
          </button>
        </div>

      </div>

      
    </div>
  );
}

export default Specification;
