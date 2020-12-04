import React from "react";
import { useTable } from "react-table";
import ReactTooltip from "react-tooltip";
import { FaCheckCircle } from "react-icons/fa";
import { RiCloseCircleFill } from "react-icons/ri";
import { IoMdHelpCircle } from "react-icons/io";
import { IconContext } from "react-icons";
import { TableWrapper } from "./LandscapeTable.style";

const Table = ({ columns, data }) => {
    // Use the state and functions returned from useTable to build the UI
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
  
    // Render the UI for the table
    return (
        <TableWrapper>
            <table {...getTableProps()}>
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr key={"table-header"} {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                <th key={column} {...column.getHeaderProps()}>{column.render("Header")}</th>
                            ))}
                        </tr>
                    ))}
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
                                    }
                                    else if(cell["column"]["id"] === "tool"){
                                        return <td {...cell.getCellProps()}>
                                            <a href={row["original"]["link"]}>
                                                {cell.render("Cell")}
                                            </a>
                                        </td>;
                                    }
                                    else if(cell["value"] === "Project shutdown"){
                                        return <td {...cell.getCellProps()}>
                                            <a href={row["original"]["tmp_link"]}>
                                                {cell.render("Cell")}
                                            </a>
                                        </td>;
                                    }
                                    else if(cell["value"] === "Yes" || cell["value"] === "Full"){
                                        return <td {...cell.getCellProps()}>
                                            <IconContext.Provider value={{color: "green", size: "18px"}}>
                                                <FaCheckCircle />
                                            </IconContext.Provider>
                                        </td>;
                                    }
                                    else if(cell["value"] === "No" || cell["value"] === "None"){
                                        return <td {...cell.getCellProps()}>
                                            <IconContext.Provider value={{color: "red", size: "20px"}}>
                                                <RiCloseCircleFill />
                                            </IconContext.Provider>
                                        </td>;
                                    }
                                    else if(cell["value"] === "?"){
                                        return <td {...cell.getCellProps()}>
                                            <IconContext.Provider value={{color: "gray", size: "20px" }}>
                                                <IoMdHelpCircle />
                                            </IconContext.Provider>
                                        </td>;
                                    }
                                    else {
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