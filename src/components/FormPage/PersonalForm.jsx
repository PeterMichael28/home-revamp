import { useState } from "react";
import FormHeader from "./FormHeader";
import LabelInput from "./LabelInput";

const PersonalForm = ({ props }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [city, setCity] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    props.onNext();
  };

  // console.log(props)
  return (
    <form onSubmit={handleSubmit} className="mt-6">
      <FormHeader
        title={"Let's Get to Know You"}
        subtitle={
          "Please take a moment to provide us with some information about yourself, and let's begin this journey together."
        }
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center gap-6  mt-[34px] md:mt-[42px] px-2">
        <LabelInput
          label={"First Name"}
          id={"firstname"}
          required
          placeholder={"Enter your first name"}
          value={firstName}
          setValue={setFirstName}
        />
        <LabelInput
          label={"Last Name"}
          id={"lastname"}
          required
          placeholder={"Enter your last name"}
          value={lastName}
          setValue={setLastName}
        />
        <LabelInput
          label={"Phone number"}
          type={"phone"}
          id={"phone"}
          required
          placeholder={"+01 333 3444"}
          value={phone}
          setValue={setPhone}
        />
        <LabelInput
          label={"Email Address"}
          type={"email"}
          id={"email"}
          required
          placeholder={"Enter your email address"}
          value={emailAddress}
          setValue={setEmailAddress}
        />
        <LabelInput
          label={"Zip Code"}
          type={"tel"}
          id={"zipCode"}
          required
          placeholder={"Enter your zip code"}
          value={zipCode}
          setValue={setZipCode}
        />
        <LabelInput
          label={"City"}
          id={"city"}
          required
          placeholder={"Enter your city"}
          value={city}
          setValue={setCity}
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

export default PersonalForm;
