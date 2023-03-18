import styled from "styled-components";

export const FeaturesWrapper = styled.div`
    .features-carousel {
      @media (min-width: 768px) {
       display:none;
      }
      img{
        object-fit:contain;
        margin-left:auto;
        margin-right:auto;
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
        top: 2rem !important;
        & .paging-item {
          padding :0.25rem;
        }
        & .paging-item > button:hover {
          box-shadow:none;
        }
        & .paging-item > button > svg {
          // opacity: 1 !important;
          height: 0.65rem;
          width: 0.65rem;
          fill: ${props => props.theme.DarkTheme ? "white" : "var(--gray-6)"};
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
      border-color: ${props => props.theme.bodyRevert};
      padding-left: 44px;
      margin: 28px 0;
      min-height: auto;

      & p {
        margin: 0 0 8px;
        font-size: 1rem;
      }
    }

    .active-feature {
      border-color: ${props => props.theme.DarkTheme ? "#212121" : "#000000"};
      padding-top: 0;
      @media (min-width: 768px){
        border-color: ${props => props.theme.DarkTheme ? "#212121" : "#000000"};
        background-color: ${props => props.theme.DarkTheme ? "#212121" : "#000000"};
        border-radius: 20px;
        padding: 3rem 2.75rem 2rem 2.75rem;
      }

      & .body {
        opacity: 1;
        font-size: 1rem;
        max-height: 200px;

        @media (min-width: 768px){
            color: ${props => props.theme.white};
        }
      }

      & .heading {
        pointer-events: none;
        @media (min-width: 768px){
            color: ${props => props.theme.white};
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
      font-weight: 600;
      box-shadow: none;
      color: ${props => props.theme.text};
      cursor: pointer;
      transition: all 0.2s ease-in-out;
      :hover {
        color: #00b39f;
        transition: all 0.2s ease-in-out;
      }
    }

    .terminal-wrapper {
      & > div {
        max-width: 100%;
        height: 430px;
      }

      & > img {
        width: 100%;
        height: auto;
        object-fit:contain;
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
   .feature-expose img{
     display:flex;
     justify-content:center;
     align-items:center;
   }

`;
