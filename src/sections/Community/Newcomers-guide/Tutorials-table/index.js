import React from "react";
import { Link } from "gatsby";
import { useTable } from "react-table";
import data from "../../../../assets/data/tutorials";
import { TutorialsTableWrapper, NewChip } from "./TutorialsTable.style";

const toDate = (str) => {
  const cleaned = str
    .replace(/(\d+)(st|nd|rd|th)/, "$1")
    .replace(/\./g, "")
    .trim();

  return new Date(cleaned);
};

const THIRTY_DAYS = 1000 * 60 * 60 * 24 * 30;


const TutorialsTable = () => {

  const sortedData = React.useMemo(() => {
    return [...data].sort((a, b) => toDate(b.date) - toDate(a.date));
  }, []);

  const columns = React.useMemo(
    () => [
      {
        Header: "Topic",
        accessor: "topic",
        Cell: ({ row, value }) => {
          const isNew = Date.now() - toDate(row.original.date).getTime() < THIRTY_DAYS;
          return (
            <div className="topic-cell">
              <span>{value}</span>
              {isNew && <NewChip>New</NewChip>}
            </div>
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

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data: sortedData,
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
