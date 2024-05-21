import { ourServices } from "~/assets/data";
import heroImg from "~/assets/images/hero.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const HeroSection = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState("");

  const handleGoToNext = () => {
    if (!value) return;
    navigate(`/new`);
    // navigate(`/${value.toLowerCase()}`);
  };
  return (
    <section className="w-full h-sceen bg-onPrimaryContainer pb-9">
      <div className="w-full h-full px-4 sm:px-8 md:px-14 py-5 md:py-8 max-w-[1300px] mx-auto  flex flex-col lg:flex-row justify-between items-center max-md:pt-[37px] gap-y-[47px]">
        {/* text */}
        <div className="max-w-[506px] w-full text-left ">
          <h1 className="text-[28px] text-secondary font-bold tracking-[-0.28px] leading-normal md:text-[34px] lg:text-[44px] lg:tracking-[-0.44px] lg:leading-[56px]">
            Get Instant Quotes for Your Home Services
          </h1>
          <p className="text-gray-dark text-base font-medium leading-[24px] mt-3">
            Discover the best quotes from experienced contractors, guiding you through the journey of transforming your
            home into a haven of comfort and style.
          </p>

          {/* select */}
          <form className="mt-8 w-full flex items-center max-w-[320px] md:max-w-[400px]">
            <select
              name="our_services"
              id="our_services"
              className="flex-1 border text-sm outline-none border-[#E3E3E3] border-r-[10px] border-r-transparent rounded-l bg-white p-4 gap-y-2"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            >
              <option value="" className="p-2 text-secondary text-sm">
                Select you project
              </option>
              {ourServices.map((service, id) => (
                <option key={id} value={service.label} className="p-2 text-secondary text-xs md:text-sm">
                  {service.label}
                </option>
              ))}
            </select>
            <button
              className="px-5 py-4 rounded-r text-sm flex justify-center items-center font-medium text-white bg-primary hover:bg-onPrimary transition-all duration-500"
              onClick={handleGoToNext}
            >
              Get Started
            </button>
          </form>
        </div>

        <img
          src={heroImg}
          alt="hero-image"
          className="w-full max-w-[450px] h-[235px] sm:h-[255px] lg:max-w-[570px] lg:h-[458px] object-contain"
        />
      </div>
    </section>
  );
};

export default HeroSection;
