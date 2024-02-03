import React from "react";
import styled, { css, ThemeProvider } from "styled-components";

const lightTheme = {
  backgroundColor: "white",
  textColor: "black",
};

const darkTheme = {
  backgroundColor: "black",
  textColor: "white",
};

const RowWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
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

  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.textColor};
`;

const Row = ({ children, ...props }) => {
  return <RowWrapper {...props}>{children}</RowWrapper>;
};

const ThemedRow = ({ theme, children, ...props }) => {
  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <Row {...props}>{children}</Row>
    </ThemeProvider>
  );
};

export default ThemedRow;
