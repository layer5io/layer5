import styled from "styled-components";

export const HPEfacts = styled("table")(() => ({
  backgroundColor: "#212121",
  borderRadius: "0.5rem",
  marginBottom: "1rem",
  " > tr:first-child": {
    padding: "0rem",
  },
  " > tr:first-child td": {
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

