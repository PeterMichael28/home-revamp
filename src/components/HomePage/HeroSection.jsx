import { ourServices } from "~/assets/data";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { cn } from "~/lib/utils";

const HeroSection = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState("");

  const handleGoToNext = () => {
    if (!value) return;
    // navigate(`/new`);
    navigate(`/${value.toLowerCase()}`);
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
          <form className="mt-8 w-full flex items-center sm:max-w-[400px]">
            <div className="flex-1">
              <CustomSelect value={value} onChange={setValue} options={ourServices} placeholder="Select your project" />
            </div>
            <button
              type="button"
              className="px-5 h-[53px] rounded-r text-sm flex justify-center items-center font-medium text-white bg-primary hover:bg-onPrimary transition-all duration-500"
              onClick={handleGoToNext}
            >
              Get Started
            </button>
          </form>
        </div>

        <img
          src="/hero.webp"
          alt="local home remodelers near me."
          className="w-full max-w-[450px] h-[235px] sm:h-[255px] lg:max-w-[570px] lg:h-[458px] object-contain hidden md:block"
          width={570} // Specify dimensions explicitly
          height={458}
          loading="eager"
        />

        <img
          src="/hero-sm.webp"
          alt="local home remodelers near me."
          className="w-full max-w-[450px] h-[235px] sm:h-[255px] lg:max-w-[570px] lg:h-[458px] object-contain md:hidden "
          width={570} // Specify dimensions explicitly
          height={458}
          loading="eager"
        />
      </div>
    </section>
  );
};

export default HeroSection;

function CustomSelect({ value, onChange, options, placeholder }) {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger
        className={cn(
          "flex-1 border text-sm outline-none border-[#E3E3E3] rounded-l bg-white p-4 h-[53px]",
          "data-[placeholder]:text-secondary data-[placeholder]:text-sm",
          "focus:ring-0 focus:ring-offset-0 focus:border-[#E3E3E3] rounded-r-none"
        )}
      >
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent className="bg-white rounded-lg shadow-lg border border-gray-200">
        {options.map((option, id) => (
          <SelectItem key={id} value={option.label}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
