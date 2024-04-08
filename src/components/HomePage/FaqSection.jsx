import SectionHeader from "../SectionHeader";
import Faqs from "./Faqs";

const FaqSection = () => {
  return (
    <section className="py-10 md:py-16 w-full h-full px-4 sm:px-8  max-w-[1000px] mx-auto">
      <div className="max-w-[870px]">
        <SectionHeader
          title="Frequently Asked Questions"
          subtitle="Explore our comprehensive list of frequently asked questions to gain a better understanding of our services, procedures, and how we can assist you with your home improvement projects."
        />
      </div>

      <Faqs />
    </section>
  );
};

export default FaqSection;
