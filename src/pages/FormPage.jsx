import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HomeForm from "~/components/FormPage/HomeForm";
import PersonalForm from "~/components/FormPage/PersonalForm";
import ProjectForm from "~/components/FormPage/ProjectForm";
import StepperWizard from "~/components/StepperWizard/StepperWizard";

const FormPage = () => {
  const { slug } = useParams();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeIndex]);

  return (
    <div className="max-w-[750px] px-4 mx-auto pt-12 py-28">
      <StepperWizard steps={STEPS} activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
    </div>
  );
};

export default FormPage;

const roofingMaterialData = [
  "Asphalt",
  "Clay-tile",
  "Metal",
  "Wood Shingles",
  "Natural Slate",
  "Tar",
  "Cedal Shake",
  "Others",
];

const STEPS = [
  {
    label: "Personal Details",
    component: (props) => <PersonalForm props={props} />,
  },
  {
    label: "Home Details",
    component: (props) => <HomeForm props={props} />,
  },
  {
    label: "Project",
    component: (props) => (
      <ProjectForm
        props={props}
        label={"Roofing Material"}
        id={"roofingMaterial"}
        data={roofingMaterialData}
        placeholder={"Select your preferred roofing materials"}
      />
    ),
  },
];
