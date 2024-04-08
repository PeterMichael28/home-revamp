import React from "react";
import Logo from "~/components/Logo";
import Navbar from "./Navbar";
import MobileNavbar from "./MobileNavbar";

const Header = () => {
  return (
    <div className="w-full px-5 sm:px-8 md:px-14 py-5  max-w-[1300px] mx-auto flex justify-between items-center">
      <Logo />

      {/*  */}
      <div className="hidden md:block">
        <Navbar />
      </div>

      {/* mobile navbar */}
      <MobileNavbar />
    </div>
  );
};

export default Header;
