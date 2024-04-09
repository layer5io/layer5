import styled from "styled-components";

const ProductWrapper = styled.section`
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
    gap: 40px;
    padding: 0 20px;
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
    h1 {
      color: ${(props) => props.theme.whiteToBlack};
    }

    p {
      color: ${(props) => props.theme.whiteToBlack};
    }

    .header-heading {
      color: ${(props) => props.theme.whiteToBlack};
      text-align: center;
    }
  }

  .paraInfo {
    width: 80vw;
  }

  .paras {
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: center; */
  }

  .comparison-button {
    margin-top: 75px;
    padding: 0 1.5rem 2rem 1.5rem;
    Button {
      font-size: 1.25rem;
    }
  }

  .gap {
    padding: 5rem 20px;
  }

  .bot_gap {
    margin-bottom: 4rem;
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

  .pricing_coming_soon {
    width: 150px;
    position: relative;
    float: right;
    z-index: 2;
    margin-top: -2rem;
    margin-right: -5.4rem;
    transform: translateY(0%) translateX(0%) rotate(14deg);
    -webkit-transform: translateY(0%) translateX(0%) rotate(14deg);
  }

  .product_hero {
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(
      180deg,
      rgba(0, 211, 169, 0.1) 0%,
      rgba(0, 179, 159, 0) 100%
    );
  }

  .product_hero_text {
    flex: 1;
    margin: 2rem;
    margin-left: 10vw;
  }
  .product_hero_text h1 {
    font-family: Qanelas Soft;
    font-size: 48px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    color: ${(props) => props.theme.whiteToBlack};
  }
  .product_hero_text h1 span {
    color: ${(props) => props.theme.secondaryColor};
  }
  .product_hero_text p {
    color: #d9d9d9;
    font-family: Qanelas Soft;
    font-size: 18px;
    font-style: normal;
    line-height: 32px;
    color: ${(props) => props.theme.whiteToBlack};
    margin: 2rem 0;
  }
  .btn {
    display: flex;
    gap: 40px;
    flex-direction: row;
  }
  .btn Button {
    font-size: 18px;
  }
  .product_hero_img {
    margin: 1rem;
    > img {
      width: 35rem;
      height: 35rem;
      position: relative;
    }
  }
  .heroImg path {
    filter: red;
  }

  .product_cards {
    min-height: 100%;
  }
  .product_cards h2 {
    text-align: center;
    font-size: 56px;
    font-style: normal;
    font-weight: 700;
  }
  .product_cards .card {
    width: 540px;
    height: 100%;
    border-radius: 20px;
    background-color: ${(props) => props.theme.grey212121ToGreyF0F0F0};
    padding: 2rem;
    margin: 2rem;
  }
  .logo {
    max-height: 3rem;
  }
  .cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  // .card:hover {
  //   transition: 400ms ease-in-out;
  //   box-shadow: 0px 0px 10px ${(props) => props.theme.caribbeanGreenColor};
  // }

  .card_head {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    position: relative;
  }

  .card_head .title {
    padding-left: 1rem;
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
    margin: 0;
  }
  .learn {
    font-size: 1rem;
    margin: 10px 0;
    cursor: pointer;
    color: ${(props) => props.theme.whiteToBlack};
    &:hover {
      text-decoration: underline;
      text-decoration-color: ${(props) => props.theme.secondaryColor};
      text-underline-offset: 8px;
    }
  }
  .btns Button {
    margin: 20px 0px;
    font-size: 16px;
    margin-bottom: 0;
  }
  .iconss {
    display: flex;
    gap: 16px;
    position: absolute;
    right: 0;
  }
  @media (max-width: 1141px) {
    .product_hero_img {
      margin: 1rem;
    }
    .product_hero_img img {
      height: 420px;
    }
  }

  @media (max-width: 968px) {
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
      margin-top: 4rem;
    }
    .product_hero_text h1 {
      justify-content: center;
      align-items: center;
    }
    .product_hero_img img {
      width: 400px;
    }
    .cards {
      flex-direction: column;
      justify-content: center;
      margin: auto;
      align-items: center;
    }
    .btn {
      justify-content: center;
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
      font-size: 16px;
      flex-direction: row;
    }
  }
  @media (max-width: 807px) {
    .product_hero_text h1 {
      font-size: 34px;
    }
    .product_hero_text p {
      font-size: 17px;
    }
    .product_cards h2 {
      font-size: 40px;
    }
  }
  @media (max-width: 600px) {
    .product_cards .card {
      width: 440px;
    }
  }
  @media (max-width: 509px) {
    .product_cards .card {
      width: 400px;
      margin: 14px;
    }
  }
  @media (max-width: 494px) {
    .card_head .title {
      padding: 10px;
      font-size: 24px;
    }
    .product_hero_img img {
      width: 100%;
    }
    /* .btn{
      font-size: 12px;
    } */
  }
  @media (max-width: 418px) {
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
      font-size: 16px;
      text-align: center;
      padding: 10px;
      margin-top: 10px;
    }
    .btn {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .product_hero_text {
      margin: 2rem 1rem 0rem 1rem;
    }
    .product_cards .card {
      width: 90%;
      /* margin: 14px; */
    }
  }
  @media (max-width: 354px) {
    .product_hero_img img {
      width: 100%;
    }
    .product_cards .card {
      width: 280px;
      padding: 16px;
    }
    .card_head {
      margin: 0;
      padding: 0;
    }
    /* .card_head .title {
      padding: 0;
      margin: 4px;
      font-size: 16px;
    } */
    .btns {
      scale: 0.8;
    }
    .card .text {
      font-size: 14px;
    }
    .iconss img {
      width: 20px;
    }
  }
`;

export default ProductWrapper;
