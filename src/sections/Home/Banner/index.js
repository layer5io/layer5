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
  const bannerRef = useRef(null);
  let initialValue;
  try {
    initialValue = sessionStorage.getItem("banner") || 0;
  } catch (e) {
    initialValue = 0;
  }
  const [Banner, setBanner] = useState(initialValue);
  useEffect(() => {
    bannerRef.current.classList.add(`banner${Banner}`);
    bannerRef.current.classList.remove(`banner${(Banner+BannersList.length-1) % BannersList.length}`);
    // console.log(`${(Banner+BannersList.length-1) % BannersList.length}`);
    if (sessionStorage.getItem("banner")) {
      sessionStorage.setItem("banner", (1 + Number(Banner)) % BannersList.length);
    } else {
      sessionStorage.setItem("banner", 1);
    }
  },[]);
  return (
    <TopLevelWrapper>
      <div className={`banner${Banner}`} ref={bannerRef}>
        {BannersList[Banner]}
      </div>
    </TopLevelWrapper>
  );
};

export default RotationalBanner;
