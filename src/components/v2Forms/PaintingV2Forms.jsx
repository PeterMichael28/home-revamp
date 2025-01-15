import { useEffect, useState } from "react";
import { LocationForm } from "../FormPage/roofing/RoofingFormsComponent";
import StepperWizard from "../StepperWizard/StepperWizard";
import { SolarPersonalDetails } from "../FormPage/v2/solar";
import { RoofingV2ProjectDetails, RoofingV2PropertyDetails } from "../FormPage/v2/roofing";

import { PaintingV2PropertyDetails } from "../FormPage/v2/painting";

const PaintingV2Forms = ({ slug }) => {
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
      component: (props) => <RoofingV2PropertyDetails props={props} />,
    },
    {
      label: "Form3",
      component: (props) => <PaintingV2PropertyDetails props={props} />,
    },
    {
      label: "Form4",
      component: (props) => <SolarPersonalDetails props={props} />,
    },
    {
      label: "Form5",
      component: (props) => (
        <RoofingV2ProjectDetails
          props={props}
          slug={slug}
          projectTimelineData={["Emergency", "Flexible", "Within a week", "Within a month", "Within a year"]}
          scopeData={["Install", "Repair", "Replace"]}
        />
      ),
    },
  ];

  return (
    <div className="max-w-[750px] px-4 mx-auto pt-12 py-28">
      <StepperWizard steps={STEPS} activeIndex={activeIndex} setActiveIndex={setActiveIndex} fullWidth={true} />
    </div>
  );
};

export default PaintingV2Forms;
