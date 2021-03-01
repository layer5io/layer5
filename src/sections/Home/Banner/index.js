import React, { useEffect, useState } from "react";
import BannerDefault from "../Banner-default";
// import BannerAlt from "../Banner-alt";

const Banners = [
  <BannerDefault key={0} />,
  // <BannerAlt key={1} /> 
];

const Banner = () => {
  let initialValue;
  try {
    initialValue = sessionStorage.getItem("banner") || 0;
  } catch (e) {
    initialValue = 0;
  }
  const [Banner, setBanner] = useState(initialValue);
  useEffect(() => {
    if (sessionStorage.getItem("banner")) {
      sessionStorage.setItem("banner", (1 + Number(Banner)) % Banners.length);
    } else {
      sessionStorage.setItem("banner", 1);
    }
  });
  return (Banners[Banner]);
};

export default Banner;
