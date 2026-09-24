import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
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

// useLayoutEffect is a no-op (with a warning) during Gatsby's server-side
// render, so fall back to useEffect there and only measure in the browser.
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

const Honeycomb = (props) => {
  const { items, renderItem } = props;
  const [height, setHeight] = useState(0);
  const [hexSize, setHexSize] = useState(150);
  const gridRef = useRef(null);

  const layoutHoneycomb = () => {
    const grid = gridRef.current;
    if (!grid) return;

    // The ul width depends on the current hex size. Use the viewport width
    // that the breakpoints are defined for.
    const availableWidth = window.innerWidth;
    const W = hexSizeForWidth(availableWidth);

    if (!grid.children.length) {
      setHexSize(W);
      setHeight(0);
      return;
    }

    // Make sure the hexagons are sized for this viewport, then temporarily
    // grow the grid tall enough for every hexagon to wrap into place (the
    // shape-outside float pattern repeats indefinitely, so any sufficiently
    // tall value lays the rows out identically). Measuring the real content
    // afterwards and shrinking the grid to fit avoids leaving blank space
    // below the mesh whenever the row count is hard to predict analytically.
    grid.style.setProperty("--hex-size", `${W}px`);
    const upperBoundHeight = items.length * (W * 1.3) + W;
    grid.style.height = `${upperBoundHeight}px`;

    const gridTop = grid.getBoundingClientRect().top;
    let maxBottom = 0;
    Array.from(grid.children).forEach((li) => {
      const bottom = li.getBoundingClientRect().bottom - gridTop;
      if (bottom > maxBottom) maxBottom = bottom;
    });

    grid.style.height = "";
    setHexSize(W);
    setHeight(Math.ceil(maxBottom));
  };

  useIsomorphicLayoutEffect(() => {
    layoutHoneycomb();
  }, [items]);

  useEffect(() => {
    window.addEventListener("resize", layoutHoneycomb);
    return () => {
      window.removeEventListener("resize", layoutHoneycomb);
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
