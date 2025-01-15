import { useState } from "react";
import { useFormStore } from "~/store/formStore";
import FormHeader from "../../FormHeader";
import { CustomLabelSelect } from "../../LabelSelect";
import FormButton from "../../FormButton";

export const PlumbingV2PropertyDetails = ({ props }) => {
  const [plumbing, setPlumbing] = useState("");

  const plumbingData = [
    "Basement Drainage Channel",
    "Bathtubs",
    "Commercial Industrial Plumbing",
    "Faucet Fixtures Pipes",
    "Gas Pipes",
    "Leak Detection",
  ];

  const { allFields, updateFields } = useFormStore((state) => state);

  const handleClick = () => {
    if (!plumbing) return;
    updateFields({
      ...allFields,
      plumbing,
    });
    props.onNext();
  };

  return (
    <div className="w-full">
      <FormHeader
        title={"Plumbing Service"}
        subtitle={"Please take a moment to provide us with some information about the service."}
      />

      <div className="mt-12 w-full">
        <div className="space-y-6">
          <div className="grid gap-6 grid-cols-1 ">
            <CustomLabelSelect
              id={"plumbing"}
              required
              placeholder={"Select your preferred plumbing type"}
              value={plumbing}
              setValue={setPlumbing}
              data={plumbingData}
              label={"Plumbing"}
            />
          </div>
        </div>

        <FormButton text="Continue" className="mt-16" onClick={handleClick} disabled={!plumbing} />
      </div>
    </div>
  );
};
