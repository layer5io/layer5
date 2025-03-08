import React from "react";
import { TopBannercontainer } from "./style";
import Rocket from "../../assets/images/top-promotional-banner/rocket.svg";

const TopPromotionalBanner = () => {
  return (
    <>
      <TopBannercontainer>
        <a href="https://meshery.io/blog/meshery-v07-release-announcement" rel="noreferrer" target="_blank"><p className="content"><img src={Rocket} alt="Five on rocket" /><span>Soar to New Heights with Meshery v0.7.0 &rarr;</span>{/* <span>Try it now &rarr;</span> */}
        </p></a>
      </TopBannercontainer>
    </>
  );
};
export default TopPromotionalBanner;