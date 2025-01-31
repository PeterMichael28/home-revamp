import React, { useState } from "react";
import icons from "~/assets/icons/icons";
import Dropdown from "~/components/Dropdown/DropDown";
import Table from "~/components/Table/Table";
import { classNames } from "~/utils/classNames";
import { getRandomColorFromName } from "~/utils/getRandomColorFromName";
import uploadImg from "~/assets/images/uploadPic.webp";
import { ourServices } from "~/assets/data";
import Select from "react-select";

const data = [
  {
    id: 1,
    service: "Plumbing",
    user: "John Doe",
    zip_code: "12345",
    property_type: "House",
    date: "2024-06-03", // Today's date
    firstName: "John",
    lastName: "Doe",
    email: "johndoe@example.com",
  },
  {
    id: 2,
    service: "Electrical",
    user: "Jane Smith",
    zip_code: "54321",
    property_type: "Apartment",
    date: "2024-05-30", // Random past date
    firstName: "Jane",
    lastName: "Smith",
    email: "janesmith@example.com",
  },
  {
    id: 3,
    service: "Carpentry",
    user: "Michael Brown",
    zip_code: "98765",
    property_type: "Commercial",
    date: "2024-06-05", // Future date
    firstName: "Michael",
    lastName: "Brown",
    email: "michaelbrown@example.com",
  },
  {
    id: 4,
    service: "Cleaning",
    user: "Ashley Williams",
    zip_code: "00000",
    property_type: "Studio",
    date: "2024-05-28", // Another random past date
    firstName: "Ashley",
    lastName: "Williams",
    email: "ashleywilliams@example.com",
  },
  {
    id: 5,
    service: "Landscaping",
    user: "David Miller",
    zip_code: "78910",
    property_type: "Townhouse",
    date: "2024-06-01", // Recent past date
    firstName: "David",
    lastName: "Miller",
    email: "davidmiller@example.com",
  },
];

const TableDataComp = () => {
  const [searchFilter, setSearchFilter] = useState("");
  const [value, setValue] = useState("");
  const COLUMNS = [
    { header: "Quote ID", accessor: "id" },
    { header: "Service", accessor: "service" },
    { header: "Users", accessor: "user" },
    { header: "Zip Code", accessor: "zip_code" },
    { header: "Property Type", accessor: "property_type" },
    { header: "Requested Date", accessor: "date" },
    { header: "Actions", accessor: "action" },
  ];

  const tableColumns = COLUMNS.map((col) => ({
    ...col,
    enableSorting: col.accessor === "action" ? false : true,
    cell: (info) => {
      const value = info.getValue();
      return col.accessor === "user" ? (
        <div className={classNames("flex justify-start gap-x-2 items-center")}>
          <div
            className="size-[32px] rounded-full flex items-center justify-center text-white font-medium text-sm"
            style={{ backgroundColor: getRandomColorFromName("fff") }}
          >
            {info.row.original?.firstName[0]}
          </div>
          {/* {value.slice(0, 35) + "..."} */}
          <div>
            <p className="text-[#1E1C1C] text-sm font-medium">{`${info.row.original?.firstName} ${info.row.original?.lastName}`}</p>
            <span className="text-[#868686] text-xs font-normal mt-1">{`${info.row.original?.email}`}</span>
          </div>
        </div>
      ) : col.accessor === "action" ? (
        <Dropdown
          toggleElement={
            <div className="text-center">
              <button className="borer text-black text-lg">{icons.threeDots}</button>
            </div>
          }
        >
          <div className="flex h-max w-max flex-col justify-start rounded-lg bg-white bg-cover bg-no-repeat py-2 shadow-xl">
            <ul>
              <li className="border-b last:border-0 py-2 px-6 text-xs font-medium cursor-pointer">View Details</li>
              <li className="border-b last:border-0 py-2 px-6 text-xs font-medium cursor-pointer">Verify Company</li>
            </ul>
          </div>
        </Dropdown>
      ) : (
        value || "---"
      );
    },
  }));

  return (
    <div className="mt-10 bg-white border border-[#F4F4F4] rounded-[12px]">
      <div className="flex justify-between items-center px-6 py-5">
        <div className="space-x-4 flex justify-end items-center">
          <div className="max-w-[448px] w-full flex justify-center items-center py-2 rounded-[4px] px-4  border border-[#F2F2F2] text-tertiary bg-white ml-auto  h-[44px]">
            <span className="text-lg text-[#C7C7C7]">{icons.search}</span>
            <input
              type="text"
              placeholder="Search for quotes by service, number, date, ID e.t.c"
              onChange={(e) => setSearchFilter(e.target.value)}
              value={searchFilter}
              className="w-full flex-1 border-none outline-none px-3 placeholder:text-sm placeholder:text-[#C7C7C7] text-gray-default text-sm"
            />
            <span className="text-lg text-[#C7C7C7] cursor-pointer " onClick={() => setSearchFilter("")}>
              {icons.close}
            </span>
          </div>

          {/*  */}
          <div className="border border-[#F2F2F2] bg-white min-w-fit rounded-[4px] px-4 py-2 flex items-center justify-center gap-2 h-[44px]">
            <img src={uploadImg} alt="image" className="size-[18px]" />
            <span className="text-sm font-medium text-[#34403B]">Export List</span>
          </div>
        </div>
      </div>
      <div className="w-full overflow-x-auto">
        <Table
          tableColumns={tableColumns}
          tableData={data}
          //   loading={loading}
          //   currentPage={page}
          searchFilter={searchFilter}
          setSearchFilter={setSearchFilter}
          perPage={5}
          // enableRowSelection
        />
      </div>
    </div>
  );
};

export default TableDataComp;
