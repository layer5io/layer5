import React from "react";
import KanvasCTA from "../Kanvas/kanvas-cta";
import UnsuscribedWrapper from "./unsubscribed.style";
import { Link } from "gatsby";

const UnsuscribedSection = () => {
  return (
    <UnsuscribedWrapper>
      <div className="parentcard">
        <h2>Unsubscription Successful</h2>
        <h4>Say it ain't so.</h4>
        <h5>While you ponder whether to <Link className="highlight" to="/subscribe">resubscribe</Link>, have an <Link to="/learn/service-mesh-labs">interactive lab</Link> on us.</h5>
      </div>
      <KanvasCTA />
    </UnsuscribedWrapper>
  );
};

export default UnsuscribedSection;
