import { useState } from "react";
import { useFormStore } from "~/store/formStore";
import FormHeader from "../../FormHeader";
import { CustomLabelSelect } from "../../LabelSelect";
import FormButton from "../../FormButton";

export const PaintingV2PropertyDetails = ({ props }) => {
  const [paintingType, setPaintingType] = useState("");
  const [paintingNeeded, setPaintingNeeded] = useState("");

  const paintingTypeData = ["New", "Re-painting", "Not sure"];
  const paintingNeededData = [
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
    if (!paintingType || !paintingNeeded) return;
    updateFields({
      ...allFields,
      painting_project: paintingType,
      painting_needed: paintingNeeded,
    });
    props.onNext();
  };

  return (
    <div className="w-full">
      <FormHeader
        title={"Painting Service"}
        subtitle={"Please take a moment to provide us with some information about the service."}
      />

      <div className="mt-12 w-full">
        <div className="space-y-6">
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
            <CustomLabelSelect
              id={"paintingType"}
              required
              placeholder={"Select your preferred painting type"}
              value={paintingType}
              setValue={setPaintingType}
              data={paintingTypeData}
              label={"Type of Painting"}
            />
            <CustomLabelSelect
              id={"paintingNeeded"}
              required
              placeholder={"Select your preferred painting needed"}
              value={paintingNeeded}
              setValue={setPaintingNeeded}
              data={paintingNeededData}
              label={"Types of Painting Needed"}
            />
          </div>
        </div>

        <FormButton
          text="Continue"
          className="mt-16"
          onClick={handleClick}
          disabled={!paintingType || !paintingNeeded}
        />
      </div>
    </div>
  );
};
