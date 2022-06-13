import styled from "styled-components";
import background from "../Home/Projects-home/images/background.svg";

const PricingWrapper = styled.section`

.shapes_wrap{
  position: relative;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  &:before {
      content: url(${background});
      position: absolute;
      right: 3rem;
      top: 0rem;
  }
  @media (max-width: 768px) {
    display: none;
  }
}


.headers {
  background: rgb(255,255,255);
background: linear-gradient(0deg, rgba(255,255,255,1) 12%, rgba(0,211,169,1) 43%, rgba(0,179,159,1) 60%, rgba(71,126,150,1) 100%);
  /* background: linear-gradient(180deg, rgba(6,6,6,1) 12%, rgba(0,179,159,1) 52%, rgba(0,179,159,1) 53%, rgba(0,179,159,1) 53%, rgba(255,255,255,1) 79%);  position: relative; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 20rem;
  @media (min-width: 1400px) {
    height: 25rem;
  }  
  @media (min-width: 2048px) {
    height: 30rem;
  }
  h1{
    margin-top: -4rem;
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
  .subscription-duration {
    color: white;
    margin-top: 2rem;
    margin-bottom: 0rem;
    h3 {color: white;margin-bottom: .5rem;}
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
	background: #fff;
  border-top: 3px solid #00b39f;
  box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.1);
	padding: 2rem;
	border-radius: 4px;
	transition: .3s;
  @media (max-width: 768px) {
    margin: 1.5rem 1rem;
  }
}

.featured{
      transform: scale(1.05);
      box-shadow: 0px 2px 12px 0px rgba(0,0,0,0.5);
    }
.pricing-table:hover {
      box-shadow: 0px 1px 10px -4px rgba(0, 0, 0, .15);
    }
.featured:hover{
      box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.1);
    }

.pricing-table{

    .pricing-label {
      border-radius: 2px;
      padding: .25rem .5rem;
      display: inline-block;
      font-size: 12px;
      font-weight: 500;
      margin-left: 60%;
    }

    h2 {
      margin-top: 1rem;
      color: #3b3b3b;
      font-size: 24px;
      font-weight: 500;
    }

    h5 {
      color: ${props => props.theme.primaryLightColor};
      font-size: 16px;
      font-weight: 400;
    }

    .pricing-features {
      margin-top: 2rem;
    }

    .pricing-features .feature {
      font-size: 14px;
      margin: .5rem 0rem;
      color: ${props => props.theme.primaryColor};
      .check{
        padding-right: 0.2rem;
        vertical-align: middle;
        polyline{
          color: ${props => props.theme.secondaryColor};
        }
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
      font-size: 60px;
    }

    .price-tag .free {
      font-size: 40px;
    }

    .price-tag .after {
      color: #3b3b3b;
      font-weight: 500;
    }

    .price-button {
      color: #fff;
      display: block;
      margin: 2rem auto 0;
      padding: 1rem 2rem;
      width: 100%;
      text-align: center;
      font-weight: 500;
      transition: .3s;
    }

    .price-button:hover {
      text-decoration: none;
    }

    .pricing-label {
      background: rgb(0, 179, 158, 0.3);
      color:  ${props => props.theme.secondaryColor};
    }

    .price-tag {
      color:  ${props => props.theme.secondaryColor};
    }

    .price-button {
      background: rgb(0, 179, 158, 0.8);
    }

    .price-button:hover {
      background: ${props => props.theme.secondaryColor};
    }
}

.accordion__item {
  .accordion__header {
    margin: 0.1rem 0;
  }
}


`;

export default PricingWrapper;
