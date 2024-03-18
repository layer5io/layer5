import React from "react";
import SistentWrapper from "./sistent.style";
import TOC from "../../../components/SistentNavigation";
import { Container } from "../../../reusecore/Layout";
import SistentPagination from "../../../components/SistentNavigation/pagination";
import IntraPage from "../../../components/SistentNavigation/intra-page";

export const SistentLayout = ({ title, children }) => {
  return (
    <SistentWrapper>
      <div className="page-header-section">
        <h1>{title}</h1>
      </div>
      <TOC />
      <div className="page-section">
        <Container>
          {children} <SistentPagination />
        </Container>
        <IntraPage />
      </div>
    </SistentWrapper>
  );
};
