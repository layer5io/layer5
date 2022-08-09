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
              <div style={{ background: "#A0AAAA" }} key={index}>
                <div style={{ background: "#A0AAAA" }}>
                  <img
                    src={item.img}
                    alt={item.name}
                    style={{
                      filter: "brightness(0) invert(1)",
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
