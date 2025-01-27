import { useEffect, useRef, useState } from "react";
import { useFormStore } from "~/store/formStore";
import FormHeader from "../../FormHeader";
import { CustomLabelSelect } from "../../LabelSelect";
import FormButton from "../../FormButton";
import utilityData from "~/utils/electricity.json";
import { handleFormatDate, validateEmail, validatePhoneNumber } from "~/utils/funcs";
import LabelInput from "../../LabelInput";
import { City } from "country-state-city";
import { statesNames } from "~/assets/data";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "~/components/ui/select";
import { cn } from "~/lib/utils";
import Modal from "~/components/Modal/Modal";
import Lottie from "lottie-react";
import animation from "~/assets/Animation8.json";

export const SolarV2PropertyDetails = ({ props }) => {
  const [propertyUsage, setPropertyUsage] = useState("");
  const [homeOwnerShip, setHomeOwnerShip] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [propertyStories, setPropertyStories] = useState("");
  const propertyStoryData = ["One story", "Two stories", "Three stories or more"];

  const homeOwnerShipData = ["Own", "Rented"];
  const propertyTypeData = ["condo", "mobile", "multi", "single", "townhome"];
  const propertyUsageData = ["Residential", "Commercial"];
  const { allFields, updateFields } = useFormStore((state) => state);

  const handleClick = () => {
    if (!propertyUsage || !homeOwnerShip || !propertyType || !propertyStories) return;
    updateFields({
      ...allFields,
      home_owner: homeOwnerShip,
      property_type_detail: propertyType,
      propertyUsage: propertyUsage,
      propertyStories: propertyStories,
    });
    props.onNext();
  };

  return (
    <div className="w-full">
      <FormHeader
        title={"Property Details"}
        subtitle={"Please take a moment to provide us with some information the property."}
      />

      <div className="mt-12 w-full">
        <div className="space-y-6">
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
            <CustomLabelSelect
              id={"home_owner"}
              required
              placeholder={"Select Home Ownership"}
              value={homeOwnerShip}
              setValue={setHomeOwnerShip}
              data={homeOwnerShipData}
              label={"Home Ownership"}
            />

            <CustomLabelSelect
              id={"property_type_detail"}
              required
              placeholder={"Select property type"}
              value={propertyType}
              setValue={setPropertyType}
              data={propertyTypeData}
              label={"Property Type Detail"}
            />
          </div>

          <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
            <CustomLabelSelect
              id={"propertyStories"}
              required
              placeholder={"Select property story(s)"}
              value={propertyStories}
              setValue={setPropertyStories}
              data={propertyStoryData}
              label={"Property Story(S)"}
            />

            <CustomLabelSelect
              id={"propertyUsage"}
              required
              placeholder={"Select property usage"}
              value={propertyUsage}
              setValue={setPropertyUsage}
              data={propertyUsageData}
              label={"Property Usage"}
            />
          </div>
        </div>

        <FormButton
          text="Continue"
          className="mt-16"
          onClick={handleClick}
          disabled={!propertyUsage || !homeOwnerShip || !propertyType || !propertyStories}
        />
      </div>
    </div>
  );
};

export const SolarV2ServicesDetails = ({
  props,
  roofTypeData = ["Asphalt Shingle", "Tile", "Metal", "Tar", "Natural Slate", "Tar", "Cedal Slate"],
}) => {
  const [monthlyElect, setMonthlyElect] = useState("");
  const [currentUtils, setCurrentUtils] = useState("");
  const [creditRating, setCreditRating] = useState("");
  const [sunlight, setSunlight] = useState("");
  const [solarType, setSolarType] = useState("");
  const [solarLocation, setSolarLocation] = useState("");
  const [roofType, setRoofType] = useState("");

  const monthlyBillData = [
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

  const creditRatingData = [
    "Poor (300–579)",
    "Fair (580–669)",
    "Good (670–739)",
    "Very Good (740–799)",
    "Excellent (800–850)",
    "NA",
  ];
  const sunlightData = ["Full sun", "Partial sun", "Mostly shaded", "Not sure"];
  const solarTypeData = ["Solar electricity", "Solar hot water", "Solar electricity and hot water"];

  const solarLocationData = ["Roof", "On the ground", "Nearby structure"];

  // const roofTypeData = ["Asphalt Shingle", "Tile", "Metal", "Tar", "Natural Slate", "Tar", "Cedal Slate"];
  // Asphalt Shingle
  // Cedar Shake
  // Metal
  // Natural Slate
  // Tar
  // Other
  const { allFields, updateFields } = useFormStore((state) => state);

  const handleClick = () => {
    if (!monthlyElect || !currentUtils || !creditRating || !sunlight || !solarType || !solarLocation || !roofType)
      return;
    updateFields({
      ...allFields,
      electric_bill: monthlyElect,
      currentUtilityProvider: currentUtils,
      creditRating: creditRating.split(" (")[0],
      sunlight_exposure: sunlight,
      solarSystemType: solarType,
      solarInstallationLocation: solarLocation,
      RoofType: roofType,
    });
    props.onNext();
  };

  return (
    <div className="w-full">
      <FormHeader
        title={"Solar Service"}
        subtitle={"Please take a moment to provide us with some information about the service."}
      />

      <div className="mt-12 w-full">
        <div className="space-y-6">
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
            <CustomLabelSelect
              id={"electric_bill"}
              required
              placeholder={"Select average monthly  bill"}
              value={monthlyElect}
              setValue={setMonthlyElect}
              data={monthlyBillData}
              label={"Monthly Electric Bill"}
            />

            <CustomLabelSelect
              id={"currentUtilityProvider"}
              required
              placeholder={"Select your current utility provider"}
              value={currentUtils}
              setValue={setCurrentUtils}
              data={utilityData[allFields.stateName]}
              label={"Your Current Utility Provider?"}
            />
          </div>

          <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
            <CustomLabelSelect
              id={"creditRating"}
              required
              placeholder={"Select your Credit Rating"}
              value={creditRating}
              setValue={setCreditRating}
              data={creditRatingData}
              label={"Your Credit Rating"}
            />

            <CustomLabelSelect
              id={"sunlight_exposure"}
              required
              placeholder={"Select preferred sunlight exposure"}
              value={sunlight}
              setValue={setSunlight}
              data={sunlightData}
              label={"Sunlight Exposure on Roof"}
            />
          </div>

          <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
            <CustomLabelSelect
              id={"solarSystemType"}
              required
              placeholder={"Select preferred system type"}
              value={solarType}
              setValue={setSolarType}
              data={solarTypeData}
              label={"Solar System Type"}
            />

            <CustomLabelSelect
              id={"solarInstallationLocation"}
              required
              placeholder={"Select preferred installation location"}
              value={solarLocation}
              setValue={setSolarLocation}
              data={solarLocationData}
              label={"Sunlight Exposure on Roof"}
            />
          </div>
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
            <CustomLabelSelect
              id={"RoofingType"}
              required
              placeholder={"Select your preferred Roof type"}
              value={roofType}
              setValue={setRoofType}
              data={roofTypeData}
              label={"Roof Type"}
            />
          </div>
        </div>

        <FormButton
          text="Continue"
          className="mt-16"
          onClick={handleClick}
          disabled={
            !monthlyElect || !currentUtils || !creditRating || !sunlight || !solarType || !solarLocation || !roofType
          }
        />
      </div>
    </div>
  );
};

export const SolarPersonalDetails = ({ props }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);

  const { allFields, updateFields } = useFormStore((state) => state);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (emailError || phoneError) {
        setEmailError(false);
        setPhoneError(false);
      }
    }, 3000);

    // Cleanup the timer if the component unmounts or dependencies change
    return () => clearTimeout(timer);
  }, [emailError, phoneError]);

  const handleClick = () => {
    if (!firstName || !lastName || !dob || !gender) return;

    if (!email || !validateEmail(email)) {
      toast.error("Invalid Email format!!!");
      setEmailError(true);
    }

    if (!phone || !validatePhoneNumber(phone)) {
      toast.error("Invalid US Phone number format!!!");
      setPhoneError(true);
    }

    if (!validateEmail(email) || !validatePhoneNumber(phone)) return;

    setEmailError(false);
    setPhoneError(false);
    updateFields({
      ...allFields,
      first_name: firstName,
      last_name: lastName,
      gender,
      dob: handleFormatDate(dob),
      email: email,
      phone: phone,
    });
    props.onNext();
  };

  return (
    <div className="w-full">
      <FormHeader
        title={"Personal Details"}
        subtitle={"Please take a moment to provide us with some information about yourself."}
      />

      <div className="mt-12 w-full">
        <div className="space-y-6">
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
            <LabelInput
              id={"firstName"}
              required
              placeholder={"Enter your first name"}
              value={firstName}
              setValue={setFirstName}
              label={"First Name"}
            />
            <LabelInput
              id={"lastName"}
              required
              placeholder={"Select your last name"}
              value={lastName}
              setValue={setLastName}
              label={"Last Name"}
            />
          </div>

          <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
            <LabelInput
              id={"email"}
              required
              placeholder={"example@gmail.com"}
              value={email}
              setValue={setEmail}
              error={emailError}
              label={"Email"}
            />
            <LabelInput
              id={"phone"}
              required
              placeholder={"1234567890"}
              type={"number"}
              value={phone}
              setValue={setPhone}
              error={phoneError}
              label={"Phone Number"}
              maxLength={10}
            />
          </div>

          <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
            <LabelInput
              id={"dob"}
              required
              placeholder={"Select your date of birth"}
              value={dob}
              setValue={setDob}
              type="date"
              label={"Date of Birth"}
            />

            <CustomLabelSelect
              id={"gender"}
              required
              placeholder={"Select your gender"}
              value={gender}
              setValue={setGender}
              data={["Male", "Female", "Unspecific"]}
              label={"Gender"}
            />
          </div>
        </div>

        <FormButton
          text="Continue"
          className="mt-16"
          onClick={handleClick}
          disabled={!firstName || !lastName || !dob || !gender || !email || !phone}
        />
      </div>
    </div>
  );
};

export const SolarV2ProjectDetails = ({ props, slug }) => {
  const [projectTimeline, setProjectTimeline] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [contactTime, setContactTime] = useState("");
  const { allFields, updateFields } = useFormStore((state) => state);
  const [state, setState] = useState(allFields?.state);
  const cities = City.getCitiesOfState("US", allFields?.state);

  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const url = import.meta.env.VITE_API_BASE_URL;
  const [searchParams] = useSearchParams();

  const clickId = searchParams.get("click_id");
  const networkName = searchParams.get("network_name");
  const offerId = searchParams.get("offer_id");
  const affId = searchParams.get("aff_id");
  const params = new URLSearchParams();
  let newUrl = `/${slug}/completed`;
  if (clickId) {
    params.append("click_id", clickId);
  }
  if (networkName) {
    params.append("network_name", networkName);
  }
  if (offerId) {
    params.append("offer_id", offerId);
  }
  if (affId) {
    params.append("aff_id", affId);
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

        // Clear interval on component unmount
        return () => clearInterval(interval);
      });
    };

    const getLeadIdToken = async () => {
      try {
        const token = await retryGetLeadIdToken();
        setLeadIdToken(token);
      } catch (error) {
        console.error("Error fetching lead ID token:", error);
      }
    };

    getLeadIdToken();
  }, []);

  const projectTimelineData = ["Immediately", "Within 1 months", "1-3 months", "3+ months"];

  const contactTimeData = ["Anytime", "Morning", "Afternoon", "Evening"];

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!projectTimeline || !address || !city || !state || !contactTime || !leadIdToken) return;

    setLoading(true);

    updateFields({
      ...allFields,
      project_timeline: projectTimeline,
      address,
      city,
      state,
      contact_time: contactTime,
      LeadiD: leadIdToken,
      service: slug,
    });

    const modalTimer = setTimeout(() => {
      setOpenModal(true);
    }, 2000);

    let body = {
      ...allFields,
      project_timeline: projectTimeline,
      address,
      city,
      state,
      contact_time: contactTime,
      LeadiD: leadIdToken,
      service: slug,
      ...(clickId && { click_id: clickId }),
      ...(networkName && { network_name: networkName }),
      ...(offerId && { offer_id: offerId }),
      ...(affId && { aff_id: affId }),
    };

    try {
      const response = await fetch(`${url}/api/home-quote/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        throw new Error("Error submitting!, Please try again");
      }
      const data = await response.json();
      // console.log(data);
      toast.success("Submitted Successfully!!!");
      updateFields({});
      setOpenModal(false); // Close the modal
      clearTimeout(modalTimer);
      navigate(newUrl, {
        state: data?.thumbtack_data?.results ?? undefined,
      });
      setLoading(false);
      // window.location.reload();
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

  return (
    <div className="w-full">
      <FormHeader
        title={"Project Details"}
        subtitle={"Please take a moment to provide us with some information about the project."}
      />

      <form className="mt-12 w-full" ref={formRef} onSubmit={handleSubmit}>
        <div className="space-y-6">
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
            <CustomLabelSelect
              id={"project_timeline"}
              required
              placeholder={"Select your preferred Project Timeline"}
              value={projectTimeline}
              setValue={setProjectTimeline}
              data={projectTimelineData}
              label={"Project Timeline"}
            />

            <div className="w-full">
              <label htmlFor="city" className="block text-secondary text-sm leading-normal font-medium mb-2">
                City
              </label>

              <Select
                // disabled
                required
                value={city}
                onValueChange={setCity}
              >
                <SelectTrigger
                  id="city"
                  className={cn(
                    "w-full px-4 py-4 rounded-[4px] border border-[#E1E1E1] h-[46px] focus:ring focus:ring-blue-200 focus:ring-opacity-50 text-sm font-normal",
                    "bg-white",
                    "transition-all duration-200 ease-in-out",
                    "hover:bg-white/50 capitalize",
                    "diabled:opacity-50 disabled:cursor-not-allowed disabled:!border-[#E1E1E1]",
                    !city ? "text-[#9E9E9E] placeholder-[#9E9E9E]" : "text-secondary"
                  )}
                >
                  <SelectValue placeholder={"Select your City"} />
                </SelectTrigger>
                <SelectContent className="bg-white rounded-lg shadow-lg border border-gray-200">
                  {cities.map((item) => (
                    <SelectItem key={item.name} value={item.name}>
                      <span>{item.name}</span>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
            <div className="w-full">
              <label htmlFor="state" className="block text-secondary text-sm leading-normal font-medium mb-2">
                State
              </label>

              <Select disabled required value={state} onValueChange={setState}>
                <SelectTrigger
                  id="state"
                  className={cn(
                    "w-full px-4 py-4 rounded-[4px] border border-[#E1E1E1] h-[46px] focus:ring focus:ring-blue-200 focus:ring-opacity-50 text-sm font-normal",
                    "bg-white",
                    "transition-all duration-200 ease-in-out",
                    "hover:bg-white/50 capitalize",
                    "diabled:opacity-50 disabled:cursor-not-allowed disabled:!border-[#E1E1E1]",
                    !state ? "text-[#9E9E9E] placeholder-[#9E9E9E]" : "text-secondary"
                  )}
                >
                  <SelectValue placeholder={"Select your state"} />
                </SelectTrigger>
                <SelectContent className="bg-white rounded-lg shadow-lg border border-gray-200">
                  {statesNames.map((item) => (
                    <SelectItem key={item.code} value={item.code}>
                      <span>{item.name}</span>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <CustomLabelSelect
              id={"contactTime"}
              required
              placeholder={"Select preferred contact time"}
              value={contactTime}
              setValue={setContactTime}
              data={contactTimeData}
              label={"Preferred Contact Time"}
            />
          </div>

          <div className="grid gap-6 grid-cols-1 ">
            <LabelInput
              id={"address"}
              required
              placeholder={"Enter your address"}
              value={address}
              setValue={setAddress}
              label={"Address"}
            />
          </div>
        </div>
        <input
          id="leadid_token"
          name="universal_leadid"
          type="hidden"
          value=""
          onChange={(e) => console.log("leadTokenChange", e.target.value)}
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
          loading={loading}
          disabled={!projectTimeline || !address || !city || !state || !contactTime}
        />
      </form>

      {openModal && (
        <Modal isOpen={openModal} className="max-w-5xl py-8" onClose={() => setOpenModal(false)} maxWidth="700px">
          <div className="flex justify-center items-center gap-4 flex-col w-full">
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
      )}
    </div>
  );
};
