import React, { useEffect, useRef, useState } from "react";
import { HoneycombGrid } from "./Honeycomb.style";

const Honeycomb = (props) => {
  const { items, renderItem } = props;
  const [height, setHeight] = useState(0);
  const gridRef = useRef(null);

  const setHoneycombHeight = () => {
    // Total horizontal available space for hexagons
    const availableWidth = gridRef
      ? gridRef.current.offsetWidth
      : window.innerWidth;

    // No. of hexagons that can be adjusted in first and second row
    let firstRow = Math.floor((availableWidth - 100) / 156);
    let secondRow = Math.floor((availableWidth - 178) / 156);

    // No. of first-second row pairs possible
    let pairsCount = Math.floor(items.length / (firstRow + secondRow));

    // If some integrations are not part of the pairs
    if (pairsCount * (firstRow + secondRow) < items.length) {
      // Calculate left off hexagons
      const left = items.length - pairsCount * (firstRow + secondRow);

      if (left <= firstRow) {
        setHeight(pairsCount * 272 + 130);
      } else {
        setHeight(pairsCount * 272 + 272);
      }

    } else {
      // All hexagons are covered in n pairs of 2 rows (first row with a
      // hexagon and second row with b hexagons).
      !isNaN(pairsCount) && setHeight(pairsCount * 272);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", setHoneycombHeight);
    setHoneycombHeight();
    return () => {
      window.removeEventListener("resize", setHoneycombHeight);
    };
  }, [items]);

  return (
    <div>
      <HoneycombGrid $height={height}>
        <ul ref={gridRef}>
          {items.map((item, key) => (
            <li key={key}>{renderItem(item)}</li>
          ))}
        </ul>
      </HoneycombGrid>
    </div>
  );
};

const Hexagon = (props) => {
  return <div {...props}>{props.children}</div>;
};

export { Honeycomb, Hexagon };
