import styled from "styled-components";

export const MesheryPlatformsWrapper = styled.div`
   margin-top: 5rem;
   background-color: ${props => props.theme.black};
   transform: skew(0deg, -5deg);
   width: 100%;
  .content{ 
      transform: skew(0deg, 5deg);
      text-align: center;
      color: ${props => props.theme.white};
      h1,h2,h3,h4,h5,h6 {
        color: ${props => props.theme.white};
      }
      .step-1 {
          padding-top: 8rem;
          @media (max-width: 62rem) {
            padding-top: 6rem;
          }
           @media (max-width: 32rem) {
            padding-top: 4rem;
          }
      }
      .supported-platforms{
        padding-top: 2rem;
        align-items: center;
        max-width: 110rem;
        margin: 0 auto;
        
        .single-platform{
          max-height: 6rem;
          max-width: 12rem;
          border-radius: 1rem;
          margin-bottom: 2rem; 
          background-color: ${props => props.theme.tertiaryColor};
          img {
            height: 3.5rem;
          }
        }
      }
      .installation-steps{
          margin: 2rem;
      }
      .step-2{
        padding-top: 4rem;
        padding-bottom: 2rem;
      }
    }
`;
