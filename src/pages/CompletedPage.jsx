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
    const pixelUrl = "http://encyl.offerstrack.net/pixelBack.php?offer_id=6899&adv_id=2417";
    const img = new Image();
    img.src = pixelUrl;
    img.width = 1;
    img.height = 1;
    img.style.display = "none";
    document.body.appendChild(img);

    return () => {
      document.body.removeChild(img);
    };
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
      <img src="http://encyl.offerstrack.net/pixelBack.php?offer_id=6899&adv_id=2417" width="1" height="1" />
    </div>
  );
};

export default CompletedPage;
