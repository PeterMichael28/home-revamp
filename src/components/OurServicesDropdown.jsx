import { ourServices } from "~/assets/data";

import chevron_down from "~/assets/images/chevron_down.svg";
import { classNames } from "~/utils/classNames";
import { Link } from "react-router-dom";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
const OurServicesDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <li className="text-secondary font-semibold md:text-sm text-lg flex items-center gap-x-1">
          <span>Our Services</span>{" "}
          <img src={chevron_down} alt="chevron_down" className={classNames("size-5, transition-all duration-500 ")} />
        </li>
      </DropdownMenuTrigger>
      <DropdownMenuContent className=" h-max w-[330px]  rounded-[20px] bg-white border-gray-light p-5 shadow-xl relative z-[100]">
        <p className="text-lsm font-semibold mb-5">Select any service to continue:</p>
        <div className=" grid grid-cols-2 place-item-center gap-4">
          {ourServices.map((ser, id) => (
            <DropdownMenuItem key={id} className="bg-none" asChild>
              <Link
                to={ser.label.toLowerCase()}
                className="text-sm font-medium text-secondary hover:text-primary transition-all duration-500 hover:scale-110 cursor-pointer bg-none"
              >
                {ser.label}
              </Link>
            </DropdownMenuItem>
          ))}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default OurServicesDropdown;
