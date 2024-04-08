import { useState } from "react";
import FormHeader from "./FormHeader";
import LabelInput from "./LabelInput";
import LabelSelect from "./LabelSelect";

const HomeForm = ({ props }) => {
  const [homeOwnership, setHomeOwnership] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [address, setAddress] = useState("");
  const [state, setState] = useState("");

  const homeOwnerShipData = ["Own", "Rent"];
  const propertyTypeData = ["Commercial", "Residential", "Multi-unit"];

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onNext();
  };
  return (
    <form onSubmit={handleSubmit} className="mt-6">
      <FormHeader
        title={"Home Details"}
        subtitle={"Please take a moment to provide us with some information about your home."}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center gap-6 mt-[34px] md:mt-[42px] px-2">
        <LabelSelect
          label={"Home Ownership"}
          id={"homeOwnership"}
          required
          placeholder={"Select home ownership"}
          value={homeOwnership}
          setValue={setHomeOwnership}
          data={homeOwnerShipData}
        />
        <LabelSelect
          label={"Property Type"}
          id={"propertyType"}
          required
          placeholder={"Select property type"}
          value={propertyType}
          setValue={setPropertyType}
          data={propertyTypeData}
        />

        <LabelInput
          label={"Address"}
          id={"address"}
          required
          placeholder={"Enter your address"}
          value={address}
          setValue={setAddress}
        />

        <LabelInput
          label={"State"}
          id={"state"}
          required
          placeholder={"Enter your state"}
          value={state}
          setValue={setState}
        />
      </div>
      <div className="w-full flex justify-center md:justify-end items-center mt-[38px] md:mt-[43px]">
        <button
          type="submit"
          className="md:max-w-[300px] w-full py-5 px-2.5 flex justify-center items-center text-white rounded bg-primary hover:bg-onPrimary transition-all duration-500"
        >
          Next
        </button>
      </div>
    </form>
  );
};

export default HomeForm;
