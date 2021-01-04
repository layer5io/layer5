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
      text-align: center;
      h2 {
        color: ${props => props.theme.white};
        font-weight: 700;
      }
      .step-1 {
          padding-top: 18.5rem;
          @media (max-width: 62rem) {
            padding-top: 10rem;
          }
           @media (max-width: 32rem) {
            padding-top: 6rem;
          }
      }
      .supported-platforms{
        padding-top: 2rem;
        align-items: center;
      }
      .step-2{
        padding-top: 4rem;
        padding-bottom: 2rem;
      }
    }
`;
