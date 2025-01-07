import { useState } from "react";
import FormHeader from "../FormHeader";
// import FormButton from "../FormButton";
import FormSelectBox from "../FormSelectBox";
import { useFormStore } from "~/store/formStore";
import { CustomLabelSelect } from "../LabelSelect";
import FormButton from "../FormButton";

export const Kitchen = ({ props }) => {
  const [value, setValue] = useState("");
  const data = [
    "Appliances",
    "Cabinets",
    "Counter Tops or Sinks",
    "Flooring",
    "Full Kitchen",
    "Gas Heat",
    "Leak Detection",
  ];

  const { allFields, updateFields } = useFormStore((state) => state);

  const handleClick = () => {
    if (!value) return;
    updateFields({ ...allFields, kitchen: value });
    props.onNext();
  };
  return (
    <div className="w-full">
      <FormHeader title={"Kitchen"} subtitle={"What type of Kitchen remodelling best suits your needs?"} />

      <div className="mt-7">
        <CustomLabelSelect
          id={"kitchen"}
          required
          placeholder={"Select a type"}
          value={value}
          setValue={setValue}
          data={data}
          label={"Kitchen"}
        />
        <FormButton text="Continue" className="mt-7" onClick={handleClick} disabled={!value} />
      </div>
    </div>
  );
};
