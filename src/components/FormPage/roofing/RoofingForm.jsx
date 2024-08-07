import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  ContactDetailsForm,
  CustomizedForm,
  HomeOwnershipForm,
  LocationForm,
  PreferredTimeForm,
  ProjectOwnerForm,
  ProjectScopeForm,
  PropertyTypeForm,
  ProjectTimelineForm,
  AddressDetailsForm,
  HomeAuthorization,
  LeaseAgreement,
  AccessFromLandlord,
  RoofingProjectScopeForm,
  RoofingProjectTimelineForm,
  RoofType,
} from "~/components/FormPage/roofing/RoofingFormsComponent";
import StepperWizard from "~/components/StepperWizard/StepperWizard";

const RoofingForm = ({ slug }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeIndex]);

  const customData = {
    data: ["Asphalt Shingle", "Tile", "Metal", "Tar Torchdown", "Natural Slate", "Tar", "Cedal Slate"],
    header: "Roofing Material",
    subText: "Which of these roofing materials best describes your needs",
    label: "roofing_material",
  };

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
      component: (props) => (
        <CustomizedForm
          props={props}
          data={customData.data}
          header={customData.header}
          subText={customData.subText}
          label={customData.label}
        />
      ),
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
