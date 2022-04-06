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

    h2 {
        padding: 2rem 0rem;
    }

    .form-title {
        margin: 1rem 1rem 0;
        padding: 1rem;
        text-align: center;
        background-color: ${props => props.theme.secondaryColor};
        color: white;
        box-shadow: 0px 0px 5px 2px ${props => props.theme.primaryLightColor};
    }

    .label {
      font-size: 1rem;
    }

    .form {
        font-size: .9rem;
        margin: 0 1rem 1rem;
        box-shadow: 0px 5px 5px 2px ${props => props.theme.primaryLightColor};
        padding: 1rem;

        label {
            display: block;
        }
        
        .form-name {
            font-weight: 600;
            margin: 20px 0px 5px 3px;
            display: block;

        }

        .text-field {
            width: 100%;
            border: 1px solid black;
            border-radius: 10px;
            padding: 1rem .5rem;
            font-size: .85rem;
        }

        .text-field:focus {
          border: 2px solid #00B39F;
        }

        .btn {
          margin: 1.9rem auto;
          display: block;
          width: auto;
        }
    }
    @media only screen and (max-width: 300px) {
      .form{
        margin-left: 0;
        margin-right: 0;
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
`;