import styled from "styled-components";
import MesheryWhiteLogo from "../../assets/images/meshery/icon-only/meshery-logo.svg";

const SpecsWrapper = styled.div`
  .management-plane {
    margin-top: 2rem;
    color: white;
    background: linear-gradient(
      to right,
      ${(props) => props.theme.secondaryColor} 50%,
      ${(props) => props.theme.highlightColor} 50%
    );
    @media (max-width: 62rem) {
      background: ${(props) => props.theme.highlightColor};
    }

    .management-plane-row {
      @media (max-width: 62rem) {
        flex-wrap: wrap;

        > .text,
        > .card {
          flex: 0 0 100%;
          max-width: 100%;
        }
      }
    }

    .text {
      position: relative;
      padding: 6rem;
      overflow: visible;

      @media (max-width: 62rem) {
        background: ${(props) => props.theme.secondaryColor};
        box-shadow: 0 0 0 100vmax ${(props) => props.theme.secondaryColor};
        clip-path: inset(0 -100vmax);
      }

      @media (max-width: 36rem) {
        padding-left: 2rem;
        padding-bottom: 12rem;
      }

      h2 {
        position: relative;
        color: ${(props) => props.theme.white};
        padding-bottom: 1rem;
        z-index: 2;
      }

      &:before {
        content: " ";
        display: block;
        position: absolute;
        left: -300px;
        top: 0;
        width: 100%;
        height: 100%;
        background: url(${MesheryWhiteLogo}) no-repeat;
        z-index: 1;
        opacity: 0.2;
      }
    }

    .card {
      @media (max-width: 62rem) {
        padding-bottom: 2rem;
      }
    }
  }

  overflow: hidden;
`;

export default SpecsWrapper;
