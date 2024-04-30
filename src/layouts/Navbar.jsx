import OurServicesDropdown from "~/components/OurServicesDropdown";
import { Link } from "react-scroll";
const Navbar = ({ setActive = () => {} }) => {
  return (
    <nav className="flex flex-col md:flex-row  gap-12 items-end md:items-center w-full">
      <ul className="flex flex-col md:flex-row  gap-8 items-end md:items-center">
        <OurServicesDropdown />
        <Link
          className="text-secondary font-semibold md:text-sm text-lg cursor-pointer"
          smooth
          duration={500}
          to={"about"}
          onClick={() => setActive(false)}
        >
          About Us
        </Link>
        <Link
          smooth
          duration={500}
          to={"faq"}
          onClick={() => setActive(false)}
          className="text-secondary font-semibold md:text-sm text-lg cursor-pointer"
        >
          FAQs
        </Link>
      </ul>
      <p className="text-secondary font-semibold md:text-sm text-lg text-center md:text-left">
        Need Help? Call{" "}
        <a href="tel:+9174103253" className="text-primary">
          917-410-3253
        </a>
      </p>
    </nav>
  );
};

export default Navbar;
