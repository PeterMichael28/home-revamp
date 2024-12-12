import { useState } from "react";
import FormHeader from "../FormHeader";
import FormButton from "../FormButton";
import FormSelectBox from "../FormSelectBox";
import { useFormStore } from "~/store/formStore";
import utilityData from "~/utils/electricity.json";
import { CustomLabelSelect } from "../LabelSelect";

export const MonthlyBill = ({ props }) => {
  const [value, setValue] = useState("");
  const data = [
    "$0-25",
    "$26-50",
    "$51-75",
    "$76-100",
    "$101-125",
    "$126-150",
    "$151-175",
    "$176-200",
    "$201-300",
    "$301-400",
    "$401-500",
    "$500+",
  ];

  const { allFields, updateFields } = useFormStore((state) => state);

  const handleClick = () => {
    if (!value) return;
    updateFields({ ...allFields, electric_bill: value });
    props.onNext();
  };

  return (
    <div className="w-full">
      <FormHeader title={"Monthly Electric Bill"} subtitle={"What is your average monthly electric bill?"} />

      <div className="mt-7">
        <div className="space-y-5">
          {data.map((dat) => (
            <FormSelectBox key={dat} active={value === dat} onClick={() => setValue(dat)} text={dat} />
          ))}
        </div>
        <FormButton text="Continue" className="mt-7" onClick={handleClick} disabled={!value} />
      </div>
    </div>
  );
};

export const SunlightExposure = ({ props }) => {
  const [value, setValue] = useState("");
  const data = ["Full sun", "Partial sun", "Mostly shaded", "Not sure"];

  const { allFields, updateFields } = useFormStore((state) => state);

  const handleClick = () => {
    if (!value) return;
    updateFields({ ...allFields, sunlight_exposure: value });
    props.onNext();
  };

  return (
    <div className="w-full">
      <FormHeader title={"Sunlight Exposure on Roof"} subtitle={"Which of these options best describes your needs?"} />

      <div className="mt-7">
        <div className="space-y-5">
          {data.map((dat) => (
            <FormSelectBox key={dat} active={value === dat} onClick={() => setValue(dat)} text={dat} />
          ))}
        </div>
        <FormButton text="Continue" className="mt-7" onClick={handleClick} disabled={!value} />
      </div>
    </div>
  );
};

export const ProjectStatus = ({ props }) => {
  const [value, setValue] = useState("");
  const data = ["Existing home", "Under development"];

  const { allFields, updateFields } = useFormStore((state) => state);

  const handleClick = () => {
    if (!value) return;
    updateFields({ ...allFields, projectStatus: value });
    props.onNext();
  };

  return (
    <div className="w-full">
      <FormHeader
        title={"Project Status"}
        subtitle={"Which of these options best describes the status of your project?"}
      />

      <div className="mt-7">
        <div className="space-y-5">
          {data.map((dat) => (
            <FormSelectBox key={dat} active={value === dat} onClick={() => setValue(dat)} text={dat} />
          ))}
        </div>
        <FormButton text="Continue" className="mt-7" onClick={handleClick} disabled={!value} />
      </div>
    </div>
  );
};

export const PropertyStories = ({ props }) => {
  const [value, setValue] = useState("");
  const data = ["One story", "Two stories", "Three stories or more"];
  const { allFields, updateFields } = useFormStore((state) => state);

  const handleClick = () => {
    if (!value) return;
    updateFields({ ...allFields, propertyStories: value });
    props.onNext();
  };

  return (
    <div className="w-full">
      <FormHeader title={"Property Story(s)"} subtitle={"How many story(s) does the property have?"} />

      <div className="mt-7">
        <div className="space-y-5">
          {data.map((dat) => (
            <FormSelectBox key={dat} active={value === dat} onClick={() => setValue(dat)} text={dat} />
          ))}
        </div>
        <FormButton text="Continue" className="mt-7" onClick={handleClick} disabled={!value} />
      </div>
    </div>
  );
};

export const PropertyUsage = ({ props }) => {
  const [value, setValue] = useState("");
  const data = ["Residential", "Commercial"];

  const { allFields, updateFields } = useFormStore((state) => state);

  const handleClick = () => {
    if (!value) return;
    updateFields({ ...allFields, propertyUsage: value });
    props.onNext();
  };

  return (
    <div className="w-full">
      <FormHeader title={"Property Usage"} subtitle={"Whats the property used for?"} />

      <div className="mt-7">
        <div className="space-y-5">
          {data.map((dat) => (
            <FormSelectBox key={dat} active={value === dat} onClick={() => setValue(dat)} text={dat} />
          ))}
        </div>
        <FormButton text="Continue" className="mt-7" onClick={handleClick} disabled={!value} />
      </div>
    </div>
  );
};

export const SolarSystemType = ({ props }) => {
  const [value, setValue] = useState("");
  const data = ["Solar electricity", "Solar hot water", "Solar electricity and hot water"];
  const { allFields, updateFields } = useFormStore((state) => state);

  const handleClick = () => {
    if (!value) return;
    updateFields({ ...allFields, solarSystemType: value });
    props.onNext();
  };

  return (
    <div className="w-full">
      <FormHeader title={"Solar System Type"} subtitle={"Which of these best qualifies your answer?"} />

      <div className="mt-7">
        <div className="space-y-5">
          {data.map((dat) => (
            <FormSelectBox key={dat} active={value === dat} onClick={() => setValue(dat)} text={dat} />
          ))}
        </div>
        <FormButton text="Continue" className="mt-7" onClick={handleClick} disabled={!value} />
      </div>
    </div>
  );
};

export const SolarInstallationLocation = ({ props }) => {
  const [value, setValue] = useState("");
  const data = ["Roof", "On the ground", "Nearby structure"];

  const { allFields, updateFields } = useFormStore((state) => state);

  const handleClick = () => {
    if (!value) return;
    updateFields({ ...allFields, solarInstallationLocation: value });
    props.onNext();
  };

  return (
    <div className="w-full">
      <FormHeader title={"Solar Installation Location"} subtitle={"Which of these best qualifies your answer?"} />

      <div className="mt-7">
        <div className="space-y-5">
          {data.map((dat) => (
            <FormSelectBox key={dat} active={value === dat} onClick={() => setValue(dat)} text={dat} />
          ))}
        </div>
        <FormButton text="Continue" className="mt-7" onClick={handleClick} disabled={!value} />
      </div>
    </div>
  );
};

export const CurrentUtilityProvider = ({ props }) => {
  const { allFields, updateFields } = useFormStore((state) => state);
  // console.log("utilityData", utilityData);
  // console.log("state", allFields.stateName);

  const [currentUtilityProvider, setCurrentUtilityProvider] = useState("");

  const handleClick = () => {
    if (!currentUtilityProvider) return;
    updateFields({ ...allFields, currentUtilityProvider: currentUtilityProvider });
    props.onNext();
  };

  return (
    <div className="w-full">
      <FormHeader
        title={"Your Current Utility Provider?"}
        subtitle={"Please enter your current utility provider name"}
      />

      <div className="mt-5">
        <CustomLabelSelect
          id={"CurrentUtilityProvider"}
          required
          placeholder={"Select your current utility provider"}
          value={currentUtilityProvider}
          setValue={setCurrentUtilityProvider}
          data={utilityData[allFields.stateName]}
          label={"Current Utility Provider"}
        />

        <FormButton text="Continue" className="mt-7" onClick={handleClick} disabled={!currentUtilityProvider} />
      </div>
    </div>
  );
};

export const CreditRating = ({ props }) => {
  const { allFields, updateFields } = useFormStore((state) => state);
  // console.log("utilityData", utilityData);
  // console.log("state", allFields.stateName);

  const data = [
    "Poor (300–579)",
    "Fair (580–669)",
    "Good (670–739)",
    "Very Good (740–799)",
    "Excellent (800–850)",
    "NA",
  ];

  const [creditRating, setCreditRating] = useState("");

  const handleClick = () => {
    if (!creditRating) return;
    updateFields({ ...allFields, creditRating: creditRating });
    props.onNext();
  };

  return (
    <div className="w-full">
      <FormHeader
        title={"Your Credit Rating"}
        subtitle={"Select the range that best describes your current credit standing."}
      />

      <div className="mt-5">
        <div className="space-y-5">
          {data.map((dat) => (
            <FormSelectBox key={dat} active={creditRating === dat} onClick={() => setCreditRating(dat)} text={dat} />
          ))}
        </div>
        <FormButton text="Continue" className="mt-7" onClick={handleClick} disabled={!creditRating} />
      </div>
    </div>
  );
};
