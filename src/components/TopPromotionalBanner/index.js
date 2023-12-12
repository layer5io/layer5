import React from "react";
import { TopBannercontainer } from "./style";
import Rocket from "../../assets/images/top-promotional-banner/rocket.svg";

const TopPromotionalBanner = () => {
  return (
    <>
      <TopBannercontainer>
        <p><img src={Rocket} alt="Five on rocket"/>Soar to New Heights with Cloud Native Playground v0.7.0 <a href="https://play.meshery.io/" rel="noreferrer" target="_blank">Try it now &rarr;</a></p>
      </TopBannercontainer>
    </>
  );
};
export default TopPromotionalBanner;