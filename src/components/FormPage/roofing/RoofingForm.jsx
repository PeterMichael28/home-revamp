import { useEffect, useState } from "react";
import {
  ContactDetailsForm,
  HomeOwnershipForm,
  LocationForm,
  PreferredTimeForm,
  ProjectOwnerForm,
  PropertyTypeForm,
  AddressDetailsForm,
  HomeAuthorization,
  LeaseAgreement,
  AccessFromLandlord,
  RoofingProjectScopeForm,
  RoofingProjectTimelineForm,
  RoofType,
  RoofingMaterials,
} from "~/components/FormPage/roofing/RoofingFormsComponent";
import StepperWizard from "~/components/StepperWizard/StepperWizard";

const RoofingForm = ({ slug }) => {
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
      component: (props) => <HomeOwnershipForm props={props} />,
    },

    {
      label: "Form2",
      component: (props) => <HomeAuthorization props={props} />,
    },
    {
      label: "Form2",
      component: (props) => <LeaseAgreement props={props} />,
    },
    {
      label: "Form2",
      component: (props) => <AccessFromLandlord props={props} />,
    },
    {
      label: "Form3",
      component: (props) => <PropertyTypeForm props={props} />,
    },
    {
      label: "Form4",
      component: (props) => <RoofingProjectScopeForm props={props} />,
    },
    {
      label: "Form5",
      component: (props) => <RoofingMaterials props={props} />,
    },

    {
      label: "Form4",
      component: (props) => <RoofType props={props} />,
    },
    {
      label: "Form4",
      component: (props) => <RoofingProjectTimelineForm props={props} />,
    },
    {
      label: "Form4",
      component: (props) => <ProjectOwnerForm props={props} />,
    },
    {
      label: "Form4",
      component: (props) => <ContactDetailsForm props={props} />,
    },
    {
      label: "Form4",
      component: (props) => <AddressDetailsForm props={props} />,
    },

    {
      label: "Form4",
      component: (props) => <PreferredTimeForm props={props} slug={slug} />,
    },
  ];

  return (
    <div className="max-w-[750px] px-4 mx-auto pt-12 py-28">
      <StepperWizard steps={STEPS} activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
    </div>
  );
};

export default RoofingForm;
