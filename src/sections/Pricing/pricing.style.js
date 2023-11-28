import styled from "styled-components";

const PricingWrapper = styled.section`

.headers {
  background:${props => props.theme.secondaryColor};
  background: linear-gradient(0deg, hsla(173, 100%, 35%, 1) 7%, hsla(0, 0%, 0%, 1) 90%);
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
