import React, { Suspense } from "react";
import Loading from "../../../components/loading.js";
const SubscribeSection = React.lazy(() => import("../../../sections/subscribe/subscribe"));

import { AdventuresWrapper } from "./adventures.style.js";
import AdventuresVol from "../../../components/AdventuresVol/index";
import vol1Img from "./vol1/meet-five.png";


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
          title="Planet Meshery"
          description="Our hero parchutes into planet Meshery.
          ...coming soon..."
        //   to="/community/handbook/faq"
        />
      </div>
      <Suspense fallback={<Loading />}>
        <SubscribeSection msg="Follow Five's adventures" />
      </Suspense>
    </AdventuresWrapper>
  );
};

export default AdventuresHome;
