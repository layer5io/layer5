import React from "react";
import { Link } from "gatsby";
import { useTable } from "react-table";
import data from "../../../../assets/data/tutorials";
import { TutorialsTableWrapper } from "./TutorialsTable.style";

const TutorialsTable = () => {

  const columns = React.useMemo(
    () => [
      {
        Header: "Date",
        accessor: "date",
        Cell: ({ value }) => {
          const parsedDate = new Date(value);
          return (
            <span>
              {parsedDate.toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </span>
          );
        }
      },
      {
        Header: "Topic",
        accessor: "topic",
        Cell: ({ row, value }) => {
          const parsedDate = new Date(row.original.date);
          const thisYear = new Date().getFullYear();
          const isNew = parsedDate.getFullYear() === thisYear;

          return (
            <span className="newBadge">
              {value}
              {isNew && (
                <img
                  src="/images/new-badge.png"
                  alt="New"
                />
              )}
            </span>
          );
        },
      },
      {
        Header: "Resources",
        id: "resources",
        accessor: data => {
          return (
            <p>
              {data.resources.slides ? <span><a href={data.resources.slides} target="_blank" rel="noreferrer">Slides</a></span> : ""}
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
  const sortedData = React.useMemo(() => {
    return [...data].sort((a, b) => new Date(b.date) - new Date(a.date));
  }, []);

  const tableInstance = useTable({ columns, data: sortedData });
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = tableInstance;


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

