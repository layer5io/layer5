import React from "react";
import { Row, Col } from "../../reusecore/Layout";
import SectionTitle from "../../reusecore/SectionTitle";
import Button from "../../reusecore/Button";
import LearnServiceMeshCTA from "../Learn/Learn-Service-Mesh-CTA";
import UnsuscribedWrapper from "./unsubscribed.style";
import { Link } from "gatsby";

const UnsuscribedSection = () => {
  return (
    <UnsuscribedWrapper>
      <div className="parentcard">
        <h2>Unsubscription Successful</h2>
        <h4>Say it ain't so.</h4>
        <h5>While you ponder whether to <Link className="highlight"  to="/subscribe">resubscribe</Link>, have an interactive lab on us.</h5>
      </div>
      <LearnServiceMeshCTA />
    </UnsuscribedWrapper>
  );
};

export default UnsuscribedSection;
