import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ContactDetailsForm,
  HomeOwnershipForm,
  LocationForm,
  PreferredTimeForm,
  ProjectOwnerForm,
  PropertyTypeForm,
  ProjectTimelineForm,
  AddressDetailsForm,
} from "~/components/FormPage/roofing/RoofingFormsComponent";
import StepperWizard from "~/components/StepperWizard/StepperWizard";
import { PaintingTypeNeeded, PaintingTypeProject } from "./PaintingFormComponents";

const PaintingForm = ({ slug }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();

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
      component: (props) => <HomeOwnershipForm props={props} />,
    },
    {
      label: "Form3",
      component: (props) => <PropertyTypeForm props={props} />,
    },
    // {
    //   label: "Form4",
    //   component: (props) => <ProjectScopeForm props={props} />,
    // },
    {
      label: "Form4",
      component: (props) => <PaintingTypeProject props={props} />,
    },
    {
      label: "Form4",
      component: (props) => <PaintingTypeNeeded props={props} />,
    },
    {
      label: "Form7",
      component: (props) => <ProjectTimelineForm props={props} />,
    },
    {
      label: "Form8",
      component: (props) => <ProjectOwnerForm props={props} />,
    },
    {
      label: "Form9",
      component: (props) => <ContactDetailsForm props={props} />,
    },
    {
      label: "Form4",
      component: (props) => <AddressDetailsForm props={props} />,
    },
    {
      label: "Form10",
      component: (props) => <PreferredTimeForm props={props} slug={slug} />,
    },
  ];

  return (
    <div className="max-w-[750px] px-4 mx-auto pt-12 py-28">
      <StepperWizard steps={STEPS} activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
    </div>
  );
};

export default PaintingForm;
