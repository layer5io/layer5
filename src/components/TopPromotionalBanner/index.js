import React from "react";
import { TopBannercontainer } from "./style";
import Rocket from "../../assets/images/top-promotional-banner/rocket.svg";

const TopPromotionalBanner = () => {
  return (
    <>
      <TopBannercontainer>
        <a href="https://play.meshery.io/" rel="noreferrer" target="_blank"><p className="content"><img src={Rocket} alt="Five on rocket" />Soar to New Heights with Meshery v0.7.0 <span>Try it now &rarr;</span></p></a>
      </TopBannercontainer>
    </>
  );
};
export default TopPromotionalBanner;