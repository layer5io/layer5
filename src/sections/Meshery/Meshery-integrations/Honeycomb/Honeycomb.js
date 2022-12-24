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
    let firstRow = Math.floor((availableWidth - 100) / 156); // a
    let secondRow = Math.floor((availableWidth - 178) / 156); // b

    // No. of first-second row pairs possible
    let pairsCount = Math.floor(items.length / (firstRow + secondRow));

    // If some integrations are not part of the pairs
    if (pairsCount * (firstRow + secondRow) < items.length) {
      // Calculate left off hexagons
      const left = items.length - pairsCount * (firstRow + secondRow);

      // If left hexagons count is less than or equal to number of hexagons that can be adjusted in first row -> Add only one hexagon row height to total height
      if (left <= firstRow) {
        setHeight(pairsCount * 272 + 130);
      } else {
        // If the left hexagons need be adjusted in 2 rows -> add 2 rows height to total height
        setHeight(pairsCount * 272 + 272);
      }
    } else {
      // All hexagons are covered in n pairs of 2 rows ( first row with a hexagons and second row with b hexagons )
      setHeight(pairsCount * 272);
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
      <HoneycombGrid height={height}>
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
