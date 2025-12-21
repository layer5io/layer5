import React, { useEffect } from "react";
import Banner4 from "../Banner-4";
import Banner3 from "../Banner-3";
import Banner2 from "../Banner-2";
import Banner1 from "../Banner-1";

const BannersCount = 4;

const RotationalBanner = () => {
  let initialValue = 1;

  if (typeof window !== "undefined" && window.sessionStorage) {
    try {
      initialValue = sessionStorage.getItem("banner") || 1;
    } catch (error) {
      console.error("Error in sessionStorage.getItem('banner'):", error);
    }
  }

  useEffect(() => {
    if (typeof window === "undefined" || !window.sessionStorage) return;

    let val = sessionStorage.getItem("banner");
    let currentClass = `banner${val}`;
    let replaceClass = `banner${val - 1 == 0 ? 4 : val - 1}`;

    if (!document.body.classList.contains(currentClass)) {
      document.body.classList.replace(replaceClass, currentClass);
    }

    if (sessionStorage.getItem("banner")) {
      sessionStorage.setItem("banner", (Number(initialValue) % BannersCount) + 1);
    } else {
      sessionStorage.setItem("banner", 2);
    }
  }, []);

  return (
    <>
      <Banner4 className="banner1" />
      <Banner1 className="banner2" />
      <Banner2 className="banner3" />
      <Banner3 className="banner4" />
    </>
  );
};

export default RotationalBanner;
