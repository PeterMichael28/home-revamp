import { useState } from "react";
import FormHeader from "../FormHeader";
import LabelInput from "../LabelInput";
import FormButton from "../FormButton";
import FormSelectBox from "../FormSelectBox";
import { useFormStore } from "~/store/formStore";

export const MonthlyBill = ({ props }) => {
  const [value, setValue] = useState("");
  const data = ["$0 - $150", "$150 - $200", "$200 - $300", "$300 - $500", "$500 - $700", "$700+"];

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
  const data = ["Full Sun", "Partially Shaded", "Mostly Shaded", "Not sure"];

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
  const data = ["Existing Home", "New Construction", "Renovation"];

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
  const data = ["Single Story", "Two Stories", "Three Stories", "More Than Three Stories"];

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
  const data = [
    "Residential (Single Family)",
    "Residential (Multi-Family)",
    "Commercial",
    "Industrial",
    "Agricultural",
  ];

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
  const data = [
    "Solar Electricity",
    "Solar Hot Water",
    "Solar Pool Heating",
    "Solar Lighting",
    "Hybrid Systems (Combination of above)",
  ];

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
  const data = ["Roof Mounting", "Ground Mounting", "Pole Mounting", "Others"];

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
        <LabelInput
          id={"CurrentUtilityProvider"}
          required
          placeholder={"Enter your current utility provider name"}
          type="tel"
          value={currentUtilityProvider}
          setValue={setCurrentUtilityProvider}
        />

        <FormButton text="Continue" className="mt-7" onClick={handleClick} disabled={!currentUtilityProvider} />
      </div>
    </div>
  );
};
