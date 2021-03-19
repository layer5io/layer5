import React, { useEffect, useState } from "react";
import BannerDefault from "../Banner-default";
import BannerAlt from "../Banner-alt";
import Banner3 from "../Banner-3";
import styleAlt from "../Banner-alt/altbanner.style";
import styleDefault from "../Banner-default/banner.style";
import style3 from "../Banner-3/banner3.style";

const BannersList = [
  <BannerDefault key={0} Style_element={styleDefault}/>,
  <BannerAlt key={1} Style_element={styleAlt}/>,
  <Banner3 key={2} Style_element={style3}/>
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
  console.log(BannersList[Banner]);
  return (BannersList[Banner]);
};

export default RotationalBanner;
