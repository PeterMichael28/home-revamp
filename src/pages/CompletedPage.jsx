import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { ourServices } from "~/assets/data";
import FormHeader from "~/components/FormPage/FormHeader";
import SectionHeader from "~/components/SectionHeader";
import Services from "~/components/Services";

const CompletedPage = () => {
  const { slug } = useParams();
  const remainingServices = ourServices.filter((ser) => ser.label.toLowerCase() !== slug);

  useEffect(() => {
    const iframe = document.createElement("iframe");
    iframe.src = "https://encyl.offerstrack.net/pixelBack.php?type=2&offer_id=6899&adv_id=2417";
    iframe.width = "1";
    iframe.height = "1";
    iframe.style.display = "none";
    document.body.appendChild(iframe);

    return () => document.body.removeChild(iframe);
  }, []);

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

        <Services data={remainingServices} />
      </section>
      {/* <iframe
        src="http://encyl.offerstrack.net/pixelBack.php?type=2&offer_id=6899&adv_id=2417"
        scrolling="no"
        frameBorder="0"
        width="1"
        height="1"
      ></iframe> */}
    </div>
  );
};

export default CompletedPage;
