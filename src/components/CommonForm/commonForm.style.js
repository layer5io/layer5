import styled from "styled-components";

const CommonFormWrapper = styled.section`

.thank-you-box {
    padding: 2rem;
    margin: 1rem;
    background-color: ${props => props.theme.darkJungleGreenColor};
    border-radius: 2rem;
    min-height: 20rem;
    animation: fade-in 0.8s;
    
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

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1
  }
}

.form-body{
box-shadow: 0px 5px 5px 2px ${props => props.theme.primaryLightColor};
margin: 1rem;

.form-title {
    padding: 1rem;
    text-align: center;
    background: linear-gradient(123deg, ${props => props.theme.secondaryColor} 60%, ${props => props.theme.secondaryColor} 100%);
    color: white;
  }

.form{
    font-size: .9rem;
    margin: 0 1rem 1rem;
    padding: 1rem;
    
    .supscript{
        color: ${props => props.theme.caribbeanGreenColor};
        font-size: 2.5rem;
        font-weight: 300;
      }

      label {
        display: block;
        font-size: 1rem;
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
        padding: .5rem .5rem;
        font-size: .85rem;
      }

      .text-field:focus {
        border: 2px solid #00B39F;
      }

      .btn {
        margin: 1.9rem auto;
        display: block;
        width: auto;
        font-weight: 510;
        background: linear-gradient(123deg, ${props => props.theme.secondaryColor} 60%, ${props => props.theme.secondaryColor} 100%);
      }

}
}

`;

export default CommonFormWrapper;
