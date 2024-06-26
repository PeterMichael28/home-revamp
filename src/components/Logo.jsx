import { Link } from "react-router-dom";

const Logo = ({ className }) => {
  return (
    <Link to="/">
      <img src="/logo.png" alt="HomeRevampExpert" className={"h-10 w-16 md:h-14 md:w-20 object-contain" + className} />
    </Link>
  );
};

export default Logo;
