import styled from "styled-components";

export const HoneycombGrid = styled.div`
  .heading {
    text-align: center;

    h1 {
      line-height: 3.75rem;
    }

    h2 {
      font-weight: normal;
    }
  }

  .search-box {
    input {
      border: 1px solid ${(props) => props.theme.headingColor} !important;

      &:focus {
        border-color: #fff !important;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px !important;
      }
    }
  }

  .category {
    display: flex;
    flex-wrap: wrap;
    margin: 2.5625rem 1.2rem;
    gap: 0.625rem;
    justify-content: center;
  }



  ul {
    margin: 2.5rem 0 0 0;
    padding-left: 50px;
    padding-right: 50px;
  }

  .container-active,
  .container-inactive {
    -webkit-transform: translateZ(0);
    display: flex;
    height: 100%;
    background: ${(props) =>
      props.isDark ? props.theme.radialToBlue : props.theme.grey212121ToWhite};
    justify-content: center;
    align-items: center;
    padding: 0.625rem;
    position: relative;
    clip-path: polygon(0% 25%, 0% 75%, 50% 100%, 100% 75%, 100% 25%, 50% 0%);
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);

    .integration-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 100%;
      overflow: hidden;
      justify-content: center;
      position: absolute;
      img {
        transition: all 1s cubic-bezier(1, 0.82, 0.165, 1);
        opacity: 100%;
      }
      .integration-icon {
        flex-shrink: 0;
        object-fit: contain;
      }
      .integration-content {
        opacity: 0;
        text-align: center;
        align-items: center;
        height: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;

        transition: all 0.5s linear;
        opacity: 1;
        overflow: hidden;
        .title {
          line-height: 1.375rem;
          color: ${(props) => props.theme.whiteToBlack};
          // margin-bottom: -2.7rem;
          font-size: 1.2rem;
          opacity: 0;
          font-weight: 600;
          transition: 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);
          padding: 10px;
        }
        .learnMoreBtn {
          padding: 5px 10px;
          color: white;
          font-size: 0.875rem;
          min-width: unset;
          box-shadow: none;
        }
      }
    }
    &:hover {
      .integration-container {
        img {
          transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
          height: 0%;
          opacity: 0%;
        }
        .integration-content {
          transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
          opacity: 1;
          height: 100%;
          .title {
            // margin-top: -50%;
            font-size: 1.2rem;
            opacity: 1;
          }
          .learnMoreBtn {
            &:hover {
              background-color: #009b8a;
            }
          }
        }
      }
      background: #00d3a9;
      transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
      &:after {
        content: "";
        background: ${(props) => props.theme.grey212121ToWhite};
        margin: 0px 0px 0 4px;
        clip-path: polygon(
          50% 0%,
          100% 25%,
          100% 75%,
          50% 100%,
          0% 75%,
          0% 25%
        );
        height: 95%;
        width: 95%;
        position: absolute;
        left: 0;
        z-index: -1;
      }
    }
  }
`;

export const IntegrationsWrapper = styled.div`
  max-width: 75rem;
  margin: 5.1875rem auto;
  text-align: center;
  min-height: 300px; /* Add explicit min-height */
  position: relative; /* Add position for better layout control */
  width: 100%; /* Add explicit width */

  .seeAllBtn {
    &:hover {
      color: white;
    }
  }
`;

export const IntegrationCard = styled.div`
  display: flex;
  margin: 5rem 1rem;
  gap: 5rem;
  align-items: stretch;
  flex-wrap: wrap;
  justify-content: center;
  .container {
    padding: 3.125rem;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
    border-radius: 0 3.125rem 3.125rem 3.125rem;
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    flex-direction: column;
    align-items: center;
    flex: 0 1 auto;
    max-width: 30rem;
    border-width: 0px 1px 1px 0px;
    border-style: solid;
    border-color: #00d3a9;

    p,
    h2 {
      text-align: center;
    }
  }

  // . {
  //   background-color: #00b39f;
  //   color: white;
  //   :hover {
  //     color: black;
  //   }
  // }
`;

export const CategoryFilterBar = styled.div`
  position: relative;
  margin: 1.5rem 0 2rem;
  padding: 0 0.5rem;

  .category-chips-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.5rem;
    padding: 0.25rem 0;

    @media screen and (max-width: 768px) {
      flex-wrap: nowrap;
      overflow-x: auto;
      justify-content: flex-start;
      scroll-behavior: smooth;
      -webkit-overflow-scrolling: touch;
      scroll-snap-type: x proximity;
      padding: 0.5rem 0.25rem;
      margin: 0 -0.5rem;
      padding-left: 0.5rem;
      padding-right: 0.5rem;

      /* Hide scrollbar but keep functionality */
      scrollbar-width: none;
      -ms-overflow-style: none;
      &::-webkit-scrollbar {
        display: none;
      }
    }
  }

  /* Overflow fade indicators for mobile scroll */
  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 2.5rem;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.3s ease;

    @media screen and (max-width: 768px) {
      opacity: 1;
      background: linear-gradient(
        to right,
        transparent,
        ${(props) =>
          props.theme.DarkTheme
            ? "rgba(18,18,18,0.85)"
            : "rgba(255,255,255,0.85)"}
      );
    }
  }

  .category-chip {
    /* ── Inactive (default) = dark / filled ── */
    display: inline-flex;
    align-items: center;
    gap: 0.375rem;
    padding: 0.5rem 1.125rem;
    border-radius: 2rem;
    font-size: 0.8125rem;
    font-weight: 600;
    letter-spacing: 0.025em;
    text-transform: uppercase;
    white-space: nowrap;
    cursor: pointer;
    user-select: none;
    border: 1.5px solid transparent;
    outline: none;
    scroll-snap-align: start;

    background: ${(props) =>
      props.theme.DarkTheme
        ? "rgba(255,255,255,0.08)"
        : props.theme.darkJungleGreenColor};
    color: ${(props) =>
      props.theme.DarkTheme ? "rgba(255,255,255,0.7)" : "#ffffff"};

    transition:
      background 0.25s ease,
      color 0.25s ease,
      border-color 0.25s ease,
      box-shadow 0.25s ease,
      transform 0.15s ease;

    &:hover {
      background: ${(props) =>
        props.theme.DarkTheme ? "rgba(255,255,255,0.14)" : "#2d3328"};
      transform: translateY(-1px);
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    }

    &:focus-visible {
      border-color: ${(props) => props.theme.keppelColor};
      box-shadow: 0 0 0 3px
        ${(props) =>
          props.theme.DarkTheme
            ? "rgba(0,211,169,0.35)"
            : "rgba(0,179,159,0.3)"};
    }

    &:active {
      transform: scale(0.97);
    }

    /* ── Active / Selected = light / outlined ── */
    &.selected {
      background: ${(props) =>
        props.theme.DarkTheme ? "rgba(0,211,169,0.15)" : "#f0fdfb"};
      color: ${(props) =>
        props.theme.DarkTheme
          ? props.theme.keppelColor
          : props.theme.secondaryColor};
      border-color: ${(props) =>
        props.theme.DarkTheme
          ? props.theme.keppelColor
          : props.theme.secondaryColor};
      font-weight: 700;

      &:hover {
        background: ${(props) =>
          props.theme.DarkTheme ? "rgba(0,211,169,0.22)" : "#e0f9f5"};
        box-shadow: 0 2px 12px
          ${(props) =>
            props.theme.DarkTheme
              ? "rgba(0,211,169,0.2)"
              : "rgba(0,179,159,0.18)"};
      }
    }

    .chip-count {
      font-size: 0.6875rem;
      font-weight: 500;
      opacity: 0.7;
      margin-left: 0.125rem;
    }

    /* Touch-friendly sizing on mobile */
    @media screen and (max-width: 768px) {
      padding: 0.5rem 1rem;
      font-size: 0.75rem;
      min-height: 2.25rem;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .category-chip {
      transition: none;
    }
    .category-chips-wrapper {
      scroll-behavior: auto;
    }
  }
`;
