import React from "react";
import loadable from "@loadable/component";
const SubscribeSection = loadable(() => import("../../../sections/subscribe/subscribe"));

import { AdventuresWrapper } from "./adventures.style.js";
import AdventuresVol from "../../../components/AdventuresVol/index";
import vol1Img from "./vol1/meet-five.png";
import vol2Img from "./vol2/the-adventures-of-five-cover-vol2.png";

const AdventuresHome = () => {
  return (
    <AdventuresWrapper>
      <div className="page-header-section">
        <h1>Adventures of Five and Friends</h1>
      </div>

      <div className="community-home-subtitle">
        <h3>Go on a cloud native journey with Five</h3>
      </div>

      <div className="community-home-container">
        <AdventuresVol
          title="Meet Five"
          description="Join Five as he sets off in his trusty rocketship following the trail of stars to planet Meshery."
          to="/five/vol1/mascot-five-adventure-github-stars.pdf"
          image={vol1Img}
        />

        <AdventuresVol
          title="Planet Prometheus"
          description="Sinking in the quicksands of planet Prometheus as he tries to write PromQL to retrieve a golden signal.
          ...coming soon..."
          image={vol2Img}
        //   to="/community/handbook/faq"
        />

        <AdventuresVol
          title="Planet Jaeger"
          description="Stumbling over a lunar rock on the third moon of planet Jaeger as his distributed traces stop propagating through incorrectly configured proxies.
          ...coming soon..."
        //   to="/community/handbook/faq"
        />

        <AdventuresVol
          title="Planet Meshery"
          description="Our hero parchutes into planet Meshery.
          ...coming soon..."
        //   to="/community/handbook/faq"
        />
      </div>
      <SubscribeSection msg="Follow Five's adventures" />
    </AdventuresWrapper>
  );
};

export default AdventuresHome;
