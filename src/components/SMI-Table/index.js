import React, { useState } from "react";
import { useTable } from "react-table";
import { IoMdHelpCircle } from "react-icons/io";
import { IconContext } from "react-icons";
import { TableWrapper } from "./SMITable.style";
import halfMark from "../../assets/images/landscape/half.svg";
import passingMark from "../../assets/images/landscape/passing.svg";
import failingMark from "../../assets/images/landscape/failing.svg";
import { non_functional } from "../../collections/landscape/non-functional";
import ServiceMeshIcon from "../../assets/images/service-mesh-icons/service-mesh.svg";
import ReactTooltip from "react-tooltip";

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
                      non_functional.find(ele => ele.name.includes(row.original.mesh_name)) ?
                        <img className="smiMark" src={non_functional.find(ele => ele.name.includes(row.original.mesh_name)).icon} />
                        :<img className="smiMark" src={ServiceMeshIcon} />
                    }
                  </td>
                  <td>{row.original.mesh_version}</td>
                  {row.original.more_details.map(spec => {
                    if(spec["capability"] === "FULL"){
                      return <td>
                        <div className="tooltip">
                          <img data-for="capablity" data-tip={`${spec["result"]}`} className="smiMark" src={passingMark} />
                          <ReactTooltip 
                            id="capablity"
                            place="bottom"
                            effect="solid"
                            multiline
                            backgroundColor="rgb(60,73,79)"
                            className="smi-tooltip"
                          />
                        </div>
                            
                      </td>;
                    } else if (spec["capability"] === "NONE") {
                      return <td >
                        <div >
                          <img data-for="capablity" data-tip={`${spec["reason"]}<br>${spec["result"]}`} className="smiMark" src={failingMark} />
                          <ReactTooltip 
                            id="capablity"
                            place="bottom"
                            effect="solid"
                            multiline
                            wrapper="span"

                            backgroundColor="rgb(60,73,79)"
                            className="smi-tooltip"
                          />
                        </div>
                      </td>;
                    } else if(spec["capability"] === "HALF"){
                      return <td>
                        <div className="tooltip">
                          <img data-for="capablity" data-tip={`${spec["reason"]}<br>${spec["result"]}`} className="smiMark" src={halfMark} />
                          <ReactTooltip 
                            id="capablity"
                            place="bottom"
                            effect="solid"
                            multiline
                            backgroundColor="rgb(60,73,79)"
                            className="smi-tooltip"
                          />
                        </div>
                      </td>;
                    } else {
                      return <td >
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
                        {prevResult.more_details.map(spec => {
                          if(spec["capability"] === "Full"){
                            return <td key="capability-half">
                              <img className="smiMark" src={passingMark} />
                            </td>;
                          } else if(spec["capability"] === "None"){
                            return <td>
                              <img key="capability-none" className="smiMark" src={failingMark} />
                            </td>;
                          } else if(spec["capability"] === "Half"){
                            return <td>
                              <img key="capability-half" className="smiMark" src={halfMark} />
                            </td>;
                          } else {
                            return <td >
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