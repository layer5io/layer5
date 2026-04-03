import React from "react";
import KanvasCTA from "../Kanvas/kanvas-cta";
import UnsuscribeWrapper from "./unsubscribe.style";
import { Link } from "gatsby";

const UnsuscribeSection = () => {
  return (
    <UnsuscribeWrapper>
      <div className="parentcard">
        <h2>Unsubscribe</h2>
        <h4>Say it ain't so.</h4>
        <h5>While you ponder whether to <Link className="highlight" to="/subscribe">unsubscribe</Link>, have an <Link to="/learn/kanvas-labs">interactive lab</Link> on us.</h5>
      </div>
      <KanvasCTA />
    </UnsuscribeWrapper>
  );
};

export default UnsuscribeSection;
