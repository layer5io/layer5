import React from "react";
import { clients } from "../../collections/landscape/clients";
import { meshes } from "../../collections/landscape/meshes";
import { gateways } from "../../collections/landscape/gateways";
import { proxies } from "../../collections/landscape/proxies";
import { load_balancer } from "../../collections/landscape/load-balancer";
import { CustomTooltip } from "@sistent/sistent";

function Categories() {
  return (
    <React.Fragment>
      <div>
        <div className="odd-row">
          <h4 className="category-row-heading">Service Mesh</h4>
          <ul className="category">
            {meshes.map((mesh) =>
              mesh.name ? (
                <li key={mesh.name}>
                  <div className="tooltip">
                    <CustomTooltip title={mesh.desc} placement="bottom">
                      <a href={mesh.link} rel="nofollow">
                        {mesh.name}
                      </a>
                    </CustomTooltip>
                  </div>
                </li>
              ) : (
                <></>
              ),
            )}
          </ul>
        </div>
        <div className="even-row">
          <h4 className="category-row-heading">Client Library</h4>
          <ul className="category">
            {clients.map((client) =>
              client.name ? (
                <li key={client.name}>
                  <div className="tooltip">
                    <CustomTooltip title={client.desc} placement="bottom">
                      <a href={client.link} rel="nofollow">
                        {client.name}
                      </a>
                    </CustomTooltip>
                  </div>
                </li>
              ) : (
                <></>
              ),
            )}
          </ul>
        </div>
        <div className="odd-row">
          <h4 className="category-row-heading">API Gateway</h4>
          <ul className="category">
            {gateways.map((gateway) =>
              gateway.name ? (
                <li key={gateway.name}>
                  <div className="tooltip">
                    <CustomTooltip title={gateway.desc} placement="bottom">
                      <a href={gateway.link} rel="nofollow">
                        {gateway.name}
                      </a>
                    </CustomTooltip>
                  </div>
                </li>
              ) : (
                <></>
              ),
            )}
          </ul>
        </div>
        <div className="even-row">
          <h4 className="category-row-heading">Service Proxy</h4>
          <ul className="category">
            {proxies.map((proxy) =>
              proxy.name ? (
                <li key={proxy.name}>
                  <div className="tooltip">
                    <CustomTooltip title={proxy.desc} placement="bottom">
                      <a href={proxy.link} rel="nofollow">
                        {proxy.name}
                      </a>
                    </CustomTooltip>
                  </div>
                </li>
              ) : (
                <></>
              ),
            )}
          </ul>
        </div>
        <div className="odd-row">
          <h4 className="category-row-heading">Load Balancer</h4>
          <ul className="category">
            {load_balancer.map((balancer) =>
              balancer.name ? (
                <li key={balancer.name}>
                  <div className="tooltip">
                    <CustomTooltip title={balancer.desc} placement="bottom">
                      <a href={balancer.link} rel="nofollow">
                        {balancer.name}
                      </a>
                    </CustomTooltip>
                  </div>
                </li>
              ) : (
                <></>
              ),
            )}
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Categories;
