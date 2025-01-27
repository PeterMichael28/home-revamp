import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ContactDetailsForm,
  HomeOwnershipForm,
  LocationForm,
  PreferredTimeForm,
  ProjectOwnerForm,
  ProjectTimelineForm,
  AddressDetailsForm,
  HomeAuthorization,
  LeaseAgreement,
  AccessFromLandlord,
  RoofType,
} from "~/components/FormPage/roofing/RoofingFormsComponent";
import StepperWizard from "~/components/StepperWizard/StepperWizard";
import {
  CreditRating,
  CurrentUtilityProvider,
  MonthlyBill,
  PropertyStories,
  PropertyTypeDetails,
  PropertyUsage,
  SolarInstallationLocation,
  SolarSystemType,
  SunlightExposure,
} from "./SolarFormsComponent";

const SolarForms = ({ slug }) => {
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
      component: (props) => <HomeAuthorization props={props} />,
    },
    {
      label: "Form4",
      component: (props) => <LeaseAgreement props={props} />,
    },
    {
      label: "Form5",
      component: (props) => <AccessFromLandlord props={props} />,
    },
    // {
    //   label: "Form3",
    //   component: (props) => <PropertyTypeForm props={props} />,
    // },
    {
      label: "Form6",
      component: (props) => <PropertyStories props={props} />,
    },
    {
      label: "Form7",
      component: (props) => <PropertyTypeDetails props={props} />,
    },
    {
      label: "Form8",
      component: (props) => <PropertyUsage props={props} />,
    },

    {
      label: "Form9",
      component: (props) => <MonthlyBill props={props} />,
    },
    {
      label: "Form10",
      component: (props) => <CurrentUtilityProvider props={props} />,
    },
    {
      label: "Form11",
      component: (props) => <CreditRating props={props} />,
    },

    {
      label: "Form12",
      component: (props) => <SunlightExposure props={props} />,
    },
    {
      label: "Form13",
      component: (props) => <SolarSystemType props={props} />,
    },
    {
      label: "Form14",
      component: (props) => <RoofType props={props} />,
    },
    {
      label: "Form15",
      component: (props) => <SolarInstallationLocation props={props} />,
    },

    {
      label: "Form16",
      component: (props) => <ProjectTimelineForm props={props} />,
    },
    // {
    //   label: "Form37",
    //   component: (props) => <ProjectStatus props={props} />,
    // },
    {
      label: "Form17",
      component: (props) => <ProjectOwnerForm props={props} />,
    },
    {
      label: "Form18",
      component: (props) => <ContactDetailsForm props={props} />,
    },
    {
      label: "Form19",
      component: (props) => <AddressDetailsForm props={props} />,
    },
    {
      label: "Form20",
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

export default SolarForms;
