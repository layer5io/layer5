import React from "react";
import { clients } from "../../collections/landscape/clients";
import { meshes } from "../../collections/landscape/meshes";
import { gateways } from "../../collections/landscape/gateways";
import { proxies } from "../../collections/landscape/proxies";
import { load_balancer } from "../../collections/landscape/load-balancer";
import { Tooltip } from "react-tooltip";

function Categories() {
  return (
    <React.Fragment>
      <div>
        <div className="odd-row">
          <h4 className="category-row-heading">Service Mesh</h4>
          <ul className="category">
            {meshes.map(mesh => (
              mesh.name ?
                <li key={mesh.name}>
                  <div className="tooltip">
                    <a href={mesh.link} rel="nofollow" data-tooltip-content={mesh.desc} data-tooltip-id="mesh-name">{mesh.name}</a>
                    <Tooltip
                      id="mesh-name"
                      place="bottom"

                      style={{ backgroundColor: "rgb(60,73,79)" }}
                      className="mesh-tooltip"
                    />
                  </div>
                </li>
                : <></>
            )
            )}
          </ul>
        </div>
        <div className="even-row">
          <h4 className="category-row-heading">Client Library</h4>
          <ul className="category">
            {clients.map(client => (
              client.name ?
                <li key={client.name}>
                  <div className="tooltip">
                    <a href={client.link} rel="nofollow" data-tooltip-content={client.desc} data-tooltip-id="client-name">{client.name}</a>
                    <Tooltip
                      id="client-name"
                      place="bottom"

                      style={{ backgroundColor: "rgb(60,73,79)" }}
                      className="mesh-tooltip"
                    />
                  </div>
                </li>
                : <></>
            ))}
          </ul>
        </div>
        <div className="odd-row">
          <h4 className="category-row-heading">API Gateway</h4>
          <ul className="category">
            {gateways.map(gateway => (
              gateway.name ?
                <li key={gateway.name}>
                  <div className="tooltip">
                    <a href={gateway.link} rel="nofollow" data-tooltip-content={gateway.desc} data-tooltip-id="gateway-name">{gateway.name}</a>
                    <Tooltip
                      id="gateway-name"
                      place="bottom"

                      style={{ backgroundColor: "rgb(60,73,79)" }}
                      className="mesh-tooltip"
                    />
                  </div>
                </li>
                : <></>
            ))}
          </ul>
        </div>
        <div className="even-row">
          <h4 className="category-row-heading">Service Proxy</h4>
          <ul className="category">
            {proxies.map(proxy => (
              proxy.name ?
                <li key={proxy.name}>
                  <div className="tooltip">
                    <a href={proxy.link} rel="nofollow" data-tooltip-content={proxy.desc} data-tooltip-id="proxy-name">{proxy.name}</a>
                    <Tooltip
                      id="proxy-name"
                      place="bottom"

                      style={{ backgroundColor: "rgb(60,73,79)" }}
                      className="mesh-tooltip"
                    />
                  </div>
                </li>
                : <></>
            ))}
          </ul>
        </div>
        <div className="odd-row">
          <h4 className="category-row-heading">Load Balancer</h4>
          <ul className="category">
            {load_balancer.map(balancer => (
              balancer.name ?
                <li key={balancer.name}>
                  <div className="tooltip">
                    <a href={balancer.link} rel="nofollow" data-tooltip-content={balancer.desc} data-tooltip-id="balancer-name">{balancer.name}</a>
                    <Tooltip
                      id="balancer-name"
                      place="bottom"

                      style={{ backgroundColor: "rgb(60,73,79)" }}
                      className="mesh-tooltip"
                    />
                  </div>
                </li>
                : <></>
            ))}
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Categories;
