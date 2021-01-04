import styled from "styled-components";

export const FeaturesWrapper = styled.div`
    .features-carousel {
      @media (min-width: 768px) {
        display: none;
      }
      
      .main-heading{
        margin-bottom: 2rem;
      }
    
      .feature {
        border-left: none;
        padding-left: 0;
        margin: 40px 0 17px;
    
        & p {
          margin: 8px 0 0;
        }
      }
    
      & .body {
        opacity: 1;
        max-height: unset;
      }
    
      /* nuka-carousel overrides */
      & :global {
        & .slider-frame,
        & .slider-slide:focus {
          outline: none !important;
        }
      }
    
      & .pagingDots {
        & :global(.paging-item:not(.active) > button) {
          opacity: 1 !important;
          fill: var(--gray-6) !important;
        }
      }
    }
    
    .features {
      display: none;
    
      @media (min-width: 768px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 40px;
        min-height: auto;
        overflow-anchor: none;
        align-items: center;
      }
    }
    
    .feature {
      border-left: 2px solid;
      border-color: ${props => props.theme.headingColor};
      padding-left: 44px;
      margin: 28px 0;
      min-height: auto;
    
      & p {
        margin: 0 0 8px;
      }
    }
    
    .active-feature {
      border-color: ${props => props.theme.tertiaryColorTwo};
      background-color: ${props => props.theme.tertiaryColorTwo};
      border-radius: 20px;
      
      @media (max-width: 768px){
        border-color: ${props => props.theme.secondaryColor};
        background-color: ${props => props.theme.white};
        border-radius: 0;
      }
    
      & .body {
        color: ${props => props.theme.white};
        @media (max-width: 768px){
            color: ${props => props.theme.black};
        }
        opacity: 1;
        font-size: 1rem;
        max-height: 200px;
        padding-bottom: 2rem;
      }
    
      & .heading {
        padding-top: 3rem;
        color: ${props => props.theme.white};
        @media (max-width: 768px){
            color: ${props => props.theme.black};
        }
      }
    }
    
    .body {
      opacity: 0;
      max-height: 0;
      overflow: hidden;
      font-size: 15px;
      transition: opacity 0.3s, max-height 0.3s;
    }
    
    .options {
      list-style: none;
      margin: 0;
      padding: 0;
    }
    
    .heading {
      text-align: left;
      background: none;
      border: none;
      padding: 0;
      font-size: 20px;
      line-height: 28px;
      font-weight: 600;
      color: ${props => props.theme.headingColor};
      cursor: pointer;
    }
    
    .terminal-wrapper {
      & > div {
        max-width: 100%;
        height: 660px;
      }
    
      & > img {
        width: 100%;
        height: auto;
      }
    
      @media (min-width: 768px) {
        width: 400px;
    
        & > div {
          height: auto;
        }
      }
    
      @media (min-width: 900px) {
        width: 600px;
      }
    }
    
    .learn-more-link {
      display: none;
      text-align: left;
      transition: all 0.3s linear;
      color: ${props => props.theme.white};
      
      svg{
           margin-left: 0;
           font-size: 27px;
           transition: all 0.3s linear;
       }
      
      &:hover{
        color: ${props => props.theme.secondaryColor};
        svg{
            margin-left: 3px;
            transform: scale(1.2);
        }
      }
    
      @media (min-width: 768px) {
        display: flex;
        align-items: center;
      }
    }

`;
