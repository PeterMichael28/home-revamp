import { useState } from "react";
import { useFormStore } from "~/store/formStore";
import FormHeader from "../../FormHeader";
import { CustomLabelSelect } from "../../LabelSelect";
import FormButton from "../../FormButton";

export const GutterV2PropertyDetails = ({ props }) => {
  const [gutter, setGutter] = useState("");

  const gutterData = ["Galvanized", "Seamless Metal", "PVC"];

  const { allFields, updateFields } = useFormStore((state) => state);

  const handleClick = () => {
    if (!gutter) return;
    updateFields({
      ...allFields,
      gutter,
    });
    props.onNext();
  };

  return (
    <div className="w-full">
      <FormHeader
        title={"Gutter Service"}
        subtitle={"Please take a moment to provide us with some information about the service."}
      />

      <div className="mt-12 w-full">
        <div className="space-y-6">
          <div className="grid gap-6 grid-cols-1 ">
            <CustomLabelSelect
              id={"gutter"}
              required
              placeholder={"Select your preferred gutter system"}
              value={gutter}
              setValue={setGutter}
              data={gutterData}
              label={"Gutter"}
            />
          </div>
        </div>

        <FormButton text="Continue" className="mt-16" onClick={handleClick} disabled={!gutter} />
      </div>
    </div>
  );
};
