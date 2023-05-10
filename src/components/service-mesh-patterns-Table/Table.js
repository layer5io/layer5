/* eslint-disable react/jsx-key */
import React from "react";
import { useTable, useSortBy, useFilters } from "react-table";
import { Data } from "../../collections/service-mesh-books/service-mesh-patterns/tableData";
import { Columns } from "../../collections/service-mesh-books/service-mesh-patterns/bookColumns";
import { TableWrapper } from "./table.style";
import alphaicon from "./sort_by_alpha.svg";
import upicon from "./expand_more.svg";
import downicon from "./expand_less.svg";

const Table = () => {

  const columns = React.useMemo(() => Columns, []);
  const data = React.useMemo(() => Data,[]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  },
  useFilters,
  useSortBy
  );
  return (
    <TableWrapper>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column, index) => (
                <th key={index} {...column.getHeaderProps()}
                  className={(column.Header == "Service Mesh Pattern" || column.Header == "Category") ? "table-header" : ""}>
                  <div  >
                    {column.render("Header")}
                    {(column.Header == "Service Mesh Pattern") ?
                      <span {...column.getSortByToggleProps()}>
                        {column.isSorted
                          ? column.isSortedDesc
                            ? <img className="service-mesh-icon" src={downicon} alt="down icon" />
                            : <img className="service-mesh-icon" src={upicon} alt="up icon" />
                          : <img className="service-mesh-icon" src={alphaicon} alt="alpha icon" />}
                      </span>
                      : <>
                      </>}
                    {(column.Header == "Category") ?
                      <div id={"service-mesh-patterns-table"}>{column.canFilter ? column.render("Filter") : null}</div>
                      : <> </>
                    }
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          { rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr key={i} {...row.getRowProps()}>
                {row.cells.map((cell, index) => {
                  if (row["original"]["subheading"] === "bold"){
                    return (
                      <th key={index} {...cell.getCellProps()} className="bold area-header">
                        {cell.render("Cell")}
                      </th>
                    );
                  } else {
                    return (
                      <td key={index} {...cell.getCellProps()}>
                        {cell.render("Cell")}
                      </td>
                    );
                  }
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </TableWrapper>
  );
};
export default Table;
