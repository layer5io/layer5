import styled from "styled-components";

export const MesheryPlatformsWrapper = styled.div`
   margin-top: 5rem;
   background-color: ${props => props.theme.black};
   transform: skew(0deg, -5deg);
   width: 100%;
  .content{ 
    margin-top: -6rem;
    z-index: -1;
      padding-top: 4rem;
      padding-bottom: 4rem;
      transform: skew(0deg, 5deg);
      text-align: center;
      color: ${props => props.theme.white};
      h1,h2,h3,h4,h5,h6 {
        color: ${props => props.theme.white};
      }
      .step-1 {
        margin: 0 auto;
        flex-direction: column;
        padding-top: 6rem;
        span {
          font-weight: 400;
          text-transform: uppercase;
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
          background-color: #1e2117;

          
          &:hover {
            background-color: ${props => props.theme.secondaryColor};
          }
          
          img {
            height: 3.5rem;
          }
        }
        .single-platform-selected {
          background-color: ${props => props.theme.secondaryColor};
        }
        
      }
      .installation-steps{
          flex-direction: column;
          text-align: center;
      }
      .step-2{
        margin: 0 auto;
        flex-direction: column;
        padding-top: 2rem;
        padding-bottom: 2rem;
        span {
          font-weight: 400;
          text-transform: uppercase;
        }
        h2{
          padding-bottom: 2rem;
        }
        img {
          width: 20vw;
          min-width: 200px;
        }
      }
    }
`;
