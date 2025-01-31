import { useEffect, useState } from "react";
import { LocationForm } from "../FormPage/roofing/RoofingFormsComponent";
import StepperWizard from "../StepperWizard/StepperWizard";
import { SolarPersonalDetails } from "../FormPage/v2/solar";

import { WindowV2ProjectDetails, WindowV2PropertyDetails, WindowV2RoofingDetails } from "../FormPage/v2/window";

const WindowV2Forms = ({ slug }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeIndex]);

  const STEPS = [
    {
      label: "Form1",
      component: (props) => <LocationForm props={props} />,
    },
    {
      label: "Form2",
      component: (props) => <WindowV2PropertyDetails props={props} />,
    },
    {
      label: "Form3",
      component: (props) => <WindowV2RoofingDetails props={props} />,
    },
    {
      label: "Form4",
      component: (props) => <SolarPersonalDetails props={props} />,
    },
    {
      label: "Form5",
      component: (props) => <WindowV2ProjectDetails props={props} slug={slug} />,
    },
  ];

  return (
    <div className="max-w-[750px] px-4 mx-auto pt-12 py-28">
      <StepperWizard steps={STEPS} activeIndex={activeIndex} setActiveIndex={setActiveIndex} fullWidth={true} />
    </div>
  );
};

export default WindowV2Forms;
