import styled from "styled-components";

const PlanCardWrapper = styled.section`

  
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
      margin-bottom: 1rem;

      color: ${(props) => props.theme.greyDCDCDCToGrey3B3B3B};
      font-size: 24px;
      font-weight: 600;
      margin-left: 1rem;
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
        /* vertical-align: text-top; */
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

`;

export default PlanCardWrapper;