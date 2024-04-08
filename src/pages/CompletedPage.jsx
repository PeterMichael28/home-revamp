import { ourServices } from "~/assets/data";
import FormHeader from "~/components/FormPage/FormHeader";
import SectionHeader from "~/components/SectionHeader";
import Services from "~/components/Services";

const CompletedPage = () => {
  return (
    <div>
      <div className="max-w-[750px] px-4 mx-auto pt-12 py-28">
        <FormHeader
          title={"Congratulations !!!"}
          subtitle={"Your information has been successfully submitted. Our experts will contact you shortly."}
        />
      </div>

      <section className=" w-full h-full px-4 sm:px-8 md:px-14  max-w-[1300px] mx-auto">
        <SectionHeader
          title="Other Services We Offer"
          subtitle="Explore other services and let us know how we can assist you further. Our team is committed to delivering tailored solutions that meet your unique requirements and exceed your expectations."
        />

        <Services data={ourServices} />
      </section>
    </div>
  );
};

export default CompletedPage;
