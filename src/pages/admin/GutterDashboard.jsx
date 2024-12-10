import { useEffect, useState } from "react";
import img1 from "~/assets/images/img1.png";
import TableDataComp from "./TableDataComp";
import { useLocation } from "react-router-dom";
import useAuthRedirect from "~/hooks/useAuthRedirect";
import { useUserStore } from "~/store/userStore";


const GutterDashboard = () => {
 const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const token = useUserStore((state) => state.token);
  const { isDataAuthenticated } = useAuthRedirect();
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [perPage, setPerPage] = useState(10);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const url = import.meta.env.VITE_API_BASE_URL;
    // Get all URL parameters and add them to the endpoint
    const searchParams = new URLSearchParams(location.search);
    // console.log("searchParams", searchParams)
    const endpointWithParams = `${url}/api/gutter-service-filter/?page=${page}&${searchParams.toString()}`;

    fetch(endpointWithParams, { headers: { Authorization: `Token ${token}` } })
      .then((res) => res.json())
      .then((data) => {
        isDataAuthenticated(data);

        setData(data?.results);
        setTotalPages(data?.total_pages);
        setPerPage(data?.page_size);
        setLoading(false);
        // console.log("firstw22", data);
      })
      .catch((error) => {
        console.log("error", error);
        setLoading(false);
      });
  }, [location.search, token, page, isDataAuthenticated]);

  // console.log("loading", loading);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full overflow-y-auto w-full mt-2">
        <div className="h-[170px] px-4 py-5 w-full rounded-xl border border-[#F4F4F4] flex flex-col items-start justify-between bg-white">
          <img src={img1} className="size-[40px]" alt="" />

          <div>
            <span className="text-sm text-[#7A7A7A]">All Quotes</span>
            <p className="text-black font-bold tracking-[0.12px] text-[24px] mt-2">{data?.allQuotes ?? 0}</p>
          </div>
        </div>
      </div>

      <div className="mt-4 pb-10 min-w-[1000px] overflow-x-auto">
        <TableDataComp
          data={data}
          page={page}
          setPage={setPage}
          totalPages={totalPages}
          loading={loading}
          perPage={perPage}
          setPerPage={setPerPage}
          csv="gutterLeadsData.csv"
          service="gutter"
        />
      </div>
    </div>
  );
}
export default GutterDashboard
