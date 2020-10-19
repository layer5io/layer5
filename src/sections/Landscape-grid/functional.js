import React from 'react'
import { meshes } from '../../collections/landscape/meshes'
import { non_functional } from '../../collections/landscape/non-functional'

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
                        <tr style={{ border: "1px dashed #a6b7be" }}>

                            <td>
                                <a href={`${mesh.link}`} title={`${mesh.desc}`}>{mesh.name}</a>
                            </td>
                            <td>{mesh.autoinject}</td>
                            <td>{mesh.tcp_web}</td>
                            <td>{mesh.h2}</td>
                            <td>{mesh.grpc}</td>
                            <td>{mesh.multi_cluster}</td>
                            <td>{mesh.multi_tenant}</td>
                            <td>{mesh.prometheus}</td>
                            <td>{mesh.tracing}</td>
                            <td>{mesh.tracing}</td>
                            <td>{mesh.encryption}</td>

                        </tr>
                    )}
                </tbody>
            </table>
            <span style={{ color: "#000" }}>Found a discrepancy, missing or out-dated information? Please
        <a href="https://github.com/layer5io/layer5/issues" style={{ color: "	#A9A9A9" }}>submit an issue</a>.</span>
        </div>
    )
}

export default Functional

