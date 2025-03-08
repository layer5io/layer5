import styled from "styled-components";

const PlanCardWrapper = styled.section`
  margin: 0 auto;

  .pricing-card {
    display: flex;
    text-align: left; /* Align all content to the left */
    padding: 20px;
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 10px;
    background-color: #f9f9f9;
    gap: 22rem;
  }
  .price-container {  
    transform: scale(1.15);
    align-items: baseline;
    .price {
      display: flex;
      align-items: baseline;
      font-weight: bold;
      color: ${(props) => props.theme.whiteToBlack}; 
      white-space: nowrap; /* Prevent line breaks in price text */
      justify-content: center;
    }
    .currency-symbol {
      font-size: 1rem;
      align-self: flex-start;
      font-weight: thin;
      color: ${(props) => props.theme.primaryColor}; 
    }
    .price-amount {
      font-size: 3rem; 
      color: ${(props) => props.theme.primaryColor};
      > sup {
        font-weight: 200;
        font-size: 1rem;
      }
    }
    .currency {
      font-size: .65rem;
      font-weight: normal;
      color: ${(props) => props.theme.primaryColor}; 
      align-content: baseline;
    }
    .price-per {
      margin-left: .25rem;
      align-self: center;
      font-weight: 200;
      font-size: .75rem;
      letter-spacing: -.025rem;
      color: ${(props) => props.theme.primaryColor}; 
    }
  }
  .pricing-button {
    padding: 10px 20px;
    font-size: 1em;
    border: none;
    border-radius: 5px;
    background-color: #007bff;
    color: white;
    cursor: pointer;
    &:hover {background-color: #0056b3;}
  }
  .pricing-table {
    width: 100%;
    min-width: 300px;
    background-color: ${(props) => props.theme.grey212121ToWhite};
    box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.1);
    padding: 2rem 1rem;
    border-radius: 4px;
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
    margin-bottom: 2rem;
    flex: 1 1 calc(25% - 20px); /* 4 columns */
    &:hover {
      box-shadow: 0px 1px 10px -4px rgba(0, 0, 0, 0.15);
    }
    .pricing-label {
      border-radius: 0px 4px;
      background: ${(props) => props.theme.grey0E0E0EToGreen3C494F};
      padding: 0.125rem 0.5rem;
      position: absolute;
      width: fit-content;
      font-size: 0.75rem;
      font-weight: 500;
      top: 0rem;
      right: .9rem;
      color: #eee;
      transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
    }
    .featured-label {
      border-radius: 0px 4px;
      background: ${(props) => props.theme.saffronColor};
      padding: 0.125rem 0.5rem;
      position: absolute;
      width: fit-content;
      font-size: 0.75rem;
      font-weight: 500;
      top: 0rem;
      right: .9rem;
      color: #111;
      transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
    }
    h6 {
      font-size: .9rem;
      margin-top: 1rem;
      color: ${(props) => props.theme.tealBlue};
    }
    h2 {
      margin-bottom: 1rem;
      color: ${(props) => props.theme.greyDCDCDCToGrey3B3B3B};
      font-size: 1.5rem;
      font-weight: 600;
      text-align: center;
      transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
    }
  }
  .featured {
    /* transform: scale(1.05); */
    /* border: .5rem solid ${(props) => props.theme.whiteToBlack}; */
    background-color: ${(props) => props.theme.grey212121ToWhite};
    box-shadow: 0px 2px 12px 0px rgb(0, 179, 159, 0.7);
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
    &:hover { box-shadow: 0px 2px 16px rgb(235, 192, 23, 0.9); }
  }
  .byline {
    /* color: ${(props) => props.theme.greyC8C8C8ToGreen3C494F}; */
    color: ${(props) => props.theme.blueE0FFFCToBlue477E96};
    margin-top: -.5rem;
    margin-bottom: 2.5rem;
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
      font-weight: bold;
      .details {
        display: block;
        height: auto;
        p {
          color: ${(props) => props.theme.greyD3D7DBToGreen1E2117};
          background-color: ${(props) => props.theme.grey1D1817ToGreyE6E6E6};
          padding: 0.5rem;
          line-height: 1rem;
          margin-top: 0.5rem;
          font-size: 0.85rem;
          border-radius: 0.25rem;
        }
      }
      h5 {
        color: ${(props) => props.theme.greyD3D7DBToGreen1E2117};
        display: block;
        font-size: 1rem;
        font-weight: bold;
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
    color: ${(props) => props.theme.secondaryColor};
    &.symbol {
      font-size: 24px;
    }
    &.amount {
      letter-spacing: -2px;
      font-size: 3rem;
    }
    &.free {
      font-size: 40px;
    }
    &.after {
    color: #3b3b3b;
    font-weight: 500;
    }
  }
.price-button-disabled {
    width: 100%;
    background: rgb(0, 179, 158, 0.6);
    display: block;
    margin: 2rem auto 0;
    transition: 0.3s;
    &:hover {
      cursor: not-allowed;
      box-shadow: none;
    }
  }
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
`;

export default PlanCardWrapper;