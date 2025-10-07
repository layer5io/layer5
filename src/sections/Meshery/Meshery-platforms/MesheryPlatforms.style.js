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
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 1rem;
        max-width: 100%;
        margin: 0 auto;
        
        .single-platform{
          height: 6rem;
          width: 10rem;
          display: flex;
          align-items: center;
          justify-content: center;
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
          padding-bottom: 1rem;
        }
        img {
          width: 20vw;
          min-width: 200px;
        }
      }
    }
`;
