import { useState } from "react";
import FormHeader from "../FormHeader";
import FormButton from "../FormButton";
import FormSelectBox from "../FormSelectBox";
import { useFormStore } from "~/store/formStore";

export const WindowMaterial = ({ props }) => {
  const [value, setValue] = useState("");
  const data = ["Vinyl", "Wood", "Aluminium", "Brick", "Metal"];

  const { allFields, updateFields } = useFormStore((state) => state);

  const handleClick = () => {
    if (!value) return;
    updateFields({ ...allFields, windowMaterial: value });
    props.onNext();
  };

  return (
    <div className="w-full">
      <FormHeader title={"Window Material"} subtitle={"Which of these windows material best describes your needs?"} />

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

export const NumberOfWindows = ({ props }) => {
  const [value, setValue] = useState("");
  const data = ["1 Window", "2 Windows", "3-5 Windows", "6-9 Windows", "10+ Windows"];

  const { allFields, updateFields } = useFormStore((state) => state);

  const handleClick = () => {
    if (!value) return;
    updateFields({ ...allFields, noOfWindows: value });
    props.onNext();
  };

  return (
    <div className="w-full">
      <FormHeader
        title={"Number of Windows"}
        subtitle={"Please indicate the total number of windows you are interested in for your project."}
      />

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
