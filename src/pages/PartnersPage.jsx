import { partnerList } from "~/assets/data";

const PartnersPage = () => {
  return (
    <div className="px-4 sm:px-8 md:px-14  max-w-[1300px] mx-auto py-8 text-center h-full">
      <div className="max-w-[800px] mx-auto">
        <h2 className="text-[34px] tracking-[-0.24px] font-bold text-secondary md:tracking-[-0.36px]  text-left leading-normal">
          Our Partners:
        </h2>
        <p className="text-sm text-gray-dark mb-6 mt-2 text-left">Working hand-in-hand for a better future </p>
        <ul className="mt-7 grid grid-cols-1 md:grid-cols-2 gap-4 text-left place-items-strt place-content-ceter">
          {/* <p className="text-[35px] md:text-[45px] font-bold italic">DaBella</p> */}
          {partnerList.map((dat, i) => (
            <li className="text-sm font-medium" key={i}>
              {dat}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PartnersPage;
