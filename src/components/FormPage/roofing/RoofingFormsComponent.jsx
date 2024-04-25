import { useState } from "react";
import FormHeader from "../FormHeader";
import LabelInput from "../LabelInput";
import FormButton from "../FormButton";
import FormSelectBox from "../FormSelectBox";
import { useFormStore } from "~/store/formStore";

export const LocationForm = ({ props }) => {
  const { allFields, updateFields } = useFormStore((state) => state);

  const [zipCode, setZipCode] = useState("");

  const handleClick = () => {
    if (!zipCode) return;
    updateFields({ zipCode });
    props.onNext();
  };

  // console.log({ allFields });

  return (
    <div className="w-full">
      <FormHeader
        title={"Where is the location for this project?"}
        subtitle={"Enter your zip code to receive free quotes and compare your options"}
      />

      <div className="mt-5">
        <LabelInput
          id={"zipCode"}
          required
          placeholder={"Enter your zip code"}
          type="tel"
          value={zipCode}
          setValue={setZipCode}
        />
        <FormButton text="Continue" className="mt-7" onClick={handleClick} disabled={!zipCode} />
      </div>
    </div>
  );
};

export const HomeOwnershipForm = ({ props }) => {
  const [value, setValue] = useState("");
  const { allFields, updateFields } = useFormStore((state) => state);

  const handleClick = () => {
    if (!value) return;
    updateFields({ ...allFields, propertyOwner: value });
    props.onNext();
  };
  const homeData = ["Own", "Rent"];
  return (
    <div className="w-full">
      <FormHeader title={"Home Ownership"} subtitle={"Please indicate your ownership status for this property."} />

      <div className="mt-7">
        <div className="space-y-5">
          {homeData.map((dat) => (
            <FormSelectBox key={dat} active={value === dat} onClick={() => setValue(dat)} text={dat} />
          ))}
        </div>
        <FormButton text="Continue" className="mt-7" onClick={handleClick} disabled={!value} />
      </div>
    </div>
  );
};

export const PropertyTypeForm = ({ props }) => {
  const [value, setValue] = useState("");

  const { allFields, updateFields } = useFormStore((state) => state);

  const handleClick = () => {
    if (!value) return;
    updateFields({ ...allFields, propertyType: value });
    props.onNext();
  };

  const homeData = ["Commercial", "Residential", "Multi-units"];
  return (
    <div className="w-full">
      <FormHeader title={"Property Type"} subtitle={"Please specify the type of content for this project."} />

      <div className="mt-7">
        <div className="space-y-5">
          {homeData.map((dat) => (
            <FormSelectBox key={dat} active={value === dat} onClick={() => setValue(dat)} text={dat} />
          ))}
        </div>
        <FormButton text="Continue" className="mt-7" onClick={handleClick} disabled={!value} />
      </div>
    </div>
  );
};

export const ProjectScopeForm = ({ props }) => {
  const [value, setValue] = useState("");

  const { allFields, updateFields } = useFormStore((state) => state);

  const handleClick = () => {
    if (!value) return;
    updateFields({ ...allFields, projectScope: value });
    props.onNext();
  };

  const homeData = ["New", "Repair", "Replace"];
  return (
    <div className="w-full">
      <FormHeader title={"Project Scope"} subtitle={"Please specify the scope this project."} />

      <div className="mt-7">
        <div className="space-y-5">
          {homeData.map((dat) => (
            <FormSelectBox key={dat} active={value === dat} onClick={() => setValue(dat)} text={dat} />
          ))}
        </div>
        <FormButton text="Continue" className="mt-7" onClick={handleClick} disabled={!value} />
      </div>
    </div>
  );
};

export const CustomizedForm = ({ props, header, subText, data = [] }) => {
  const [value, setValue] = useState("");

  const { allFields, updateFields } = useFormStore((state) => state);

  const handleClick = () => {
    if (!value) return;
    updateFields({ ...allFields, roofingMaterial: value });
    props.onNext();
  };

  return (
    <div className="w-full">
      <FormHeader title={header} subtitle={subText} />

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

export const ProjectTimelineForm = ({ props }) => {
  const [value, setValue] = useState("");

  const { allFields, updateFields } = useFormStore((state) => state);

  const handleClick = () => {
    if (!value) return;
    updateFields({ ...allFields, projectTimeline: value });
    props.onNext();
  };

  const homeData = ["Emergency", "Flexible", "Within a week", "Within a month", "Within a year"];
  return (
    <div className="w-full">
      <FormHeader title={"Project Timeline"} subtitle={"Which of these timelines best describe your needs?"} />

      <div className="mt-7">
        <div className="space-y-5">
          {homeData.map((dat) => (
            <FormSelectBox key={dat} active={value === dat} onClick={() => setValue(dat)} text={dat} />
          ))}
        </div>
        <FormButton text="Continue" className="mt-7" onClick={handleClick} disabled={!value} />
      </div>
    </div>
  );
};

export const ProjectOwnerForm = ({ props }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const { allFields, updateFields } = useFormStore((state) => state);

  const handleClick = () => {
    if (!firstName || !lastName) return;
    updateFields({ ...allFields, firstName: firstName, lastName: lastName });
    props.onNext();
  };

  return (
    <div className="w-full">
      <FormHeader title={"Project Owner"} subtitle={"Who is the owner of this project?"} />

      <div className="mt-7">
        <div className="space-y-5">
          <LabelInput
            id={"firstName"}
            required
            placeholder={"Enter your first name"}
            value={firstName}
            setValue={setFirstName}
          />
          <LabelInput
            id={"lastName"}
            required
            placeholder={"Enter your last name"}
            value={lastName}
            setValue={setLastName}
          />
        </div>
        <FormButton text="Continue" className="mt-7" onClick={handleClick} disabled={!firstName || !lastName} />
      </div>
    </div>
  );
};

export const ContactDetailsForm = ({ props }) => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const { allFields, updateFields } = useFormStore((state) => state);

  const handleClick = () => {
    if (!email || !phone) return;
    updateFields({ ...allFields, email: email, phone: phone });
    props.onNext();
  };

  return (
    <div className="w-full">
      <FormHeader title={"Contact Details"} subtitle={"Please share your contact information with us"} />

      <div className="mt-7">
        <div className="space-y-5">
          <LabelInput
            id={"email"}
            required
            placeholder={"Enter your email address"}
            value={email}
            setValue={setEmail}
          />
          <LabelInput id={"phone"} required placeholder={"Enter your phone number"} value={phone} setValue={setPhone} />
        </div>
        <FormButton text="Continue" className="mt-7" onClick={handleClick} disabled={!email || !phone} />
      </div>
    </div>
  );
};

export const PreferredTimeForm = ({ slug, handleClick }) => {
  const [value, setValue] = useState("");

  const { allFields, updateFields } = useFormStore((state) => state);

  const handleSubmit = () => {
    if (!value) return;
    updateFields({ ...allFields, preferredTime: value, service: slug });
    handleClick();
  };

  const homeData = ["Anytime", "Morning", "Afternoon", "Evening"];
  return (
    <div className="w-full">
      <FormHeader
        title={"Preferred Contact Time"}
        subtitle={"Please let us know when it would be a good time to contact you"}
      />

      <div className="mt-7">
        <div className="space-y-5">
          {homeData.map((dat) => (
            <FormSelectBox key={dat} active={value === dat} onClick={() => setValue(dat)} text={dat} />
          ))}
        </div>
        <FormButton text="Submit" className="mt-7" onClick={handleSubmit} disabled={!value} />
      </div>
    </div>
  );
};
