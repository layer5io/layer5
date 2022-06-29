import React from "react";
import {Link} from "gatsby";
import layer5_img from "./layer5-white.png";

const sortByLen = (rowA, rowB, id, desc) => {

  if (rowA.original.subheading !== "bold") {
    if (rowA.original.subsection === rowB.original.subsection) {
      
      return desc ? rowA.original.service_mesh_pattern.localeCompare(rowB.original.service_mesh_pattern) : rowA.original.service_mesh_pattern.localeCompare(rowB.original.service_mesh_pattern) ;

    }
  }
};

export const Columns = [
  {
    Header:() => <span>Authors: <a href="https://twitter.com/lcalcote">Lee Calcote</a>, <a href="https://twitter.com/sheriffjackson">Nic Jackson</a></span>,
    columns: [
      {
        Header: "Service Mesh Pattern",
        accessor: "service_mesh_pattern",
        sortType: sortByLen,
      }
    ],
    accessor: "service_mesh"
  },
  {
    Header:() => <Link to="/"><img src={layer5_img} alt="layer5"/></Link>,
    columns: [
      {
        Header: "Category",
        accessor: "category",
        sortType: sortByLen,
        Filter: SelectColumnFilter
      }
    ],
    accessor: "category_column"
  }
];


// Filter for selecting category
function SelectColumnFilter({
  column: { filterValue, setFilter, preFilteredRows, id },
}) {
  // Calculate the options for filtering
  // using the preFilteredRows
  const options = React.useMemo(() => {
    const option = new Set();
    preFilteredRows.forEach(row => {
      option.add(row.values[id]);
    });
    return [...option.values()];
  }, [id, preFilteredRows]);

  // Render a multi-select box
  return (
    <select
      value={filterValue}
      onChange={e => {
        setFilter(e.target.value || undefined);
      }}
    >
      <option value="">All</option>
      {options.map((option, i) => (
        <option key={i} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}
