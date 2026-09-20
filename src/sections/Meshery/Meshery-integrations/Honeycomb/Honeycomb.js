import React, { useEffect, useRef, useState } from "react";
import { HoneycombGrid } from "./Honeycomb.style";

// Hexagon (cell) size for each viewport band. Keeping the hexagons sized to
// the viewport lets the staggered honeycomb "mesh" layout (float + shape-outside)
// work at every responsive width instead of degrading into a flat grid.
const hexSizeForWidth = (width) => {
  if (width <= 340) return 64;
  if (width <= 430) return 72;
  if (width <= 540) return 84;
  if (width <= 767) return 110;
  if (width <= 1023) return 130;
  return 150;
};

const Honeycomb = (props) => {
  const { items, renderItem } = props;
  const [height, setHeight] = useState(0);
  const [hexSize, setHexSize] = useState(150);
  const gridRef = useRef(null);

  const setHoneycombHeight = () => {
    const grid = gridRef.current;
    // Total horizontal available space for hexagons (offsetWidth includes
    // the ul horizontal padding, so subtract it to get the usable width).
    const availableWidth = grid ? grid.offsetWidth : window.innerWidth;
    let usableWidth = availableWidth;
    if (grid && typeof window !== "undefined" && window.getComputedStyle) {
      const computedStyle = window.getComputedStyle(grid);
      const paddingLeft = parseFloat(computedStyle.paddingLeft) || 0;
      const paddingRight = parseFloat(computedStyle.paddingRight) || 0;
      usableWidth = availableWidth - paddingLeft - paddingRight;
    }

    const W = hexSizeForWidth(availableWidth);
    // Horizontal pitch (hexagon width + left/right margins)
    const P = W + 6;

    // No. of hexagons that can be adjusted in first and second row
    const firstRow = Math.max(1, Math.floor((usableWidth - (W / 2 + 25)) / P));
    const secondRow = Math.max(1, Math.floor((usableWidth - (W + 28)) / P));

    // Vertical pitch per row: hexagon height + margin-top + margin-bottom
    const rowHeight = Math.round(W * 0.8662 + 6);
    // Height of a first+second row pair / of a single leftover row
    const pairHeight = 2 * rowHeight;
    const singleHeight = rowHeight - 6;

    // No. of first-second row pairs possible
    const pairsCount = Math.floor(items.length / (firstRow + secondRow));

    let newHeight;
    if (pairsCount * (firstRow + secondRow) < items.length) {
      // Calculate left off hexagons
      const left = items.length - pairsCount * (firstRow + secondRow);
      newHeight =
        left <= firstRow
          ? pairsCount * pairHeight + singleHeight
          : pairsCount * pairHeight + pairHeight;
    } else {
      // All hexagons are covered in n pairs of 2 rows (first row with a
      // hexagon and second row with b hexagons).
      newHeight = pairsCount * pairHeight;
    }

    if (!isNaN(newHeight)) setHeight(newHeight);
    setHexSize(W);
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
      <HoneycombGrid $height={height} style={{ "--hex-size": `${hexSize}px` }}>
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
