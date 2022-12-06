import React, { useEffect } from "react";
import Banner4 from "../Banner-4";
import Banner3 from "../Banner-3";
import Banner2 from "../Banner-2";
import Banner1 from "../Banner-1";

const BannersCount = 4;

const RotationalBanner = () => {
  let initialValue;
  try {
    initialValue = sessionStorage.getItem("banner") || 1;
  } catch (e) {
    initialValue = 1;
  }

  useEffect(() => {
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

  /*
  NOTE:
    When adding a new banner to the below list, update the "BannersCount" value at line: 7 and add a className prop with the value updated to reflect the new count.
    That sanitizeShrinkWidth, if the current count is 4 and a new banner is added then the className for the new banner should be "banner5", have the default `display`
    as `none` in the stylesheet for the banner and add a style definition in `src/sections/app.styles.js` to show the banner based on class assigned to `body` tag.
  */
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
