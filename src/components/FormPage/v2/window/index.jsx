/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import { useFormStore } from "~/store/formStore";
import FormHeader from "../../FormHeader";
import { CustomLabelSelect } from "../../LabelSelect";
import FormButton from "../../FormButton";
import { City } from "country-state-city";
import { statesNames } from "~/assets/data";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "~/components/ui/select";
import { cn } from "~/lib/utils";
import Modal from "~/components/Modal/Modal";
import Lottie from "lottie-react";
import animation from "~/assets/Animation8.json";
import LabelInput from "../../LabelInput";

export const WindowV2PropertyDetails = ({ props }) => {
  const [homeOwnerShip, setHomeOwnerShip] = useState("");
  const [propertyType, setPropertyType] = useState("");

  const homeOwnerShipData = ["Own", "Rented"];

  const propertyTypeData = ["New Unit Installed", "Repair", "Replace Unit"];
  const { allFields, updateFields } = useFormStore((state) => state);

  const handleClick = () => {
    if (!homeOwnerShip || !propertyType) return;
    updateFields({
      ...allFields,
      home_owner: homeOwnerShip,
      ProjectType: propertyType,
    });
    props.onNext();
  };

  return (
    <div className="w-full">
      <FormHeader
        title={"Property Details"}
        subtitle={"Please take a moment to provide us with some information of the property."}
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
              id={"property_type"}
              required
              placeholder={"Select property type"}
              value={propertyType}
              setValue={setPropertyType}
              data={propertyTypeData}
              label={"Property Type"}
            />
          </div>
        </div>

        <FormButton
          text="Continue"
          className="mt-16"
          onClick={handleClick}
          disabled={!homeOwnerShip || !propertyType}
        />
      </div>
    </div>
  );
};

export const WindowV2RoofingDetails = ({ props }) => {
  const [windowMaterial, setWindowMaterial] = useState("");
  const [noOfWindows, setNoOfWindows] = useState("");
  const [windowStyle, setWindowStyle] = useState("");
  const [windowAge, setWindowAge] = useState("");
  const [windowConditions, setWindowConditions] = useState("");

  const materialData = ["Vinyl", "Wood", "Aluminium", "Brick", "Metal"];

  const noOfWindowsData = ["1 window", "2 windows", "3 to 5 windows", "6 to 9 windows", "10+ windows"];

  const windowStyleData = [
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

  const windowAgeData = ["New (less than 1 year old)", "1-5 years", "6+ years"];

  const windowConditionsData = ["Good", "Average", "Poor"];

  const { allFields, updateFields } = useFormStore((state) => state);

  const handleClick = () => {
    if (!windowMaterial || !noOfWindows || !windowStyle || !windowAge || !windowConditions) return;
    updateFields({
      ...allFields,
      window_material: windowMaterial,
      num_of_window: noOfWindows,
      WindowStyle: windowStyle,
      windowAge: windowAge,
      windowCondition: windowConditions,
    });
    props.onNext();
  };

  return (
    <div className="w-full">
      <FormHeader
        title={"Window Service"}
        subtitle={"Please take a moment to provide us with some information about the service."}
      />

      <div className="mt-12 w-full">
        <div className="space-y-6">
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
            <CustomLabelSelect
              id={"window_material"}
              required
              placeholder={"Select your preferred window material"}
              value={windowMaterial}
              setValue={setWindowMaterial}
              data={materialData}
              label={"Window Material"}
            />

            <CustomLabelSelect
              id={"num_of_window"}
              required
              placeholder={"Select number of windows"}
              value={noOfWindows}
              setValue={setNoOfWindows}
              data={noOfWindowsData}
              label={"Number of Windows"}
            />
          </div>

          <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
            <CustomLabelSelect
              id={"WindowStyle"}
              required
              placeholder={"Select your preferred window style"}
              value={windowStyle}
              setValue={setWindowStyle}
              data={windowStyleData}
              label={"Window Style"}
            />

            <CustomLabelSelect
              id={"num_of_window"}
              required
              placeholder={"Select preferred window age"}
              value={windowAge}
              setValue={setWindowAge}
              data={windowAgeData}
              label={"Window Age"}
            />
          </div>

          <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
            <CustomLabelSelect
              id={"windowCondition"}
              required
              placeholder={"Select your preferred window condition"}
              value={windowConditions}
              setValue={setWindowConditions}
              data={windowConditionsData}
              label={"Window Condition"}
            />
          </div>
        </div>

        <FormButton
          text="Continue"
          className="mt-16"
          onClick={handleClick}
          disabled={!windowMaterial || !noOfWindows || !windowStyle || !windowAge || !windowConditions}
        />
      </div>
    </div>
  );
};

export const WindowV2ProjectDetails = ({ props, slug }) => {
  const [projectTimeline, setProjectTimeline] = useState("");
  const [projectScope, setProjectScope] = useState("");
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

  const projectTimelineData = ["Time is flexible", "Within 1 week", "1-2 weeks", "More than 2 weeks"];

  const contactTimeData = ["Any time", "Morning", "Afternoon", "Evening"];

  const scopeData = ["New Roof for New Home", "New Roof for an Existing Home", "Repair", "Shingle over Existing Roof"];

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

          <div className="grid gap-6 grid-cols-1 ">
            {/* <CustomLabelSelect
       id={'contactTime'}
       required
       placeholder={'Select preferred contact time'}
       value={contactTime}
       setValue={setContactTime}
       data={contactTimeData}
       label={'Preferred Contact Time'}
      /> */}
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
