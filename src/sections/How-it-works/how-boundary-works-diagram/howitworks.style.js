import styled from "styled-components";

const Howitworks = styled.section`
position: sticky;
    top: calc(50vh - 249px);
.root {
    --transition-time: 0.7s;
    @media (min-width: 768px) {
        position: sticky;
        top: calc(50vh - 249px);
}
  
    & > svg {
      width: 100%;
    }
  
    & .boundaryLetter,
    & .spacer,
    & .iconBg {
      fill: white;
    }
  
    & .iconLines,
    & .iconBg {
      stroke-linecap: round;
      stroke-width: 1.5px;
      stroke-linejoin: round;
    }
  
    & .boundaryFill,
    & .arrowHead {
      fill: #f04e54;
    }
  
    & .arrowHead,
    & .arrowSegment,
    & .spacer {
      transition: 0.7s ease;
      transition-property: opacity;
    }
  
    & .arrowSegment {
      stroke-width: 2px;
      stroke: #f04e54;
      stroke-miterlimit: 10;
      stroke-linecap: round;
      fill: none;
    }
  
    & .dropShadow {
      opacity: 0.08;
      mix-blend-mode: multiply;
    }
  
    & .iconLines {
      stroke: grey;
      fill: none;
      transition: 0.7s ease;
      transition-property: stroke;
    }
  
    & .subtitle {
      fill: #b6b8c3;
    }
  
    & .iconBg {
      stroke: #e5e6ec;
      stroke-width: 1px;
      transition: 0.7s ease;
      transition-property: fill, stroke;
    }
  
    & .authenticate {
      & .iconBg {
        fill: white;
      }
  
      & .iconLines {
        stroke: #e5e6ec;
        stroke-width: 1px;
      }
    }
  
    & .authorize {
      & .spacer {
        opacity: 0;
      }
  
      & .iconBg {
        fill: black;
        stroke: black;
      }
  
      & .iconLines {
        stroke: #e5e6ec;
      }
    }
  
    & .access {
      & .spacer {
        opacity: 0;
      }
  
      & .iconBg {
        fill: black;
        stroke: black;
      }
  
      & .vaultIcon {
        fill: white;
      }
    }
  
    & .hostsAndServices {
      opacity: 1;
      transform: translate(0, 0);
      transition: 0.7s ease;
      transition-property: opacity, transform;
  
      & .leadingLine {
        fill: none;
        stroke-linecap: round;
        stroke-miterlimit: 10;
        stroke-width: 1.5px;
        stroke: black;
      }
    }
  
    & .arrowOne .arrowHead,
    & .arrowTwo .arrowHead {
      @media (--small) {
        opacity: 0;
      }
    }
  
    & .inactive {
      & .arrowHead,
      & .arrowSegment,
      & .spacer {
        @media (--medium-up) {
          opacity: 0;
        }
      }
  
      &.authorize {
        & .spacer {
          @media (--medium-up) {
            opacity: 1;
          }
        }
  
        & .iconBg {
          @media (--medium-up) {
            fill: white;
            stroke: #e5e6ec;
          }
        }
  
        & .iconLines {
          @media (--medium-up) {
            stroke: #b6b8c3;
          }
        }
      }
  
      &.access {
        & .spacer {
          @media (--medium-up) {
            opacity: 1;
          }
        }
  
        & .iconBg {
          @media (--medium-up) {
            fill: white;
            stroke: white;
          }
        }
  
        & .vaultIcon {
          @media (--medium-up) {
            fill: black;
          }
        }
      }
  
      &.hostsAndServices {
        @media (--medium-up) {
          opacity: 0;
          transform: translate(0, 10px);
        }
      }
    }
  }
`;

export default Howitworks;