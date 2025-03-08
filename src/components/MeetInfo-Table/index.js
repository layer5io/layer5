import React from "react";
import { useTable } from "react-table";
import { TableWrapper } from "./MeetInfoTable.style";

const Table = ({ columns, data }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  });

  return (
    <TableWrapper>
      <h1 className="meetings-table-title">
        <a href="#meetings">Layer5 Meetings</a>
      </h1>
      <h3 className="meetings-table-subtitle">
        Everyone is welcome to join. Engage!
      </h3>
      <table name="meetings" id="meetings" {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr key={"table-header"} {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th key={column} {...column.getHeaderProps()}>
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr key={`row${i}`} {...row.getRowProps()}>
                {row.cells.map((cell, index) => {
                  {
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
