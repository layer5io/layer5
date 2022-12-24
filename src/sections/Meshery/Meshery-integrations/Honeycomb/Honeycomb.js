import React from "react";
import { HoneycombGrid } from "./Honeycomb.style";

const Honeycomb = (props) => {
  const { items, renderItem } = props;

  return (
    <div>
      <HoneycombGrid>
        <ul>
          {items.map((item, key) => (
            <li key={key}>{renderItem(item)}</li>
          ))}
        </ul>
      </HoneycombGrid>
      <div style={{ height: "100px" }}></div>
    </div>
  );
};

const Hexagon = (props) => {
  return <div {...props}>{props.children}</div>;
};

export { Honeycomb, Hexagon };
