import { useState } from "react";
import FormHeader from "../FormHeader";
import { useFormStore } from "~/store/formStore";
import { CustomLabelSelect } from "../LabelSelect";
import FormButton from "../FormButton";

export const Plumbing = ({ props }) => {
  const [value, setValue] = useState("");
  const data = [
    "Basement Drainage Channel",
    "Bathtubs",
    "Commercial Industrial Plumbing",
    "Faucet Fixtures Pipes",
    "Gas Pipes",
    "Leak Detection",
  ];
  const { allFields, updateFields } = useFormStore((state) => state);

  const handleClick = () => {
    if (!value) return;
    updateFields({ ...allFields, plumbing: value });
    props.onNext();
  };
  return (
    <div className="w-full">
      <FormHeader title={"Plumbing"} subtitle={"What type of Plumbing best suites your needs"} />

      <div className="mt-7">
        <CustomLabelSelect
          id={"Plumbing"}
          required
          placeholder={"Select a Plumbing type"}
          value={value}
          setValue={setValue}
          data={data}
          label={"Plumbing"}
        />
        <FormButton text="Continue" className="mt-7" onClick={handleClick} disabled={!value} />
      </div>
    </div>
  );
};
