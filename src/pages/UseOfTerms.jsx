import { useEffect } from "react";
import { useOfTermsData } from "~/assets/data";
import { Link } from "react-router-dom";

const UseOfTerms = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="px-4 sm:px-8 md:px-14  max-w-[1300px] mx-auto py-8">
      <p className="text-sm text-gray-dark text-pretty font-medium mb-8">Last Updated: 1st May, 2024</p>

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
      <div className="mt-9">
        <h2 className="text-[20px] tracking-[-0.16px] md:text-[26px] text-secondary font-bold leading-normal">
          Others
        </h2>
        <div className="flex flex-col space-y-4">
          <Link to="/privacy-policy" className="text-blue-600 mt-5">
            Privacy Policy
          </Link>
          <Link to="/ccpa" className="text-blue-600 mt-5">
            CCPA Page
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UseOfTerms;
