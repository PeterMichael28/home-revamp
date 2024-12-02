import React from "react";
import SectionHeader from "../SectionHeader";
import OfferTimeline from "./OfferTimeline";
import img1 from "~/assets/images/services.png";
import { useNavigate } from "react-router-dom";
const OffersSection = () => {
  const navigate = useNavigate();
  return (
    <section className="py-10 md:py-16 w-full h-full px-4 sm:px-8 md:px-14  max-w-[1300px] mx-auto" id="about">
      <SectionHeader
        title="Our Offerings Encompass a Diverse Range of Premium Services."
        subtitle="Discover transparent and affordable quotes tailored to your needs. Explore our diverse services and get personalized quotes for your home improvement project today."
      />

      <div className="mt-16 flex w-full flex-col md:flex-row justify-center items-center gap-10">
        {/* timeline */}
        <div className="w-full md:w-[43%]">
          <OfferTimeline />
        </div>

        <div className="w-full md:w-[54%] md:h-[25rem]" onClick={() => navigate("/admin/dashboard")}>
          <img
            src={img1}
            alt="Discover transparent and affordable quotes tailored to your needs. Explore our diverse services and get personalized quotes for your home improvement project today."
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default OffersSection;
