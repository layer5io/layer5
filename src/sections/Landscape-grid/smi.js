import React from "react";
import { smi_data } from "../../collections/landscape/smi";
import Table from "../../components/Landscape-Table";

function SMI_Compatibility() {

    const columns = React.useMemo(
        () => [
            {
                Header: "Service Mesh",
                accessor: "mesh_name",
            },
            {
                Header: "Mesh Version",
                accessor: "mesh_version",
            },
            {
                Header: "Traffic Access",
                accessor: "traffic-access",
            },
            {
                Header: "Traffic Split",
                accessor: "traffic-split",
            },
            {
                Header: "Traffic Spec",
                accessor: "traffic-spec",
            },
            {
                Header: "% Passed",
                accessor: "passing_percentage",
            },
        ],
        []
    );
    
    const data = React.useMemo(() => smi_data);

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

export default SMI_Compatibility;

