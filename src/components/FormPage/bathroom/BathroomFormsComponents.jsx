import { useState } from "react";
import FormHeader from "../FormHeader";
// import FormButton from "../FormButton";
import FormSelectBox from "../FormSelectBox";
import { useFormStore } from "~/store/formStore";
import { CustomLabelSelect } from "../LabelSelect";
import FormButton from "../FormButton";

export const Bathroom = ({ props }) => {
  const [value, setValue] = useState("");
  const data = [
    "Bathtub Liner or Shower Enclosure",
    "Bathtub or Shower Updates",
    "Bathtub to Shower Conversion",
    "Remodel",
    "Walk in Tub",
  ];

  const { allFields, updateFields } = useFormStore((state) => state);

  const handleClick = () => {
    if (!value) return;
    updateFields({ ...allFields, bathroom: value });
    props.onNext();
  };

  return (
    <div className="w-full">
      <FormHeader title={"Bathroom"} subtitle={"What type of Bathroom system best suits your needs?"} />

      <div className="mt-7">
        <CustomLabelSelect
          id={"Bathroom"}
          required
          placeholder={"Select a bathroom system"}
          value={value}
          setValue={setValue}
          data={data}
          label={"Bathroom"}
        />
        <FormButton text="Continue" className="mt-7" onClick={handleClick} disabled={!value} />
      </div>
    </div>
  );
};

export const Cabinets = ({ props }) => {
  const [value, setValue] = useState("");
  const data = ["Yes", "No"];

  const { allFields, updateFields } = useFormStore((state) => state);

  const handleSelection = (selectedValue) => {
    if (!selectedValue) return;
    updateFields({ ...allFields, cabinets: selectedValue });
    props.onNext();
  };

  return (
    <div className="w-full">
      <FormHeader title={"Cabinets"} subtitle={"Do you need professional cabinet services?"} />

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

export const Countertops = ({ props }) => {
  const [value, setValue] = useState("");
  const data = ["Yes", "No"];

  const { allFields, updateFields } = useFormStore((state) => state);

  // const handleClick = () => {
  //   if (!value) return;
  //   updateFields({ ...allFields, counterTops: value });
  //   props.onNext();
  // };

  const handleSelection = (selectedValue) => {
    if (!selectedValue) return;
    updateFields({ ...allFields, counterTops: selectedValue });
    props.onNext();
  };

  return (
    <div className="w-full">
      <FormHeader title={"Countertops"} subtitle={"Do you need professional countertop services?"} />

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

export const Flooring = ({ props }) => {
  const [value, setValue] = useState("");
  const data = ["Yes", "No"];

  const { allFields, updateFields } = useFormStore((state) => state);

  // const handleClick = () => {
  //   if (!value) return;
  //   updateFields({ ...allFields, flooring: value });
  //   props.onNext();
  // };
  const handleSelection = (selectedValue) => {
    if (!selectedValue) return;
    updateFields({ ...allFields, flooring: selectedValue });
    props.onNext();
  };

  return (
    <div className="w-full">
      <FormHeader title={"Flooring"} subtitle={"Do you need professional flooring services?"} />

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

export const Floorplan = ({ props }) => {
  const [value, setValue] = useState("");
  const data = ["Yes", "No"];

  const { allFields, updateFields } = useFormStore((state) => state);

  const handleSelection = (selectedValue) => {
    if (!selectedValue) return;
    updateFields({ ...allFields, floorPlan: selectedValue });
    props.onNext();
  };

  return (
    <div className="w-full">
      <FormHeader title={"Floorplan"} subtitle={"Do you need professional floorplan services?"} />

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

export const ShowerOrBath = ({ props }) => {
  const [value, setValue] = useState("");
  const data = ["Yes", "No"];

  const { allFields, updateFields } = useFormStore((state) => state);

  const handleSelection = (selectedValue) => {
    if (!selectedValue) return;
    updateFields({ ...allFields, showerOrBath: selectedValue });
    props.onNext();
  };

  return (
    <div className="w-full">
      <FormHeader title={"Shower or Bath"} subtitle={"Do you need professional shower or bath services?"} />

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

export const Sinks = ({ props }) => {
  const [value, setValue] = useState("");
  const data = ["Yes", "No"];

  const { allFields, updateFields } = useFormStore((state) => state);

  const handleSelection = (selectedValue) => {
    if (!selectedValue) return;
    updateFields({ ...allFields, sinks: selectedValue });
    props.onNext();
  };
  return (
    <div className="w-full">
      <FormHeader title={"Sinks"} subtitle={"Do you need professional sink services?"} />

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

export const Toilets = ({ props }) => {
  const [value, setValue] = useState("");
  const data = ["Yes", "No"];

  const { allFields, updateFields } = useFormStore((state) => state);

  const handleSelection = (selectedValue) => {
    if (!selectedValue) return;
    updateFields({ ...allFields, toilets: selectedValue });
    props.onNext();
  };

  return (
    <div className="w-full">
      <FormHeader title={"Toilets"} subtitle={"Do you need professional toilet services?"} />

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
