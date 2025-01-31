import { useState } from "react";
import FormHeader from "../FormHeader";
import FormSelectBox from "../FormSelectBox";
import { useFormStore } from "~/store/formStore";
import FormButton from "../FormButton";
import { CustomLabelSelect } from "../LabelSelect";

export const WindowMaterial = ({ props }) => {
  const [value, setValue] = useState("");
  const data = ["Vinyl", "Wood", "Aluminium", "Brick", "Metal"];

  const { allFields, updateFields } = useFormStore((state) => state);

  // const handleSelection = (selectedValue) => {
  //   if (!selectedValue) return;
  //   updateFields({ ...allFields, window_material: selectedValue });
  //   props.onNext();
  // };
  const handleClick = () => {
    if (!value) return;
    updateFields({ ...allFields, window_material: value });
    props.onNext();
  };

  return (
    <div className="w-full">
      <FormHeader title={"Window Material"} subtitle={"Which of these windows material best describes your needs?"} />

      <div className="mt-7">
        {/* <div className="space-y-5">
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
        </div> */}
        <CustomLabelSelect
          id={"window_material"}
          required
          placeholder={"Select your window material"}
          value={value}
          setValue={setValue}
          data={data}
          label={"Window Material"}
        />
        <FormButton text="Continue" className="mt-7" onClick={handleClick} disabled={!value} />
      </div>
    </div>
  );
};

export const WindowStyle = ({ props }) => {
  const [value, setValue] = useState("");
  const data = [
    "Bay or Bow",
    "Fixed (non-opening)",
    "Sliding Glass window",
    "Garden window",
    "Casement",
    "Sliding Glass Door",
    "Double Hung (both halves open)",
    "French Door",
    "Single-Hung (lower half opens)",
    "Awning (hinged at the top)",
    "Unsure",
  ];

  const { allFields, updateFields } = useFormStore((state) => state);

  const handleClick = () => {
    if (!value) return;
    updateFields({ ...allFields, WindowStyle: value });
    props.onNext();
  };

  return (
    <div className="w-full">
      <FormHeader title={"Window Style"} subtitle={"Which of these windows style best describes your needs?"} />

      <div className="mt-7">
        <CustomLabelSelect
          id={"WindowStyle"}
          required
          placeholder={"Select your window style"}
          value={value}
          setValue={setValue}
          data={data}
          label={"Window Style"}
        />
        <FormButton text="Continue" className="mt-7" onClick={handleClick} disabled={!value} />
      </div>
    </div>
  );
};

export const NumberOfWindows = ({ props }) => {
  const [value, setValue] = useState("");
  const data = ["1 window", "2 windows", "3 to 5 windows", "6 to 9 windows", "10+ windows"];

  const { allFields, updateFields } = useFormStore((state) => state);

  const handleClick = () => {
    if (!value) return;
    updateFields({ ...allFields, num_of_window: value });
    props.onNext();
  };

  return (
    <div className="w-full">
      <FormHeader
        title={"Number of Windows"}
        subtitle={"Please indicate the total number of windows you are interested in for your project."}
      />

      <div className="mt-7">
        <CustomLabelSelect
          id={"num_of_window"}
          required
          placeholder={"Select number of windows"}
          value={value}
          setValue={setValue}
          data={data}
          label={"Number of Windows"}
        />

        <FormButton text="Continue" className="mt-7" onClick={handleClick} disabled={!value} />
      </div>
    </div>
  );
};

export const WindowAge = ({ props }) => {
  const [value, setValue] = useState("");
  const data = ["New (less than 1 year old)", "1-5 years", "6+ years"];

  const { allFields, updateFields } = useFormStore((state) => state);

  const handleSelection = (selectedValue) => {
    if (!selectedValue) return;
    updateFields({ ...allFields, windowAge: selectedValue });
    props.onNext();
  };

  return (
    <div className="w-full">
      <FormHeader
        title={"Window Age"}
        subtitle={"Please indicate the age of windows you are interested in for your project."}
      />

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

export const WindowCondition = ({ props }) => {
  const [value, setValue] = useState("");
  const data = ["Good", "Average", "Poor"];

  const { allFields, updateFields } = useFormStore((state) => state);

  // const handleClick = () => {
  //   if (!value) return;
  //   updateFields({ ...allFields, windowCondition: value });
  //   props.onNext();
  // };

  const handleSelection = (selectedValue) => {
    if (!selectedValue) return;
    updateFields({ ...allFields, windowCondition: selectedValue });
    props.onNext();
  };

  return (
    <div className="w-full">
      <FormHeader
        title={"Window Condition"}
        subtitle={"Please indicate the condition of windows you are interested in for your project."}
      />

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

export const WindowProjectType = ({ props }) => {
  const [value, setValue] = useState("");

  const { allFields, updateFields } = useFormStore((state) => state);

  const handleSelection = (selectedValue) => {
    if (!selectedValue) return;
    updateFields({ ...allFields, ProjectType: selectedValue });
    props.onNext();
  };

  const homeData = ["New Unit Installed", "Repair", "Replace Unit"];
  return (
    <div className="w-full">
      <FormHeader title={"Project Type"} subtitle={"Please specify the type this project."} />

      <div className="mt-7">
        <div className="space-y-5">
          {homeData.map((dat) => (
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
