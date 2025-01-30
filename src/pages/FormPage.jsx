import React, { useEffect, useState } from "react";
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
// import SEOHelmet from "~/components/SeoHelmet";
// import { seoMetadata } from "~/constants/seo-constants";
const SEOHelmet = React.lazy(() => import("~/components/SeoHelmet"));
async function getSeoMetadata() {
  const { seoMetadata } = await import("~/constants/seo-constants");
  return seoMetadata;
}

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

  const [seoMetadata, setSeoMetadata] = useState(null);

  useEffect(() => {
    async function fetchMetadata() {
      try {
        const data = await getSeoMetadata(slug);
        setSeoMetadata(data);
      } catch (error) {
        console.error("Failed to load SEO metadata:", error);
      }
    }

    fetchMetadata();
  }, [slug]);

  // Get SEO metadata for the current slug
  const currentSeoMetadata = seoMetadata
    ? seoMetadata[slug]
    : {
        title: "Affordable Home Renovation Services | Home Revamp Expert Near You",
        description:
          "Home Revamp Expert connects you with affordable local home remodelers near you. Get tailored quotes for renovation services today!",
        type: "website",
        canonicalLink: "https://homerevampexpert.com",
        keywords: "affordable home renovation services, Home Revamp Expert, local home remodelers near me",
      };

  return (
    <div className="pt-5 md:pt-10">
      {/* Add SEO component with dynamic metadata */}
      <SEOHelmet
        title={currentSeoMetadata.title}
        description={currentSeoMetadata?.description}
        name={currentSeoMetadata?.name}
        type={currentSeoMetadata?.type}
        canonicalLink={currentSeoMetadata.canonicalLink}
        keywords={currentSeoMetadata.keywords}
      />
      {/* {slug == "solars" ? (
        <h1 className="capitalize font-semibold text-xl md:text-3xl text-center text-[#010101] mb-4">
          Compare Solar Quotes, Get match with Experts Today!{" "}
        </h1>
      ) : slug == "bathrooms" ? (
        <h1 className="capitalize font-semibold text-xl md:text-3xl text-center text-[#010101] mb-4">
          Save BIG On A Bathroom Remodeling! <br /> Get Free, No Obligation Quotes from Top Experts Near You!{" "}
        </h1>
      ) : (
        <h1 className="capitalize font-semibold text-xl md:text-3xl text-center text-[#010101] mb-4">
          Compare {slug} Quote Today!
        </h1>
      )} */}
      <div>
        <h1 className="capitalize font-semibold text-xl md:text-3xl text-[#010101] mb-4 text-center max-w-[700px] mx-auto">
          {currentSeoMetadata.bigTitle ?? `Compare ${slug} Quote Today!`}
          {/* Save BIG On A Bathroom Remodeling! <br /> Get Free, No Obligation Quotes from Top Experts Near You!{" "} */}
        </h1>
        <p className="text-sm text-gray-600 mt-2 max-w-[600px] mx-auto text-center">{currentSeoMetadata.description}</p>
      </div>
      <ActiveForm slug={slug} />
    </div>
  );
};

export default FormPage;
