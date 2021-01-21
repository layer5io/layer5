/* eslint-disable react/jsx-key */
import React from "react";
import { useTable } from "react-table";
import {Data} from "../../collections/books/service-mesh-patterns/tableData";
import {Columns} from "../../collections/books/service-mesh-patterns/bookColumns";
import {TableWrapper} from "./table.style";

const Table = () => {

  const columns = React.useMemo(() => Columns,[]);
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
  });

  return (
    <TableWrapper>
      <table {...getTableProps()}>
        <thead>
        
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column, index) => (
                <th key={index} {...column.getHeaderProps()}>
                  {column.render("Header")}
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
                  if(row["original"]["subheading"] === "bold"){
                    return (
                      <td key={index} {...cell.getCellProps()} className="bold">
                        {cell.render("Cell")}
                      </td>
                    );
                  } else{
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
