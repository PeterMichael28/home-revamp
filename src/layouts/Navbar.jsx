import OurServicesDropdown from "~/components/OurServicesDropdown";

const Navbar = () => {
  return (
    <nav className="flex flex-col md:flex-row  gap-12 items-end md:items-center w-full">
      <ul className="flex flex-col md:flex-row  gap-8 items-end md:items-center">
        <OurServicesDropdown />
        <li className="text-secondary font-semibold md:text-sm text-lg">About Us</li>
        <li className="text-secondary font-semibold md:text-sm text-lg">FAQs</li>
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
