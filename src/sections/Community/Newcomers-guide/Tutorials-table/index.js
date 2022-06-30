import React from "react";
import { Link } from "gatsby";
import { useTable } from "react-table";
import data from "../../../../assets/data/tutorials";
import { TutorialsTableWrapper } from "./TutorialsTable.style";

const TutorialsTable = () => {

  const columns = React.useMemo(
    () => [
      {
        Header: "Topic",
        accessor: "topic",
      },
      {
        Header: "Resources",
        id: "resources",
        accessor: data => {
          return (
            <p>
              {data.resources.slides ? <span><a href={data.resources.slides} target="_blank" rel="noreferrer">Slides</a></span>: ""}
              {data.resources.recording ? <span><a href={data.resources.recording} target="_blank" rel="noreferrer">Recording</a></span> : ""}
            </p>
          );
        }
      },
      {
        Header: "Presenters",
        id: "presenters",
        accessor: data => {
          let output = [];
          data.presenters.map(presenter => {
            const e = presenter.link ? <Link to={presenter.link}>{presenter.name}</Link> : presenter.name;
            output.push(<span>{e}</span>);
          });
          return output;
        }
      },
    ],
    []
  );

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
    <TutorialsTableWrapper>
      <table {...getTableProps()}>
        <thead>

          {headerGroups.map((headerGroup,index) => (
            <tr key={index} {...headerGroup.getHeaderGroupProps()}>
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
                  return (
                    <td key={index} {...cell.getCellProps()}>
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </TutorialsTableWrapper>
  );
};

export default TutorialsTable;
