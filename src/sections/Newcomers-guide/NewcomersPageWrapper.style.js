import styled from "styled-components";

export const NewcomersGuideWrapper = styled.section`
    .newcomers-welcome{
        text-align: center;
        .newcomers-journey{
            display: flex;
            align-items: center;
            margin: 2rem 0;
            h2{
              margin-bottom: 2rem;
            }
        }
        .how-to-contribute{
          h3{
            margin: auto;
            font-weight: 600;
          }
          p {
            margin: 2rem 0;
          }
        }
    }
    
    .instructions{
      .step{
        display: flex;
        align-items: center;
        margin-bottom: 2rem;
      }
      h3{
        display:inline;
        padding-bottom: 0.3rem;
        border-bottom: 2px solid ${props => props.theme.primaryLightColorTwo};
      }
      li{
        margin-bottom: 1rem;
      }
      p{
        margin-top: 1rem;
      }
      img{
        display: block;
        margin: 0 auto;
        max-width: 21.875rem
      }
    }
`;

