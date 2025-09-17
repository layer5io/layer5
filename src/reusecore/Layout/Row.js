import React from "react";
import styled, { css } from "styled-components";

const RowWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  margin-left: 0;
  margin-right: 0;
  ${(props) =>
  props.$Vcenter &&
    css({
      "align-items": "center",
    })};
  ${(props) =>
      props.$Hcenter &&
    css({
      "justify-content": "center",
    })};
`;

const Row = ({ children, ...props }) => {
  return <RowWrapper {...props}>{children}</RowWrapper>;
};
export default Row;
