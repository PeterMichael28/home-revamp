import React, { useState } from "react";
import icons from "~/assets/icons/icons";
import Dropdown from "~/components/Dropdown/DropDown";
import Table from "~/components/Table/Table";
import { classNames } from "~/utils/classNames";
import { formatDateTime, getRandomColorFromName } from "~/utils/getRandomColorFromName";
import uploadImg from "~/assets/images/uploadPic.png";
import { ourServices } from "~/assets/data";
import Select from "react-select";
import { CSVLink } from "react-csv";
import Message from "~/components/MessageModal/Message";
import { Button } from "~/components/ui/button";

const TableDataComp = ({ data, loading, csv, messageChild }) => {
  const [searchFilter, setSearchFilter] = useState("");
  const [value, setValue] = useState("");
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [totalPages, setTotalPages] = useState(0);

  const COLUMNS = [
    { header: "Lead ID", accessor: "LeadiD" },
    { header: "Users", accessor: "user" },
    { header: "Location", accessor: "location" },
    { header: "Property Type", accessor: "property_type" },
    { header: "Project Timeline", accessor: "project_timeline" },
    { header: "Created Date", accessor: "created_at" },
    // { header: "Actions", accessor: "action" },
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
            style={{ backgroundColor: getRandomColorFromName(info.row.original?.first_name) }}
          >
            {info.row.original?.first_name[0]} {info.row.original?.last_name[0]}
          </div>
          <div>
            <p className="text-[#1E1C1C] text-sm font-medium">{`${info.row.original?.first_name} ${info.row.original?.last_name}`}</p>
            <span className="text-[#868686] text-xs font-normal mt-1">{`${info.row.original?.email}`}</span>
          </div>
        </div>
      ) : col.accessor === "location" ? (
        <p className="text-[#1E1C1C] text-sm ">{`${info.row.original?.city} ${info.row.original?.state}`}</p>
      ) : col.accessor === "property_type" ? (
        <p className="text-[#1E1C1C] text-sm ">{`${info.row.original?.property_type}`}</p>
      ) : col.accessor === "project_timeline" ? (
        <p className="text-[#1E1C1C] text-sm ">{`${info.row.original?.project_timeline}`}</p>
      ) : col.accessor === "created_at" ? (
        <p className="text-[#1E1C1C] text-sm ">{`${formatDateTime(info.row.original?.created_at).customDate}`}</p>
      ) : col.accessor === "LeadiD" ? (
        <p className="text-[#1E1C1C] text-sm line-clamp-1 overflow-hidden">{`${value.slice(0, 20)}...`}</p>
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
      <div className="flex justify-beween items-center px-6 py-5">
        {/* <Select
          value={value}
          onChange={setValue}
          options={options}
          styles={customStyles}
          placeholder="All Services"
          components={{
            IndicatorSeparator: () => null, // Remove default indicator separator visually
          }} // Remove default indicator separator component
        /> */}

        <div className="space-x-4 flex justify-between items-center w-full ">
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
          <CSVLink data={data} filename={csv}>
            <div className="border border-[#F2F2F2] bg-white min-w-fit rounded-[4px] px-4 py-2 flex items-center justify-center gap-2 h-[44px]">
              <img src={uploadImg} alt="image" className="size-[18px]" />
              <span className="text-sm font-medium text-[#34403B]">Export List</span>
            </div>
          </CSVLink>

          <Message>
          <Button variant="outline">Send Message</Button>
          </Message>
            {/* {messageChild} */}
       
        </div>
      </div>
      <div className="w-full overflow-x-auto">
        <Table
          tableColumns={tableColumns}
          tableData={data}
          loading={loading}
          onPaginationChange={({ currentPage, perPage }) => {
            setPage(currentPage);
            setPerPage(perPage);
          }}
          searchFilter={searchFilter}
          setSearchFilter={setSearchFilter}
          serverSidePagination={false}
          currentPage={page}
          perPage={perPage}
          totalPageCount={totalPages}
          enableRowSelection={false}
        />
      </div>
    </div>
  );
};

export default TableDataComp;
