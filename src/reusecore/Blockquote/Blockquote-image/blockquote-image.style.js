import styled from "styled-components";

const CustomersWrapper = styled.div`
  blockquote {
    padding: 0;
    margin: 0;
  }

  .type-one-text,
  .type-two-quote-text {
    color: ${(props) => props.theme.greyEEEEEEToBlack};
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  }

  section.bq-section {
    padding: 30px;
    margin-bottom: 60px;
  }

  .type-one-wrapper {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .bq-quote {
    height: 100%;
  }

  .type-one-wrapper.type-one-wrapper-boxed {
    max-width: 576px;
    margin: 0 auto;
  }

  .type-one-wrapper.type-one-wrapper-fullwidth {
    max-width: 100%;
  }
  .links {
    .type-one-quote-base,
    .type-two-quote-base {
      color: ${(props) => props.theme.tertiaryColor};
      transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
    }
  }

  /* Pricing testimonial cards */
  .pricing-testimonial-section {
    width: 100%;
  }

  .pricing-testimonial-section .type-one-wrapper {
    width: 100%;
    max-width: none;
    height: 100%;
    margin: 0;
  }

  .pricing-testimonial-card {
    position: relative;
    display: flex;
    width: 100%;
    height: 300px;
    min-height: 300px;
    overflow: hidden;
    border-radius: 8px;
    box-shadow: 2px 2px 20px ${(props) => props.theme.whiteOneToGreyCECECE};
  }

  .pricing-testimonial-pattern {
    flex: 0 0 48px;
    height: 100%;
    background: linear-gradient(
      180deg,
      rgba(71, 126, 150, 1) 0%,
      rgba(0, 179, 159, 1) 35%,
      rgba(60, 73, 79, 1) 100%
    );
  }

  .pricing-testimonial-body {
    position: relative;
    display: flex;
    flex: 1;
    min-width: 0;
    height: 100%;
    box-sizing: border-box;
    background-color: ${(props) => props.theme.grey212121ToWhite};
    padding: 105px 28px 18px 30px;
    color: ${(props) => props.theme.greyEEEEEEToBlack};
  }

  .pricing-testimonial-content {
    display: flex;
    flex: 1;
    flex-direction: column;
    min-width: 0;
    min-height: 0;
    height: 100%;
  }

  .pricing-testimonial-text {
    flex: 1;
    min-height: 0;
    margin: 0;
    padding: 0;
    font-size: 10pt;
    line-height: 1.5em;
    overflow: hidden;
  }

  .pricing-testimonial-qmark {
    position: absolute;
    top: 27px;
    left: 82px;
    z-index: 20;
    font-family: Georgia, "Times New Roman", serif;
    font-size: 25pt;
    line-height: 1;
    color: #999999;
    pointer-events: none;
  }

  .pricing-testimonial-userpic {
    position: absolute;
    top: 8px;
    left: 10px;
    z-index: 3;
    width: 72px;
    height: 72px;
    overflow: hidden;
    border-radius: 50%;
    background: ${(props) => props.theme.grey212121ToWhite};
    padding: 3px;
  }

  .pricing-testimonial-userpic img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }

  .pricing-testimonial-meta {
    flex-shrink: 0;
    margin-top: 12px;
    padding-top: 8px;
    border-top: 2px dotted ${(props) => props.theme.greyEEEEEEToBlack};
  }

  .pricing-testimonial-author {
    font-size: 10pt;
    font-weight: 600;
    line-height: 1.25em;
  }

  .pricing-testimonial-author cite {
    font-style: normal;
  }

  .pricing-testimonial-source {
    margin-top: 3px;
    font-size: 8.5pt;
    line-height: 1.25em;
    opacity: 0.8;
  }

  @media screen and (max-width: 1024px) {
    .pricing-testimonial-card {
      height: 340px;
      min-height: 340px;
    }

    .pricing-testimonial-body {
      padding-left: 25px;
      padding-right: 20px;
    }
  }

  @media screen and (max-width: 768px) {
    .pricing-testimonial-card {
      height: 315px;
      min-height: 315px;
    }

    .pricing-testimonial-pattern {
      flex-basis: 24px;
    }

    .pricing-testimonial-body {
      padding: 92px 20px 18px 24px;
    }

    .pricing-testimonial-qmark {
      top: 22px;
      left: 70px;
      font-size: 32pt;
    }

    .pricing-testimonial-userpic {
      top: 17px;
      left: 5px;
      width: 60px;
      height: 60px;
    }

    .pricing-testimonial-text {
      font-size: 9.5pt;
      line-height: 1.45em;
    }
  }

  @media screen and (max-width: 480px) {
    .pricing-testimonial-card {
      height: 315px;
      min-height: 315px;
    }

    .pricing-testimonial-body {
      padding: 92px 16px 16px 18px;
    }

    .pricing-testimonial-qmark {
      left: 62px;
      top: 22px;
      font-size: 30pt;
    }

    .pricing-testimonial-userpic {
      width: 56px;
      height: 56px;
    }
  }
  /* ========== Type One ========== */

  .type-one-quote {
    position: relative;
    display: flex;
    flex-direction: row;
    min-height: 250px;
    box-shadow: 2px 2px 25px ${(props) => props.theme.whiteOneToGreyCECECE};
    border-radius: 10px;
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  }

  .type-one-quote .type-one-quote-pattern {
    flex-basis: 80px;
    background: linear-gradient(
      180deg,
      rgba(71, 126, 150, 1) 0%,
      rgba(0, 179, 159, 1) 35%,
      rgba(60, 73, 79, 1) 100%
    );
    border-radius: 10px 0 0 10px;
  }

  .type-one-quote .type-one-quote-base {
    flex-basis: calc(100% - 80px);
    background-color: ${(props) => props.theme.grey212121ToWhite};
    padding: 40px 30px 50px 80px;
    font-size: 11pt;
    line-height: 1.62em;
    border-radius: 0 10px 10px 0;
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  }

  .type-one-quote .type-one-quote-qmark {
    position: absolute;
    top: 50px;
    left: 105px;
    font-family: Garamond, Georgia, "Times New Roman", serif;
    font-size: 42pt;
    color: #999999;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-user-select: none;
    user-select: none;
  }

  .type-one-quote .type-one-quote-userpic {
    position: absolute;
    top: 80px;
    left: 45px;
    width: 90px;
    height: 90px;
    img {
      border-radius: 50%;
    }
  }

  .type-one-quote .type-one-quote-meta {
    margin-top: 30px;
    padding-top: 10px;
    border-top: 2px dotted ${(props) => props.theme.greyEEEEEEToBlack};
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  }

  .type-one-quote .type-one-quote-meta .type-one-author,
  .type-one-quote .type-one-quote-meta .type-one-source {
    color: ${(props) => props.theme.greyEEEEEEToBlack};
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  }

  .type-one-quote .type-one-quote-meta .type-one-author {
    font-style: normal;
    text-transform: uppercase;
    letter-spacing: 0.03em;
    font-size: 10pt;
    font-weight: bold;
  }

  .type-one-quote .type-one-quote-meta .type-one-author cite {
    font-style: normal;
  }

  .type-one-quote .type-one-quote-meta .type-one-source {
    font-size: 9pt;
  }

  @media screen and (max-width: 768px) {
    .type-one-quote .type-one-quote-pattern {
      flex-basis: 20px;
    }

    .type-one-quote .type-one-quote-base {
      flex-basis: calc(100% - 20px);
      padding: 100px 30px 50px 30px;
    }

    .type-one-quote .type-one-quote-userpic {
      width: 50px;
      height: 50px;
      left: 40px;
      top: 20px;
    }

    .type-one-quote .type-one-quote-qmark {
      left: 100px;
      top: 45px;
    }
  }
  /* ========== Type Two ========== */

  .type-two-quote {
    position: relative;
    box-shadow: 2px 2px 25px ${(props) => props.theme.whiteOneToGreyCECECE};
    border-radius: 10px;
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  }

  .type-two-quote .type-two-quote-pattern {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    height: 80px;
    align-items: center;
    justify-content: flex-start;
    background: linear-gradient(
      250deg,
      rgba(71, 126, 150, 1) 0%,
      rgba(0, 179, 159, 1) 35%,
      rgba(60, 73, 79, 1) 100%
    );
    border-radius: 10px 10px 0 0;
  }

  .type-two-quote .type-two-quote-pattern .type-two-quote-qmark {
    flex-basis: 100px;
    font-family: Garamond, Georgia, "Times New Roman", serif;
    font-size: 60pt;
    color: #ffffff;
    text-align: center;
    height: 80px;
    line-height: 90pt;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-user-select: none;
    user-select: none;
  }

  .type-two-quote .type-two-quote-userpic {
    position: absolute;
    top: 45px;
    left: calc(50% - 35px);
    width: 90px;
    height: 90px;
    img {
      border-radius: 50%;
    }
  }

  .type-two-quote .type-two-quote-base {
    flex-basis: calc(100% - 80px);
    background-color: ${(props) => props.theme.grey212121ToWhite};
    padding: 60px 30px 40px 30px;
    font-size: 11pt;
    line-height: 1.62em;
    border-radius: 0 0 10px 10px;
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  }

  .type-two-quote .type-two-quote-meta {
    margin-top: 30px;
    padding-top: 10px;
    border-top: 2px dotted ${(props) => props.theme.greyEEEEEEToBlack};
    text-align: center;
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  }

  .type-two-quote .type-two-quote-meta .type-two-quote-author,
  .type-two-quote .type-two-quote-meta .type-two-quote-source {
    color: ${(props) => props.theme.greyEEEEEEToBlack};
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  }

  .type-two-quote .type-two-quote-meta .type-two-quote-author {
    font-style: normal;
    text-transform: uppercase;
    letter-spacing: 0.03em;
    font-size: 10pt;
    font-weight: bold;
  }

  .type-two-quote .type-two-quote-meta .type-two-quote-author cite {
    font-style: normal;
  }

  .type-two-quote .type-two-quote-meta .type-two-quote-source {
    font-size: 9pt;
  }

  @media screen and (max-width: 768px) {
    .type-two-quote .type-two-quote-base {
      padding-left: 30px;
    }
  }

  /* ========== Type Three ========== */

  .type-three-quote {
    position: relative;
    min-height: 250px;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 2px 2px 25px ${(props) => props.theme.whiteFourToGreyCECECE};
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  }

  .type-three-quote .type-three-quote-base {
    background: linear-gradient(
      250deg,
      rgba(71, 126, 150, 1) 0%,
      rgba(0, 179, 159, 1) 35%,
      rgba(60, 73, 79, 1) 100%
    );
    color: #ffffff;
    font-weight: bold;
    padding: 60px;
    border-radius: 10px;
  }

  .type-three-quote .type-three-quote-meta {
    display: flex;
    flex-direction: row;
    margin-top: 30px;
    padding-top: 20px;
    border-top: 2px dotted #ffffff;
  }

  .type-three-quote .type-three-quote-meta .type-three-quote-author {
    font-style: normal;
    text-transform: uppercase;
    letter-spacing: 0.03em;
    font-size: 10pt;
    font-weight: bold;
  }

  .type-three-quote .type-three-quote-meta .type-three-quote-author cite {
    font-style: normal;
  }

  .type-three-quote .type-three-quote-meta .type-three-quote-source {
    font-size: 10pt;
  }

  .type-three-quote .type-three-quote-qmark {
    position: absolute;
    top: 140px;
    right: 5px;
    font-size: 280pt;
    color: #ffffff;
    opacity: 0.18;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-user-select: none;
    user-select: none;
  }

  .type-three-quote .type-three-quote-userpic {
    width: 90px;
    height: 90px;
    img {
      border-radius: 50%;
    }
    margin-right: 20px;
  }

  @media screen and (max-width: 768px) {
    .type-three-quote .type-three-quote-base {
      padding-left: 40px;
      padding-right: 40px;
    }

    .type-three-quote .type-three-quote-meta {
      flex-direction: column;
      text-align: center;
    }

    .type-three-quote .type-three-quote-meta .type-three-quote-userpic {
      margin: 0 auto;
      margin-bottom: 10px;
    }
  }
`;

export default CustomersWrapper;
