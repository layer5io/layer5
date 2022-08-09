import React from "react";
import { Link } from "gatsby";
import HoneycombGrid from "./HoneycombGrid.style";

const IntegrationsGrid = ({ obj }) => {
  return (
    <div>
      <HoneycombGrid>
        <div className="container">
          {obj.map((item,index) => {
            const status = item.status === "InProgress" ? true : false;

            const data = status ? (
              <div style={{ background: "rgba(160, 170, 170, 0.5)" }} key={index}>
                <div style={{ background: "#B1B6B8" }}>
                  <img
                    src={item.img}
                    alt={item.name}
                    style={{
                      filter: "brightness(0.05) invert(.9)",
                      height: "60px",
                    }}
                  />
                </div>
              </div>
            ) : (
              <div>
                <div>
                  <Link
                    to={`/service-mesh-management/meshery/integrations/${item.name.toLowerCase()}`}
                  >
                    <img
                      src={item.img}
                      alt={item.name}
                      style={{ height: "60px" }}
                    />
                  </Link>
                </div>
              </div>
            );

            return data;
          })}
        </div>
      </HoneycombGrid>
    </div>
  );
};

export default IntegrationsGrid;
