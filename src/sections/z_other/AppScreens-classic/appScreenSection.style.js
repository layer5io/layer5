import styled from "styled-components";

import AppSecreenBG from "../../../assets/images/app/get-app/get-app-bg.webp";

const AppScreenSctionWrapper = styled.section`
  padding: 130px 0 110px 0;
  background: url(${AppSecreenBG}) no-repeat;
  background-size: cover;
  background-position: center;

  .view-more-button {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  .app__screen__slider {
    .slick-dots {
      right: -103%;
      bottom: 180px;
      width: auto;
      z-index: 999;
      li {
        width: 115px;
        height: 195px;
        margin: 0 8px;
        transition: all 0.3s ease-in;
        img {
          max-width: 100%;
        }
      }
      li.slick-active {
        box-shadow: -1px 25px 17px #b8b7b7; 
      }
    }
  }

  .slick-slide {
    position: relative;
    transform: scale(0.8);
  }
  .slick-slide.slick-active {
    position: relative;
    transform: scale(0.9);
    z-index: 3;
  }
  .slick-slide.slick-active {
    margin-left: -50px;
    margin-right: -50px;
  }
  .slick-slide[data-index~='-2'] {
    margin-left: 100px;
  }

  .slick-slide.slick-active.slick-center.slick-current {
    position: relative;
    transform: scale(1);
    margin-right: 0;
    margin-left: 0;
    z-index: 4;
  }

  .slick-arrow {
    border: none;
    position: absolute;
    top: -26%;
    right: 20%;
    background: none;
    font-size: 50px;
    cursor: pointer;
    opacity: 0.7;

    &:hover {
      opacity: 1;
      color: ${props => props.theme.secondaryColor ? props.theme.secondaryColor : "#FB7B81"}
    }
  }

  .slick-prev-icon {
    right: 25%;
  }
  @media only screen and (max-width: 912px) {
    padding: 130px 0 200px 0;
    .slick-arrow{
      top: auto;
      bottom: -100px;
      right: 42%;
    }
    .slick-prev-icon{
      right: 50%;
    }
  }
  @media only screen and (max-width: 568px) {
    .section-title-block{
      text-align: center;
      h4{
        width: 100%;
      }
      img{
        display: none;
      }
    }
    .view-more-button{
      display: none;
    }
  }
  @media only screen and (max-width: 480px) {
    .slick-slide[data-index~='-2']{
      margin-left: 0;
    }
    .slick-list{
      padding: 0 !important;
    }
    .slick-slide.slick-active{
      margin-left: 0;
      margin-right: 0;
    }
    .slick-slide{
      &.slick-active{
        transform: scale(1);
      }
      transform: scale(1);
      img{
        margin: 0 auto;
      }
    }
    .slick-arrow {
        right: 37%;
    }
    .slick-prev-icon{
      right: 50%;
    }
  }
`;

export default AppScreenSctionWrapper;
