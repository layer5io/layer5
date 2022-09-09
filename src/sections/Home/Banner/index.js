import React, { useEffect, useState } from "react";
import Banner4 from "../Banner-4";
import Banner3 from "../Banner-3";
import Banner2 from "../Banner-2";
import Banner1 from "../Banner-1";

const BannersList = [
  <Banner4 key={0} />,
  <Banner1 key={1} />,
  <Banner2 key={2} />,
  <Banner3 key={3} />
];

const RotationalBanner = () => {
  let initialValue;
  try {
    initialValue = sessionStorage.getItem("banner") || 0;
  } catch (e) {
    initialValue = 0;
  }
  const [Banner] = useState(initialValue);
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
      {mounted ? BannersList[Number(Banner)] : <Banner4 />}
    </>
  );
};

export default RotationalBanner;
