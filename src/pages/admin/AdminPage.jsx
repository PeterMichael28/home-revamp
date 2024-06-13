import img1 from "~/assets/images/img1.png";
import img2 from "~/assets/images/img2.png";
import TableDataComp from "./TableDataComp";

const AdminPage = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full overflow-y-auto w-full ">
        <div className="h-[170px] px-4 py-5 w-full rounded-xl border border-[#F4F4F4] flex flex-col items-start justify-between bg-white">
          <img src={img1} className="size-[40px]" alt="" />

          <div>
            <span className="text-sm text-[#7A7A7A]">All Users</span>
            <p className="text-black font-bold tracking-[0.12px] text-[24px] mt-2">300</p>
          </div>
        </div>

        <div className="h-[170px] px-4 py-5 w-full rounded-xl flex flex-col items-start justify-between border border-[#F4F4F4] bg-white">
          <img src={img2} className="size-[40px]" alt="" />

          <div className="flex justify-between w-full">
            <div>
              <span className="text-sm text-[#7A7A7A]">All Quotes</span>
              <p className="text-black font-bold tracking-[0.12px] text-[24px] mt-2">275</p>
            </div>

            <div>
              <span className="text-sm text-[#7A7A7A]">Service Categories</span>
              <p className="text-black font-bold tracking-[0.12px] text-[24px] mt-2">8</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 pb-28 min-w-[1000px] overflow-x-auto">
        <TableDataComp />
      </div>
    </div>
  );
};

export default AdminPage;
