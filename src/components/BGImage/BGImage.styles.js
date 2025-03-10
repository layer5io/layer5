import styled from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";


export const BGWrapper = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;
`;

export const FakeBGImg = styled(GatsbyImage)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  max-height: 32rem;
  z-index: 0;
  border-radius: 10px;
  opacity:1;
  @media (min-width: 768px){
    opacity:0;
    display: none !important;
  } 
`;

export const Content = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 2;
  @media (max-width: 767px){
    position: absolute;
    display: flex;
    justify-content: center;
  } 
`;
