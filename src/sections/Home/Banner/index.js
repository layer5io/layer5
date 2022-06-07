import React, { useEffect, useState } from "react";
import Banner3 from "../Banner-3";
import Banner2 from "../Banner-2";
import Banner1 from "../Banner-1";
import { useCookies } from "react-cookie";
const BannersList = [
  <Banner1 key={0} />,
  <Banner2 key={1} />,
  <Banner3 key={2} />
];
const RotationalBanner =  () => {
  const [cookies, setCookie] = useCookies(["user"]);
  const handle = (num) => {
    setCookie("bannerNumber", num, { path: "/" });
  };

  let loadingbanner=0;
  loadingbanner=parseInt(cookies.bannerNumber);
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
    <>
      {console.log(loadingbanner)}
      {mounted ? <> <div onLoad={handle(Number(Banner))}>{BannersList[Number(Banner)]} </div></> : BannersList[loadingbanner] }
    </>
  );
};

export default RotationalBanner;
