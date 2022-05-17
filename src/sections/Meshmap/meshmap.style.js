import styled from "styled-components";

const MeshmapWrapper = styled.div`
  
  .supscript{
    color: ${props => props.theme.caribbeanGreenColor};
    font-size: 2.5rem;
    font-weight: 300;
  }
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

  .description{
    margin-top: 3rem;

    .desc-text {
      padding: 1.56rem;
      h1{
          font-weight: 600;
      }
      .heading-1 {
          font-weight: 500;
      }
      .heading-2 {
          font-weight: 700;
          color: ${props => props.theme.secondaryColor};
      }
      .desc-p {
          font-size: 1.25rem;   
          margin: 1.875rem 0 2.5rem 0;
      }
    }
  }

  .para {
      padding-top: 6rem;
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


  .meshmapImage{
    display: block;
    margin: 4rem auto;
    width: 100%;
  }

  p.caption {
    display: relative;
    margin-top: -3rem;
    font-style: italic;
    text-align: center;
  }

  .form-title {
    margin: 0 1rem;
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


    .black-box {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 20px;
      min-height: 400px;
      margin: 5%;
      padding: 5%;
      background-color: ${props => props.theme.darkJungleGreenColor};
      border-radius: 10%;
      
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

      .btn-box {

        .btn-one, .btn-two {
          margin: .65rem;
        }

        .btn-one:hover {
          color: ${props => props.theme.darkJungleGreenColor};
        }
        .btn-two:hover {
          color: ${props => props.theme.darkJungleGreenColor};
        }
      }

      @media only screen and (max-width: 62rem) {
          .image {
            width: auto;
            height: auto;
          }
          .title1 {
            text-align: center;
        }
        p {
            padding-top: 4rem;
        }
        }

        @media (max-width: 770px) {
            .image {
                width: auto;
                height: auto;
              }

            .hero-text {
                .title1 {
                    text-align: center;
                }
            }         
             
        }
      @media only screen and (max-width: 600px) {
        image {
            width: auto;
            height: auto;
          }
        .form{
            .btn {
            width: 50%;
        }
    }
      }
    }
`;

export default MeshmapWrapper;
