import { useEffect, useMemo, useRef, useState } from "react";
import FormHeader from "../FormHeader";
import LabelInput from "../LabelInput";
import FormButton from "../FormButton";
import FormSelectBox from "../FormSelectBox";
import { useFormStore } from "~/store/formStore";
import { toast } from "react-toastify";
import { Link, useLocation, useNavigate, useSearchParams } from "react-router-dom";
import LabelSelect from "../LabelSelect";
import axios from "axios";
import { statesNames } from "~/assets/data";
import Modal from "~/components/Modal/Modal";

import Lottie from "lottie-react";
import animation from "~/assets/Animation8.json";

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
    if (value == "Rented") {
      updateFields({ ...allFields, home_owner: value });
      props.onNext();
      return;
    }
    updateFields({ ...allFields, home_owner: value });
    props.goto(5);
  };
  const homeData = ["Own", "Rented"];

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

export const HomeAuthorization = ({ props }) => {
  const [value, setValue] = useState("");
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { allFields, updateFields } = useFormStore((state) => state);

  const handleClick = () => {
    if (!value) return;
    if (value == "No" && pathname == "/solars") {
      updateFields({});
      navigate("/thank-you");
      return;
    }
    updateFields({ ...allFields, homeAuthorization: value });
    props.onNext();
  };
  const homeData = ["Yes", "No"];
  return (
    <div className="w-full">
      <FormHeader
        title={"Home Authorization"}
        subtitle={"Are you authorized to make decisions about the property's energy systems?"}
      />

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

export const LeaseAgreement = ({ props }) => {
  const [value, setValue] = useState("");

  const { allFields, updateFields } = useFormStore((state) => state);

  const handleClick = () => {
    if (!value) return;
    updateFields({ ...allFields, leaseAgreement: value });
    props.onNext();
  };

  const homeData = [
    "Yes, my lease is more than 3 years.",
    " Yes, my lease is between 1 and 3 years.",
    "No, my lease is less than 1 year.",
    "No, I am month-to-month.",
  ];
  return (
    <div className="w-full">
      <FormHeader title={"Lease Agreement"} subtitle={"Do you have a long-term lease agreement?"} />

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

export const AccessFromLandlord = ({ props }) => {
  const [value, setValue] = useState("");

  const { allFields, updateFields } = useFormStore((state) => state);

  const handleClick = () => {
    if (!value) return;
    updateFields({ ...allFields, accessFromLandlord: value });
    props.onNext();
  };

  const homeData = [
    "Yes, major modifications are allowed.",
    "Yes, but only minor modifications.",
    "No, modifications are not allowed.",
    "Not sure, I need to check.",
  ];
  return (
    <div className="w-full">
      <FormHeader
        title={"Access from Landlord?"}
        subtitle={"Does your landlord allow modifications to the property?"}
      />

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

  const homeData = ["Commercial", "Residential"];
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

  const homeData = ["Install", "Repair", "Replace"];
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

export const RoofType = ({ props }) => {
  const [value, setValue] = useState("");

  const { allFields, updateFields } = useFormStore((state) => state);

  const handleClick = () => {
    if (!value) return;
    updateFields({ ...allFields, RoofType: value });
    props.onNext();
  };

  const homeData = ["Cedar Shake", "Asphalt Shingle", "Metal", "Tar Torchdown", "Tile", "Natural Slate"];
  return (
    <div className="w-full">
      <FormHeader title={"Roof Type"} subtitle={"Please specify the Roof type that suits your project."} />

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

export const RoofingProjectScopeForm = ({ props }) => {
  const [value, setValue] = useState("");

  const { allFields, updateFields } = useFormStore((state) => state);

  const handleClick = () => {
    if (!value) return;
    updateFields({ ...allFields, project_scope: value });
    props.onNext();
  };

  const homeData = ["New Roof for New Home", "New Roof for an Existing Home", "Repair", "Shingle over Existing Roof"];
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

export const RoofingProjectTimelineForm = ({ props }) => {
  const [value, setValue] = useState("");

  const { allFields, updateFields } = useFormStore((state) => state);

  const handleClick = () => {
    if (!value) return;
    updateFields({ ...allFields, project_timeline: value });
    props.onNext();
  };

  const homeData = ["Time is flexible", "Within 1 week", "1-2 weeks", "More than 2 weeks"];
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
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");

  const { allFields, updateFields } = useFormStore((state) => state);

  const handleFormatDate = (selectedDate) => {
    if (selectedDate) {
      // Create a new Date object from the selected date
      const date = new Date(selectedDate);
      // Format the date as yyyy-mm-dd
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0"); // Add 1 because getMonth() returns 0-11
      const day = String(date.getDate()).padStart(2, "0");
      const formatted = `${year}-${month}-${day}`;
      // Set the formatted date to the state
      return formatted;
    }
  };

  const handleClick = () => {
    if (!firstName || !lastName) return;
    updateFields({ ...allFields, first_name: firstName, last_name: lastName, gender, dob: handleFormatDate(dob) });
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
          <LabelInput
            id={"dob"}
            required
            placeholder={"Select your date of birth"}
            value={dob}
            setValue={setDob}
            type="date"
          />
          <LabelSelect
            id={"gender"}
            required
            placeholder={"Select your gender"}
            value={gender}
            setValue={setGender}
            data={["Male", "Female", "Unspecified"]}
          />
        </div>
        <FormButton
          text="Continue"
          className="mt-7"
          onClick={handleClick}
          disabled={!firstName || !lastName || !dob || !gender}
        />
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
          <LabelSelect
            id={"state"}
            required
            placeholder={"Select your state"}
            value={state}
            setValue={setState}
            data={statesNames}
          />
        </div>
        <FormButton text="Continue" className="mt-7" onClick={handleClick} disabled={!address || !city || !state} />
      </div>
    </div>
  );
};

export const ContactDetailsForm = ({ props }) => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [dayPhone, setDayPhone] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [dayPhoneError, setDayPhoneError] = useState(false);

  const { allFields, updateFields } = useFormStore((state) => state);

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const validatePhoneNumber = (phoneNumber) => {
    const phoneRegex = /^(\+1\s?)?(\(?\d{3}\)?[\s.-]?)?\d{3}[\s.-]?\d{4}$/;
    return phoneRegex.test(phoneNumber);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (emailError || phoneError || dayPhoneError) {
        setEmailError(false);
        setPhoneError(false);
        setDayPhoneError(false);
      }
    }, 3000);

    // Cleanup the timer if the component unmounts or dependencies change
    return () => clearTimeout(timer);
  }, [emailError, phoneError, dayPhoneError]);

  const handleClick = (e) => {
    e.preventDefault();

    if (!email || !validateEmail(email)) {
      toast.error("Invalid Email format!!!");
      setEmailError(true);
    }

    if (!phone || !validatePhoneNumber(phone)) {
      toast.error("Invalid Phone number format!!!");
      setPhoneError(true);
    }

    if (!dayPhone || !validatePhoneNumber(dayPhone)) {
      toast.error("Invalid Day Phone number format!!!");
      setDayPhoneError(true);
    }

    if (!validateEmail(email) || !validatePhoneNumber(phone) || !validatePhoneNumber(dayPhone)) return;

    setEmailError(false);
    setPhoneError(false);
    setDayPhoneError(false);
    updateFields({ ...allFields, email: email, phone: phone, dayPhoneNumber: dayPhone });
    props.onNext();
  };

  return (
    <div className="w-full">
      <FormHeader title={"Contact Details"} subtitle={"Please share your contact information with us"} />

      <form className="mt-7" onSubmit={handleClick}>
        <div className="space-y-5">
          <LabelInput
            id={"email"}
            required
            placeholder={"example@gmail.com"}
            value={email}
            setValue={setEmail}
            error={emailError}
          />
          <LabelInput
            id={"phone"}
            required
            placeholder={"1234567890"}
            type={"number"}
            value={phone}
            setValue={setPhone}
            error={phoneError}
          />
          <LabelInput
            id={"dayPhone"}
            required
            placeholder={"1234567890"}
            type={"number"}
            value={dayPhone}
            setValue={setDayPhone}
            error={dayPhoneError}
          />
        </div>
        <FormButton text="Continue" type="submit" className="mt-7" disabled={!email || !phone || !dayPhone} />
      </form>
    </div>
  );
};

export const PreferredTimeForm = ({ slug }) => {
  const { allFields, updateFields } = useFormStore((state) => state);
  const [value, setValue] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const url = import.meta.env.VITE_API_BASE_URL;
  const [searchParams] = useSearchParams();

  const clickId = searchParams.get("click_id");
  const networkName = searchParams.get("network_name");

  const params = new URLSearchParams();
  let newUrl = `/${slug}/completed`;
  if (clickId) {
    params.append("click_id", clickId);
  }
  if (networkName) {
    params.append("network_name", networkName);
  }

  if (params.toString()) {
    newUrl += `?${params.toString()}`;
  }

  const [leadIdToken, setLeadIdToken] = useState(null);
  const formRef = useRef(null);

  useEffect(() => {
    const retryGetLeadIdToken = () => {
      return new Promise((resolve) => {
        const interval = setInterval(() => {
          const leadIdToken = formRef.current?.querySelector("#leadid_token")?.value;
          if (leadIdToken) {
            clearInterval(interval);
            resolve(leadIdToken);
          }
        }, 100); // Retry every 100 milliseconds
      });
    };

    const getLeadIdToken = async () => {
      const token = await retryGetLeadIdToken();
      setLeadIdToken(token);
    };

    getLeadIdToken();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!value || !leadIdToken) {
      return;
    }
    setLoading(true);
    // Set a timeout to show the modal after 2 seconds
    const modalTimer = setTimeout(() => {
      setOpenModal(true);
    }, 2000);

    updateFields({ ...allFields, contact_time: value, LeadiD: leadIdToken, service: slug });

    try {
      const response = await fetch(`${url}/api/home-quote/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...allFields, contact_time: value, LeadiD: leadIdToken, service: slug }),
      });

      if (!response.ok) {
        throw new Error("Error submitting!, Please try again");
      }
      // console.log(error);
      toast.success("Submitted Successfully!!!");
      updateFields({});
      setOpenModal(false); // Close the modal
      clearTimeout(modalTimer);
      navigate(newUrl);
      setLoading(false);
      window.location.reload();
    } catch (error) {
      console.error("Error submitting lead:", error);
      if (error.response) {
        console.error("Response data:", error.response.data);
      }
      setOpenModal(false); // Close the modal in case of error
      clearTimeout(modalTimer);
      toast.error("There was an error submitting the lead.");
      setLoading(false);
    }
  };

  const homeData = ["Any time", "Morning", "Afternoon", "Evening"];
  return (
    <>
      <form
        className="w-full"
        onSubmit={handleSubmit}
        // onSubmit={ handleSubmit }
        ref={formRef}
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
              to the phone number provided using automated technology and prerecorded voice messages even if you are on
              a do-not-call list. Message and data rates may apply. You also consent to{" "}
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

      <Modal isOpen={openModal} className="max-w-5xl py-8" onClose={() => setOpenModal(false)} maxWidth="700px">
        <div className="flex justify-center items-center gap-4 flex-col w-full">
          {/* <svg xmlns="http://www.w3.org/2000/svg" width="88" height="88" viewBox="0 0 88 88" fill="none">
            <circle cx="44.0007" cy="43.9997" r="36.6667" fill="#D5EBDC" />
            <path
              d="M59.2519 37.068L41.5419 54.778C41.0285 55.2913 40.3319 55.5846 39.5985 55.5846C38.8652 55.5846 38.1685 55.2913 37.6552 54.778L28.7819 45.9046C27.7185 44.8413 27.7185 43.0813 28.7819 42.018C29.8452 40.9546 31.6052 40.9546 32.6685 42.018L39.5985 48.948L55.3652 33.1813C56.4285 32.118 58.1885 32.118 59.2519 33.1813C60.3152 34.2446 60.3152 36.0046 59.2519 37.068Z"
              fill="#008726"
            />
          </svg> */}
          <div>
            <Lottie animationData={animation} loop={true} className="size-[200px] p-0" />
          </div>
          <FormHeader
            title={"Successfully Submitted!!!"}
            subtitle={"Thank your for your time, You are been redirected now."}
            className="text-center"
            titleClassName="text-[38px]"
          />

          <div className="">
            <p className="animate-pulse italic text-gray-dark text-sm text-center">Redirecting... Please wait!!!</p>
            <div className="loader mt-2 mx-auto"></div>
          </div>
        </div>
      </Modal>
    </>
  );
};
