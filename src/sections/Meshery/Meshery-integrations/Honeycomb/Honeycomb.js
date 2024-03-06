import React, { useEffect, useRef, useState } from "react";
import { HoneycombGrid } from "./Honeycomb.style";

const Honeycomb = (props) => {
  const { items, renderItem } = props;
  const [height, setHeight] = useState(0);
  const [newheight, setNewHeight] = useState(0);
  const gridRef = useRef(null);

  const setHoneycombHeight = () => {
    // Total horizontal available space for hexagons
    const availableWidth = gridRef
      ? gridRef.current.offsetWidth
      : window.innerWidth;

    // No. of hexagons that can be adjusted in first and second row
    let firstRow = Math.floor((availableWidth - 100) / 156); // a
    let secondRow = Math.floor((availableWidth - 178) / 156); // b

    // Here the size of hexagons is 100px so the height reduces accordingly
    if (availableWidth <= 334) {
      firstRow = Math.floor((availableWidth - 100) / 106); // a
      secondRow = Math.floor((availableWidth - 118) / 106); // b
    }

    if (availableWidth <= 334 && availableWidth >= 308) {
      firstRow = 2 ;
      secondRow = 1;
    }

    // No. of first-second row pairs possible
    let pairsCount = Math.floor(items.length / (firstRow + secondRow));

    // If some integrations are not part of the pairs
    if (pairsCount * (firstRow + secondRow) < items.length) {
      // Calculate left off hexagons
      const left = items.length - pairsCount * (firstRow + secondRow);

      //if the innerWidth is less than 334px
      if (availableWidth < 335) {
        if (left <= firstRow) {
          setNewHeight(pairsCount * 181 + 87);
        } else {
          setNewHeight(pairsCount * 181 + 181);
        }
      }

      if (left <= firstRow) {
        setHeight(pairsCount * 272 + 130);
      } else {
        setHeight(pairsCount * 272 + 272);
      }

    } else {
      //if the innerWidth is less than 334px
      if (availableWidth < 335) {
        !isNaN(pairsCount) && setNewHeight(pairsCount * 181);
      } // All hexagons are covered in n pairs of 2 rows ( first row with a hexagons and second row with b hexagons )
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
      <HoneycombGrid height={height} heightforSmall={newheight} >
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
