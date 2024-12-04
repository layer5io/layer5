import styled from "styled-components";

const PlanCardWrapper = styled.section`
margin: 0 auto;
  /*  z-index: 1;
  Ensure the pricing table is on top of header content and the free forever label */

.pricing-table {
  background-color: ${(props) => props.theme.grey212121ToWhite};
  box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  border-radius: 4px;
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);

  @media (max-width: 992px) {
    margin: 1.5rem 1rem;
  }
}

.pricing-container {
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: flex-start;
}

.pricing-card {
  text-align: left; /* Align all content to the left */
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  width: 560px;
  background-color: #f9f9f9;
}


.price {
  display: flex;
  align-items: baseline;
  gap: 4px; /* Adjust space between elements */
  font-weight: bold;
  color: #000;
  white-space: nowrap; /* Prevent line breaks in price text */
  justify-content: center;
}

.currency-symbol {
  font-size: 1.2em;
  /* vertical-align: super;
  font-size: smaller; */
  align-self: flex-start;
  font-weight: 400;
  color: #aaa; /* Light color for currency symbol */
}

.price-value {
  font-size: 2.5em; /* Make the price value stand out */
  /* color: rgb(235, 192, 23); */
  color: ${(props) => props.theme.primaryColor};
}

.price-text {
  font-size: 1em;
  font-weight: 400;
  color: ${(props) => props.theme.primaryColor}; /* Subtle color for text */
}

.pricing-button {
  padding: 10px 20px;
  font-size: 1em;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
}

.pricing-button:hover {
  background-color: #0056b3;
}

.price-container .price-text .usd-sup {
  font-size: 0.6em; /* Adjust size to make it smaller */
  vertical-align: super; /* Move it to the superscript position */
  margin-bottom: .5rem;
}

  .featured {
    transform: scale(1.05);
    background-color: ${(props) => props.theme.grey212121ToWhite};
    box-shadow: 0px 2px 12px 0px rgb(0, 179, 159, 0.7);
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  }

  .pricing-table:hover {
    box-shadow: 0px 1px 10px -4px rgba(0, 0, 0, 0.15);
  }

  .featured:hover {
    box-shadow: 0px 2px 16px rgb(235, 192, 23, 0.9);
  }

  .pricing-table {
    .pricing-label {
      border-radius: 0px 4px;
      background: ${(props) => props.theme.saffronColor};
      padding: 0.25rem 0.5rem;
      display: block;
      position: absolute;
      float: right;
      justify-content: flex-end;
      align-content: flex-end;
      /* text-transform: uppercase; */
      width: fit-content;
      font-size: 0.75rem;
      font-weight: 500;
      top: 0rem;
      right: .9rem;
      color: #000;
      transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);

    }

    h2 {
      margin-bottom: 1rem;
      color: ${(props) => props.theme.greyDCDCDCToGrey3B3B3B};
      font-size: 24px;
      font-weight: 600;
      text-align: center;
      transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
    }

    .byline {
      color: ${(props) => props.theme.greyC8C8C8ToGreen3C494F};
      margin-top: -.5rem;
      margin-bottom: 1.5rem;
      font-size: .9rem;
      font-weight: 400;
      transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
      justify-content: center;
      text-align: center;
    }

    .pricing-features {
      margin-top: 2rem;
      line-height: 1rem;
      .feature {
        margin: 0rem 0rem;
        line-height: 1rem;
        .details {
          display: flex;
          margin: 0.25rem 0;
          p {
            color: ${(props) => props.theme.greyD3D7DBToGreen1E2117};
            background-color: ${(props) => props.theme.grey1D1817ToGreyE6E6E6};
            padding: 0.5rem;
            line-height: 1.05rem;
            font-size: .85rem;
            border-radius: 0.15rem;
          }
        }
        h5 {
          color: ${(props) => props.theme.greyD3D7DBToGreen1E2117};
          display: block;
          font-size: 1rem;
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

    .price-tag {
      color: ${(props) => props.theme.secondaryColor};
    }
  }

`;

export default PlanCardWrapper;