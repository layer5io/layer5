/* eslint-disable indent */
import styled from "styled-components";

const dot = () => ({
  alignItems : "center",
  display : "flex",
});

const img = (icon) => ({
  display : "flex",
  alignItems : "center",
  justifyContent : "left",
  backgroundImage : icon,
  backgroundRepeat : "no-repeat",
  backgroundSize : 20,
  backgroundPosition : "8px center",
  paddingLeft : 8,
  width : "auto",
});

export const selectStyles = {
  menu : (styles) => ({
    ...styles,
    zIndex : 999,
    minWidth : "200px",
  }),
  control : (styles) => ({
    ...styles,
    backgroundColor : "white",
    zIndex : 900,
    minWidth : "200px",
  }),
  option : (styles, { data, isFocused, isSelected }) => ({
    ...styles,

    alignItems : "left",
    marginTop : "0.0em",
    marginBottom : "0.0em",
    paddingTop : "0.0em",
    paddingBottom : "0.0em",
    backgroundImage : data.value ? data.icon : "",
    backgroundRepeat : "no-repeat",
    backgroundSize : 20,
    backgroundPosition : "15px 70%",
    paddingLeft : data.value == "" ? 10 : 50,

    ":before" : {
      borderRadius : 10,
      content : "\" \"",
      display : "block",

      marginRight : 12,
      marginLeft :
        data.value === "all" ||
        data.value === "active" ||
        data.value === "inactive"
          ? 1.5
          : 5,

      height : 10,
      width : 10,
      zIndex : 1000,
    },

    backgroundColor : isSelected
      ? data.value === "inactive"
        ? "rgba(171, 171, 171, 1)"
        : data.value === ""
        ? "white"
        : "rgba(11, 177, 158, 1)"
      : isFocused
      ? data.value === "inactive"
        ? "rgba(171, 171, 171, 0.30)"
        : data.value === ""
        ? "white"
        : "rgba(11, 177, 158, 0.30)"
      : "white",

    color : isSelected ? "white" : "grey",

    zIndex : 900,

    ":active" : {
      ...styles[":active"],
      backgroundColor : isSelected
        ? data.value === "inactive"
          ? "rgba(171, 171, 171, 0.75)"
          : "rgba(11, 177, 158, 0.75)"
        : "white",
    },
  }),
  input : (styles) => ({
    ...styles,
    ...dot(),
    zIndex : 900,
    // width: "auto",
    // minWidth: "200px",
    width : "100px",
  }),
  placeholder : (styles) => ({ ...styles, ...dot(), zIndex : 900 }),
  multiValueRemove : (styles) => ({
    ...styles,
    height : "100%",
    color : "#00D3A8",
    ":hover" : {
      backgroundColor : "transparent",
      color : "#00D3A8",
    },
  }),
  multiValueLabel : (styles) => ({ ...styles, marginLeft : 20 }),
  multiValue : (styles, { data }) =>
    // prettier-ignore
    data.value === "meshery-operator"
    ? {
        ...styles,
        ...img(data.icon),
        backgroundColor : "#F8F8F8",
        marginLeft : "5px",
      }
      : data.value === "smp"
        ? {
          ...styles,
          ...img(data.icon),
          backgroundColor : "#F8F8F8",
          marginLeft : "5px",
        }
        : data.value
          ? {
            ...styles,
            ...img(data.icon),
            backgroundColor : "#F8F8F8",
            marginLeft : "5px",
          }
          : data.value === ""
            ? { display : "none", marginLeft : "5px", }
            : { ...styles, ...dot(data.color), zIndex : 900, marginLeft : "5px", },
};

export const dropdownTheme = (theme) => ({
  ...theme,
  borderRadius : 0,
  colors : {
    ...theme.colors,
    primary50 : "#b0e8e2",
    primary25 : "#b0e8e2",
    primary : "#00b39f",
  },
  width : "500px",
});

export const MembersGridWrapper = styled.div`
  .members-list-wrapper {
    padding: 50px 0;
  }
  .members-grid-wrapper {
    padding-bottom: 60px;
    z-index: -1;
  }
  .members-profile-cards {
    z-index: -1 !important;
  }
  @media only screen and (max-width: 990px) and (min-width: 580px) {
    .members-profile-cards {
      max-width: 550px;
      margin: auto;
    }
  }
  @media only screen and (min-width: 991px) and (max-width: 1200px) {
    .members-profile-cards {
      max-width: 830px;
      margin: auto;
    }
  }
  @media only screen and (max-width: 912px) {
    .members-page-wrapper {
      padding-bottom: 80px;
    }
  }

  .members-grid-select {
    z-index: 900 !important;
  }
  .AboutCommunity {
    display: flex;
    text-align: center;
    margin: auto auto 4rem;
    align-items: center;

    .sectionTitle {
      width: 100%;
      margin: auto 3rem 1rem auto;
      text-align: center;
    }
    img {
      width: 100%;
      padding-right: 3rem;
      padding-left: 3rem;
      margin-right: 3rem;
      margin-top: 3rem;
    }
    .detailsCommunity {
      width: 60%;
      flex-grow: 1;
    }
    .text-gray {
      margin-top: 2rem;
      color: gray;
      font-style: italic;
    }
    @media screen and (max-width: 767px) {
      display: inline;
      margin: auto;
      text-align: center;
      width: 70%;

      .sectionTitle {
        display: inline-block;
        width: 90%;
        font-size: 2.25rem;
        margin: 1rem auto 1.5rem;
        align-items: center;
        text-align: center;
      }

      img {
        text-align: center;
        align-items: center;
        width: 70%;
        height: inherit;
        margin-right: 0rem;
        margin-bottom: 0.25rem;
        margin-top: 0.25rem;
      }
      .detailsCommunity {
        width: 100%;
      }
    }
    .memberProfileBtn {
      margin: 1rem;
    }
  }
`;
