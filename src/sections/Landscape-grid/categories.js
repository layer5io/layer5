import React from 'react'
import { clients } from '../../collections/landscape/clients'
import { meshes } from '../../collections/landscape/meshes'
import { getways } from '../../collections/landscape/getways'
import { proxies } from '../../collections/landscape/proxies'
import { load_balancer } from '../../collections/landscape/load-balancer'

function Categories() {
    return (
        <div>
            <div className="heading-container">
                <h2 className="white-text center landscape-category">Categories</h2>
            </div>
            <div className="card-content">
                <ul className="category">
                    Service Mesh<br />
                    {meshes.map(mesh => (
                        mesh.name?
                            <li key={mesh.name}>
                                <div className="tooltip">
                                    <a href={`${mesh.link}`}>{mesh.name}</a>
                                    <span className="tooltiptext">{mesh.desc}</span></div>
                            </li>
                            :<></>
                    )
                    )}
                </ul>
            </div>
            <div className="card-content comparison">
                <ul className="category">
                    Client Library<br />
                    {clients.map(client => (
                        client.name?
                            <li key={client.name}>
                                <div className="tooltip">
                                    <a href={`${client.link}`}>{client.name}</a>
                                    <span className="tooltiptext">{client.desc}</span>
                                </div>
                            </li>
                            :<></>
                    ))}
                </ul>
            </div>
            <div className="card-content comparison">
                <ul className="category">
                    API Gateway<br />
                    {getways.map(getway => (
                        getway.name?
                            <li key={getway.name}>
                                <div className="tooltip">
                                    <a href={`${getway.link}`}>{getway.name}</a>
                                    <span className="tooltiptext">{getway.desc}</span>
                                </div>
                            </li>
                            :<></>
                    ))}
                </ul>
            </div>
            <div className="card-content comparison">
                <ul className="category">
                    Service Proxy<br />
                    {proxies.map(proxy => (
                        proxy.name?
                            <li key={proxy.name}>
                                <div className="tooltip">
                                    <a href={`${proxy.link}`}>{proxy.name}</a>
                                    <span className="tooltiptext">{proxy.desc}</span>
                                </div>
                            </li>
                            :<></>
                    ))}
                </ul>
            </div>
            <div className="card-content comparison">
                <ul className="category">
                    Load Balancer<br />
                    {load_balancer.map(balancer => (
                        balancer.name?
                            <li key={balancer.name}>
                                <div className="tooltip">
                                    <a href={`${balancer.link}`}>{balancer.name}</a>
                                    <span className="tooltiptext">{balancer.desc}</span>
                                </div>
                            </li>
                            :<></>
                    ))}
                </ul>
            </div>
            <span style={{ color: "#000" }}>Found a discrepancy, missing or out-dated information? Please
    <a href="https://github.com/layer5io/layer5/issues" style={{ color: "#A9A9A9" }}>submit an issue</a>.</span>
        </div>
    )
}

export default Categories
