import styled from "styled-components";

export const NewcomersGuideWrapper = styled.section`
    margin-bottom: 4rem;
    .newcomers-welcome{
        text-align: center;
        .newcomers-journey{
            display: flex;
            align-items: center;
            margin: 3.5rem 0;
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
    .heading{
      display: flex;
      flex-direction: column;
      align-items: center;
      h2{
        margin-top: -6.5rem;
      }
    }
    .heading-start{
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      align-self: flex-end;
      margin-right: 2rem;
      margin-top: -1.5rem;
      h5{
      font-size: 1.125rem;
      font-weight: 400;
      margin-right: 1rem;
      }
      img{
      height: 3rem;
      width: 4rem;
      transition: .5s;
      }
      img:hover{
      padding-left: 1rem;
      transition: .5s;
      }
    }
    .instructions{
      .step{
        display: flex;
        align-items: center;
        margin-bottom: 2rem;
      }
      .finding-an-issue { 
        max-height: 22rem;
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
    .community-collage {
      
      min-width: 45vmin;
      
    }
    .table-wrapper{
      text-align: center;
      margin-bottom: 4rem;
    }
    @media only screen and (max-width: 991px) {
      .heading-start, .heading-start__arrow{
        display: none;
      }
      .heading{
        h2{
          margin-top: 0;
        }
      }
  }
`;

