import styled from "styled-components";

const Howitworks = styled.section`
.cls-1{
    fill:#00d3a9;
}

.cls-2{
    fill:#00b39f;
}

.st0{fill:url(#SVGID_1_)}
.st1{fill:url(#SVGID_2_)}
.st2{fill:#2beda7}
.st3{fill:url(#SVGID_3_)}
.st4{fill:url(#SVGID_4_)}
.st5{fill:url(#SVGID_5_)}
.st6{fill:url(#SVGID_6_)}
.st7{fill:url(#SVGID_7_)}
.st8{fill:url(#SVGID_8_)}

.octarine {
    .st0{fill:#4d3d75}
    .st1{fill:#604c87}
    .st2{fill:#795ca0}
    .st3{fill:#8e6eaf}
    .st4{fill:#faba2f}
    .st5{fill:#60b74b}
    .st6{fill:#83ce5b}
    .st7{fill:#169c4d}
    .st8{fill:#f99932}
    .st9{fill:#d87319}
    .st10{fill:#0e784a}
    .st11{fill:#ea852a}
    .st12,.st13{fill:none;stroke:rgba(255,255,255,.7);stroke-miterlimit:10}
    .st13{stroke - width:.5}
}

.render {
  visibility: hidden;
  opacity: 0;
  transition: all 0.7s ease-out;
}

.show {
  visibility: visible;
  opacity: 1;
  transition: all 0.7s ease-in;
}
.render-arrow {
  visibility: hidden;
  opacity: 0;
}

.show-arrow {
  visibility: visible;
  opacity: 1;
}
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
      fill: #00d3a9;
    }

    & .layerFill{
      fill: #00b39f;
    }
  
    & .arrowHead,
    & .arrowSegment,
    & .spacer {
      transition-property: opacity;
    }
  
    & .arrowSegment {
      stroke-width: 2px;
      stroke: #00d3a9;
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
      stroke: #00d3a9;
      stroke-width: 1px;
      transition: 0.7s ease;
      transition-property: fill, stroke;
    }
  
    & .authenticate {
      & .iconBg {
        fill: white;
      }
  
      & .iconLines {
        stroke: #b6b8c3;
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
        stroke: #b6b8c3;
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
        stroke: #00d3a9;
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
            stroke: #00d3a9;
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
