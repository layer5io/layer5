import React from "react";
import { Container } from "../../../reusecore/Layout";
import SistentWrapper from "./sistent.style";
import TOC from "../../../components/SistentNavigation";
import IntraPage from "../../../components/handbook-navigation/intra-page";

const contents = [{ id: 0, link: "#About Sistent", text: "About Sistent" }];

const SistentIdentity = () => {
  return (
    <SistentWrapper>
      <div className="page-header-section">
        <h1>Identity</h1>
      </div>
      <TOC />
      <div className="page-section">
        <Container>
          <div className="content">
            <a id="Identity">
              <h2>Identity</h2>
            </a>
          </div>
        </Container>
        <IntraPage contents={contents} />
      </div>
    </SistentWrapper>
  );
};

export default SistentIdentity;
