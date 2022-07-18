import styled from "styled-components";

export const DockerMesheryWrapper = styled.div`
  
    .required-sign {
      color: #8b0000;
    }
    select {
      /* for Firefox */
      -moz-appearance: none;
      /* for Chrome */
      -webkit-appearance: none;
    }
    
    /* For IE10 */
    select::-ms-expand {
      display: none;
    }
    .accounts{
      p{
      font-size: 12px;
      line-height: 15px;
      color: ${props => props.theme.primaryColor};
      }
      h5{
        margin-top: 1rem;
      }
      .accounts_group{
        margin: 0 1rem 0 1rem;
      }
    }
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

    .black-box {
      padding: 20px;
      min-height: 400px;
      margin: 5%;
      padding: 5%;
      background-color: ${(props) => props.theme.darkJungleGreenColor};
      border-radius: 6rem;
      text-align: center;

      .sign{  
        width: 5.5rem;
        transform: skewX(-15deg);
      }
      
      h2, h3 {
        color: white;
      }
      h2{
        margin-top: 1rem;
        margin-bottom: 2rem;
      }
      p {
        margin-top: .85rem;
        color: white;
      }
      }

    p.uppercase { 
        text-align: center;
        text-transform: uppercase; 
      }
    h2 {
        padding: 2rem 0rem;
    }

    .form-title {
        margin: 1rem 1rem 0;
        padding: 1rem;
        text-align: center;
        background-color: ${(props) => props.theme.secondaryColor};
        color: white;
        box-shadow: 0px 0px 5px 2px ${(props) => props.theme.primaryLightColor};
    }

    .label {
      font-size: 1rem;
    }

    .form {
        font-size: .9rem;
        margin: 0 1rem 1rem;
        box-shadow: 0px 5px 5px 2px ${(props) => props.theme.primaryLightColor};
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

        .formRight select {
          background: none repeat scroll 0 0 #FFFFFF;
          border: 1px solid black;
          border-radius: 10px;
          height: 50px;
          padding: 1rem 1rem;
          width: 100%;
          font-size: 0.85rem;
          margin: 0.5rem 0;
        }

        .custom-arrow {
          background-color: white;
          width: 2rem;
          height: 2.65rem;
          position: absolute;
          right: 3.20rem;
          bottom: 9.75rem;
          pointer-events: none;
          .down-arrow {
            position: relative;
            top: 0.5rem;
            left: 0.5rem;
            border: solid ${props => props.theme.primaryColor};
            border-width: 0 3px 3px 0;
            display: inline-block;
            padding: 6px 6px;
            transform: rotate(45deg);
            pointer-events: none;
          }
          @media screen and (max-width: 300px) {
            right: 2.2rem;
          }
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
    div.extension-feature {
      margin: 2rem 0rem;
    }
    .docker-extension-meshery {
      display: flex;
      justify-content: center;
      align-items: center;
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
