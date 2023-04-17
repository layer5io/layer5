import styled from "styled-components";

const PricingWrapper = styled.section`

.headers {
  background:${props => props.theme.grey212121ToGreen1E2117};
  background: linear-gradient(0deg, ${props => props.theme.grey121212ToWhite} 12%, rgba(0,211,169,1) 43%, rgba(0,179,159,1) 60%, rgba(71,126,150,1) 100%);
  /* background: linear-gradient(180deg, rgba(6,6,6,1) 12%, rgba(0,179,159,1) 52%, rgba(0,179,159,1) 53%, rgba(0,179,159,1) 53%, rgba(255,255,255,1) 79%);  position: relative; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 22rem;
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);

  @media (min-width: 1400px) {
    height: 25rem;
  }
  @media (min-width: 2048px) {
    height: 30rem;
  }
  h1{
    margin-top: -2rem;
  }

 .header-svg {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 12vw;
  }
  .header-heading {
    color: white;
    text-align: center;
  }
}

.subscription-duration {
    margin-top: 2rem;
    margin-bottom: 4rem;
    text-align: center;
    h2 {
      color: ${props => props.theme.whiteToBlack};
      transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
    }
    @media (min-width: 1400px) {
      h2{
        color: ${props => props.theme.whiteToBlack};
        transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
      }

    }
}

.subscriptionButtons {
  .button {
    margin:.5rem 0rem 0rem 0rem;
    font-weight:400;
    color: white;
  }
  @media (min-width: 434px) {
    .button:first-child{
      border-top-right-radius: 0rem;
      border-bottom-right-radius: 0rem;
    }
    .button:last-child{
      border-top-left-radius: 0rem;
      border-bottom-left-radius: 0rem;
    }
  }
.active {
  border-left: 1px solid ${props => props.theme.caribbeanGreenColor};
  border-right: 1px solid ${props => props.theme.caribbeanGreenColor};
  background-color: ${props => props.theme.caribbeanGreenColor};
  padding: 0.3rem;
  }

.inactive {
  background-color: ${props => props.theme.primaryLightColor};
  padding: 0.2rem;
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  }
}

.wrapper{
  max-width: 1090px;
  position: relative;
  width: 100%;
  padding: 0 2rem;
  margin: -2rem auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (min-width: 1400px) {
    margin: -8rem auto 0;
  }
  @media (min-width: 2048px) {
    margin: -10rem auto;
  }
}


.pricing-table {
  background-color: ${props => props.theme.grey212121ToWhite};
  border-top: 3px solid #00b39f;
  box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.1);
	padding: 2rem;
	border-radius: 4px;
	transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);

  @media (max-width: 992px) {
    margin: 1.5rem 1rem;
  }
}

.featured{
      transform: scale(1.05);
      background-color: ${props => props.theme.grey212121ToWhite};
      box-shadow: 0px 2px 12px 0px rgb(0, 179, 158, 0.7);
      transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
    }
.pricing-table:hover {
      box-shadow: 0px 1px 10px -4px rgba(0, 0, 0, .15);
    }
.featured:hover{
      box-shadow: 0px 2px 16px rgb(0, 179, 158, 0.9);
    }

.pricing-table{

    .pricing-label {
      border-radius: 2px;
      padding: .25rem .5rem;
      display: block;
      position: relative;
      float: right;
      justify-content: flex-end;
      align-content: flex-end;
      width: fit-content;
      font-size: .75rem;
      font-weight: 500;
      margin-top: -1rem;
      margin-right: -1rem;
      margin-bottom: 1rem;
    }

    h2 {
      margin-top: 1rem;
      color: ${props => props.theme.greyDCDCDCToGrey3B3B3B};
      font-size: 24px;
      font-weight: 500;
      transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
    }

    .byline {
      color: ${props => props.theme.greyC8C8C8ToGreen3C494F};
      font-size: 16px;
      font-weight: 400;
      transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
    }

    .pricing-features {
      margin-top: 2rem;
    }

    .pricing-features .feature {
      margin: .75rem 0rem;
      .details{
        display: flex;
        margin: 0.5rem 0;
      }
      h5{
        color: ${props => props.theme.greyAAAAAAToGrey7A848E};
        display: block;
        font-size: 16px;
        font-weight: 400;
        vertical-align: text-top;
        transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
      }
      .check{
        padding-right: 0.2rem;
        vertical-align: middle;
        color: ${props => props.theme.secondaryColor};
      }
    }


    .price-tag {
      margin-top: 2rem;
      text-align: center;
      font-weight: 500;
    }

    .price-tag .symbol {
      font-size: 24px;
    }

    .price-tag .amount {
      letter-spacing: -2px;
      font-size: 3rem;
      @media screen and (max-width: 992px) and (min-width: 768px) {
        font-size: 1.5rem;
      }
      @media screen and (max-width: 400px) {
        font-size: 2rem;
      }
    }

    .price-tag .free {
      font-size: 40px;
    }

    .price-tag .after {
      color: #3b3b3b;
      font-weight: 500;
    }

    .price-button-disabled, .price-button-link {
      color: #fff;
      display: block;
      margin: 2rem auto 0;
      padding: 1rem 2rem;
      width: 100%;
      text-align: center;
      font-weight: 500;
      transition: .3s;
      background: ${props => props.theme.secondaryColor};
    }

    .price-button-disabled{
      background: rgb(0, 179, 158, 0.6);
    }
    .price-button-disabled:hover{
      cursor: default;
      box-shadow: none;
    }

    .pricing-label {
      background: ${props => props.theme.greyDDDDDDToGrey333333};
      color:  ${props => props.theme.blackToWhite};
      transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
    }

    .price-tag {
      color:  ${props => props.theme.secondaryColor};
    }
}

.accordion__item {
  .accordion__header {
    margin: 0.1rem 0;
  }
}

.pricing_coming_soon{
  width : 150px;
  position : relative ;
  float : right;
  z-index:2;
  margin-top:-2rem;
  margin-right:-5.4rem;
  -webkit-transform: translateY(0%) translateX(0%) rotate(14deg);
}

`;

export default PricingWrapper;
