import React from "react";
import { offersData } from "~/assets/data";

const OfferTimeline = () => {
  return (
    <div className="w-full relative h-fit flex flex-col items-start justify-center gap-y-6" >
      {offersData.map((data, id) => (
        <TimelineElement key={id} icon={data.icon} title={data.title} subTitle={data.subTitle} />
      ))}
      {/* line */}
      <div className="w-[1px] h-[calc(100%-68px)] md:h-[calc(100%-30px)] bg-[#320A28] absolute md:left-10 top-7 left-[43px]" />
    </div>
  );
};

export default OfferTimeline;

const TimelineElement = ({ icon, title, subTitle }) => {
  return (
    <div className="flex gap-x-3 md:gap-x-6 items-center justify-center  ">
      {/* icon */}
      <div className="p-[2px] bg-white relative z-50">
        <div className="bg-white size-[80px] md:size-[5rem] p-2.5  shadow-md rounded-full flex justify-center items-center my-2">
          {icon}
        </div>
      </div>

      {/* content */}
      <div className="flex-1 py-4 md:px-2">
        <h3 className="text-secondary font-bold text-lg leading-[116%] tracking-[0.4px]">{title}</h3>

        <p className="text-sm text-gray-dark mt-1 leading-[24px]">{subTitle}</p>
      </div>
    </div>
  );
};
