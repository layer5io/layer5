import styled from "styled-components";

export const MesheryPlatformsWrapper = styled.div`
   
  .background-wrapper {
        position: absolute;
        width: 100%;
        height: 100%;
        overflow: hidden;
        transform: skewY(10deg);
        transform-origin: 0 center;
        background-color: ${props => props.theme.secondaryColor};
        z-index: -1;
    }
  
  .content{
      //transform: rotate(-10deg);
      text-align: center;
      h2 {
        color: ${props => props.theme.white};
        padding-top: 18.5rem;
        font-weight: 700;
      }
      
    }
`;
