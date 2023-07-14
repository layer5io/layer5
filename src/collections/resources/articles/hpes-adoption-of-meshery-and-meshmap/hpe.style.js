import styled from "styled-components";

export const HPEfacts = styled("table")(({ theme }) => ({
  backgroundColor: "#212121",
  borderRadius: "0.5rem",
  marginBottom: "1rem",
  color: "#FFF",

  " > tr:first-child": {
    color: `${theme.body}`,
    padding: "0rem",
  },

  " > tr:first-child td": {
    h4: {
      color: `${theme.white}`,
    },
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
  },
}));

export const HPEintro = styled("div")(({ theme }) => ({
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

export const HPEbenefits = styled("div")(({ theme }) => ({
  border: "1px solid #00B39F",
  padding: "2rem",
  boxShadow: "rgba(0, 179, 159, 0.2) 0px 10px 25px",
  color: `${theme.whiteToBlack}`,
}));
