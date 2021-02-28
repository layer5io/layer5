import React, { useEffect, useState } from "react";
import BannerDefault from "../Banner-default";
// import BannerAlt from "../Banner-alt"; 

const Banners = [
  <BannerDefault key={0}/>,
  // <BannerAlt key={1}/> 
];

const Banner = () => {
  const [Banner, setBanner] = useState(sessionStorage.getItem("banner") || 0);
  useEffect(() => {
    if (sessionStorage.getItem("banner")) {
      sessionStorage.setItem("banner", (1 + Number(Banner)) % Banners.length);
    } else {
      sessionStorage.setItem("banner", 0);
    }
  });
  return (Banners[Banner]);
};

export default Banner;