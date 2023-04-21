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
        .how-to-contribute {
          display: flex;
          flex-direction: row;
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
      margin-top: -1rem;
      h4{
      font-size: 1.5rem;
      font-weight: 400;
      margin-right: .75rem;
      margin-top: -1.5rem;
      }
      img{
      height: 3rem;
      width: 4rem;
      transition: .5s;
      margin-top: -1.5rem;
      }
      img:hover{
      padding-left: 1rem;
      transition: .5s;
      }
      .heading-start__arrow {
        svg{
        height: 3rem;
        width: 4rem;
        transition: .5s;
        margin-top: -1.5rem;
        }
        svg:hover{
        padding-left: 1rem;
        transition: .5s;
        }
      }
    }
    .instructions{

      .step{
        display: flex;
        align-items: center;
        align-content: center;
        margin-bottom: 2rem;
        justify-content: center;
        
        button {
          display:flex;
          margin: auto;
          padding: 1rem;
        }
      }
        .finding-an-issue { 
          display: block;
          margin: 0 auto;
          text-align: center; 
          margin-top:1rem;
        }

        svg {
          max-height: 22rem;
          width: 21.875rem;
          .contributor-chest-colorMode_svg__colorMode1 {
            fill: ${props => props.theme.whiteToBlack};
          }
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
        width: 21.875rem;
        text-align: center; 
        margin-top:1rem;
      }
    }
    .community-collage {
      text-align: center ;
      min-width: 45vmin;
      
    }
    .community-img{
      text-align:center;
    }
    .table-wrapper{
      text-align: center;
      margin-bottom: 4rem;
    }
    @media only screen and (max-width: 991px) {
      .heading-start {
        margin-left: auto; margin-right: auto;
        h4 {
          font-size: 1.25rem;
        }
       img {
            margin-top: -.3rem;
            height: 2rem;
            transition: .5s;
           transform: rotate(90deg);
          }
        }
        .heading-start__arrow {
          margin-bottom: 1rem;
          margin-left: -1.25rem; margin-right: auto;
        } 
        
      .heading{
        h2 {
          margin-top: -1.5rem;
        }
      }
  }
`;

