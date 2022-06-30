import React from "react";
import { meshes } from "../../collections/landscape/meshes";
import Table from "../../components/Landscape-Table";

function Functional() {

  const columns = React.useMemo(
    () => [
      {
        Header : "Service Mesh",
        accessor : "name",
      },
      {
        Header : "Auto Proxy Injection",
        accessor : "autoinject",
      },
      {
        Header : "TCP + WebSockets",
        accessor : "tcp_web",
      },
      {
        Header : "HTTP, HTTP/2",
        accessor : "h2",
      },
      {
        Header : "gRPC",
        accessor : "grpc",
      },
      {
        Header : "Multi-Cluster",
        accessor : "multi_cluster",
      },
      {
        Header : "Multi-Tenant",
        accessor : "multi_tenant",
      },
      {
        Header : "Prometheus Integration",
        accessor : "prometheus",
      },
      {
        Header : "Tracing Integration",
        accessor : "tracing",
      },
      {
        Header : "Encryption",
        accessor : "encryption",
      },
      {
        Header : "SPIFFE",
        accessor : "spiffe",
      },
      {
        Header : "SPIRE",
        accessor : "spire",
      }
    ],
    []
  );

  const data = React.useMemo(() => meshes);

  return (
    <Table columns={columns} data={data} placeHolder="Find your mesh..." />
  );
}

export default Functional;

