import React from "react";
import { useTable, useSortBy, useFilters, useGlobalFilter, useAsyncDebounce } from "react-table";
import ReactTooltip from "react-tooltip";
import { IoMdHelpCircle } from "react-icons/io";
import { IconContext } from "react-icons";
import { TableWrapper } from "./LandscapeTable.style";
import passingMark from "../../assets/images/landscape/passing.svg";
import failingMark from "../../assets/images/landscape/failing.svg";
import { AiOutlineCaretUp, AiOutlineCaretDown } from "react-icons/ai";

function GlobalFilter({
  globalFilter,
  setGlobalFilter,
  searchPlaceHolder
}) {
  const [value, setValue] = React.useState(globalFilter);
  const onChange = useAsyncDebounce(value => {
    setGlobalFilter(value || undefined);
  }, 200);

  return (
    <span>
      Search:{" "}
      <input
        value={value || ""}
        onChange={e => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        placeholder={searchPlaceHolder}
        style={{
          font: "400 1rem Open Sans",
          border: "1.5px solid white",
          borderRadius: "4px",
          width: "20rem"
        }}
      />
    </span>
  );
}

const Table = ({ columns, data, placeHolder }) => {
  // Use the state and functions returned from useTable to build the UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    visibleColumns,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
    },
    useFilters,
    useGlobalFilter,
    useSortBy
  );
  
  // Render the UI for the table
  return (
    <TableWrapper>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr key={"table-header"} {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th key={column} {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? <AiOutlineCaretDown />
                        : <AiOutlineCaretUp />
                      : ""}
                  </span>
                </th>
              ))}
            </tr>
          ))}
          <tr>
            <th
              colSpan={visibleColumns.length}
              style={{
                textAlign: "left",
                padding: "0.5rem 0.75rem",
              }}
            >
              <GlobalFilter
                globalFilter={state.globalFilter}
                setGlobalFilter={setGlobalFilter}
                searchPlaceHolder={placeHolder}
              />
            </th>
          </tr>
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr key={`row${i}`} {...row.getRowProps()}>
                {row.cells.map(cell => {
                  if( cell["column"]["id"] === "name" ){
                    return (
                      row["original"]["desc"] ?
                        <td {...cell.getCellProps()}>
                          <a 
                            href={row["original"]["link"]}
                            data-tip={row["original"]["desc"]}
                            data-for="mesh-name"
                          >
                            {cell.render("Cell")}
                          </a>
                          <ReactTooltip
                            id="mesh-name"
                            place="bottom"
                            effect="solid"
                            backgroundColor="rgb(60,73,79)"
                            className="mesh-tooltip"
                          />
                        </td>
                        :   <td {...cell.getCellProps()}>
                          <a href={row["original"]["link"]}>
                            {cell.render("Cell")}
                          </a>
                        </td>
                    );
                  } else if(cell["column"]["id"] === "tool"){
                    return <td {...cell.getCellProps()}>
                      <a href={row["original"]["link"]}>
                        {cell.render("Cell")}
                      </a>
                    </td>;
                  } else if(cell["value"] === "Project shutdown"){
                    return <td {...cell.getCellProps()}>
                      <a href={row["original"]["tmp_link"]}>
                        {cell.render("Cell")}
                      </a>
                    </td>;
                  } else if(cell["value"] === "Yes" || cell["value"] === "Full"){
                    return <td {...cell.getCellProps()}>
                      <img className="Mark" src={passingMark} /> 
                    </td>;
                  } else if(cell["value"] === "No" || cell["value"] === "None"){
                    return <td {...cell.getCellProps()}>
                      <img className="Mark" src={failingMark} /> 
                    </td>;
                  } else if(cell["value"] === "?"){
                    return <td {...cell.getCellProps()}>
                      <IconContext.Provider value={{color: "gray", size: "70%" }}>
                        <IoMdHelpCircle className="Mark"/>
                      </IconContext.Provider>
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