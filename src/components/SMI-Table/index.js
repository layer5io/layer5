import React, { useState } from "react";
import { useTable } from "react-table";
import { IoMdHelpCircle } from "@react-icons/all-files/io/IoMdHelpCircle";
import { IconContext } from "@react-icons/all-files";
import { TableWrapper } from "./SMITable.style";
import { non_functional } from "../../collections/landscape/non-functional";
import { Tooltip } from "react-tooltip";
// import { StaticImage } from "gatsby-plugin-image";

import halfMark from "../../assets/images/landscape/half.svg";
import passingMark from "../../assets/images/landscape/passing.svg";
import failingMark from "../../assets/images/landscape/failing.svg";
import ServiceMeshIcon from "../../assets/images/service-mesh-icons/service-mesh.svg";

// const halfMark = "../../assets/images/landscape/half.svg";
// const passingMark = "../../assets/images/landscape/passing.svg";
// const failingMark = "../../assets/images/landscape/failing.svg";
// const ServiceMeshIcon = "../../assets/images/service-mesh-icons/service-mesh.svg";

const Table = ({ columns, data, spec }) => {
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
              {headerGroup.headers.map((column) => {
                if (column.Header == "Traffic Access" || column.Header == "Traffic Split" || column.Header == "Traffic Spec") {
                  return <th key={column} {...column.getHeaderProps()}>{column.render("Header")} <div style={{ fontSize: "0.9rem", fontWeight: "500" }}>{spec[column.id]}</div></th>;
                } else {
                  return <th key={column} {...column.getHeaderProps()}>{column.render("Header")}</th>;
                }
              }
              )}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <React.Fragment key={`row${i}`}>
                <tr key={`row${i}`} id={`row${i}`} className="primaryRow" {...row.getRowProps()} onClick={() => {
                  let e = isCollapsed; e[i] = !isCollapsed[i]; setCollapse([...e]);
                }}>
                  <td>
                    {
                      (non_functional.find(ele => ele.name.includes(row.original.mesh_name))) ?
                        <>
                          <img data-tooltip-id="react-tooltip" data-tooltip-content={row.original.mesh_name} className="smiMark" src={non_functional.find(ele => ele.name.includes(row.original.mesh_name)).icon} alt="Mesh Icon" />
                          <Tooltip
                            id="react-tooltip"
                            place="bottom"
                            style={{ backgroundColor: "rgb(60,73,79)" }}
                            className="smi-tooltip"
                          />
                        </>
                        : <>
                          <img data-tooltip-id="react-tooltip" data-tooltip-content={"Service Mesh"} className="smiMark" src={ServiceMeshIcon} alt="Service Mesh" />
                          <Tooltip
                            id="react-tooltip"
                            place="bottom"
                            style={{ backgroundColor: "rgb(60,73,79)" }}
                            className="smi-tooltip"
                          />
                        </>
                    }
                  </td>
                  <td>{row.original.mesh_version}</td>
                  {row.original.more_details.map((spec,i) => {
                    if (spec["capability"] === "FULL"){
                      return <td key={`spec${i}`}>
                        <div className="tooltip-div" data-tooltip-id="react-tooltip" data-tooltip-content={`${spec["result"]}`}>
                          <img className="smiMark" src={passingMark} alt="Pass Mark" />
                        </div>
                      </td>;
                    } else if (spec["capability"] === "HALF"){
                      return <td key={`spec${i}`}>
                        <div className="tooltip-div" data-tooltip-id="react-tooltip" data-tooltip-content={`${spec["reason"]}<br>${spec["result"]}`}>
                          <img className="smiMark" src={halfMark} alt="Half Mark" />
                        </div>
                      </td>;
                    } else if (spec["capability"] === "NONE") {
                      return <td key={`spec${i}`}>
                        <div className="tooltip-div" data-tooltip-id="react-tooltip" data-tooltip-content={`${spec["reason"]}<br>${spec["result"]}`}>
                          <img className="smiMark" src={failingMark} alt="Fail Mark" />
                        </div>
                      </td>;
                    } else {
                      return <td key={`spec${i}`}>
                        <IconContext.Provider value={{ color: "gray", size: "20px" }}>
                          <IoMdHelpCircle />
                        </IconContext.Provider>
                      </td>;
                    }
                  })
                  }
                  <td>{row.original.passing_percentage}</td>
                </tr>

                {
                  row.original.previous_versions && row.original.previous_versions.map(prevResult => {
                    return (
                      <tr key={`collapse-row${i}`} className={isCollapsed[i] ? "secondaryRow" : "secondaryRow-hidden"} >
                        <td></td>
                        <td>{prevResult.mesh_version}</td>
                        {prevResult.more_details.map((spec,i) => {
                          if (spec["capability"] === "Full"){
                            return <td key={`spec${i}`}>
                              <img className="smiMark" src={passingMark} alt="Passing Mark" />
                            </td>;
                          } else if (spec["capability"] === "None"){
                            return <td key={`spec${i}`}>
                              <img className="smiMark" src={failingMark} alt="Fail Mark" />
                            </td>;
                          } else if (spec["capability"] === "Half"){
                            return <td key={`spec${i}`}>
                              <img className="smiMark" src={halfMark} alt="Half Mark" />
                            </td>;
                          } else {
                            return <td key={`spec${i}`}>
                              <IconContext.Provider value={{ color: "gray", size: "20px" }}>
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