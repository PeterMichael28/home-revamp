import { ourServices } from "~/assets/data";
import Dropdown from "./Dropdown/DropDown";
import chevron_down from "~/assets/images/chevron_down.svg";
import { classNames } from "~/utils/classNames";
import {Link} from "react-router-dom"
const OurServicesDropdown = () => {
  return (
    <Dropdown
      toggleElement={
        <li className="text-secondary font-semibold md:text-sm text-lg flex items-center gap-x-1">
          <span>Our Services</span>{" "}
          <img src={chevron_down} alt="chevron_down" className={classNames("size-5, transition-all duration-500 ")} />
        </li>
      }
    >
      <div className=" h-max w-[330px]  rounded-[20px] bg-white border-gray-light p-5 shadow-xl">
        <p className="text-lsm font-semibold mb-5">Select any service to continue:</p>
        <div className=" grid grid-cols-2 place-item-center gap-4">
          {ourServices.map((ser, id) => (
            <Link to={ser.label.toLowerCase()}
              className="text-sm font-medium text-secondary hover:text-primary transition-all duration-500 hover:scale-110 cursor-pointer"
              key={id}
            >
              {ser.label}
            </Link>
          ))}
        </div>
      </div>
    </Dropdown>
  );
};

export default OurServicesDropdown;
