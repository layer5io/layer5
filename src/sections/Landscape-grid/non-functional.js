import React from "react";
import { non_functional } from "../../collections/landscape/non-functional";
import Table from "../../components/Landscape-Table";

function NonFunctional() {

    const columns = React.useMemo(
        () => [
            {
                Header: "Category",
                accessor: "category",
            },
            {
                Header: "Name",
                accessor: "name",
            },
            {
                Header: "Open source",
                accessor: "opensource",
            },
            {
                Header: "Governance",
                accessor: "governance",
            },
            {
                Header: "Primary Language",
                accessor: "primary_lang",
            },
            {
                Header: "Project Announce",
                accessor: "announce_date",
            },
            {
                Header: "GA/1.0",
                accessor: "ga_1_date",
            },
            {
                Header: "Commercial Offerings",
                accessor: "commercial",
            },
        ],
        []
    );
    
    const data = React.useMemo(() => non_functional);

    return (
        <React.Fragment>
            <Table columns={columns} data={data} />
            <span style={{ color: "#000" }}>
				Found a discrepancy, missing or out-dated information? Please
                <a href="https://github.com/layer5io/layer5/issues"> submit an issue.</a>
            </span>
        </React.Fragment>
    );
}

export default NonFunctional;
