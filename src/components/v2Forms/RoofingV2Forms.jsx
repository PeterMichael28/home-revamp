import { useEffect, useState } from "react";
import { LocationForm } from "../FormPage/roofing/RoofingFormsComponent";
import StepperWizard from "../StepperWizard/StepperWizard";
import { SolarPersonalDetails } from "../FormPage/v2/solar";
import { RoofingV2ProjectDetails, RoofingV2PropertyDetails, RoofingV2RoofingDetails } from "../FormPage/v2/roofing";

const RoofingV2Forms = ({ slug }) => {
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
      component: (props) => (
        <RoofingV2PropertyDetails
          props={props}
          propertyTypeData={[
            "Single Family Home",
            "Apartment",
            "Commercial",
            "Condo",
            "Mobile Home",
            "Multi-Unit",
            "Other",
          ]}
        />
      ),
    },
    {
      label: "Form3",
      component: (props) => <RoofingV2RoofingDetails props={props} />,
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
          projectTimelineData={["Immediately", "Within 1 months", "1-3 months", "3+ months"]}
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

export default RoofingV2Forms;
