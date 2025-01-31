import OurServicesDropdown from "~/components/OurServicesDropdown";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";
const Navbar = ({ setActive = () => {} }) => {
  return (
    <nav className="flex flex-col md:flex-row  gap-12 items-end md:items-center w-full">
      <div className="flex flex-col md:flex-row  gap-8 items-end md:items-center">
        <OurServicesDropdown />
        <ScrollLink
          className="text-secondary font-semibold md:text-sm text-lg cursor-pointer"
          smooth
          duration={500}
          to={"about"}
          onClick={() => setActive(false)}
        >
          About Us
        </ScrollLink>
        <ScrollLink
          smooth
          duration={500}
          to={"faq"}
          onClick={() => setActive(false)}
          className="text-secondary font-semibold md:text-sm text-lg cursor-pointer"
        >
          FAQs
        </ScrollLink>

        <Link
          to="/our-partners"
          onClick={() => setActive(false)}
          className="text-secondary font-semibold md:text-sm text-lg cursor-pointer"
        >
          Our Partners{" "}
        </Link>
      </div>
      <p className="text-secondary font-semibold md:text-sm text-lg text-center md:text-left">
        Need Help? Call{" "}
        <a href="tel:+9174103253" className="text-blue-600 hover:text-blue-700">
          917-410-3253
        </a>
      </p>
    </nav>
  );
};

export default Navbar;
