import React from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

const TablePagination = ({
  page,
  setPage,
  limit,
  setLimit,
  result,
  loading,
}) => {
  const handleLimit = (e) => {
    setLimit(Number(e.target.value));
    const dataPointer = (page - 1) * e.target.value + 1;
    if (dataPointer > result) {
      const pagePointer = Math.ceil(result / e.target.value);
      setPage(pagePointer);
    }
  };
  const handlePage = (e) => {
    if (e === "next") {
      const maxPage = Math.ceil(result / limit);
      if (page < maxPage) {
        setPage(page + 1);
      }
    } else if (e === "before") {
      if (page > 1) {
        setPage(page - 1);
      }
    }
  };
  return (
    <div className="flex border-l border-r border-b border-gray-100 p-2 text-sm ">
      <div className="ml-auto flex items-center justify-end sm:w-full">
        <div className="mr-4 md:mr-2">
          <select
            value={limit}
            onChange={handleLimit}
            className="p-2 w-16 text-gray-500 bg-white border border-solid border-gray-300 outline-none"
          >
            <option value={10}>10</option>
            <option value={15}>15</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
          </select>
        </div>
        <div className="mr-12 sm:mr-0 md:mr-4 font-semibold text-gray-500">
          {loading ? (
            <div className="w-32 h-4 p-2 text-left bg-gray-200 rounded animate-pulse"></div>
          ) : (
            <>
              {(page - 1) * limit + 1} -{" "}
              {page * limit < result ? page * limit : result} / {result} Data
            </>
          )}
        </div>
        <div className="flex items-center sm:gap-0 md:gap-2 gap-4">
          <button
            onClick={() => handlePage("before")}
            className={`border-none bg-transparent text-xl outline-none p-2 flex items-center cursor-pointer text-gray-500 ${
              !loading && page > 1 ? "visible" : "invisible"
            }`}
          >
            <HiChevronLeft />
          </button>

          <span className="text-gray-500 font-semibold">Page {page}</span>
          <button
            onClick={() => handlePage("next")}
            className={`border-none bg-transparent text-xl outline-none p-2 flex items-center cursor-pointer text-gray-500 ${
              !loading && page < Math.ceil(result / limit)
                ? "visible"
                : "invisible"
            }`}
          >
            <HiChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TablePagination;
