import { useEffect } from "react";
import { privacyData } from "~/assets/data";
import { Link } from "react-router-dom";
const PrivacyPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="px-4 sm:px-8 md:px-14  max-w-[1300px] mx-auto py-8">
      <p className="text-sm text-gray-dark mb-3 text-pretty font-medium">Last Updated: 1st May, 2024</p>
      <p className="text-sm text-gray-dark mb-5 text-pretty">
        Your privacy is important to us. This policy explains what information we collect when you visit our website and
        how we use it. By using our website, you agree to this policy.
      </p>
      <div className="space-y-9 mt-9">
        {privacyData.map((dat, i) => (
          <div key={i} className="space-y-3 md:space-y-4">
            <h2 className="text-[20px] tracking-[-0.16px] md:text-[26px] text-secondary font-bold leading-normal">
              {dat?.title}
            </h2>
            <p className="text-sm text-gray-dark text-pretty leading-[22px] md:leading-[27px]">{dat?.subTitle}</p>
          </div>
        ))}
        <div className="space-y-3 md:space-y-4">
          <h2 className="text-[20px] tracking-[-0.16px] md:text-[26px] text-secondary font-bold leading-normal">
            Contact Us
          </h2>
          <p className="text-sm text-gray-dark text-pretty leading-[22px] md:leading-[27px]">
            For any questions or concerns regarding privacy, users can reach out via certified mail{" "}
            <a href="mailto:help@homerevampexpert.com" className="text-blue-600">
              help@homerevampexpert.com
            </a>{" "}
            or our{" "}
            <Link to="/contact" className="text-blue-600 mt-">
              contact page
            </Link>
          </p>
        </div>
      </div>
      <div className="mt-9">
        <h2 className="text-[20px] tracking-[-0.16px] md:text-[26px] text-secondary font-bold leading-normal">
          Others
        </h2>
        <div className="flex flex-col space-y-4">
          <Link to="/ccpa" className="text-blue-600 mt-5">
            CCPA Page
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;
