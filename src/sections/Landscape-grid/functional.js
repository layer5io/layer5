import React from "react";
import { meshes } from "../../collections/landscape/meshes";
import { TiTick, TiTimes } from 'react-icons/ti'

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

                            <td>
                                {
                                    mesh.autoinject==="Yes"? <TiTick color="#00FF00" />:mesh.autoinject==="No"? <TiTimes color="#FF0000" />:mesh.autoinject
                                }
                            </td>

                            <td>
                                {
                                    mesh.tcp_web==="Yes"? <TiTick color="#00FF00" />:mesh.tcp_web==="No"? <TiTimes color="#FF0000" />:mesh.tcp_web
                                }
                            </td>
                            <td>
                                {
                                    mesh.h2==="Yes"? <TiTick color="#00FF00" />:mesh.h2==="No"? <TiTimes color="#FF0000" />:mesh.h2
                                }
                            </td>
                            <td>
                                {
                                    mesh.grpc==="Yes"? <TiTick color="#00FF00" />:mesh.grpc==="No"? <TiTimes color="#FF0000" />:mesh.grpc
                                }
                            </td>
                            <td>

                                {
                                    mesh.multi_cluster==="Yes"? <TiTick color="#00FF00" />:mesh.multi_cluster==="No"? <TiTimes color="#FF0000" />:mesh.multi_cluster
                                }
                            </td>
                            <td>
                                {
                                    mesh.multi_tenant==="Yes"? <TiTick color="#00FF00" />:mesh.multi_tenant==="No"? <TiTimes color="#FF0000" />:mesh.multi_tenant
                                }
                            </td>
                            <td>
                                {
                                    mesh.prometheus==="Yes"? <TiTick color="#00FF00" />:mesh.prometheus==="No"? <TiTimes color="#FF0000" />:mesh.prometheus
                                }
                            </td>
                            <td>
                                {
                                    mesh.tracing==="Yes"? <TiTick color="#00FF00" />:mesh.tracing==="No"? <TiTimes color="#FF0000" />:mesh.tracing
                                }
                            </td>

                            <td>
                                {
                                    mesh.encryption==="Yes"? <TiTick color="#00FF00" />:mesh.encryption==="No"? <TiTimes color="#FF0000" />:mesh.encryption
                                }
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
            <span style={{ color: "#000" }}>Found a discrepancy, missing or out-dated information? Please
                <a href="https://github.com/layer5io/layer5/issues" style={{ color: "	#A9A9A9" }}>submit an issue</a>.</span>
        </div>
    );
}

export default Functional;

