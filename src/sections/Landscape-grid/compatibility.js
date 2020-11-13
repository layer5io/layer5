import React from "react";
import { compatibility } from "../../collections/landscape/compatibility";

function Compatibilty() {
    return (
        <div>
            <div className="heading-container">
                <h2 className="white-text center landscape-category">Service Mesh interface Compatibility</h2>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Service Mesh</th>
                        <th>Traffic Access Control</th>
                        <th>Traffic Metrics</th>
                        <th>Traffic Split</th>
                        <th>Traffic Specs</th>

                    </tr>
                </thead>
                <tbody>
                    {compatibility.map(compatible =>
                        <tr style={{ border: "1px dashed #a6b7be" }} key={compatible.name}>
                            <th scope="row">{compatible.name}</th>
                            <td>
                                {compatible.taclink?

                                    <a href={`${compatible.taclink}`} target="_blank" rel="noreferrer">{compatible.tac}</a>

                                    :<></>}
                            </td>
                            <td>
                                {compatible.tmetricslink?

                                    <a href={`${compatible.tmetricslink}`} target="_blank" rel="noreferrer">{compatible.tmetrics}</a>

                                    :<></>}
                            </td>
                            <td>
                                {compatible.tsplitlink?

                                    <a href={`${compatible.tsplitlink}`} target="_blank" rel="noreferrer">{compatible.tsplit}</a>

                                    :<></>}
                            </td>
                            <td>
                                {compatible.tspeclink?

                                    <a href={`${compatible.tspeclink}`} target="_blank" rel="noreferrer">{compatible.tspec}</a>

                                    :<></>}
                            </td>



                        </tr>
                    )}
                </tbody>
            </table>
            <span style={{ color: "#000" }}>Found a discrepancy, missing or out-dated information? Please
                <a href="https://github.com/layer5io/layer5/issues" style={{ color: "	#A9A9A9" }}> submit an issue</a>.</span>
        </div>
    );
}

export default Compatibilty;

