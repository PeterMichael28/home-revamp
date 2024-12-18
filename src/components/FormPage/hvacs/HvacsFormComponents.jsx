import { useState } from "react";
import FormHeader from "../FormHeader";
// import FormButton from "../FormButton";
import FormSelectBox from "../FormSelectBox";
import { useFormStore } from "~/store/formStore";

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

  const handleSelection = (selectedValue) => {
    if (!selectedValue) return;
    updateFields({ ...allFields, AirSubType: selectedValue });
    props.onNext();
  };

  return (
    <div className="w-full">
      <FormHeader title={"HVACS"} subtitle={"What type of HVAC system best suits your needs?"} />

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

  const handleSelection = (selectedValue) => {
    if (!selectedValue) return;
    updateFields({ ...allFields, project_timeline: selectedValue });
    props.onNext();
  };
  const homeData = ["Immediately", "1-3 months", "3-6 months", "Within a Year", "Not Sure"];
  return (
    <div className="w-full">
      <FormHeader title={"Project Timeline"} subtitle={"Which of these timelines best describe your needs?"} />

      <div className="mt-7">
        <div className="space-y-5">
          {homeData.map((dat) => (
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
