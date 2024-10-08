import { Link } from "react-router-dom";
import Logo from "~/components/Logo";

const Footer = () => {
  return (
    <footer className="w-full border-y mt-16 border-gray">
      <div className="w-full px-4 sm:px-8 md:px-14 py-[45px] md:py-[35px]  max-w-[1300px] mx-auto flex flex-col justify-start md:flex-row md:justify-between items-start md:items-center gap-y-6">
        <Logo />

        <nav>
          <ul className="flex flex-col md:flex-row  gap-6 items-start md:items-center">
            <li className="text-secondary font-semibold md:text-sm text-lg">
              <Link to="/privacy-policy">Privacy Policy</Link>
            </li>
            <li className="text-secondary font-semibold md:text-sm text-lg">
              <Link to="/use-of-terms">Use of Terms </Link>
            </li>
            <li className="text-secondary font-semibold md:text-sm text-lg">
              <Link to="/ccpa">CCPA </Link>
            </li>
            <li className="text-secondary font-semibold md:text-sm text-lg">
              <Link to="/contact">Contact </Link>
            </li>
            <li>
              <Link to="/our-partners" className="text-secondary font-semibold md:text-sm text-lg">
                Our Partners{" "}
              </Link>
            </li>
            <li>
              <Link to="/join-our-affiliate-team" className="text-secondary font-semibold md:text-sm text-lg">
                Join Our Affiliate
              </Link>
            </li>
          </ul>
        </nav>
        <div className="text-secondary font-semibold md:text-sm text-lg">
          © {new Date().getFullYear()} Home Revamp Expert
        </div>
      </div>
    </footer>
  );
};

export default Footer;
