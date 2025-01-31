import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import SEOHelmet from "~/components/SeoHelmet";

import solarImg from "~/assets/v2/solarbg.webp";
import roofingImg from "~/assets/v2/roofingBg.webp";
import windowImg from "~/assets/v2/windowsBg.webp";
import hvacImg from "~/assets/v2/hvacBg.webp";
import bathroomImg from "~/assets/v2/bathroomBg.webp";
import gutterImg from "~/assets/v2/guttersBg.webp";
import paintingImg from "~/assets/v2/paintingBg.webp";
import plumbingImg from "~/assets/v2/plumbingBg.webp";
import kitchenImg from "~/assets/v2/kitchenBg.webp";

import SolarV2Forms from "~/components/v2Forms/SolarV2Forms";
import RoofingV2Forms from "~/components/v2Forms/RoofingV2Forms";
import WindowV2Forms from "~/components/v2Forms/WindowV2Forms";
import HvacV2Forms from "~/components/v2Forms/HvacV2Forms";
import BathroomV2Forms from "~/components/v2Forms/BathroomV2Forms";
import KitchenV2Forms from "~/components/v2Forms/KitchenV2Forms";
import GutterV2Forms from "~/components/v2Forms/GutterV2Forms";
import PaintingV2Forms from "~/components/v2Forms/PaintingV2Forms";
import PlumbingV2Forms from "~/components/v2Forms/PlumbingV2Forms";

async function getSeoMetadata() {
  const { seoMetadata } = await import("~/constants/seo-constants");
  return seoMetadata;
}

const V2FormPage = () => {
  const { slug } = useParams();

  const navigate = useNavigate();
  useEffect(() => {
    if (!slug) {
      navigate("/");
    }
  }, [navigate, slug]);

  const allImgs = {
    roofings: roofingImg,
    windows: windowImg,
    solars: solarImg,
    hvacs: hvacImg,
    bathrooms: bathroomImg,
    gutters: gutterImg,
    painting: paintingImg,
    plumbing: plumbingImg,
    kitchen: kitchenImg,
  };

  const allForms = {
    roofings: RoofingV2Forms,
    windows: WindowV2Forms,
    solars: SolarV2Forms,
    hvacs: HvacV2Forms,
    bathrooms: BathroomV2Forms,
    gutters: GutterV2Forms,
    painting: PaintingV2Forms,
    plumbing: PlumbingV2Forms,
    kitchen: KitchenV2Forms,
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
  const currentSeoMetadata = seoMetadata[slug] || {
    title: "Affordable Home Renovation Services | Home Revamp Expert Near You",
    description:
      "Home Revamp Expert connects you with affordable local home remodelers near you. Get tailored quotes for renovation services today!",
    type: "website",
    canonicalLink: "https://homerevampexpert.com",
    keywords: "affordable home renovation services, Home Revamp Expert, local home remodelers near me",
  };

  return (
    <div className="w-full">
      {/* Add SEO component with dynamic metadata */}
      <SEOHelmet
        title={currentSeoMetadata.title}
        description={currentSeoMetadata?.description}
        name={currentSeoMetadata?.name}
        type={currentSeoMetadata?.type}
        canonicalLink={currentSeoMetadata.canonicalLink}
        keywords={currentSeoMetadata.keywords}
      />

      <div className="flex gap-6 md:justify-between">
        <div className="w-full h-full py-5 md:py-10 md:px-4 md:pl-12">
          <ActiveForm slug={slug} />
        </div>

        <div className="h-full max-w-[600px] hidden lg:block">
          <img src={allImgs[slug] ?? solarImg} alt="solar" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default V2FormPage;
