import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import FormHeader from "./FormHeader";
import LabelSelect from "./LabelSelect";
import LabelTextArea from "./LabelTextArea";

const ProjectForm = ({ label, data, id, placeholder }) => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const [projectScope, setProjectScope] = useState("");
  const [projectTimeline, setProjectTimeline] = useState("");
  const [unknown, setUnknown] = useState("");
  const [preferredTime, setPreferredTime] = useState("");
  const [projectOverview, setProjectOverview] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/${slug}/completed`);
  };
  const projectScopeData = ["New", "Repair", "Replace"];
  const projectTimelineData = ["Emergency", "Flexible", "within a week", "within a month", "within a year"];
  const preferredTimeData = ["Anytime", "Morning", "Afternoon", "Evening"];

  return (
    <form onSubmit={handleSubmit} className="mt-6">
      <FormHeader
        title={"Let's Get to Know You"}
        subtitle={
          "Please take a moment to provide us with some information about yourself, and let's begin this journey together."
        }
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center gap-6  mt-[34px] md:mt-[42px] px-2">
        <LabelSelect
          label={"Project Scope"}
          id={"projectScope"}
          required
          placeholder={"Select project scope"}
          value={projectScope}
          setValue={setProjectScope}
          data={projectScopeData}
        />
        <LabelSelect
          label={label}
          id={id}
          required
          placeholder={placeholder}
          value={unknown}
          setValue={setUnknown}
          data={data}
        />
        <LabelSelect
          label={"Project Timeline"}
          id={"projectTimeline"}
          required
          placeholder={"Select project timeline"}
          value={projectTimeline}
          setValue={setProjectTimeline}
          data={projectTimelineData}
        />

        <LabelSelect
          label={"Preferred Contract Time"}
          id={"projectTimeline"}
          required
          placeholder={"Select contract time"}
          value={preferredTime}
          setValue={setPreferredTime}
          data={preferredTimeData}
        />

        <LabelTextArea
          label={"Project Overview"}
          id={"projectOverview"}
          required
          placeholder={"Tell us about your project requirement in brief..."}
          value={projectOverview}
          setValue={setProjectOverview}
        />
      </div>
      <div className="w-full flex justify-center md:justify-end items-center mt-[38px] md:mt-[43px]">
        <button
          type="submit"
          className="md:max-w-[300px] w-full py-5 px-2.5 flex justify-center items-center text-white rounded bg-primary hover:bg-onPrimary transition-all duration-500"
        >
          Get you Quote
        </button>
      </div>
    </form>
  );
};

export default ProjectForm;
