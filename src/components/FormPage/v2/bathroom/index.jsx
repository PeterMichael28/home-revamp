import { useState } from "react";
import { useFormStore } from "~/store/formStore";
import FormHeader from "../../FormHeader";
import { CustomLabelSelect } from "../../LabelSelect";
import FormButton from "../../FormButton";

export const BathroomV2PropertyDetails = ({ props }) => {
  const [bathroom, setBathroom] = useState("");
  const [cabinets, setCabinets] = useState("");
  const [counterTops, setCounterTops] = useState("");
  const [flooring, setFlooring] = useState("");
  const [floorPlan, setFloorPlan] = useState("");
  const [showerOrBath, setShowerOrBath] = useState("");
  const [sinks, setSinks] = useState("");
  const [toilets, setToilets] = useState("");

  const bathroomData = [
    "Bathtub Liner or Shower Enclosure",
    "Bathtub or Shower Updates",
    "Bathtub to Shower Conversion",
    "Remodel",
    "Walk in Tub",
  ];

  const cabinetsData = ["Yes", "No"];
  const { allFields, updateFields } = useFormStore((state) => state);

  const handleClick = () => {
    if (!bathroom || !cabinets || !counterTops || !flooring || !floorPlan || !showerOrBath || !sinks || !toilets)
      return;
    updateFields({
      ...allFields,
      bathroom,
      cabinets,
      counterTops,
      flooring,
      floorPlan,
      showerOrBath,
      sinks,
      toilets,
    });
    props.onNext();
  };

  return (
    <div className="w-full">
      <FormHeader
        title={"Bathroom Service"}
        subtitle={"Please take a moment to provide us with some information about the service."}
      />

      <div className="mt-12 w-full">
        <div className="space-y-6">
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
            <CustomLabelSelect
              id={"bathroom"}
              required
              placeholder={"Select your preferred bathroom system"}
              value={bathroom}
              setValue={setBathroom}
              data={bathroomData}
              label={"Bathroom"}
            />

            <CustomLabelSelect
              id={"cabinets"}
              required
              placeholder={"Need professional cabinet services?"}
              value={cabinets}
              setValue={setCabinets}
              data={cabinetsData}
              label={"Cabinets?"}
            />
          </div>

          <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
            <CustomLabelSelect
              id={"counterTops"}
              required
              placeholder={"Need professional counterTops services?"}
              value={counterTops}
              setValue={setCounterTops}
              data={cabinetsData}
              label={"CounterTops?"}
            />

            <CustomLabelSelect
              id={"flooring"}
              required
              placeholder={"Need professional flooring services?"}
              value={flooring}
              setValue={setFlooring}
              data={cabinetsData}
              label={"Flooring?"}
            />
          </div>

          <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
            <CustomLabelSelect
              id={"floorPlan"}
              required
              placeholder={"Need professional floorPlan services?"}
              value={floorPlan}
              setValue={setFloorPlan}
              data={cabinetsData}
              label={"FloorPlan?"}
            />

            <CustomLabelSelect
              id={"showerOrBath"}
              required
              placeholder={"Need professional showerOrBath services?"}
              value={showerOrBath}
              setValue={setShowerOrBath}
              data={cabinetsData}
              label={"Shower Or Bath?"}
            />
          </div>

          <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
            <CustomLabelSelect
              id={"sinks"}
              required
              placeholder={"Need professional sinks services?"}
              value={sinks}
              setValue={setSinks}
              data={cabinetsData}
              label={"Sinks?"}
            />

            <CustomLabelSelect
              id={"toilets"}
              required
              placeholder={"Need professional toilets services?"}
              value={toilets}
              setValue={setToilets}
              data={cabinetsData}
              label={"Toilets?"}
            />
          </div>
        </div>

        <FormButton
          text="Continue"
          className="mt-16"
          onClick={handleClick}
          disabled={!bathroom || !cabinets || !counterTops || !flooring || !floorPlan || !showerOrBath || !sinks}
        />
      </div>
    </div>
  );
};
