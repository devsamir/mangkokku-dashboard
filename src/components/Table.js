import React from "react";
import { HiArrowDown, HiArrowUp } from "react-icons/hi";

const Table = ({
  className,
  columns,
  data,
  actions,
  loading,
  sort,
  setSort,
}) => {
  const handleSort = (col) => {
    if (!col.sortable) return;
    if (sort.field !== col.field) {
      setSort({ field: col.field, direction: "desc" });
    } else if (sort.field === col.field) {
      if (sort.direction === "desc") {
        setSort({ field: col.field, direction: "asc" });
      } else if (sort.direction === "asc") {
        setSort({ field: "", direction: "" });
      }
    }
  };
  return (
    <div className={`${className} overflow-auto shadow-md`}>
      <table className="border-collapse bg-white text-left overflow-hidden min-w-full rounded">
        <thead className="shadow">
          <tr className="sticky top-0 bg-gray-100 z-20 shadow">
            {columns.map((col, index) => (
              <th
                key={index}
                className={`py-4 px-6 uppercase tracking-widest text-xs font-bold text-gray-700  text-center select-none ${
                  col.sortable && "cursor-pointer"
                }`}
                style={{
                  minWidth: col.width ? col.width : "125px",
                  maxWidth: col.width,
                }}
                onClick={() => {
                  handleSort(col);
                }}
              >
                <div className="flex items-center gap-2 justify-center">
                  {col.headerName}
                  {col.sortable && (
                    <div className="flex items-center">
                      <HiArrowDown
                        className={
                          sort.direction === "desc" && col.field === sort.field
                            ? "text-gray-700 text-opacity-100"
                            : "text-gray-700 text-opacity-40"
                        }
                      />
                      <HiArrowUp
                        className={
                          sort.direction === "asc" && col.field === sort.field
                            ? "text-gray-700 text-opacity-100"
                            : "text-gray-700 text-opacity-40"
                        }
                      />
                    </div>
                  )}
                </div>
              </th>
            ))}
            {actions && (
              <th
                className={`py-3 px-6 uppercase tracking-widest text-xs font-bold text-gray-700 max-w-[7.5rem] text-center select-none`}
              >
                Actions
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          {loading &&
            [...Array(10)].map((i, index) => {
              return (
                <tr key={index} className={`border border-gray-100`}>
                  {columns.map((col, ind) => (
                    <td key={ind} className="py-4 px-2 ">
                      <div
                        className={`h-4 bg-gray-200 rounded animate-pulse w-full`}
                      ></div>
                    </td>
                  ))}
                  {actions && (
                    <td className="py-4 px-2">
                      <div
                        className={`h-4 bg-gray-200 rounded animate-pulse w-full`}
                      ></div>
                    </td>
                  )}
                </tr>
              );
            })}
          {!loading &&
            data.map((item, index) => {
              return (
                <tr key={item.id || index}>
                  {columns.map((col, ind) => (
                    <td className="py-3 px-2 text-gray-600 text-sm" key={ind}>
                      {col.formatter
                        ? col.formatter(item[col.field], item)
                        : item[col.field]}
                    </td>
                  ))}
                  {actions && <td>{actions(item)}</td>}
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
