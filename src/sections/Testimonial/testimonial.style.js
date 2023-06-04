import styled from "styled-components";
import TestimonialNavBG from "../../assets/images/app/testimonial/vintage.webp";

const TestimonialWrapper = styled.section`
  padding: 110px 0 120px 0;
  position: relative;

  .testmonial__heading {
    position: absolute;
    width: 40%;
  }

  .testimonial__slider {
    display: flex;
  }

  .slick-list {
    flex-basis: 50%;
    padding-top: 180px;

    .slick__slider__item {
      font-weight: 100;

      p {
        font-weight: 300;
        svg {
          fill: #2c0075;
          margin: 0 12px 2px 5px;
        }
      }

      .slider__meta {
        display: flex;
        align-items: center;
        margin-top: 40px;

        img {
          height: 70px;
          width: 70px;
          border-radius: 50%;
        }
      }
    }
  }
  .testimonial__thumb {
    flex-basis: 50%;
    position: relative;
    bottom: 0;
    li {
      position: absolute;
      left: 15%;
      top: 5%;
      width: auto;
      height: auto;
      height: 130px;
      width: 130px;
      transition: 450ms all;
      &:nth-child(2) {
        left: 74%;
        top: 7%;
      }
      &:nth-child(3) {
        top: 83%;
        left: 12%;
      }
      &:nth-child(4) {
        top: 65%;
        right: -10%;
        left: auto;
      }
      &:nth-child(5) {
        top: auto;
        bottom: -25%;
        left: auto;
        right: 25%;
      }
      &:nth-child(6) {
        left: auto;
        right: 28%;
        top: 42%;
      }
      img {
        height: 98px;
        width: 98px;
        border-radius: 50%;
        box-shadow: 0 0 20px #c7c7c7;
        -webkit-transform-origin: center right;
        transform-origin: center right;
        transition: 450ms all;
      }

      &.slick-active {
        background: url(${TestimonialNavBG}) no-repeat;
        background-size: cover;
        background-position: center;

        img {
          transform: scale(1.5);
        }
      }
    }
  }
  .testimonial__slider {
    .slick-arrow {
      position: absolute;
      bottom: -90px;
      left: -12px;
      background: transparent;
      border: none;
      font-size: 40px;
      line-height: 30px;
      svg {
        fill: rgba(122, 132, 142, 0.3);
        transition: 450ms all;
      }
      &:hover {
        svg {
          fill: ${props => props.theme.secondaryColor};
        }
      }
    }
    .slick-next-icon {
      left: 40px;
    }
  }
  .testimonial-client {
    margin-left: 20px;

    h6 {
      font-size: 20px;
      font-weight: 400; 
    }
    p {
      margin: 0;
      padding: 0 !important;
      font-size: 14px;
      font-weight: 300;
    }
  }
  @media only screen and (max-width: 1280px) {
    .testimonial__thumb li {
      &:nth-child(5) {
        right: 0%;
      }
    }
  }
  @media only screen and (max-width: 912px) {
    padding: 80px 0 120px 0;
    .testimonial__thumb li {
            &:nth-child(2) {
                left: 60%;
            }
            &:nth-child(3) {
                top: 40%;
                left: 17%;
            }
            &:nth-child(4) {
                top: 76%;
                right: 0%;
            }
            &:nth-child(5) {
                bottom: -5%;
                left: auto;
                right: 43%;
            }
            &:nth-child(6) {
                right: 0px;
                top: 42%;
            }
        }
    } 

  @media only screen and (max-width: 760px) {
    .testmonial__heading {
      h2 {
        margin: 0 0 52px 0;
      }
    }
    .testimonial__thumb li {
        height: 115px;
        width: 115px;
        &.slick-active{
            img{
                transform: scale(1.2);
            }
        }
        &:nth-child(1) {
            top: -6%;
        }
        &:nth-child(2) {
            left: 60%;
            top: -7%;
        }
        &:nth-child(3) {
            top: 49%;
            left: 12%;
        }
        &:nth-child(4) {
            top: 90%;
            right: 4%;
        }
        &:nth-child(5) {
            bottom: -45%;
            left: auto;
            right: 50%;
        }
        &:nth-child(6) {
            right: 7px;
            top: 41%;
        }
    }
    
    .testmonial__heading {
      position: relative;
      width: 100%;
    }
    .testimonial__slider {
      .slick-arrow {
        bottom: -60px;
      }
    }
    .slick-list {
      padding-top: 0;
    }
  }
  @media only screen and (max-width: 568px) {
    padding: 80px 0 30px 0;
    
      .testmonial__heading{
          text-align: center;
      }
    .testimonial__slider{
        display: block;
    }
    .testimonial__thumb{
        display: none !important;
    }
  }
  
`;

export default TestimonialWrapper;
