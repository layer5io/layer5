import React from "react";
import { tools_data } from "../../collections/landscape/tools-data";
import Table from "../../components/Landscape-Table";

function Tools() {

    const columns = React.useMemo(
        () => [
            {
                Header: "Tool",
                accessor: "tool",
            },
            {
                Header: "Written In",
                accessor: "language",
            },
            {
                Header: "Written For",
                accessor: "written_for",
            },
            {
                Header: "Supported By",
                accessor: "supported_by",
            },
            {
                Header: "Description",
                accessor: "desc",
            },
        ],
        []
    );

    const data = React.useMemo(() => tools_data);

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

export default Tools;

