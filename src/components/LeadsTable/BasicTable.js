import React, { useState, useMemo } from "react";
import { useSelector } from "react-redux";
import { useTable, useSortBy } from "react-table";
import { COLUMNS } from "./columns";
import { EditEntry } from "./EditEntry";
import { AddEntry } from "./AddEntry";

export const BasicTable = () => {
  const leads = useSelector((state) => state.leads);

  let reward = 0;
  leads.forEach((lead) => {
    reward += lead.reward;
  });
  console.log(reward);

  const columns = useMemo(() => COLUMNS, []);
  let data = useMemo(() => leads, [leads]);
  let tableInstance = useTable(
    {
      columns: columns,
      data: data,
      initialState: {
        sortBy: [
          {
            id: "date",
            desc: true,
          },
        ],
      },
    },
    useSortBy
  );
  const [popDisplay, setPopDisplay] = useState({
    display: false,
    rowNo: 0,
    addPop: false,
  });
  const togglePop = () => {
    setPopDisplay({ ...popDisplay, display: !popDisplay.display });
  };

  const toggleAddPop = () => {
    setPopDisplay({ ...popDisplay, addPop: !popDisplay.addPop });
  };

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <div className="antialiased font-sans bg-gray-200">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="py-8">
          <div>
            <h2 className="text-2xl font-semibold leading-tight">Leads</h2>
          </div>
          <div className="my-2 flex sm:flex-row flex-col justify-between">
            <div className="flex sm:flex-row flex-col mb-2">
              <div className="flex flex-row mb-1 sm:mb-1">
                <div className="relative">
                  <select className="appearance-none h-full rounded border  sm:rounded-r-none sm:border-r-0 border-r border-b block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-l focus:border-r focus:bg-white focus:border-gray-500">
                    <option>All</option>
                    <option>New</option>
                    <option>In Pipeline</option>
                    <option>Successful</option>
                    <option>Junk</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="block relative">
                <span className="h-full absolute inset-y-0 left-0 flex items-center  pl-2">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4 fill-current text-gray-500"
                  >
                    <path d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z"></path>
                  </svg>
                </span>
                <input
                  placeholder="Search"
                  className="appearance-none rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
                />
              </div>
            </div>
            <div className="flex mb-1 sm:mb-0 ">
              <div className=" flex relative justify-between">
                <button
                  className="appearance-none h-full rounded border  sm:rounded sm:border-r border-r border-b block appearance-none w-full bg-white border-gray-400 text-gray-700 py-1 px-2 pr-8 leading-tight focus:outline-none focus:border-l focus:border-r focus:bg-white focus:border-gray-500"
                  onClick={() =>
                    setPopDisplay({
                      ...popDisplay,
                      addPop: !popDisplay.addPop,
                    })
                  }
                >
                  Add
                </button>

                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                {popDisplay.addPop ? (
                  <AddEntry
                    className="z-20"
                    content={{ id: "", name: "", ph_no: "", address: "" }}
                    handleClose={toggleAddPop}
                  />
                ) : null}
              </div>
            </div>
          </div>
          <div className="block relative">
            <p className="appearance-none rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none">
              {"Total Rewards $" + reward}
            </p>
          </div>

          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden"></div>
            <table {...getTableProps()} className="min-w-full leading-normal">
              <thead>
                {headerGroups.map((headerGroup) => (
                  <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column) => (
                      <th
                        {...column.getHeaderProps()}
                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                      >
                        {column.render("Header")}
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody {...getTableBodyProps()}>
                {rows.map((row) => {
                  const copyRow = row;
                  prepareRow(row);
                  return (
                    <tr {...row.getRowProps} key={row.original.id}>
                      {row.cells.map((cell) => {
                        switch (cell.column.Header) {
                          case "Name": {
                            return (
                              <td
                                {...cell.getCellProps()}
                                className="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                              >
                                <div className="flex items-center">
                                  <div className="flex-shrink-0 w-10 h-10">
                                    <img
                                      className="w-full h-full rounded-full"
                                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                                      alt=""
                                    />
                                  </div>

                                  <div className="ml-3">
                                    <p className="text-gray-900 whitespace-no-wrap">
                                      {cell.render("Cell")}
                                    </p>
                                  </div>
                                </div>
                              </td>
                            );
                          }
                          case "Status": {
                            return (
                              <td
                                {...cell.getCellProps()}
                                className="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                              >
                                <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                  <span
                                    aria-hidden
                                    className={[
                                      "absolute inset-0 opacity-50 rounded",
                                      cell.value === "New"
                                        ? "bg-blue-400"
                                        : cell.value === "In Pipeline"
                                        ? "bg-gray-400"
                                        : cell.value === "Junk"
                                        ? "bg-red-400"
                                        : "bg-green-400",
                                    ].join(" ")}
                                  ></span>
                                  <span className="relative">
                                    {cell.render("Cell")}
                                  </span>
                                </span>
                              </td>
                            );
                          }
                          case "Edit": {
                            return (
                              <td
                                {...cell.getCellProps()}
                                className="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                              >
                                <span className="relative inline-block px-3 py-1 font-semibold  ">
                                  <button
                                    className=" bg-gray-400 opacity-100 rounded p-2 text-black"
                                    onClick={() => {
                                      setPopDisplay({
                                        ...popDisplay,
                                        display: true,
                                        rowNo: row.original.id,
                                      });
                                    }}
                                  >
                                    {cell.render("Cell")}
                                  </button>
                                </span>
                                {popDisplay.display &&
                                popDisplay.rowNo === row.original.id ? (
                                  <EditEntry
                                    className="z-20"
                                    content={copyRow}
                                    handleClose={togglePop}
                                  />
                                ) : null}
                              </td>
                            );
                          }

                          default: {
                            // console.log(cell.value);
                            return (
                              <td
                                {...cell.getCellProps()}
                                className="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                              >
                                <p className="text-gray-900 whitespace-no-wrap">
                                  {cell.render("Cell")}
                                </p>
                              </td>
                            );
                          }
                        }
                      })}
                    </tr>
                  );
                })}
              </tbody>
              <tfoot>
                {/* {footerGroups.map((footerGroup) => {
                  <tr {...footerGroup.getFooterGroupProps()}>
                    {footerGroup.headers.map((column) => (
                      <td {...column.getFooterProps}>
                        {column.render("Fotter")}
                      </td>
                    ))}
                  </tr>;
                })} */}
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
