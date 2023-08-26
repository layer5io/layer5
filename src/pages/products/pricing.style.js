import styled from "styled-components";

const PricingWrapper = styled.section`
  .freeCont {
    width: 100vw;
    overflow: hidden;
  }
  .headers {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    /* gap: 40px; */
    padding: 0 20px;
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
    h1 {
      color: ${(props) => props.theme.whiteToBlack};
      margin-bottom: 2.5rem;
    }
    h1 span {
      color: rgb(235, 192, 23);
    }

    p {
      color: ${(props) => props.theme.whiteToBlack};
      margin-bottom: 5rem;
    }

    .header-heading {
      color: ${(props) => props.theme.whiteToBlack};
      text-align: center;
    }
  }
  .paraInfo{
    width: 80vw;
  }

  .subscription-duration {
    margin-top: 2rem;
    margin-bottom: 4rem;
    text-align: center;
    h2 {
      color: ${(props) => props.theme.whiteToBlack};
      transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
    }
    @media (min-width: 1400px) {
      h2 {
        color: ${(props) => props.theme.whiteToBlack};
        transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
      }
    }
  }
  .gap {
    padding: 5rem 20px;
  }
  .freeTry {
    position: relative;
    display: flex;
    justify-content: center;
    left: -10vw;
    width: 120vw;
    margin: 2.5rem 0;
    background: ${(props) => props.theme.theme};
    transform: rotate(4deg);
    overflow: hidden;
    .bgSvgLeft {
      position: absolute;
      bottom: 0;
      right: -240px;
      width: 860px;
    }
    .bgSvgRight {
      position: absolute;
      top: 0;
      left: -240px;
      width: 860px;
    }
  }
  .rotate {
    transform: rotate(-4deg);
    width: 100vw;
  }

  .subscriptionButtons {
    .button {
      margin: 0.5rem 0rem 0rem 0rem;
      font-weight: 400;
      color: white;
    }
    @media (min-width: 434px) {
      .button:first-child {
        border-top-right-radius: 0rem;
        border-bottom-right-radius: 0rem;
      }
      .button:last-child {
        border-top-left-radius: 0rem;
        border-bottom-left-radius: 0rem;
      }
    }
    .active {
      border-left: 1px solid ${(props) => props.theme.caribbeanGreenColor};
      border-right: 1px solid ${(props) => props.theme.caribbeanGreenColor};
      background-color: ${(props) => props.theme.caribbeanGreenColor};
      padding: 0.3rem;
    }

    .inactive {
      background-color: ${(props) => props.theme.primaryLightColor};
      padding: 0.2rem;
      transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
    }
  }

  .wrapper {
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
    background-color: ${(props) => props.theme.grey212121ToWhite};
    border-top: 3px solid #00b39f;
    box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.1);
    padding: 2rem;
    border-radius: 4px;
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);

    @media (max-width: 992px) {
      margin: 1.5rem 1rem;
    }
  }

  .featured {
    transform: scale(1.05);
    background-color: ${(props) => props.theme.grey212121ToWhite};
    box-shadow: 0px 2px 12px 0px rgb(0, 179, 158, 0.7);
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  }
  .pricing-table:hover {
    box-shadow: 0px 1px 10px -4px rgba(0, 0, 0, 0.15);
  }
  .featured:hover {
    box-shadow: 0px 2px 16px rgb(0, 179, 158, 0.9);
  }

  .pricing-table {
    .pricing-label {
      border-radius: 2px;
      background-color: rgb(235, 192, 23);
      padding: 0.25rem 0.5rem;
      display: block;
      position: relative;
      float: right;
      justify-content: flex-end;
      align-content: flex-end;
      width: fit-content;
      font-size: 0.75rem;
      font-weight: 500;
      margin-top: -1rem;
      margin-right: -1rem;
      margin-bottom: 1rem;
    }

    h2 {
      margin-top: 1rem;
      color: ${(props) => props.theme.greyDCDCDCToGrey3B3B3B};
      font-size: 24px;
      font-weight: 500;
      transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
    }

    .byline {
      color: ${(props) => props.theme.greyC8C8C8ToGreen3C494F};
      font-size: 16px;
      font-weight: 400;
      transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
    }

    .pricing-features {
      margin-top: 2rem;
    }

    .pricing-features .feature {
      margin: 0.75rem 0rem;
      .details {
        display: flex;
        margin: 0.5rem 0;
      }
      h5 {
        color: ${(props) => props.theme.greyAAAAAAToGrey7A848E};
        display: block;
        font-size: 16px;
        font-weight: 400;
        vertical-align: text-top;
        transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
      }
      .check {
        padding-right: 0.2rem;
        vertical-align: middle;
        color: ${(props) => props.theme.secondaryColor};
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

    .price-button-disabled,
    .price-button-link {
      color: #fff;
      display: block;
      margin: 2rem auto 0;
      padding: 1rem 2rem;
      width: 100%;
      text-align: center;
      font-weight: 500;
      transition: 0.3s;
      background: ${(props) => props.theme.secondaryColor};
    }

    .price-button-disabled {
      background: rgb(0, 179, 158, 0.6);
    }
    .price-button-disabled:hover {
      cursor: default;
      box-shadow: none;
    }

    .pricing-label {
      background: rgb(235, 192, 23);
      color: #000;
      transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
    }

    .price-tag {
      color: ${(props) => props.theme.secondaryColor};
    }
  }

  .accordion__item {
    .accordion__header {
      margin: 0.1rem 0;
    }
  }

  .pricing_coming_soon {
    width: 150px;
    position: relative;
    float: right;
    z-index: 2;
    margin-top: -2rem;
    margin-right: -5.4rem;
    -webkit-transform: translateY(0%) translateX(0%) rotate(14deg);
  }
  /* .product_hero {
    height: 90vh;
    display: flex;
  }
  .product_hero_text {
    flex: 1;
    margin: 4rem;
  }
  .product_hero_text h1 {
    color: #fff;
    font-family: Qanelas Soft;
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    color: ${(props) => props.theme.whiteToBlack};
  }
  .product_hero_text h1 span {
    color: ${(props) => props.theme.secondaryColor};
  }
  .product_hero_text p {
    padding-top: 2rem;
    color: #d9d9d9;
    font-family: Qanelas Soft;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 30px;
    color: ${(props) => props.theme.whiteToBlack};
  }
  .btn Button {
    color: black;
    font-size: 18px;
    font-weight: 700;
    margin-top: 1rem;
    margin: 1rem;
    width: 100px;
  }
  .product_hero_img {
    flex: 1;
  }
  .heroImg path {
    filter: red;
  }
  .product_cards {
    min-height: 90vh;
  }
  .product_cards h2 {
    text-align: center;
    font-size: 56px;
    font-style: normal;
    font-weight: 700;
  }
  .product_cards .card {
    max-width: 40vw;
    border-radius: 20px;
    background-color: ${(props) => props.theme.grey212121ToGreyF0F0F0};
    padding: 2rem;
    margin: 2rem;
  }
  .cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .card_head {
    display: flex;
    position: relative;
  }
  .card_head .logo {
    padding: 1rem;
    padding-left: 0;
    padding-top: 0;
  }
  .card_head .title {
    padding: 1rem;
    padding-top: 0;
    font-size: 32px;
    font-weight: 700;
  }
  .card .text {
    padding-bottom: 2rem;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    color: ${(props) => props.theme.whiteToBlack};
  }

  .card_bottom {
    border-top: 2px solid #2c2c2c;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
  }
  .card_bottom .learn {
    margin-bottom: 20px;
    text-decoration: underline;
    text-decoration-color: ${(props) => props.theme.secondaryColor};
    text-underline-offset: 8px;
    cursor: pointer;
    color: ${(props) => props.theme.whiteToBlack};
  }
  .btns Button {
    margin: 20px 10px;
    color: ${(props) => props.theme.whiteToBlack};
    font-weight: 700;
    font-size: 20px;
  }
  .iconss {
    position: absolute;
    right: 0;
  }
  .icons {
    margin-left: 200px;
  }
  .icons img {
    padding: 5px;
  }
  @media (max-width: 1322px) {
    .card_bottom {
      justify-content: space-between;
      align-items: center;
    }
    .card_bottom .learn {
      margin-top: 14px;
    }
  }
  @media (max-width: 1098px) {
    .btns {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  @media (max-width: 938px) {
    .product_hero_text h1 {
      font-size: 36px;
    }
    .btns {
      flex-direction: column;
    }
  }
  @media (max-width: 807px) {
    .product_hero_text h1 {
      font-size: 34px;
    }
    .product_hero_text p {
      font-size: 17px;
    }
    .icons {
      margin-left: 60px;
    }
  }

  @media (max-width: 888px) {
    .product_hero {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: auto;
      width: 100vw;
    }
    .product_hero_text {
      text-align: center;
      margin: 2rem;
    }
    .product_hero_text h1 {
      justify-content: center;
      align-items: center;
    }
    .product_hero_img img {
      display: none;
    }
    .cards {
      flex-direction: column;
      justify-content: center;
      margin: auto;
    }
    .card {
      min-width: 70vw;
    }
    .card_head {
      align-items: flex-start;
    }
    .product_cards {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .btns {
      flex-direction: row;
    }
  }
  
  @media (max-width: 540px) {
    .card_head {
      padding: 10px;
      align-items: flex-start;
    }
    .card_head .logo {
      padding: 0px;
    }
    .btns {
      flex-direction: column;
    }
  }
  @media (max-width: 494px) {
    .card_head .title {
      padding: 10px;
      font-size: 24px;
    }
  }
  @media (max-width: 404px) {
    .product_hero {
      justify-content: center;
      margin: auto;
      width: 100vw;
    }

    .product_hero_text h1 {
      font-size: 28px;
      text-align: center;
    }
    .product_hero_text p {
      font-size: 15px;
      text-align: center;
      padding: 10px;
      margin-top: 10px;
    }
    .btn {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .product_hero_text {
      margin: 1rem;
    }
    .card {
      min-width: 85vw;
    }
  }
  @media (max-width: 344px) {
    .card {
      min-width: 82vw;
      padding: 0;
    }
    .card_head {
      padding: 0;
    }
    .card .text {
      padding: 2px;
    }
    .btns Button {
      margin: 4px;
    }
    .card_head {
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .card_head .logo {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  } */
`;

export default PricingWrapper;
