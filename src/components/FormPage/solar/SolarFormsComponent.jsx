import { useState } from "react";
import FormHeader from "../FormHeader";
import LabelInput from "../LabelInput";
import FormButton from "../FormButton";
import FormSelectBox from "../FormSelectBox";
import { useFormStore } from "~/store/formStore";

export const MonthlyBill = ({ props }) => {
  const [value, setValue] = useState("");
  const data = ["$0 - $150", "$150 - $200", "$200 - $300", "$300 - $500", "$500 - $700", "$700+"];

  const { allFields, updateFields } = useFormStore((state) => state);

  const handleClick = () => {
    if (!value) return;
    updateFields({ ...allFields, electric_bill: value });
    props.onNext();
  };

  return (
    <div className="w-full">
      <FormHeader title={"Monthly Electric Bill"} subtitle={"What is your average monthly electric bill?"} />

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

export const SunlightExposure = ({ props }) => {
  const [value, setValue] = useState("");
  const data = ["Full Sun", "Partially Shaded", "Mostly Shaded", "Not sure"];

  const { allFields, updateFields } = useFormStore((state) => state);

  const handleClick = () => {
    if (!value) return;
    updateFields({ ...allFields, sunlight_exposure: value });
    props.onNext();
  };

  return (
    <div className="w-full">
      <FormHeader
        title={"Sunlight Exposure on Roof"}
        subtitle={"Which of these windows material best describes your needs?"}
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
