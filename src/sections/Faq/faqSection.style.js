import styled from "styled-components";

const FaqSectionWrapper = styled.section`
  padding: 40px 0 50px 0;
  position: relative;
  overflow: hidden;
  .accordion__item + .accordion__item {
    border-color: transparent;
  }
  .reusecore__accordion {
    margin-bottom: 80px;
  }
  .accordion__item {
    .accordion__header {
      padding: 10px 25px 10px 25px;
      background: ${props => props.theme.primaryLightColorTwo};
      h5 {
        font-weight: 400;
        font-size: 16px;
        margin-left: 25px;
        position: relative;
        color: ${props => props.theme.black};
      }
      > div {
        &:focus {
          outline: none;
        }
      }
    }

    .accordion__body {
      padding: 0 10px 0 10px;
      p {
        font-size: 16px;
        font-weight: 300;
        margin: 0;
      }
    }
  }
  .faq-thumb {
    transform: translateX(80px);
  }
  .section-title {
    text-align: center;
    h1 {
      margin-bottom: 60px;
      font-size: 40px;
    }
    .search {
      margin-bottom: 50px;
      // width: 50%;
      input {
        font-size: 20px;
        width: 80%;
        padding: 1rem;
        border: 1px solid #FFFFFF;
        background-color: #F0F0F0;
        border-radius: 1.25rem;
      }
      button {
        position: absolute;
        left: 30px;
        min-width: 20px;
        background: transparent;
        color: ${props => props.theme.headingColor}; 
      }
    }
  }
  .faq-thumb-block {
    order: 2;
  }
  .faq-content-block {
    order: 1;
  }
  @media only screen and (max-width: 1400px) {
    .faq-thumb {
      transform: translateX(0px);
    }
    .section__particle {
      &.one {
        left: 2%;
      }
    }
  }
  @media only screen and (max-width: 1024px) {
    .section__particle {
      &.one {
        left: 3%;
        top: 5%;
      }
      &.two {
        top: auto;
        bottom: 0;
      }
    }
  }

  @media only screen and (max-width: 912px) {
    .reusecore__accordion {
      margin-bottom: 50px;
    }
  }

  @media only screen and (max-width: 568px) {
    .section-title {
      text-align: center;
    }
    .faq-thumb-block {
      order: 1;
      text-align: center;
      margin-bottom: 60px;
    }
    .faq-content-block {
      order: 2;
    }
    .reusecore__accordion {
      margin-bottom: 50px;
      text-align: left;
    }
  }
  @media only screen and (max-width: 480px) {
    .accordion__item {
      .accordion__header {
        h5 {
          font-size: 13px;
          line-height: 21px;
        }
      }
    }
  }
`;

export default FaqSectionWrapper;
