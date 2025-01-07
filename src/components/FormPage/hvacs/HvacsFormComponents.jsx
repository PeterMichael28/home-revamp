import { useState } from "react";
import FormHeader from "../FormHeader";
// import FormButton from "../FormButton";
import FormSelectBox from "../FormSelectBox";
import { useFormStore } from "~/store/formStore";
import { CustomLabelSelect } from "../LabelSelect";
import FormButton from "../FormButton";

export const HVACS = ({ props }) => {
  const [value, setValue] = useState("");
  const data = [
    "Boiler",
    "Propane Furnace",
    "Oil Furnace",
    "Electric Furnace",
    "Furnace",
    "Gas Boiler",
    "Propane Boiler",
    "Electric Boiler",
    "Oil Boiler 1",
    "Gas Furnace",
    "Central Air",
    "Heat Pump",
    "Water Heater",
  ];

  const { allFields, updateFields } = useFormStore((state) => state);

  const handleClick = () => {
    if (!value) return;
    updateFields({ ...allFields, AirSubType: value });
    props.onNext();
  };
  return (
    <div className="w-full">
      <FormHeader title={"HVACS"} subtitle={"What type of HVAC system best suits your needs?"} />

      <div className="mt-7">
        <CustomLabelSelect
          id={"AirSubType"}
          required
          placeholder={"Select your preferred HVAC system"}
          value={value}
          setValue={setValue}
          data={data}
          label={"HVACS"}
        />
        <FormButton text="Continue" className="mt-7" onClick={handleClick} disabled={!value} />
      </div>
    </div>
  );
};

export const AirType = ({ props }) => {
  const [value, setValue] = useState("");
  const data = ["Heating", "Cooling", "Heating and Cooling"];

  const { allFields, updateFields } = useFormStore((state) => state);

  const handleSelection = (selectedValue) => {
    if (!selectedValue) return;
    updateFields({ ...allFields, AirType: selectedValue });
    props.onNext();
  };
  return (
    <div className="w-full">
      <FormHeader title={"Air Type"} subtitle={"Your type of Air for this project?"} />

      <div className="mt-7">
        <div className="space-y-5">
          {data.map((dat) => (
            <FormSelectBox
              key={dat}
              active={value === dat}
              onClick={() => {
                setValue(dat);
                handleSelection(dat);
              }}
              text={dat}
            />
          ))}
        </div>
        {/* <FormButton text="Continue" className="mt-7" onClick={handleClick} disabled={!value} /> */}
      </div>
    </div>
  );
};

export const HvacProjectTimelineForm = ({ props }) => {
  const [value, setValue] = useState("");

  const { allFields, updateFields } = useFormStore((state) => state);

  const handleClick = () => {
    if (!value) return;
    updateFields({ ...allFields, project_timeline: value });
    props.onNext();
  };
  const homeData = ["Immediately", "1-3 months", "3-6 months", "Within a Year", "Not Sure"];
  return (
    <div className="w-full">
      <FormHeader title={"Project Timeline"} subtitle={"Which of these timelines best describe your needs?"} />

      <div className="mt-7">
        <CustomLabelSelect
          id={"project_timeline"}
          required
          placeholder={"Select your project timeline"}
          value={value}
          setValue={setValue}
          data={homeData}
          label={"Roofing Material"}
        />
        <FormButton text="Continue" className="mt-7" onClick={handleClick} disabled={!value} />
      </div>
    </div>
  );
};
