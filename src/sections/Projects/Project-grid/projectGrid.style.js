import styled from "styled-components";
//These are the diferent breakpoints used in this file for different screen sizes.
import { breakpoints } from "../../../theme/modern/themeStyles";
export const ProjectWrapper = styled.div`
  padding: 0 2rem;
  padding-bottom: 5rem;

  h3 {
    color: ${(props) => props.theme.whiteSixToGreen3C494F};
    margin: 0;
    padding: 0;
    font-weight: 500;
    text-align: center;
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);

    img {
      width: 3rem;
      position: relative;
      top: 0.625rem;
    }
  }
  .title {
    margin: 0px;
    padding: 0px;
    font-weight: 400;
    font-size: 2rem;
    line-height: 2rem;

    span {
      font-weight: 500;
      color: ${(props) => props.theme.secondaryColor};
    }
  }

  .project-text {
    font-weight: 300;
    margin-bottom: 5rem;
    margin-top: 0;
  }
  .project__block__wrap {
    display: flex;
    flex-wrap: wrap;
  }
  .project__block {
    flex-basis: 33%;
  }
  //Grid containing all the projects
  .project__grid {
    margin: 6.25rem 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    grid-template-rows: repeat(4, 100px);
    grid-gap: 1rem;
    grid-auto-flow: row;
  }
  //For each project card
  .project__card {
    box-shadow: 0px 0px 10px ${(props) => props.theme.green00D3A9ToGreyE6E6E6};
    background-color: ${(props) => props.theme.grey212121ToWhite};
    border-radius: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);

    &:hover {
      background-color: ${(props) => props.theme.secondaryColor};
      img {
        filter: brightness(0) invert(1);
      }
      h5 {
        color: white;
      }
      transition: 0.4s;
      transform: scale(1.05);
    }
  }
  .project__card-container {
    max-width: 100%;
    height: 10rem;
    width: 12rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    img {
      max-width: 100%;
      max-height: 100%;
    }
    h5 {
      font-weight: 600;
      text-align: center;
      transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
    }
  }
  //Meshery
  .project__card-container_meshery {
    height: 13rem;
  }
  //Landscape
  .project__card-container_one {
    height: 8rem;
  }
  //NightHawk
  .project__card-container_nighthawk {
    display: flex;
    height: 100;
    width: 100%;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    img {
      width: 6.25rem;
      align-self: center;
    }
    h5 {
      align-self: center;
      margin-left: 2rem;
    }
  }
  //MeshMap
  .project__card-container_meshmap {
    justify-content: center;
    align-items: center;
    img {
      height: 3.25rem;
    }
    h5 {
      margin-top: 0.8rem;
      font-size: 1rem;
    }
  }

  // Landscape
  .project__card.one {
    grid-column: 2/3;
    grid-row: 1/3;
    img {
      width: 5.625rem;
      align-self: center;
    }
    h5 {
      margin-top: 0.625rem;
    }
  }
  // Meshery
  .project__card.two {
    grid-column: 3/6;
    grid-row: 1/6;
    img {
      align-self: center;
    }
    h5 {
      font-size: 2rem;
      font-weight: 600;
      margin-top: 0.625rem;
    }
  }
  //Image Hub
  .project__card.three {
    grid-column: 6/8;
    grid-row: 4/6;
    img {
      width: 5.6rem;
      align-self: center;
      margin-top: 1.25rem;
    }
    h5 {
      margin-bottom: 1.5rem;
    }
  }
  //Service Mesh Interface Conformance
  .project__card.four {
    grid-column: 6/8;
    grid-row: 1/4;
    img {
      width: 150px;
      align-self: center;
      margin-top: -2.8rem;
      margin-bottom: 2.8rem;
    }
    h5 {
      width: 150%;
      align-self: center;
    }
  }
  // Service Mesh Performance
  .project__card.five {
    grid-column: 1/2;
    grid-row: 1/3;
    img {
      width: 11.25rem;
      align-self: center;
    }
  }
  // Distributed Performance Management of Service Meshes
  .project__card.six {
    grid-column: 1/3;
    grid-row: 6/8;
  }
  .image {
    margin: 0 auto;
    @media only screen and (max-width: ${breakpoints.desktop_small}) {
      padding-left: 20%;
    }
    @media only screen and (max-width: ${breakpoints.tablet_medium}) {
      padding-left: 30%;
    }
  }
  //Meshery Docker Extension
  .project__card.seven {
    grid-column: 3/6;
    grid-row: 6/8;
    img {
      width: 6rem;
      align-self: center;
      margin: auto;

      @media only screen and (min-width: ${breakpoints.tablet_large}) {
        align-self: flex-start;
      }
    }
    h5 {
      align-self: center;
      @media only screen and (min-width: ${breakpoints.tablet_large}) {
        padding-top: 0;
      }
    }
  }
  //Meshery Docker Extension
  .project__card-container-seven {
    max-width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    img {
      align-self: center;
      max-width: 100%;
      max-height: 100%;
    }
    h5 {
      top: 0;
      font-weight: 600;
      text-align: center;
    }
    @media only screen and (min-width: ${breakpoints.tablet_medium}) {
      width: 80%;
      place-content: center;
    }
  }
  // Cloud Native Patterns
  .project__card.eight {
    grid-column: 1/3;
    grid-row: 3/6;
    img {
      width: 100px;
      align-self: center;
    }
  }
  //Service Mesh Interface Conformance
  .project__card.nine {
    grid-column: 6/7;
    grid-row: 6/8;
  }
  //Catalog
  .project__card.ten {
    grid-column: 6/8;
    grid-row: 6/8;
    // img {
    // width: 5.6rem;
    //  align-self: center;
    //   margin-top: 0.5rem;
    //   @media only screen and (min-width: ${breakpoints.tablet_large}) {
    //     align-self: flex-start;
    //   }
    // }
    // h5 {
    //   margin-top: 1rem;
    //   @media only screen and (min-width: ${breakpoints.tablet_large}) {
    //     align-self: flex-end;
    //     text-align: center;
    //   }
    // }
  }
  //Catalog
  .project__card-container-ten {
    display: flex;
    height: auto;
    width: 100%;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    img {
      max-width: 100%;
      max-height: 100%;
    }
    h5 {
      font-weight: 600;
      text-align: center;
    }
    @media only screen and (min-width: ${breakpoints.tablet_large}) {
      width: 80%;
      place-content: center;
    }
  }
  //For lager screens
  @media only screen and (max-width: ${breakpoints.desktop_large}) {
    .project__card-container_nighthawk {
      img {
        width: 5rem;
      }
      h5 {
        margin-left: 1rem;
      }
    }
    .project__card.four h5 {
      width: 100%;
    }
    .project__card h5 {
      font-size: 1rem;
    }
  }
  //For small screens of desktop
  @media only screen and (max-width: ${breakpoints.desktop_small}) {
    .project__card-container {
      justify-content: center;
      gap: 0.75rem;
    }
    .project__grid {
      margin: 3.1rem 0;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
    }
    .project__card-container_meshery {
      all: unset;
      aspect-ratio: 6/5;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 0.75rem;
      height: 10rem;
      h5 {
        margin: 0 !important;
      }
    }
    //Landscape
    .project__card-container_one {
      all: unset;
      aspect-ratio: 6/5;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 0.75rem;
      height: 10rem;
      h5 {
        margin: 0 !important;
      }
    }
    //Catalog
    .project__card-container-ten {
      all: unset;
      aspect-ratio: 6/5;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 0.75rem;
      height: 10rem;
      h5 {
        margin: 0;
      }
    }
    //NightHawk
    .project__card-container_nighthawk {
      all: unset;
      aspect-ratio: 6/5;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 0.75rem;
      height: 10rem;
      img {
        width: 8.12rem;
      }
      h5 {
        width: 100%;
        margin: 0;
      }
    }

    .project__card {
      h5 {
        width: 100%;
        font-size: 13px;
        font-weight: 600;
        padding-bottom: 0.625rem;
        margin: 0;
      }
      img {
        width: auto;
        height: 5rem;
        padding-top: 10px;
      }
    }
    //Meshery
    .project__card.two {
      img {
        align-self: center;
        margin-top: 0;
        margin-bottom: 0;
      }
      h5 {
        font-size: 13px;
        font-weight: 600;
        margin-top: 0.625rem;
      }
    }
    //Image Hub
    .project__card.three {
      /* all:unset; */
      aspect-ratio: 6/5;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 0.75rem;
      height: 10rem;
      img {
        margin: 0;
      }
      h5 {
        margin: 0;
      }
    }
    //MeshMap
    .project__card.four img {
      margin-top: 0px;
      margin-bottom: 0px;
    }
    //Meshery Docker Extension
    .project__card.seven {
      aspect-ratio: 6/5;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 0.75rem;
      height: 10rem;
      img {
        width: 150%;
      }
      h5 {
        padding-top: 1.25rem;
      }
    }
    //Cloud Native Patterns
    .project__card.eight {
      img {
        width: 150%;
      }
    }
    //Catalog
    .project__card.ten {
      .col {
        padding: 0;
        img {
          width: 150%;

          padding: 0;
        }
        h5 {
          margin-top: 20px !important;
        }
      }
    }
    .project__card-container {
      justify-content: center;
      gap: 0.75rem;
    }
  }
  @media only screen and (max-width: ${breakpoints.tablet_small}) {
    padding: 0 0 2.5rem 0;
    h3 {
      font-size: 1.25rem;
    }
  }
`;
