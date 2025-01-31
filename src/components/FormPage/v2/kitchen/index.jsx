import { useState } from "react";
import { useFormStore } from "~/store/formStore";
import FormHeader from "../../FormHeader";
import { CustomLabelSelect } from "../../LabelSelect";
import FormButton from "../../FormButton";

export const KitchenV2PropertyDetails = ({ props }) => {
  const [kitchen, setKitchen] = useState("");

  const kitchenData = [
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
    if (!kitchen) return;
    updateFields({
      ...allFields,
      kitchen,
    });
    props.onNext();
  };

  return (
    <div className="w-full">
      <FormHeader
        title={"Kitchen Service"}
        subtitle={"Please take a moment to provide us with some information about the service."}
      />

      <div className="mt-12 w-full">
        <div className="space-y-6">
          <div className="grid gap-6 grid-cols-1 ">
            <CustomLabelSelect
              id={"kitchen"}
              required
              placeholder={"Select your preferred kitchen system"}
              value={kitchen}
              setValue={setKitchen}
              data={kitchenData}
              label={"Kitchen"}
            />
          </div>
        </div>

        <FormButton text="Continue" className="mt-16" onClick={handleClick} disabled={!kitchen} />
      </div>
    </div>
  );
};
