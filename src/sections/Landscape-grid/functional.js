import React from "react";
import { meshes } from "../../collections/landscape/meshes";
import Table from "../../components/Landscape-Table";

function generate_col(url, value) {
    if (url) {
        return <td style={{ textAlign: "center" }}><a href={`${url}`}><i>{value}</i></a></td>;
    } else {
        return <td style={{ textAlign: "center" }}>{value}</td>;
    }
}

function Functional() {

    const columns = React.useMemo(
        () => [
            {
                Header: "Service Mesh",
                accessor: "name",
            },
            {
                Header: "Auto Proxy Injection",
                accessor: "autoinject",
            },
            {
                Header: "TCP + WebSockets",
                accessor: "tcp_web",
            },
            {
                Header: "HTTP, HTTP/2",
                accessor: "h2",
            },
            {
                Header: "gRPC",
                accessor: "grpc",
            },
            {
                Header: "Multi-Cluster",
                accessor: "multi_cluster",
            },
            {
                Header: "Multi-Tenant",
                accessor: "multi_tenant",
            },
            {
                Header: "Prometheus Integration",
                accessor: "prometheus",
            },
            {
                Header: "Tracing Integration",
                accessor: "tracing",
            },
            {
                Header: "Encryption",
                accessor: "encryption",
            },
        ],
        []
    );

    const data = React.useMemo(() => meshes);

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

export default Functional;

