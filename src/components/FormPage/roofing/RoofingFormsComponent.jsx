import { useEffect, useMemo, useState } from "react";
import FormHeader from "../FormHeader";
import LabelInput from "../LabelInput";
import FormButton from "../FormButton";
import FormSelectBox from "../FormSelectBox";
import { useFormStore } from "~/store/formStore";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import LabelSelect from "../LabelSelect";
import axios from "axios";

export const LocationForm = ({ props }) => {
  const { allFields, updateFields } = useFormStore((state) => state);

  const [zipCode, setZipCode] = useState("");
  const [isValid, setIsValid] = useState(true);

  const handleClick = () => {
    if (!zipCode) return;
    updateFields({ zip_code: zipCode });
    props.onNext();
  };

  const isZipValid = useMemo(() => {
    return /^([0-9]{5})(?:[-\s]*([0-9]{4}))?$/;
  }, []);

  // console.log({ allFields });

  useEffect(() => {
    if (isZipValid.test(zipCode)) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [isZipValid, zipCode]);

  useEffect(() => {
    if (!isValid) {
      const timeoutId = setTimeout(() => setIsValid(true), 4000); // 4 seconds

      // Cleanup function to clear the timeout when the component unmounts
      return () => clearTimeout(timeoutId);
    }
  }, [isValid]);

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
        {!isValid && <p className="text-[11px] text-red-500 mt-1">Enter a valid US Zip or postal code</p>}
        <FormButton
          text="Continue"
          className="mt-7"
          onClick={handleClick}
          disabled={!zipCode || !isZipValid.test(zipCode)}
        />
      </div>
    </div>
  );
};

export const HomeOwnershipForm = ({ props }) => {
  const [value, setValue] = useState("");
  const navigate = useNavigate();
  const { allFields, updateFields } = useFormStore((state) => state);

  const handleClick = () => {
    if (!value) return;
    if (value == "Rent") {
      updateFields({});
      navigate("/thank-you");
      return;
    }
    updateFields({ ...allFields, home_owner: value });
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
    updateFields({ ...allFields, property_type: value });
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
    updateFields({ ...allFields, project_scope: value });
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
    updateFields({ ...allFields, roofing_material: value });
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
    updateFields({ ...allFields, project_timeline: value });
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
    updateFields({ ...allFields, first_name: firstName, last_name: lastName });
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
            placeholder={"Select your last name"}
            value={lastName}
            setValue={setLastName}
          />
        </div>
        <FormButton text="Continue" className="mt-7" onClick={handleClick} disabled={!firstName || !lastName} />
      </div>
    </div>
  );
};

export const AddressDetailsForm = ({ props }) => {
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  const { allFields, updateFields } = useFormStore((state) => state);

  const handleClick = () => {
    if (!address || !city || !state) return;
    updateFields({ ...allFields, address, city, state });
    props.onNext();
  };

  return (
    <div className="w-full">
      <FormHeader title={"Address Details"} subtitle={"Please Share your address information with us"} />

      <div className="mt-7">
        <div className="space-y-5">
          <LabelInput
            id={"address"}
            required
            placeholder={"Enter your address"}
            value={address}
            setValue={setAddress}
          />
          <LabelInput id={"city"} required placeholder={"Enter your city name"} value={city} setValue={setCity} />
          <LabelSelect id={"state"} required placeholder={"Enter your state name"} value={state} setValue={setState} />
        </div>
        <FormButton text="Continue" className="mt-7" onClick={handleClick} disabled={!address || !city || !state} />
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

export const PreferredTimeForm = ({ slug }) => {
  const { allFields, updateFields } = useFormStore((state) => state);
  const [value, setValue] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const url = import.meta.env.VITE_API_BASE_URL;
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!value) return;
    setLoading(true);
    updateFields({ ...allFields, contact_time: value, service: slug });

    try {
      const response = await fetch(`${url}/api/home-quote/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...allFields, contact_time: value, service: slug }),
      });

      if (!response.ok) {
        throw new Error("Error submitting!, Please try again");
      }
      // console.log(error);
      toast.success("Submitted Successfully!!!");
      updateFields({});
      navigate(`/${slug}/completed`);
      setLoading(false);
    } catch (error) {
      console.error("Error submitting lead:", error);
      if (error.response) {
        console.error("Response data:", error.response.data);
      }
      toast.error("There was an error submitting the lead.");
      setLoading(false);
    }
  };

  const homeData = ["Anytime", "Morning", "Afternoon", "Evening"];
  return (
    <form
      className="w-full"
      onSubmit={handleSubmit}
      // onSubmit={ handleSubmit }
    >
      <FormHeader
        title={"Preferred Contact Time"}
        subtitle={"Please let us know when it would be a good time to contact you"}
      />

      <div className="mt-7">
        <div className="space-y-5">
          {homeData.map((dat) => (
            <FormSelectBox
              key={dat}
              active={value === dat}
              onClick={() => {
                // setContact(dat);
                setValue(dat);
              }}
              text={dat}
            />
          ))}
        </div>
        <input
          id="leadid_token"
          name="universal_leadid"
          type="hidden"
          value=""
          onChange={(e) => console.log("ok", e.target.value)}
        />
        <div className="my-4">
          <input type="hidden" id="leadid_tcpa_disclosure" />
          <label htmlFor="leadid_tcpa_disclosure" className="text-xs text-black/80 text-balance ">
            <span className="font-semibold text-base">Note: </span>
            By submitting this form, you consent to receive marketing emails, calls, and texts from{" "}
            <Link to="/" className="underline text-blue-600 underline-offset-4">
              HomeRevampExpert.com
            </Link>{" "}
            to the phone number provided using automated technology and prerecorded voice messages even if you are on a
            do-not-call list. Message and data rates may apply. You also consent to{" "}
            <Link to="/" className="underline text-blue-600 underline-offset-4">
              HomeRevampExpert.com
            </Link>{" "}
            saving the information you entered and sharing it with relevant marketing and services{" "}
            <Link to="/our-partners" className="underline text-blue-600 underline-offset-4">
              companies
            </Link>{" "}
            so you can get the most up-to-date quotes.You further agree to our{" "}
            <Link to="/privacy-policy" className="underline text-blue-600 underline-offset-4">
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link to="/use-of-terms" className="underline text-blue-600 underline-offset-4">
              Terms of Conditions.
            </Link>
          </label>
        </div>
        <FormButton
          text="Submit"
          type="submit"
          className="mt-7"
          // onClick={handleSubmit}
          disabled={!value}
          loading={loading}
        />
      </div>
    </form>
  );
};
