import styled from "styled-components";

export const FeaturesWrapper = styled.div`
    .features-carousel {
      width: 100%;
      @media (min-width: 768px) {
       display:none;
      }
      display: block; 
      min-height: 400px;
      padding-bottom: 2rem;

      /* Force visibility of slider content */
      .slick-slider, .slick-list, .slick-track, .slick-slide {
        display: block;
        min-height: 200px;
        height: auto;
      }
      .slick-slide > div {
          height: 100%; /* Ensure inner div takes height */
      }


      img{
        object-fit:contain;
        margin-left:auto;
        margin-right:auto;
      }
     
      .main-heading{
        margin-bottom: 2rem;
        text-align: center;
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

      .slick-slider{
        .slick-dots li button:before {
          font-size: 0.6rem;
          color: ${props => props.theme.secondaryColor};
        }

        .slick-dots li.slick-active button:before {
          opacity: 1;
          color: ${props => props.theme.secondaryColor};
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
      transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
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
      transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
      border-color: ${props => props.theme.grey212121ToBlack};
      padding-top: 0;
      width: 100%; /* Ensure full width */

      @media (min-width: 768px){
        border-color: ${props => props.theme.grey212121ToBlack};
        background-color: ${props => props.theme.grey212121ToBlack};
        border-radius: 20px;
        padding: 3rem 2.75rem 2rem 2.75rem;
      }

      & .body {
        opacity: 1;
        font-size: 1rem;
        /* Mobile Specific overrides */
        max-height: unset !important;
        overflow: visible !important; 
        color: ${props => props.theme.text}; /* Ensure text is visible */
        
        @media (min-width: 768px){
            color: ${props => props.theme.white};
            max-height: 200px;
        }
      }

      & .heading {
        pointer-events: none;
        color: ${props => props.theme.text}; /* Ensure heading is visible */
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
      transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
      :hover {
        color: #00b39f;
        transition: all 0.2s ease-in-out;
      }
    }

    .terminal-wrapper {
      width: 100%;  /* Full width on mobile */
      margin-top: 1rem;
      
      & > div {
        max-width: 100%;
        display: block !important; /* Force display */
        @media (max-width: 768px) {
            max-height: 380px;
            height: 380px;
            overflow-y:scroll;
        }
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
     height:100%;
   }

`;
