import React from "react";
import layer5_img from "./layer5-white.png";

export const Columns = [
    {
        Header:()=> <span>Authors: <a href="https://twitter.com/lcalcote">Lee Calcote</a>, <a href="https://twitter.com/sheriffjackson">Nic Jackson</a></span>,
        columns: [
            {
                Header: "Service Mesh Pattern",
                accessor: "service_mesh_pattern"
            }
        ],
        accessor: "service_mesh"
    },
    {
        Header:()=> <a href="https://layer5.io"><img src={layer5_img} alt="layer5"/></a>,
        columns: [
            {
                Header: "Category",
                accessor: "category",
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