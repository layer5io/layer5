import styled from "styled-components";

const dot = (color = "#ccc") => ({
  alignItems: "center",
  display: "flex",

  ":before": {
    backgroundColor: color,
    borderRadius: 10,
    content: "\" \"",
    display: "block",
    marginRight: 8,
    height: 10,
    width: 10,
    zIndex: 1000,
  },
});

const img = (icon) => ({
  alignItems: "center",
  display: "flex",
  backgroundImage: icon,
  backgroundRepeat: "no-repeat",
  backgroundSize: 20,
  backgroundPosition: "left center",

  ":before": {
    borderRadius: 10,
    content: "\" \"",
    display: "block",
    marginRight: 12,
    marginLeft: 5,
    height: 10,
    width: 10,
    zIndex: 1000,
  },
});

export const selectStyles = {
  menu: (styles) => ({ ...styles, zIndex: 999 }),
  control: (styles) => ({ ...styles, backgroundColor: "white", zIndex: 900 }),
  option: (styles, { data, isFocused, isSelected }) => ({
    ...styles,

    alignItems: "left",
    marginTop: "0.0em",
    marginBottom: "0.0em",
    paddingTop: "0.0em",
    paddingBottom: "0.0em",
    backgroundImage: data.value ? data.icon : "",
    backgroundRepeat: "no-repeat",
    backgroundSize: 20,
    backgroundPosition: "10% 70%",

    ":before": {
      borderRadius: 10,
      content: "\" \"",
      display: "block",

      marginRight: 12,
      marginLeft:
        data.value === "all" ||
        data.value === "active" ||
        data.value === "inactive"
          ? 1.5
          : 5,

      height: 10,
      width: 10,
      zIndex: 1000,
    },

    backgroundColor: isSelected
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

    color: isSelected ? "white" : "grey",

    zIndex: 900,

    ":active": {
      ...styles[":active"],
      backgroundColor: isSelected
        ? data.value === "inactive"
          ? "rgba(171, 171, 171, 0.75)"
          : "rgba(11, 177, 158, 0.75)"
        : "white",
    },
  }),
  input: (styles) => ({ ...styles, ...dot(), zIndex: 900 }),
  placeholder: (styles) => ({ ...styles, ...dot(), zIndex: 900 }),
  singleValue: (styles, { data }) =>
    data.value === "mesheryoperator"
      ? {
        ...styles,
        ...img(data.icon),
        backgroundPosition: "20% 50%",
        marginLeft: "-26px",
      }
      : data.value === "smp"
        ? {
          ...styles,
          ...img(data.icon),
          backgroundPosition: "16% 50%",
          marginLeft: "-26px",
        }
        : data.value
          ? {
            ...styles,
            ...img(data.icon),
            backgroundPosition: "27% 50%",
            marginLeft: "-29px",
          }
          : data.value === ""
            ? { display: "none" }
            : { ...styles, ...dot(data.color), zIndex: 900 },
};

export const dropdownTheme = (theme) => ({
  ...theme,
  borderRadius: 0,
  colors: {
    ...theme.colors,
    primary50: "#b0e8e2",
    primary25: "#b0e8e2",
    primary: "#00b39f",
  },
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
