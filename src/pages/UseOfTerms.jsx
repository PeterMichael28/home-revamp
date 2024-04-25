import { useEffect } from "react";
import { useOfTermsData } from "~/assets/data";

const UseOfTerms = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="px-4 sm:px-8 md:px-14  max-w-[1300px] mx-auto py-8">
      <div className="space-y-9">
        {useOfTermsData.map((dat, i) => (
          <div key={i} className="space-y-3 md:space-y-4">
            <h2 className="text-[20px] tracking-[-0.16px] md:text-[26px] text-secondary font-bold leading-normal">
              {dat?.title}
            </h2>
            <p className="text-sm text-gray-dark text-pretty leading-[22px] md:leading-[27px]">{dat?.subTitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UseOfTerms;
