import React from "react";
import styled, { css } from "styled-components";

const RowWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  margin-left: -15px;
  margin-right: -15px;
  ${(props) =>
  props.Vcenter &&
    css({
      "align-items": "center",
    })};
  ${(props) =>
      props.Hcenter &&
    css({
      "justify-content": "center",
    })};
`;

const Row = ({ children, ...props }) => {
  return <RowWrapper {...props}>{children}</RowWrapper>;
};

export default Row;
