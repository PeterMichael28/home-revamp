import SectionHeader from "../SectionHeader";
import { ourServices } from "~/assets/data";
import Services from "../Services";

const ProjectSection = () => {
  return (
    <section className="py-10 md:py-16 w-full h-full px-4 sm:px-8 md:px-14  max-w-[1300px] mx-auto">
      <SectionHeader
        title="Revamping Homes One Project at a Time"
        subtitle="Your destination for quick and accurate home service quotations. Discover our range of services below and request personalized quotes for your specific needs."
      />

      <Services data={ourServices} />
    </section>
  );
};

export default ProjectSection;
