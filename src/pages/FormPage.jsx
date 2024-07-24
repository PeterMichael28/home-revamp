import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BathroomForms from "~/components/FormPage/bathroom/BathroomForms";
import GutterForms from "~/components/FormPage/gutter/GutterForms";
import HvacsForm from "~/components/FormPage/hvacs/HvacsForm";
import KitchenForm from "~/components/FormPage/kitchen/KitchenForm";
import PaintingForm from "~/components/FormPage/painting/PaintingForm";
import PlumbingForm from "~/components/FormPage/plumbing/PlumbingForm";
import RoofingForm from "~/components/FormPage/roofing/RoofingForm";
import SolarForms from "~/components/FormPage/solar/SolarForms";
import WindowsForm from "~/components/FormPage/windows/WindowsForm";

const FormPage = () => {
  const { slug } = useParams();

  const navigate = useNavigate();
  useEffect(() => {
    if (!slug) {
      navigate("/");
    }
  }, [navigate, slug]);

  const allForms = {
    roofings: RoofingForm,
    windows: WindowsForm,
    solars: SolarForms,
    hvacs: HvacsForm,
    bathrooms: BathroomForms,
    gutters: GutterForms,
    painting: PaintingForm,
    plumbing: PlumbingForm,
    kitchen: KitchenForm,
  };

  const ActiveForm = allForms[slug];
  useEffect(() => {
    if (!ActiveForm) {
      navigate("/");
    }
  }, [navigate, ActiveForm]);

  return (
    <div className="pt-5 md:pt-10">
      {slug == "solars" ? (
        <h2 className="capitalize font-semibold text-xl md:text-3xl text-center text-[#010101] mb-4">
          Compare Solar Quotes, Get match with Experts Today!{" "}
        </h2>
      ) : slug == "bathrooms" ? (
        <h2 className="capitalize font-semibold text-xl md:text-3xl text-center text-[#010101] mb-4">
          Save BIG On A Bathroom Remodeling! <br /> Get Free, No Obligation Quotes from Top Experts Near You!{" "}
        </h2>
      ) : (
        <h2 className="capitalize font-semibold text-xl md:text-3xl text-center text-[#010101] mb-4">
          Compare {slug} Quote Today!
        </h2>
      )}
      <ActiveForm slug={slug} />
    </div>
  );
};

export default FormPage;
