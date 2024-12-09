import { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { ourServices } from "~/assets/data";
import FormHeader from "~/components/FormPage/FormHeader";
import SectionHeader from "~/components/SectionHeader";
import Services from "~/components/Services";
import ThumbtackCard, { ThumbtackCardText } from "~/components/ThumbtackCard";

const CompletedPage = () => {
  const { slug } = useParams();
  const { state: thumbTackData } = useLocation();

  const remainingServices = ourServices.filter((ser) => ser.label.toLowerCase() !== slug);
  console.log("first", thumbTackData);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    // Ensure the tdl object is available
    if (window.tdl) {
      // Recognize the user's session
      if (typeof window.tdl.recognize === "function") {
        window.tdl.recognize();
      }

      // Fire the conversion when the thank you page is loaded
      if (typeof window.tdl.transform === "function") {
        window.tdl.transform();
      }
    }
  }, []);

  return (
    <div className="min-h-screen h-full overflow-y-auto">
      <div className="max-w-[750px] px-4 mx-auto pt-12  py-28 md:pb-16">
        <FormHeader
          title={"Congratulations !!!"}
          subtitle={"Your information has been successfully submitted. Our experts will contact you shortly."}
        />
      </div>

      {/* thumb tack data */}

      {thumbTackData && thumbTackData.length > 0 && (
        <div className="w-full px-4 sm:px-8 max-w-[1000px] mx-auto mb-28">
          <h3 className="text-2xl text-center tracking-[-0.24px] font-bold text-secondary md:tracking-[-0.36px] md:text-3xl mb-6">
            Recommended Businesses
          </h3>

          <div className="">
            {thumbTackData?.map((data, i) => (
              <div key={i} className="w-full my-3">
                <ThumbtackCard data={data} />
              </div>
            ))}
          </div>
        </div>
      )}
      {/* <div className="w-full px-4 sm:px-8 max-w-[1000px] mx-auto mb-28">
        <h3 className="text-2xl text-center tracking-[-0.24px] font-bold text-secondary md:tracking-[-0.36px] md:text-3xl mb-6">
          Recommended Businesses
        </h3>

        <div className="">
          {[1, 2, 3, 4].map((data, i) => (
            <div key={i} className="w-full mb-8">
              <ThumbtackCardText data={data} />
            </div>
          ))}
        </div>
      </div> */}

      <section className=" w-full px-4 sm:px-8 md:px-14  max-w-[1300px] mx-auto">
        <SectionHeader
          title="Other Services We Offer"
          subtitle="Explore other services and let us know how we can assist you further. Our team is committed to delivering tailored solutions that meet your unique requirements and exceed your expectations."
        />

        <Services data={remainingServices} />
      </section>
    </div>
  );
};

export default CompletedPage;
