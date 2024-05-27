import { useEffect } from "react";
import { CCPAData, CpaRightsData } from "~/assets/data";
// import { Link } from "react-router-dom";

const CCPAPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="px-4 sm:px-8 md:px-14  max-w-[1300px] mx-auto py-8">
      {/* <p className="text-sm text-gray-dark text-pretty font-medium mb-8">Last Updated: 1st May, 2024</p> */}

      <div className="space-y-9">
        {CCPAData.map((dat, i) => (
          <div key={i} className="space-y-3 md:space-y-4">
            <h2 className="text-[18px] tracking-[-0.16px] md:text-[22px] text-secondary font-semibold leading-normal">
              {dat?.title}
            </h2>
            {dat?.subTitle && (
              <p className="text-base text-gray-dark text-pretty leading-[22px] md:leading-[27px]">{dat?.subTitle}</p>
            )}

            {dat?.subCat && (
              <div className="space-y-2 mt-4">
                {dat?.subCat.map((dat, i) => (
                  <p className=" text-gray-dark text- leading-[20px] md:leading-[25px] text-sm" key={i}>
                    {dat}
                  </p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-8">
        <h2 className="text-[24px] tracking-[-0.16px]  mb-2 text-secondary font-bold leading-normal">
          Your CCPA Rights
        </h2>
        <div className="space-y-9">
          {CpaRightsData.map((dat, i) => (
            <div key={i} className="space-y-3 md:space-y-4">
              <h2 className="text-[18px] tracking-[-0.16px] md:text-[22px] text-secondary font-semibold leading-normal">
                {dat?.title}
              </h2>
              {dat?.subTitle && (
                <p className="text-base text-gray-dark text-pretty leading-[22px] md:leading-[27px]">{dat?.subTitle}</p>
              )}

              {dat?.subCat && (
                <div className="space-y-2 mt-4">
                  {dat?.subCat.map((dat, i) => (
                    <p className="text-sm text-gray-dark text- leading-[20px] md:leading-[25px] " key={i}>
                      {dat}
                    </p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <p className="text-sm text-gray-dark text-pretty leading-[22px] md:leading-[27px] mt-9">
        For any questions or further information, please contact us at{" "}
        <a href="mailto:help@homerevampexpert.com" className="text-blue-600">
          help@homerevampexpert.com
        </a>
      </p>
    </div>
  );
};

export default CCPAPage;
