import styled from "styled-components";

export const TCSfacts = styled("table")(({ theme }) => ({
  backgroundColor: `${theme.elevationColor}`,
  borderRadius: "0.5rem",
  marginBottom: "1rem",
  color: `${theme.text}`,
  border: `1px solid ${theme.primaryLightColor}`,

  " > tbody > tr:first-child": {
    padding: "0rem",
  },

  " > tbody > tr:first-child th": {
    h4: {
      color: `${theme.white}`,
      margin: 0,
    },
    backgroundColor: `${theme.secondaryColor}`,
    padding: ".5rem",
    textAlign: "center",
  },

  " > tbody > tr > td": {
    padding: "1rem",
    color: `${theme.text}`,
  },
  "> tbody > tr > td > img": {
    marginRight: ".5rem",
    marginBottom: "0rem",
    paddingBottom: "0rem",
  },
}));

export const TCSintro = styled("div")(({ theme }) => ({
  display: "flex",
  paddingLeft: "3rem",
  paddingRight: "3rem",
  paddingBottom: "1.5rem",
  paddingTop: "1.5rem",
  fontStyle: "italic",
  fontSize: "1.5rem",
  color: `${theme.whiteToBlack}`,

  borderTop: `1px dashed ${theme.text}`,
  borderBottom: `1px dashed ${theme.text}`,
  marginBottom: "1rem",

  backgroundColor: `${theme.body}`,
}));

export const TCSbenefits = styled("div")(({ theme }) => ({
  border: "1px solid #00B39F",
  padding: "2rem",
  boxShadow: "rgba(0, 179, 159, 0.2) 0px 10px 25px",
  color: `${theme.whiteToBlack}`,
}));
