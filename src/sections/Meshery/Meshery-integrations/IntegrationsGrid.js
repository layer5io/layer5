import React from "react";
import HoneycombGrid from "./HoneycombGrid.style";

const IntegrationsGrid = ({ obj }) => {
  return (
    <HoneycombGrid>
      <div className="container">
        {obj.map((item) => {
          const status = item.status === "InProgress" ? true : false;

          const data = status ? (
            <div style={{ background: "rgba(160, 170, 170, 0.5)" }}>
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
                <img
                  src={item.img}
                  alt={item.name}
                  style={{ height: "60px" }}
                />
              </div>
            </div>
          );

          return data;
        })}
      </div>
    </HoneycombGrid>
  );
};

export default IntegrationsGrid;
