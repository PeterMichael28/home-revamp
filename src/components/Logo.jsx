import { Link } from "react-router-dom";

const Logo = ({ className }) => {
  return (
    <Link to="/">
      <img
        src="/logo.svg"
        alt="HomeRevampExpert"
        className={"h-10 w-16 md:h-14 md:w-20 object-contain md:hidden" + className}
        loading="lazy"
        height={40}
        width={64}
      />

      <img
        src="/logo.svg"
        alt="HomeRevampExpert"
        className={"h-10 w-16 md:h-14 md:w-20 object-contain hidden md:block" + className}
        loading="lazy"
        height={56}
        width={80}
      />
    </Link>
  );
};

export default Logo;
