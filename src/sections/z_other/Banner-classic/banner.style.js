import styled from "styled-components";

import imgHero from "../../../assets/images/classic/hero-bg.webp";

const BannerSectionWrapper = styled.section`
  /* color: #1D316C; */
  padding-top: 190px;
  background: url(${imgHero}) no-repeat;
  background-size: 45% 100%;
  background-position: center right;
  p {
    margin: 0 0 75px 0;
  }
  .section-title {
    h4 {
      font-size: 85%;
      display: flex;
      align-items: center;
      text-transform: uppercase;
      span {
        background: ${props => props.theme.primaryColor};
        padding: 7px 13px;
        color: ${props => props.theme.white};
        border-radius: 25px;
        margin-right: 7px;
        line-height: 100%;
      }
    }
    h1 {
      font-weight: 300;
      font-size: 60px;
      line-height: 75px;
      margin: 0 0 38px 0;
      span{
        font-weight: 600;
      }
    }
  }
  .banner-btn.one {
    background: #52de97;
    color: #e0f5ea;
    &:hover {
      background: #e0f5ea;
      color: #52de97;
    }
  }
  .banner-btn.two {
    background: #ffebec;
    color: #fb7b81;
    &:hover {
      background: #fb7b81;
      color: #ffebec;
    }
  }
  .banner-btn + .banner-btn {
    margin-left: 30px;
  }
  .app-screen-image-wrapper {
    position: relative;
    width: 75%;
    margin: 0 0 0 auto;
    .thumb {
      position: absolute;
      box-shadow: 0 0 40px ${props => props.theme.shadowColor};
      border-radius: 10px;

      img {
        height: 100%;
      }

      &.one {
        bottom: 3%;
        left: -20%;
        height: 50%;
      }

      &.two {
        top: 3%;
        right: -18%;
        height: 28%;
      }
    }
  }
  @media only screen and (max-width: 1024px) {
    .app-screen-image-wrapper {
      margin: 0 auto;
      .thumb {
        &.one {
          left: -15%;
        }
      }
    }
    p {
      margin: 0 0 45px 0;
    }
  }
  @media only screen and (max-width: 912px) {
    margin: 30px 0 0 0;
    padding-top: 120px;
    background: none;
    .section-title {
      margin-bottom: 18px;
      width: 100%;
      h1 {
        font-size: 33px;
        line-height: 45px;
        margin-bottom: 0;
      }
      h4 {
        margin-bottom: 8px;
      }
    }
    p {
      margin: 0 20px 30px 0;
    }
    .banner-btn {
      min-width: 150px;
      font-size: 14px;
    }
    .banner-btn + .banner-btn {
      margin-left: 12px;
    }
    .app-screen-image-wrapper {
      width: 85%;
      margin: 0 auto;
      .thumb {
        &.one,
        &.two {
          display: none;
        }
      }
    }
    .vintage-box {
      &:before {
        display: none;
      }
    }
  }
  @media only screen and (max-width: 760px) {
    padding: 100px 0 0 0;

    .banner-btn + .banner-btn {
      margin-left: 30px;
    }
    .app-screen-image-wrapper {
      margin-top: 70px;
      width: 75%;
    }
  }
  @media only screen and (max-width: 568px) {
    .app-screen-image-wrapper {
      display: none;
    }
  }

  @media only screen and (max-width: 480px) {
    padding: 120px 0 0px 0;
    .section-title {
      h1 {
        font-size: 35px;
        line-height: 50px;
      }
    }
    .vintage-box {
      &:before {
        content: none;
      }
    }
  }
  @media only screen and (max-width: 380px) {
    .section-title {
      h1 {
        font-size: 30px;
        line-height: 46px;
        margin: 0 0 30px 0;
      }
      h4 {
        font-size: 12px;
      }
    }
    .banner-btn {
      font-size: 14px;
      min-width: 127px;
      padding: 14px 12px;
    }
    .banner-btn + .banner-btn {
      margin-left: 15px;
    }
  }
  @media only screen and (max-width: 330px) {
    .section-title {
      h1 {
        font-size: 23px;
        line-height: 35px;
      }
    }
  }
`;

export default BannerSectionWrapper;
