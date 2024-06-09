import { useEffect, useState } from "react";
import { classNames } from "~/utils/classNames";
import ProgressBar from "./ProgressBar";

export const StepperIndicator = ({ steps, activeIndex }) => {
  const [percentageCompleted, setPercentageCompleted] = useState(0);

  useEffect(() => {
    const calculatePercentage = () => {
      const percentage = (activeIndex / steps.length) * 100;
      setPercentageCompleted(Math.round(percentage));
    };

    calculatePercentage();
  }, [activeIndex, steps]);

  return (
    <div className="w-full space-y-2 md:space-y-4 px-2 md:px-0">
      <p className="text-sm text-gray-dark">Your Progress</p>
      <h3 className="text-secondary font-bold text-lg md:text-xl">{percentageCompleted}% Completed</h3>
      <ProgressBar progress={percentageCompleted} />
    </div>
  );
};

const StepperWizard = ({ steps = [], activeIndex = 0, setActiveIndex }) => {
  const handleNext = () => {
    if (activeIndex === steps.length - 1) return;
    setActiveIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (activeIndex === 0) return;
    setActiveIndex((prev) => prev - 1);
  };

  const goto = (id) => {
    if (!id) return;
    setActiveIndex(id);
  };
  const RenderComponent = ({ component }) => {
    const MyComponent = component;
    return (
      <div className={classNames("animate-slidein")}>
        <MyComponent onNext={handleNext} onPrev={handlePrev} activeIndex={activeIndex} goto={goto} />
      </div>
    );
  };

  return (
    <div className="">
      {/* indicators */}
      <StepperIndicator steps={steps} activeIndex={activeIndex} />
      {/* content */}
      <div className="overflow-x-hidden max-w-[500px] w-full mx-auto mt-9 px-2">
        <RenderComponent component={steps[activeIndex]?.component || steps[activeIndex]} />
      </div>
    </div>
  );
};

export default StepperWizard;
