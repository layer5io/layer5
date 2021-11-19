import React, { useEffect, useState, useRef } from "react";
import BannerDefault from "../Banner-default";
import BannerAlt from "../Banner-alt";
import Banner3 from "../Banner-3";
import TopLevelWrapper from "./topBanner.style";

const BannersList = [
  <BannerDefault key={0} />,
  <BannerAlt key={1} />,
  <Banner3 key={2} />
];

const RotationalBanner = () => {
  let initialValue;
  try {
    initialValue = sessionStorage.getItem("banner") || 0;
  } catch (e) {
    initialValue = 0;
  }
  const [Banner, setBanner] = useState(initialValue);
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    if (sessionStorage.getItem("banner")) {
      sessionStorage.setItem("banner", (1 + Number(Banner)) % BannersList.length);
    } else {
      sessionStorage.setItem("banner", 1);
    }
    setMounted(true);
  }, []);

  return (
    <TopLevelWrapper>
      <div className={mounted?`banner${Banner}`: "banner0"}>
        {BannersList[Banner]}
      </div>
    </TopLevelWrapper>
  );
};

export default RotationalBanner;
