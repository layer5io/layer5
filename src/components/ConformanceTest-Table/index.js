import React from "react";
import { useTable, useSortBy } from "react-table";
import { TableWrapper } from "./ConformanceTestTable.style";

const Table = ({ columns, data }) => {
  // Use the state and functions returned from useTable to build the UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable(
    {
      columns,
      data,
    },
    useSortBy,
  );

  // Render the UI for the table
  return (
    <TableWrapper>
      <table {...getTableProps()} >
        <thead >
          {headerGroups.map(headerGroup => (
            <tr key={"table-header"} {...headerGroup.getHeaderGroupProps()} >
              {headerGroup.headers.map((column) => {
                return (
                  <th key={column} {...column.getHeaderProps(column.getSortByToggleProps())} style={{ textAlign: "left", paddingLeft: "0.75rem", }}>
                    {column.render("Header")}
                    <span>
                      {column.isSorted
                        ? column.isSortedDesc
                          ? " ↓"
                          : " ↑"
                        : ""}
                    </span>
                  </th>
                );

              })}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr key={`row${i}`} {...row.getRowProps()} style={{}}>
                {row.cells.map(cell => {
                  if (cell["column"]["id"] === "test_no"){
                    return <td {...cell.getCellProps()} style={{ whiteSpace: "nowrap" }}>
                      {cell.render("Cell")}
                    </td>;
                  } else if (cell["column"]["id"] === "spec"){
                    return <td {...cell.getCellProps()} style={{ whiteSpace: "nowrap" }}>
                      {cell.render("Cell")}
                    </td>;
                  } else if (cell["column"]["id"] === "test_type"){
                    return <td {...cell.getCellProps()} style={{ whiteSpace: "nowrap" }}>
                      {cell.render("Cell")}
                    </td>;
                  } else if (cell["column"]["id"] === "desc"){
                    return <td {...cell.getCellProps()} style={{ textAlign: "left" }}>
                      <i>{cell.render("Cell")}</i>
                    </td>;
                  } else {
                    return <td {...cell.getCellProps()}>
                      {cell.render("Cell")}
                    </td>;
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