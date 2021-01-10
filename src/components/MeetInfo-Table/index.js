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
            <h1 className="meetings-table-title">Layer5 Meetings</h1>
            <h3 className="meetings-table-subtitle">Everyone is welcome to join. Engage!</h3>
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
                                    if( cell["column"]["id"] === "meeting" ){
                                        return <td {...cell.getCellProps()}>
                                            {cell.render("Cell")}
                                        </td>;
                                    }
                                    else if(cell["column"]["id"] === "slack_channel"){
                                        return <td {...cell.getCellProps()}>
                                            <a href={row["original"]["slack_link"]}>
                                                {cell.render("Cell")}
                                            </a>
                                        </td>;
                                    }
                                    else if(cell["column"]["id"] === "meeting_minutes"){
                                        return <td {...cell.getCellProps()}>
                                            <a href={row["original"]["meeting_minutes"]}>
                                                {cell.render("Cell", {value: "Minutes"})}
                                            </a>
                                        </td>;
                                    }
                                    else if(cell["column"]["id"] === "meeting_link"){
                                        return <td {...cell.getCellProps()}>
                                            <a href={row["original"]["meeting_link"]}>
                                                {cell.render("Cell", {value: "Zoom"})}
                                            </a>
                                        </td>;
                                    }
                                    else if(cell["column"]["id"] === "meeting_recordings"){
                                        if(row["original"]["slack_channel"] === "#smi") {
                                            return <td {...cell.getCellProps()}>
                                                {cell.render("Cell", {value: "N/A"})}
                                            </td>;
                                        }
                                        return <td {...cell.getCellProps()}>
                                            <a href={row["original"]["meeting_recordings"]}>
                                                {cell.render("Cell", {value: "Youtube"})}
                                            </a>
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
