import React from "react";
import { Container } from "../../../reusecore/Layout";
import SistentWrapper from "./sistent.style";
import TOC from "../../../components/SistentNavigation";
import IntraPage from "../../../components/handbook-navigation/intra-page";
import SistentPagination from "../../../components/SistentNavigation/pagination";

const contents = [{ id: 0, link: "#About Sistent", text: "About Sistent" }];

const SistentAbout = () => {
  return (
    <SistentWrapper>
      <div className="page-header-section">
        <h1>About Sistent</h1>
      </div>
      <TOC />
      <div className="page-section">
        <Container>
          <div className="content">
            <a id="About Sistent">
              <h2>About Sistent</h2>
            </a>
            <p>
              We have several different React apps that heavily uses the
              Material UI v4 and v5 libraries, and this discrepancies led up to
              setting up the Sistent Design System.
            </p>
            <p>
              <b>
                We want to be able to have the source of truth of what Layer5.io
                and Meshery looks like.
              </b>
            </p>
            <p>
              'Sistent' is a play on word to ensure that we have a consistent
              theme, components, design tokens, etc across all of the apps that
              will be using this library. Sistent is a design system that uses
              the <b>MUI v5 components</b> and a <b>custom theme provider </b>
              instead of using the default theme from MUI v5.
            </p>
            <p>
              If you’re interested in joining, please let us know, and we can
              help you get started on contributing to the Sistent Design System.
            </p>
          </div>
          <SistentPagination />
        </Container>
        <IntraPage contents={contents} />
      </div>
    </SistentWrapper>
  );
};

export default SistentAbout;
