import React from 'react'
import { non_functional } from '../../collections/landscape/non-functional'

function NonFunctional() {
    return (
        <div>
            <div className="heading-container">
                <h2 className="white-text center landscape-category">Non Functional</h2>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Category</th>
                        <th>Name</th>
                        <th>Open Source</th>
                        <th>Governance</th>
                        <th>Primary Language</th>
                        <th>Project Announce</th>
                        <th>GA / 1.0</th>
                        <th>Commercial Offerings</th>
                    </tr>

                </thead>
                <tbody>
                    {non_functional.map(non_func =>
                        <tr key={non_func.name}>
                            <td style={{ textAlign: "center" }}>{non_func.category}</td>
                            <td>
                                <a href={`${non_func.link}`} title={`${non_func.link}`}>{non_func.name}</a>
                            </td>
                            <td style={{ textAlign: "center" }}>{non_func.opensource}</td>
                            <td style={{ textAlign: "center" }}>{non_func.governance}</td>
                            <td style={{ textAlign: "center" }}>{non_func.primary_lang}</td>
                            <td style={{ textAlign: "center" }}>{non_func.announce_date}</td>
                            <td style={{ textAlign: "center" }}>{non_func.ga_1_date}</td>
                            <td style={{ textAlign: "center" }}>{non_func.commercial}</td>
                        </tr>
                    )}
                </tbody>
            </table>
            <span style={{ color: "#000" }}>Found a discrepancy, missing or out-dated information? Please
        <a href="https://github.com/layer5io/layer5/issues" style={{ color: "	#A9A9A9" }}>submit an issue</a>.</span>
        </div>
    )
}

export default NonFunctional
