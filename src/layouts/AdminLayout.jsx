import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { MdSolarPower, MdOutlineRoofing, MdMenu, MdClose } from "react-icons/md";
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
  const location = useLocation();
  const navigate = useNavigate(); // Hook for navigation
  const [activeNav, setActiveNav] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Sidebar toggle

  useEffect(() => {
    // Check if the current path is /admin, redirect to /admin/solar
    if (location.pathname === "/admin") {
      navigate("/admin/solar");
    }

    // Set active navigation based on current path
    const currentNav = adminNav.find((item) => item.path === location.pathname);
    if (currentNav) {
      setActiveNav(currentNav.name);
    }
  }, [location.pathname, navigate]);

  const currentNav = adminNav.find((item) => item.path === location.pathname);

  return (
    <div className="h-screen">
      <div className="flex">
        {/* Sidebar Container */}
        <div
          className={`fixed top-[50px] md:top-[60px] left-0 w-[240px] h-[calc(100%-88px)] bg-white border-r border-[#F4F4F4] transform transition-transform duration-300 ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } md:relative md:translate-x-0`}
        >
          {/* Navigation links */}
          <div className="pt-[40px] px-6">
            {adminNav.map((item) => (
              <Link to={item.path} key={item.name}>
                <p
                  className={`p-3 flex items-center gap-4 rounded-[8px] cursor-pointer ${
                    activeNav === item.name ? "bg-primary text-white" : "text-black"
                  }`}
                  onClick={() => {
                    setActiveNav(item.name);
                    setIsSidebarOpen(false); // Close sidebar on link click (for mobile)
                  }}
                >
                  {item.icon}
                  <span className="text-sm">{item.name}</span>
                </p>
              </Link>
            ))}
          </div>
        </div>

        {/* Page Content */}
        <div className="flex-1 h-screen w-full overflow-y-auto">
          {/* Header */}
          <header className="w-full h-[70px] md:h-[88px] border-b border-b-[#F4F4F4] flex items-center justify-start px-6 fixed top-0 left-0 right-0 bg-white z-50">
            {/* Toggle button and logo on the left */}
            <div className="flex items-center space-x-4 md:gap-[150px]">
              {/* Toggle button for mobile screens */}
              <button
                className="md:hidden text-2xl"
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              >
                {isSidebarOpen ? <MdClose /> : <MdMenu />}
              </button>

              <img src="/logo.png" className="h-[32px] w-[32px] lg:w-[62px] lg:h-[48px]" alt="logo" />

              {/* Current page title with margin-left */}
              <h1 className="ml-4 text-[20px] md:text-[24px] font-medium leading-[30px] text-[#01100A]">
                {currentNav ? `${currentNav.name} Table` : "Admin Dashboard"}
              </h1>
            </div>
          </header>

          {/* Main Content */}
          <main className="pt-[88px] p-6 bg-[#FDFDFD] w-full h-full">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
