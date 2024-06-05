import { MdClose } from "react-icons/md";
import { IoMdMenu } from "react-icons/io";
import { GoArrowRight } from "react-icons/go";
import { BsSortAlphaDownAlt, BsSortAlphaUp } from "react-icons/bs";
import { BiSortAlt2 } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";


const icons = {
  close: <MdClose />,
  hamburger: <IoMdMenu />,
  arrowRight: <GoArrowRight />,
  sort: <BiSortAlt2 />,
  ascending: <BsSortAlphaUp />,
  descending: <BsSortAlphaDownAlt />,
  threeDots: <BsThreeDotsVertical />,
  search: <CiSearch />
};

export default icons;
