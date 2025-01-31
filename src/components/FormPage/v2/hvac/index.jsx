import { useState } from "react";
import { useFormStore } from "~/store/formStore";
import FormHeader from "../../FormHeader";
import { CustomLabelSelect } from "../../LabelSelect";
import FormButton from "../../FormButton";

export const HvacV2PropertyDetails = ({ props }) => {
  const [hvacs, setHvacs] = useState("");
  const [airType, setAirType] = useState("");

  const hvacsData = [
    "Boiler",
    "Propane Furnace",
    "Oil Furnace",
    "Electric Furnace",
    "Furnace",
    "Gas Boiler",
    "Propane Boiler",
    "Electric Boiler",
    "Oil Boiler 1",
    "Gas Furnace",
    "Central Air",
    "Heat Pump",
    "Water Heater",
  ];

  const airTypeData = ["Heating", "Cooling", "Heating and Cooling"];
  const { allFields, updateFields } = useFormStore((state) => state);

  const handleClick = () => {
    if (!hvacs || !airType) return;
    updateFields({
      ...allFields,
      AirSubType: hvacs,
      AirType: airType,
    });
    props.onNext();
  };

  return (
    <div className="w-full">
      <FormHeader
        title={"HVAC’s Service"}
        subtitle={"Please take a moment to provide us with some information about the service."}
      />

      <div className="mt-12 w-full">
        <div className="space-y-6">
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
            <CustomLabelSelect
              id={"AirSubType"}
              required
              placeholder={"Select your preferred HVAC system"}
              value={hvacs}
              setValue={setHvacs}
              data={hvacsData}
              label={"HVACS"}
            />

            <CustomLabelSelect
              id={"AirType"}
              required
              placeholder={"Select your preferred air type"}
              value={airType}
              setValue={setAirType}
              data={airTypeData}
              label={"Air Type"}
            />
          </div>
        </div>

        <FormButton text="Continue" className="mt-16" onClick={handleClick} disabled={!hvacs || !airType} />
      </div>
    </div>
  );
};
