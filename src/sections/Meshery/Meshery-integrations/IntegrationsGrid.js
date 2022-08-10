import React from "react";
import { Link } from "gatsby";
import { HoneycombGrid } from "./Integration.style";


const integrationURL = (data) => {
  return data.replaceAll(" ", "-").toLowerCase();
};

const IntegrationsGrid = ({ obj }) => {
  return (
    <HoneycombGrid>
      <div className="container">
        {obj.map((item,index) => {
          const status = item.status === "InProgress" ? true : false;

          const data = status ? (
            <div style={{ background: "#A0AAAA" }} key={index}>
              <div style={{ background: "#A0AAAA" }}>
                <img
                  src={item.img}
                  alt={item.name}
                  style={{
                    filter: "brightness(0) invert(1)",
                  }}
                />
              </div>
            </div>
          ) : (
            <div>
              <Link
                to={`/service-mesh-management/meshery/integrations/${integrationURL(item.name)}`}
              >
                <div>
                  <img
                    src={item.img}
                    alt={item.name}
                  />
                </div>
              </Link>
            </div>
          );

          return data;
        })}
      </div>
    </HoneycombGrid>
  );
};

export default IntegrationsGrid;
