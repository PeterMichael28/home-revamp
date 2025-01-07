import { useState } from "react";
import FormHeader from "../FormHeader";
// import FormButton from "../FormButton";
import FormSelectBox from "../FormSelectBox";
import { useFormStore } from "~/store/formStore";
import { CustomLabelSelect } from "../LabelSelect";
import FormButton from "../FormButton";

export const PaintingTypeProject = ({ props }) => {
  const [value, setValue] = useState("");
  const data = ["New", "Re-painting", "Not sure"];

  const { allFields, updateFields } = useFormStore((state) => state);

  // const handleClick = () => {
  //   if (!value) return;
  //   updateFields({ ...allFields, painting_project: value });
  //   props.onNext();
  // };
  const handleSelection = (selectedValue) => {
    if (!selectedValue) return;
    updateFields({ ...allFields, painting_project: selectedValue });
    props.onNext();
  };
  return (
    <div className="w-full">
      <FormHeader
        title={"Type of Painting Project"}
        subtitle={"Please specify the type of painting for this project."}
      />

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

export const PaintingTypeNeeded = ({ props }) => {
  const [value, setValue] = useState("");
  const data = [
    "Exterior Painting - Trim/Shutters",
    "Exterior Painting - Whole House",
    "Paint or Stain - Deck/Fence/Porch",
    "Interior Painting - 1 - 2 rooms",
    "Interior Painting - 3+ rooms",
    "Wallpaper Hanging/Removal",
    "Specialty - Faux Finishes",
    "Specialty - Texture",
    "Painting Removal or Stripping",
    "Commercial",
  ];
  const { allFields, updateFields } = useFormStore((state) => state);

  const handleClick = () => {
    if (!value) return;
    updateFields({ ...allFields, painting_needed: value });
    props.onNext();
  };
  return (
    <div className="w-full">
      <FormHeader
        title={"Type of Painting Needed"}
        subtitle={"What type of Painting services best suits your needs?"}
      />

      <div className="mt-7">
        <CustomLabelSelect
          id={"painting_needed"}
          required
          placeholder={"Select the Type of Painting Needed"}
          value={value}
          setValue={setValue}
          data={data}
          label={"Type of Painting Needed"}
        />
        <FormButton text="Continue" className="mt-7" onClick={handleClick} disabled={!value} />
      </div>
    </div>
  );
};
