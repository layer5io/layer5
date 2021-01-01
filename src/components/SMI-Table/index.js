import React, {useState} from "react";
import { useTable } from "react-table";
import { IoMdHelpCircle } from "react-icons/io";
import { IconContext } from "react-icons";
import { TableWrapper } from "./SMITable.style";
import halfMark from "../../assets/images/landscape/half.svg";
import passingMark from "../../assets/images/landscape/passing.svg";
import failingMark from "../../assets/images/landscape/failing.svg";

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
    const [isCollapsed, setCollapse] = useState(new Array(rows.length).fill(false));
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
                            <React.Fragment key={`row${i}`}>
                                <tr key={`row${i}`} id={`row${i}`} className="primaryRow" {...row.getRowProps()} onClick={() => {let e=isCollapsed;e[i]=!isCollapsed[i];setCollapse([...e]);}}>
                                    <td>{row.original.mesh_name}</td>
                                    <td>{row.original.mesh_version}</td>
                                    {row.original.more_details.map(spec => {
                                        if(spec["capability"] === "Full"){
                                            return <td>
                                                <img className="smiMark" src={passingMark} />    
                                            </td>;
                                        }
                                        else if(spec["capability"] === "None"){
                                            return <td >
                                                <img className="smiMark" src={failingMark} />
                                            </td>;
                                        }
                                        else if(spec["capability"] === "Half"){
                                            return <td><img className="smiMark" src={halfMark} />
                                            </td>;
                                        }
                                        else {
                                            return <td >
                                                <IconContext.Provider value={{color: "gray", size: "20px" }}>
                                                    <IoMdHelpCircle />
                                                </IconContext.Provider>
                                            </td>;
                                        }
                                    })
                                    }
                                    <td>{row.original.passing_percentage}</td>
                                </tr>

                                {
                                    row.original.previous_versions.map(prevResult => {
                                        return (
                                            <tr key={`collapse-row${i}`}  className={isCollapsed[i] ? "secondaryRow" : "secondaryRow-hidden"} >
                                                <td></td>
                                                <td>{prevResult.mesh_version}</td>
                                                {prevResult.more_details.map(spec => {
                                                    if(spec["capability"] === "Full"){
                                                        return <td>
                                                            <img className="smiMark" src={passingMark} />
                                                        </td>;
                                                    }
                                                    else if(spec["capability"] === "None"){
                                                        return <td>
                                                            <img className="smiMark" src={failingMark} />
                                                        </td>;
                                                    }
                                                    else if(spec["capability"] === "Half"){
                                                        return <td>
                                                            <img className="smiMark" src={halfMark} />
                                                        </td>;
                                                    }
                                                    else {
                                                        return <td >
                                                            <IconContext.Provider value={{color: "gray", size: "20px" }}>
                                                                <IoMdHelpCircle />
                                                            </IconContext.Provider>
                                                        </td>;
                                                    }
                                                })}
                                                <td>{prevResult.passing_percentage}</td>
                                            </tr>
                                        );
                                    })
                                }

                            </React.Fragment>
                        );
                    })}
                </tbody>
            </table>
        </TableWrapper>
    );
};

export default Table;