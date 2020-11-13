import React from "react";
import { meshes } from "../../collections/landscape/meshes";

function generate_col(url, value) {
    if (url) {
        return <td style={{ textAlign: "center" }}><a href={`${url}`}><i>{value}</i></a></td>
    } else {
        return <td style={{ textAlign: "center" }}>{value}</td>
    }
}

function Functional() {
    return (
        <div>
            <div className="heading-container">
                <h2 className="white-text center landscape-category">Functional</h2>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Service Mesh</th>
                        <th>Auto Proxy Injection</th>
                        <th>TCP + WebSockets</th>
                        <th>HTTP, HTTP/2</th>
                        <th>gRPC</th>
                        <th>Multi-Cluster</th>
                        <th>Multi-Tenant</th>
                        <th>Prometheus Integration</th>
                        <th>Tracing Integration</th>
                        <th>Encryption</th>
                    </tr>
                </thead>
                <tbody>
                    {meshes.map(mesh =>
                        <tr style={{ border: "1px dashed #a6b7be" }} key={mesh.name}>
                            <td>
                                <a href={`${mesh.link}`} title={`${mesh.desc}`}>{mesh.name}</a>
                            </td>  
                                          
                            {generate_col(mesh.expired_url, mesh.autoinject)}
                            {generate_col(mesh.expired_url, mesh.tcp_web)}
                            {generate_col(mesh.expired_url, mesh.h2)}
                            {generate_col(mesh.expired_url, mesh.grpc)}
                            {generate_col(mesh.expired_url, mesh.multi_cluster)}
                            {generate_col(mesh.expired_url, mesh.multi_tenant)}
                            {generate_col(mesh.expired_url, mesh.prometheus)}
                            {generate_col(mesh.expired_url, mesh.tracing)}
                            {generate_col(mesh.expired_url, mesh.encryption)}
                            
                        </tr>
                    )}
                </tbody>
            </table>
            <span style={{ color: "#000" }}>Found a discrepancy, missing or out-dated information? Please
                <a href="https://github.com/layer5io/layer5/issues" style={{ color: "	#A9A9A9" }}> submit an issue</a>.</span>
        </div>
    );
}

export default Functional;

