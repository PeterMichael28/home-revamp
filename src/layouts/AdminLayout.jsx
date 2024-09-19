import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom"; // Import useLocation
import { MdSolarPower, MdOutlineRoofing } from "react-icons/md";
import { TbAirConditioning } from "react-icons/tb";
import { PanelsTopLeft, Bath } from "lucide-react";
import { Outlet } from "react-router-dom";
import fileImg from "~/assets/images/fileImg.png";

const adminNav = [
  {
    name: "Solar",
    icon: <MdSolarPower />,
    path: "/admin/solar",
  },
  {
    name: "Windows",
    icon: <PanelsTopLeft />,
    path: "/admin/windows",
  },
  {
    name: "Bathrooms",
    icon: <Bath />,
    path: "/admin/bathrooms",
  },
  {
    name: "Roofing",
    icon: <MdOutlineRoofing />,
    path: "/admin/roofing",
  },
  {
    name: "HAVCs",
    icon: <TbAirConditioning />,
    path: "/admin/havcs",
  },
];

const AdminLayout = () => {
  const location = useLocation(); // Use location to detect the current route
  const [activeNav, setActiveNav] = useState("");

  // Sync activeNav with the current route on page load or route change
  useEffect(() => {
    const currentNav = adminNav.find((item) => item.path === location.pathname);
    if (currentNav) {
      setActiveNav(currentNav.name); // Set the correct active nav based on URL
    }
  }, [location.pathname]); // Re-run the effect whenever location changes

  // Find the current nav item based on the route
  const currentNav = adminNav.find((item) => item.path === location.pathname);

  return (
    <div className="flex overflow-x-auto h-screen">
      {/* sidebar */}
      <div className="w-[240px] h-full border-r border-[#F4F4F4]">
        {/* logo */}
        <div className="border-b border-b-[#F4F4F4] h-[88px] p-6 flex items-center">
          <img src="/logo.png" className="w-[62px] h-[48px]" alt="logo" />
        </div>

        <div className="pt-[40px] px-6">
          {/* navs */}
          {adminNav.map((item) => (
            <Link to={item.path} key={item.name}>
              <p
                className={`p-3 flex items-center gap-4 rounded-[8px] cursor-pointer ${
                  activeNav === item.name ? "bg-primary text-white" : "text-black"
                }`}
                onClick={() => setActiveNav(item.name)} // Set active nav item on click
              >
                {item.icon}
                <span className="text-sm">{item.name}</span>
              </p>
            </Link>
          ))}
        </div>
      </div>

      {/* page container */}
      <div className="flex-1 h-screen w-full overflow-y-auto">
        {/* header */}
        <header className="w-full h-[88px] border-b border-b-[#F4F4F4] flex items-center text-[24px] font-medium leading-[30px] text-[#01100A] px-6">
          {currentNav ? `${currentNav.name} Table` : "Admin Dashboard"}
        </header>
        {/* main */}
        <main className="overflow-auto p-6 bg-[#FDFDFD] w-full h-full">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
