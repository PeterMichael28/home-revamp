import { useEffect, useState } from "react";
import img1 from "~/assets/images/img1.png";
import TableDataComp from "./TableDataComp";

const BathroomDashboard = () => {
  const MessageModal = 'hello'
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    setLoading(true);
    const url = import.meta.env.VITE_API_BASE_URL;
    fetch(`${url}/api/bathroom-services/`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);
  
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full overflow-y-auto w-full ">
        <div className="h-[170px] px-4 py-5 w-full rounded-xl border border-[#F4F4F4] flex flex-col items-start justify-between bg-white">
          <img src={img1} className="size-[40px]" alt="" />

          <div>
            <span className="text-sm text-[#7A7A7A]">All Quotes</span>
            <p className="text-black font-bold tracking-[0.12px] text-[24px] mt-2">300</p>
          </div>
        </div>
      </div>

      <div className="mt-10 pb-28 min-w-[1000px] overflow-x-auto">
        <TableDataComp data={data} loading={loading} csv= "BathroomLeadsData.csv"/>
      </div>
    </div>
  );
}
export default BathroomDashboard
