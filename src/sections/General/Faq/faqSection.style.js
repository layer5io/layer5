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
  .subcategory_name {
    margin: 1.5rem 0 0.5rem;
    font-size: 1.1rem;
    font-weight: 600;
    color: ${props => props.theme.primaryColor};
    text-transform: capitalize;
    opacity: 0.8;
  }
  
  .filter-controls {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 1.5rem;
    
    button {
      margin-right: 1rem;
    }
  }
  
  .filter-title {
    color: ${props => props.theme.primaryColor};
    font-weight: 500;
    margin-bottom: 1rem;
    padding-bottom: 0.5rem;
    text-align: center;
  }
  
  .filter-group {
    margin-bottom: 1.5rem;
    
    h3 {
      font-size: 1.2rem;
      margin-bottom: 1rem;
      color: ${props => props.theme.primaryColor};
    }
  }
  
  .filter-message {
    margin: 0.5rem 0;
    font-size: 0.9rem;
    font-style: italic;
    opacity: 0.8;
  }
  .filter-options {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }
  
  .filter-option {
    display: flex;
    align-items: center;
    margin-right: 1rem;
    margin-bottom: 0.5rem;
    
    input[type="checkbox"] {
      margin-right: 0.5rem;
      cursor: pointer;
      accent-color: ${props => props.theme.primaryColor};
    }
    
    label {
      cursor: pointer;
      font-size: 0.9rem;
    }
  }

  .filter-message {
    padding: 0.5rem;
    border-radius: 4px;
  }
  
  .active-filters {
    margin-bottom: 1.5rem;
    padding: 0.75rem 1rem;
    background-color: ${props => props.theme.secondaryLightColor};
    border-radius: 4px;
    border-left: 4px solid ${props => props.theme.primaryColor};
    
    p {
      margin: 0;
      font-size: 0.9rem;
      
      strong {
        color: ${props => props.theme.primaryColor};
      }
    }
  }
  
  .no-results {
    text-align: center;
    padding: 3rem 1rem;
    background-color: ${props => props.theme.secondaryLightColor};
    border-radius: 8px;
    margin-bottom: 2rem;
    
    h3 {
      margin-bottom: 1rem;
      color: ${props => props.theme.textColor};
    }
    
    p {
      margin-bottom: 1rem;
    }
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
    .filter-controls {
      flex-direction: column;
      align-items: flex-start;
      
      button {
        margin-bottom: 0.75rem;
        width: 100%;
      }
    }
    
    .filter-option {
      width: 100%;
    }
    
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