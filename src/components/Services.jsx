import { Link, useNavigate } from "react-router-dom";
import icons from "~/assets/icons/icons";

const Services = ({ data }) => {
  const navigate = useNavigate();
  return (
    <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[34px]">
      {data.map((ser, id) => (
        <div className="pt-5 rounded-xl border border-gray overflow-hidden max-w-[360px] mx-auto" key={id}>
          <div className="mb-6 px-4">
            <p className="text-2xl font-medium leading-normal mb-2">{ser.label}</p>
            <p className="text-sm text-gray-dark font-normal leading-[22px]">{ser.subText}</p>
            <Link
              to={`/new`}
              // to={`/${ser.label.toLowerCase()}`}
              // href="https://d3ei5m25ukvnu9.cloudfront.net/form2.php?Form_Key=245517b3-16a8-11ef-8219-06d238407383&isViewForm=1"
              className="mt-4 text-sm leading-[20px] text-primary group flex items-center gap-x-2"
            >
              <span>Get Started</span>{" "}
              <span className="md:group-hover:opacity-100 md:group-hover:-translate-x-0 md:opacity-0 md:-translate-x-6  transition-all duration-500 text-lg">
                {icons.arrowRight}
              </span>
            </Link>
          </div>

          {/*  */}
          <img
            src={ser.img}
            alt=""
            className="h-[240px] w-full grayscale hover:grayscale-0 hover:scale-110 transition-all duration-500"
            onClick={() => navigate(`/${ser.label.toLowerCase()}`)}
          />
        </div>
      ))}
    </div>
  );
};

export default Services;
