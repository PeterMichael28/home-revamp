import { useState } from "react";
import FormHeader from "../FormHeader";
import FormButton from "../FormButton";
import FormSelectBox from "../FormSelectBox";
import { useFormStore } from "~/store/formStore";

export const Bathroom = ({ props }) => {
  const [value, setValue] = useState("");
  const data = [
    "Bathtub Liner or Shower Enclosure",
    "Bathtub or Shower Updates",
    "Bathtub to Shower Conversion",
    "Remodel",
    "Walk in Tub",
  ];

  const { allFields, updateFields } = useFormStore((state) => state);

  const handleClick = () => {
    if (!value) return;
    updateFields({ ...allFields, bathroom: value });
    props.onNext();
  };

  return (
    <div className="w-full">
      <FormHeader title={"Bathroom"} subtitle={"What type of Bathroom system best suits your needs?"} />

      <div className="mt-7">
        <div className="space-y-5">
          {data.map((dat) => (
            <FormSelectBox key={dat} active={value === dat} onClick={() => setValue(dat)} text={dat} />
          ))}
        </div>
        <FormButton text="Continue" className="mt-7" onClick={handleClick} disabled={!value} />
      </div>
    </div>
  );
};
