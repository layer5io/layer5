
import React from "react";
import { ContentRowWrapper, ColumnWrapper } from "./snapshot.style";
import {  Col } from "../../reusecore/Layout";

export const ColumnContainer = ({ children }) => {

  return (
    <ColumnWrapper lg={5} md={6}>
      {children}
    </ColumnWrapper>
  );
};


export const ContentRow = ({ children }) => {

  return (
    <ContentRowWrapper>
      {children}
    </ContentRowWrapper>
  );
};

export const TextColumn = ({ children }) => {
  return (
    <Col className="desc-text-container" lg={7} md={6} sm={10} xs={12}>
      {children}
    </Col>
  );
};