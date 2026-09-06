import React, { useState, useEffect } from "react";
import loadable from "@loadable/component";

// Code-split banners to load only the active banner and reduce initial bundle size
const Banner4 = loadable(() => import("../Banner-4"));
const Banner1 = loadable(() => import("../Banner-1"));
const Banner2 = loadable(() => import("../Banner-2"));
const Banner3 = loadable(() => import("../Banner-3"));

const BannersCount = 4;

/*
  NOTE:
    When adding a new banner to the rotational list:
    1. Update the "BannersCount" value above to reflect the new count.
    2. Add the dynamic import with loadable() for the new Banner component.
    3. Add the mapping entry in "bannerMap" with the corresponding banner index and className (e.g., 5: { Component: Banner5, className: "banner5" }).
*/

const bannerMap = {
  1: { Component: Banner4, className: "banner1" },
  2: { Component: Banner1, className: "banner2" },
  3: { Component: Banner2, className: "banner3" },
  4: { Component: Banner3, className: "banner4" },
};

const RotationalBanner = () => {
  const [activeBanner, setActiveBanner] = useState(null);

  useEffect(() => {
    let initialValue = 1;
    try {
      if (typeof window !== "undefined" && window.sessionStorage) {
        initialValue = Number(sessionStorage.getItem("banner")) || 1;
      }
    } catch (error) {
      console.error("Error in sessionStorage.getItem('banner'):", error);
      initialValue = 1;
    }

    setActiveBanner(initialValue);

    let currentClass = `banner${initialValue}`;
    let replaceClass = `banner${initialValue - 1 === 0 ? BannersCount : initialValue - 1}`;
    if (!document.body.classList.contains(currentClass)) {
      document.body.classList.replace(replaceClass, currentClass);
      document.body.classList.add(currentClass);
    }

    try {
      if (typeof window !== "undefined" && window.sessionStorage) {
        sessionStorage.setItem("banner", (initialValue % BannersCount) + 1);
      }
    } catch (error) {
      console.error("Error in sessionStorage.setItem('banner'):", error);
    }
  }, []);

  if (!activeBanner) return null;

  const ActiveComponent = bannerMap[activeBanner]?.Component || Banner4;
  const activeClass = bannerMap[activeBanner]?.className || "banner1";

  return <ActiveComponent className={activeClass} />;
};

export default RotationalBanner;
