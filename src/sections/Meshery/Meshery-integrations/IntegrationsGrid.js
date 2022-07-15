import React from "react";
import HoneycombGrid from "./HoneycombGrid.style";

function IntegrationsGrid({ obj }) {
  return (
    <HoneycombGrid>
      <div className="container">
        {obj.map((item) => {
          const status = item.status === "InProgress" ? true : false;
          if (status) {
            return (
              <div style={{ background: "rgba(160, 170, 170, 0.5)" }}>
                <div style={{ background: "#F0F0F0" }}>
                  <img
                    src={item.img}
                    alt={item.name}
                    style={{ filter: "brightness(0) invert(1)" }}
                  />
                </div>
              </div>
            );
          } else {
            return (
              <div>
                <div>
                  <img src={item.img} alt={item.name} />
                </div>
              </div>
            );
          }
        })}
      </div>
    </HoneycombGrid>
  );
}

export default IntegrationsGrid;
