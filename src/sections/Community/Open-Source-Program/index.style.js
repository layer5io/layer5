import styled from "styled-components";

const OpenSourcePricingWrapper = styled.div`
    
    .open-source-container {
        padding-top: 11rem;
        .dotsimage{
            position: absolute;
            top: -0.125rem;
            left: 0;
        }
    }
    .hero{
      p{
          margin: 1.875rem auto 1rem auto;
       }
       .products-logo-wrapper{
          display: flex;
          justify-content: center;
          img{
            max-height: 25rem;
          }
          svg {
            height: 25rem;
          }
       }
    }
    
    .signup-form{
        margin: 8.25rem auto 2.75rem auto;
        h2{
            margin-bottom: 1.875rem;
        }
        p{
            margin-bottom: 1.875rem;
        }
    }
    @media only screen and (max-width: 480px){
        .signup-form{
            margin: 3.125rem auto 1.875rem auto;
            p{
                margin-bottom: 0.625rem;
            }
        }
        .open-source-container {
            padding-top: 5rem;
        }
    }
`;

export default OpenSourcePricingWrapper;
