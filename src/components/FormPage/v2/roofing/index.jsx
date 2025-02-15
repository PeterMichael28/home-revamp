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

export const RoofingV2PropertyDetails = ({ props, propertyTypeData = ["Residential", "Commercial"] }) => {
  const [homeOwnerShip, setHomeOwnerShip] = useState("");
  const [propertyType, setPropertyType] = useState("");

  const homeOwnerShipData = ["Own", "Rented"];

  // const propertyTypeData = ["Residential", "Commercial"];
  const { allFields, updateFields } = useFormStore((state) => state);

  const handleClick = () => {
    if (!homeOwnerShip || !propertyType) return;
    updateFields({
      ...allFields,
      home_owner: homeOwnerShip,
      property_type: propertyType,
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

export const RoofingV2RoofingDetails = ({ props }) => {
  // const [roofingMaterial, setRoofingMaterial] = useState("");
  const [roomType, setRoomType] = useState("");

  // const roofingMaterialData = [
  //   "Asphalt Shingle",
  //   "Tile",
  //   "Metal",
  //   "Tar Torchdown",
  //   "Natural Slate",
  //   "Tar",
  //   "Cedal Slate",
  // ];

  const roofTypeData = ["Cedar Shake", "Asphalt Shingle", "Metal", "Tar Torchdown", "Tile", "Natural Slate"];
  const { allFields, updateFields } = useFormStore((state) => state);

  const handleClick = () => {
    if (!roomType) return;
    updateFields({
      ...allFields,
      RoofType: roomType,
    });
    props.onNext();
  };

  return (
    <div className="w-full">
      <FormHeader
        title={"Roofing Service"}
        subtitle={"Please take a moment to provide us with some information about the service."}
      />

      <div className="mt-12 w-full">
        <div className="space-y-6">
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
            {/* <CustomLabelSelect
              id={"roofing_material"}
              required
              placeholder={"Select your preferred roofing material"}
              value={roofingMaterial}
              setValue={setRoofingMaterial}
              data={roofingMaterialData}
              label={"Roofing Material"}
            /> */}

            <CustomLabelSelect
              id={"RoofingType"}
              required
              placeholder={"Select your preferred Roof type"}
              value={roomType}
              setValue={setRoomType}
              data={roofTypeData}
              label={"Roof Type"}
            />
          </div>
        </div>

        <FormButton text="Continue" className="mt-16" onClick={handleClick} disabled={!roomType} />
      </div>
    </div>
  );
};

export const RoofingV2ProjectDetails = ({
  props,
  slug,
  projectTimelineData = ["Time is flexible", "Within 1 week", "1-2 weeks", "More than 2 weeks"],
  scopeData = ["New Roof for New Home", "New Roof for an Existing Home", "Repair", "Shingle over Existing Roof"],
}) => {
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
  const [trustedFormUrl, setTrustedFormUrl] = useState(null);
  const formRef = useRef(null);

  useEffect(() => {
    const retryGetLeadIdToken = () => {
      return new Promise((resolve) => {
        const interval = setInterval(() => {
          const leadIdToken = formRef.current?.querySelector("#leadid_token")?.value;
          //  console.log('leadIdToken', leadIdToken);
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
        // console.log('token', token);
        setLeadIdToken(token);
      } catch (error) {
        console.error("Error fetching lead ID token:", error);
      }
    };

    getLeadIdToken();
  }, []);

  useEffect(() => {
    const tfField = document.getElementById("xxTrustedFormCertUrl");
    // console.log("tfField", window.TrustedForm);
    if (window.TrustedForm && tfField) {
      window.TrustedForm.setField(tfField);
    }
  }, []);
  // trusted form useeffect
  useEffect(() => {
    const retryTrustedFormUrl = () => {
      return new Promise((resolve) => {
        const interval = setInterval(() => {
          const trustedFormUrl = formRef.current?.querySelector("#xxTrustedFormCertUrl")?.value;
          // console.log("xxTrustedFormCertUrl", trustedFormUrl);
          if (trustedFormUrl) {
            clearInterval(interval);
            resolve(trustedFormUrl);
          }
        }, 100); // Retry every 100 milliseconds

        // Clear interval on component unmount
        return () => clearInterval(interval);
      });
    };

    const getTrustedFormUrl = async () => {
      try {
        const url = await retryTrustedFormUrl();
        // console.log("url", url);
        setTrustedFormUrl(url);
      } catch (error) {
        console.error("Error fetching TrustedFormUrl", error);
      }
    };

    getTrustedFormUrl();
  }, []);

  const contactTimeData = ["Anytime", "Morning", "Afternoon", "Evening"];
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !projectTimeline ||
      !projectScope ||
      !address ||
      !city ||
      !state ||
      !contactTime ||
      !leadIdToken ||
      !trustedFormUrl
    )
      return;

    setLoading(true);

    updateFields({
      ...allFields,
      project_timeline: projectTimeline,
      project_scope: projectScope,
      address,
      city,
      state,
      contact_time: contactTime,
      LeadiD: leadIdToken,
      trusted_form: trustedFormUrl,
      service: slug,
    });

    const modalTimer = setTimeout(() => {
      setOpenModal(true);
    }, 2000);

    let body = {
      ...allFields,
      project_timeline: projectTimeline,
      project_scope: projectScope,
      address,
      city,
      state,
      contact_time: contactTime,
      LeadiD: leadIdToken,
      trusted_form: trustedFormUrl,
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
              id={"project_scope"}
              required
              placeholder={"Select your preferred project scope"}
              value={projectScope}
              setValue={setProjectScope}
              data={scopeData}
              label={"Project Scope"}
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

          <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
            <CustomLabelSelect
              id={"contactTime"}
              required
              placeholder={"Select preferred contact time"}
              value={contactTime}
              setValue={setContactTime}
              data={contactTimeData}
              label={"Preferred Contact Time"}
            />
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
          <input type="hidden" name="xxTrustedFormCertUrl" id="xxTrustedFormCertUrl" />
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
