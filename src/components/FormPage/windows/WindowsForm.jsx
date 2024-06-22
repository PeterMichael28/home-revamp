import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ContactDetailsForm,
  ProjectTimelineForm,
  HomeOwnershipForm,
  LocationForm,
  PreferredTimeForm,
  ProjectOwnerForm,
  ProjectScopeForm,
  PropertyTypeForm,
  AddressDetailsForm,
  HomeAuthorization,
  LeaseAgreement,
  AccessFromLandlord,
} from "~/components/FormPage/roofing/RoofingFormsComponent";
import StepperWizard from "~/components/StepperWizard/StepperWizard";
import { NumberOfWindows, WindowAge, WindowCondition, WindowMaterial } from "./WindowsFormComponents";

const WindowsForm = ({ slug }) => {
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
      component: (props) => <ProjectScopeForm props={props} />,
    },
    {
      label: "Form5",
      component: (props) => <WindowMaterial props={props} />,
    },
    {
      label: "Form6",
      component: (props) => <NumberOfWindows props={props} />,
    },
    {
      label: "Form6",
      component: (props) => <WindowAge props={props} />,
    },
    {
      label: "Form6",
      component: (props) => <WindowCondition props={props} />,
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
      component: (props) => (
        <PreferredTimeForm props={props} handleClick={() => navigate(`/${slug}/completed`)} slug={slug} />
      ),
    },
  ];

  return (
    <div className="max-w-[750px] px-4 mx-auto pt-12 py-28">
      <StepperWizard steps={STEPS} activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
    </div>
  );
};

export default WindowsForm;
