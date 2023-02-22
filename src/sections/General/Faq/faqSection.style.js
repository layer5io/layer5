import styled from "styled-components";

const FaqSectionWrapper = styled.section`
  margin: 2.5rem auto;
  position: relative;
  overflow: hidden;

  .category_name {
    margin: 2rem 0 0.5rem;
    font-style: italic;
    text-transform: capitalize;
  }
  .accordion__item + .accordion__item {
    border-color: transparent;
  }
  .reusecore__accordion {
    margin-bottom: 5rem;
  }
  .accordion__item {
    .accordion__header {
      padding:0;
      background: ${props => props.theme.secondaryColor};
      h5 {
        font-weight: 700;
        font-size: 18px;
        position: relative;
        color: ${props => props.theme.white};
      }
      > div {
        &:focus {
          outline: none;
        }
      }
    }

    .accordion__body {
      padding: 0 0.625rem 0 0.625rem;
      p {
        font-size: 16px;
        font-weight: 300;
        text-align: initial;
        margin: 0;
      }
    }
  }
  div.faqbutton {
    text-align: center; 
    
    button.faqbutton {
      margin-bottom: 1.25rem;
    }
  }
  .section-title {
    text-align: center;
    h1 {
      margin-bottom: 3.75rem;
      font-size: 40px;
      line-height: 3.125rem;
    }
    .search {
      margin-bottom: 3.125rem;
      input {
        font-size: 20px;
        width: 80%;
        padding: 1rem;
        border: 1px solid #FFFFFF;
        background-color: #F0F0F0;
        border-radius: 1.25rem;
      }
    }
  }
  .askus_section {
    text-align: center;
    h2 {
      margin-bottom: 1rem;
    }
    p {
      margin-bottom: 2rem;
    }
    button {
      margin-bottom: 0.5rem;
    }
  }
  @media only screen and (max-width: 912px) {
    .reusecore__accordion {
      margin-bottom: 3.125rem;
    }
  }

  @media only screen and (max-width: 568px) {
    .section-title {
      text-align: center;
    }
    .reusecore__accordion {
      text-align: left;
    }
  }
  @media only screen and (max-width: 480px) {
    .accordion__item {
      .accordion__header {
        h5 {
          font-size: 13px;
          line-height: 21px;
          padding-right: 1.6rem;
        }
      }
    }
  }
`;

export default FaqSectionWrapper;
