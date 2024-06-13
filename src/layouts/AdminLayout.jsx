import { Outlet } from "react-router-dom";
import fileImg from "~/assets/images/fileImg.png";

const AdminLayout = () => {
  return (
    <div className="flex overflow-x-auto h-screen">
      {/* sidebar */}
      <div className="w-[280px] h-full border-r border-[#F4F4F4]">
        {/* logo */}
        <div className="border-b border-b-[#F4F4F4] h-[88px] p-6 flex items-center">
          <img src="/logo.png" className="w-[62px] h-[48px] " alt="image" />
        </div>

        <div className="pt-[40px] px-6">
          {/* navs */}
          <p className="p-3 flex items-center gap-2 rounded-[8px] bg-primary text-white">
            <img src={fileImg} alt="image" className="size-[18px] " />
            <span className="text-sm text-white">Home Quotes</span>{" "}
          </p>
        </div>
      </div>

      {/* page container */}
      <div className="flex-1 h-full w-full overflow-aut">
        {/* header */}
        <header className="w-full h-[88px] border-b border-b-[#F4F4F4] flex items-center text-[24px] font-medium leading-[30px] text-[#01100A] px-6">
          Home Revamp
        </header>
        {/* main */}
        <main className="overflow-auto p-6 bg-[#FDFDFD] w-full h-full min-w-[1000px]">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
