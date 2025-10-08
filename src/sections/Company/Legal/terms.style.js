import styled from "styled-components";

const TermsWrapper = styled.section`
  position: relative;
  z-index: 1;

  .terms-content {
    width: 100%;
    max-width: 900px;
    margin: 0 auto;
    padding-left: 2px;
    margin-top: -20rem; 
  }
  .page-header-section {
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      background: rgb(71,126,150);
      background: linear-gradient(250deg, rgba(71,126,150,1) 0%, rgba(0,179,159,1) 35%, rgba(60,73,79,1) 100%);
      padding: 3rem 0;
      h1 {
          color: white;
      }
      @media (max-width: 680px) {
       padding: 2rem 0;
          h1 {
              font-size: 1.75rem;
          }
      }
    }

  .conduct_heading {
    text-align: left;
    width: 90%;
    font-size: 25px;
    font-weight: 200;
    margin-top: 30px;
    margin-bottom: 20px;
    h2 {
      text-align: left;
    }
  }

  h3 {
    margin-top: 20px;
    margin-bottom: 10px;
  }

  hr {
    margin: 1rem 0;
    padding-left: 4rem;
  }

  .address {
    margin-left: 2rem;
  }

  * {
    box-sizing: border-box;
  }

  @media only screen and (max-width: 420px) {
    .terms-content {
      padding-right: 0;
    }
    .conduct_heading {
      text-align: left;
      width: 90%;
      font-size: 18px;
      font-weight: 200;
      margin-top: 30px;
      margin-bottom: 20px;
      h2 {
        text-align: left;
      }
    }
  }
`;

export default TermsWrapper;