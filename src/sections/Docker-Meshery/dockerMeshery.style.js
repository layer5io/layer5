import styled from "styled-components";

export const DockerMesheryWrapper = styled.div`
  
    .page-header-section {
        min-height: 30rem;
        background: rgb(71,126,150);
        background: linear-gradient(250deg, rgba(71,126,150,1) 0%, rgba(0,179,159,1) 35%, rgba(60,73,79,1) 100%);
        display: flex;
        align-items: center;
        align-content: space-between;
        flex-direction: column;
        padding: 0 6rem;
        justify-content: center;
        h1 {            
            color: white;
        }

        .dockerIcon{
            height: 12rem;
            width: auto;
        }
        .mesheryIcon{
            height: 12rem;
            width: auto;
        }

          @media screen and (max-width: 768px) {
            
              text-align: center;
              justify-content: center;
              align-items: center;
            
            .dockerIcon{
              height: 5rem;
              width: auto;
            }
            .mesheryIcon{
                height: 5rem;
                width: auto;
            }
            img {
                margin: auto;
                height: 50%;
                width: 50%;
            }
          }
        }
    }

    p.uppercase { 
        text-align: center;
        text-transform: uppercase; 
      }
    h2 {
        padding: 2rem 0rem;
    }

    @media only screen and (max-width: 1000px) {
      .docker-extension-meshery {
          margin-bottom: 2rem;
      }
      .mobile-image-reverse {
        display: flex;
        flex-direction: column-reverse;
      }
    }

    @media only screen and (max-width: 768px) {
      .page-header-section {
        min-height: 20rem;
      }
        .form-title{
          margin: 3rem 1rem 0;
        }
      }
    div.extension-feature {
      margin: 2rem 0rem;
    }
    .docker-extension-meshery {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .sectionTitle, .sectionContent {
      padding-right: 15px;
      padding-left: 15px;
    }
    div.feature-title {
      background-color: ${(props) => props.theme.saffronLightColor};
      padding: .4rem;
      font-weight: 500;
      margin-bottom: .3rem;
      line-height: 1.25rem;
      color: black;
      padding: 5%;
      border-radius: 1rem;
    }
`;
