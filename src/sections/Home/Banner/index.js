import React, { useEffect, useState } from "react";
import Banner4 from "../Banner-4";
import Banner3 from "../Banner-3";
import Banner2 from "../Banner-2";
import Banner1 from "../Banner-1";

const BannersCount = 4;

const RotationalBanner = () => {
  const [initialValue, setInitialValue] = useState(1);

  // Initialize banner value only in browser, not during SSR
  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        const bannerValue = window.sessionStorage.getItem("banner") || 1;
        setInitialValue(bannerValue);
      } catch (error) {
        console.error("Error in sessionStorage.getItem('banner'):", error);
        setInitialValue(1);
      }
    }
  }, []);

  // Handle banner rotation in browser only
  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        let val = window.sessionStorage.getItem("banner");
        let currentClass = `banner${val}`;
        let replaceClass = `banner${val - 1 == 0 ? 4 : val - 1}`;
        
        if (!document.body.classList.contains(currentClass)) {
          document.body.classList.replace(replaceClass, currentClass);
        }

        if (window.sessionStorage.getItem("banner")) {
          window.sessionStorage.setItem(
            "banner",
            (Number(initialValue) % BannersCount) + 1
          );
        } else {
          window.sessionStorage.setItem("banner", 2);
        }
      } catch (error) {
        console.error("Error managing banners:", error);
      }
    }
  }, [initialValue]);

 

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


