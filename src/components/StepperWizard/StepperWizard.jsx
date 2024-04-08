import { classNames } from "~/utils/classNames";

export const StepperIndicator = ({ steps, activeIndex }) => (
  <div className="flex flex-wrap items-end mb-4">
    {steps.map((item, index) => (
      <div className={"flex-1 font-medium cursor-default h-full"} key={index}>
        <h4
          className={classNames(
            "text-xs md:text-base font-medium text-center m-2 max-h-12 line-clamp-2",
            activeIndex >= index ? "text-secondary" : "text-[#9e9e9e]"
          )}
        >
          {item?.label || item}
        </h4>
        <div className="flex items-center gap-1.5">
          <hr
            className={classNames(
              "border flex-1 transition-all duration-300",
              activeIndex >= index ? "border-primary" : "border-gray-light"
            )}
          />
          <span
            className={classNames(
              "inline-flex items-center justify-center size-[28px] rounded-full text-sm p-3 border font-medium ",
              activeIndex >= index ? " text-primary bg-[#EBF0F5]" : "text-[#646464] bg-[#E1E1E1]"
            )}
          >
            {index + 1}
          </span>
          <hr
            className={classNames("border-2 flex-1", activeIndex >= index ? "border-primary" : "border-gray-light")}
          />
        </div>
      </div>
    ))}
  </div>
);

const StepperWizard = ({ steps = [], activeIndex = 0, setActiveIndex }) => {
  const handleNext = () => {
    if (activeIndex === steps.length - 1) return;
    setActiveIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (activeIndex === 0) return;
    setActiveIndex((prev) => prev - 1);
  };

  const RenderComponent = ({ component }) => {
    const MyComponent = component;
    return (
      <div className={classNames("animate-slidein")}>
        <MyComponent onNext={handleNext} onPrev={handlePrev} />
      </div>
    );
  };

  return (
    <div>
      {/* indicators */}
      <StepperIndicator steps={steps} activeIndex={activeIndex} />
      {/* content */}
      <div className="overflow-x-hidden">
        <RenderComponent component={steps[activeIndex]?.component || steps[activeIndex]} />
      </div>
    </div>
  );
};

export default StepperWizard;
