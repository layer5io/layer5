import styled from "styled-components";

export const HPEfacts = styled("table")(({ theme }) => ({
  backgroundColor: "#212121",
  borderRadius: "0.5rem",
  marginBottom: "1rem",
  color: `${theme.secondaryLightColorTwo}`,

  " > tr:first-child": {
    color: `${theme.secondaryLightColorTwo}`,
    padding: "0rem",
  },

  " > tr:first-child td": {
    color: `${theme.secondaryLightColorTwo}`,
    backgroundColor: "#414141",
    padding: ".5rem",
    textAlign: "center",
  },

  " > tr > td": {
    padding: "1rem",
  },
  "> tr > td > img": {
    marginRight: ".5rem",
    marginBottom: "0rem",
    paddingBottom: "0rem",
  }
}));


export const HPEintro = styled("div")(({ theme }) => ({
  display: "flex",
  paddingLeft: "3rem",
  paddingRight: "3rem",
  paddingBottom: "1.5rem",
  paddingTop: "1.5rem",
  fontStyle: "italic",
  fontSize: "1.5rem",

  borderTop: `1px dashed ${theme.primaryLightColor}`,
  borderBottom: `1px dashed ${theme.primaryLightColor}`,
  marginBottom: "1rem",

  backgroundColor: `${theme.secondaryLightColorTwo}`,
}));