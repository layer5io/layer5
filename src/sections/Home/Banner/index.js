import React, { useEffect, useState } from "react";
import BannerDefault from "../Banner-default";
// import BannerAlt from "../Banner-alt";

const BannersList = [
  <BannerDefault key={0} />,
  // <BannerAlt key={1} /> 
];

const RotationalBanner = () => {
  let initialValue;
  try {
    initialValue = sessionStorage.getItem("banner") || 0;
  } catch (e) {
    initialValue = 0;
  }
  const [Banner, setBanner] = useState(initialValue);
  useEffect(() => {
    if (sessionStorage.getItem("banner")) {
      sessionStorage.setItem("banner", (1 + Number(Banner)) % BannersList.length);
    } else {
      sessionStorage.setItem("banner", 1);
    }
  });
  return (BannersList[Banner]);
};

export default RotationalBanner;
