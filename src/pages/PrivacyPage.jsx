import { useEffect } from "react";
import { privacyData } from "~/assets/data";

const PrivacyPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="px-4 sm:px-8 md:px-14  max-w-[1300px] mx-auto py-8">
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
      </div>
    </div>
  );
};

export default PrivacyPage;
