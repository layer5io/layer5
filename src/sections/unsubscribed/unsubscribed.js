import React from "react";
import { Row, Col } from "../../reusecore/Layout";
import SectionTitle from "../../reusecore/SectionTitle";
import Button from "../../reusecore/Button";
import LearnServiceMeshCTA from "../Learn/Learn-Service-Mesh-CTA";
import UnsuscribedWrapper from "./unsubscribed.style";

const UnsuscribedSection = () => {
  return (
    <UnsuscribedWrapper>
      <div className="parentcard">
        <h2>Unsubscription successful.</h2>
      </div>
      <LearnServiceMeshCTA />
    </UnsuscribedWrapper>
  );
};

export default UnsuscribedSection;
