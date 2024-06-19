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
  ProjectScopeForm,
  AddressDetailsForm,
  HomeAuthorization,
  LeaseAgreement,
  AccessFromLandlord,
} from "~/components/FormPage/roofing/RoofingFormsComponent";
import StepperWizard from "~/components/StepperWizard/StepperWizard";
import {
  Bathroom,
  Cabinets,
  Countertops,
  Flooring,
  Floorplan,
  ShowerOrBath,
  Sinks,
  Toilets,
} from "./BathroomFormsComponents";

const BathroomForms = ({ slug }) => {
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
      label: "Form4",
      component: (props) => <Bathroom props={props} />,
    },
    {
      label: "Form4",
      component: (props) => <Cabinets props={props} />,
    },
    {
      label: "Form4",
      component: (props) => <Countertops props={props} />,
    },
    {
      label: "Form4",
      component: (props) => <Flooring props={props} />,
    },
    {
      label: "Form4",
      component: (props) => <Floorplan props={props} />,
    },
    {
      label: "Form4",
      component: (props) => <ShowerOrBath props={props} />,
    },
    {
      label: "Form4",
      component: (props) => <Sinks props={props} />,
    },
    {
      label: "Form4",
      component: (props) => <Toilets props={props} />,
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

export default BathroomForms;
