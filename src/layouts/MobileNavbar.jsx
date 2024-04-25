import { useState } from "react";
import Drawer from "~/components/Drawer/Drawer";
import Navbar from "./Navbar";
import icons from "~/assets/icons/icons";

const MobileNavbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="lg:hidden">
      <span className="text-secondary text-2xl" onClick={() => setOpen(true)}>
        {icons.hamburger}
      </span>
      <Drawer active={open} setActive={setOpen} containerClassName="" side="right">
        <nav className="px-6 mt-24 mb-10 w-full  ml-auto h-screen w-2/3 rounded-l-lg">
          <Navbar />
        </nav>
      </Drawer>
    </div>
  );
};

export default MobileNavbar;
