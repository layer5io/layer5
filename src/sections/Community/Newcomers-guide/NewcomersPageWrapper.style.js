import styled from "styled-components";

export const NewcomersGuideWrapper = styled.section`
    margin-bottom: 4rem;
    .newcomers-welcome{
        text-align: center;
        .newcomers-journey{
            display: flex;
            align-items: center;
            margin: 3.5rem 0;
            h2{
              margin-bottom: 2rem;
            }
        }
        .how-to-contribute {
          display: flex;
          flex-direction: row;
          h3{
            margin: auto;
            font-weight: 600;
          }
          p {
            margin: 2rem 0;
          }
        }
    }
    .heading{
      display: flex;
      flex-direction: column;
      align-items: center;
      h2{
        margin-top: -6.5rem;
      }
    }
    .heading-start{
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      align-self: flex-end;
      margin-right: 2rem;
      margin-top: -1rem;
      h4{
      font-size: 1.5rem;
      font-weight: 400;
      margin-right: .75rem;
      margin-top: -1.5rem;
      }
      img{
      height: 3rem;
      width: 4rem;
      transition: .5s;
      margin-top: -1.5rem;
      }
      img:hover{
      padding-left: 1rem;
      transition: .5s;
      }
      .heading-start__arrow {
        svg{
        height: 3rem;
        width: 4rem;
        transition: .5s;
        margin-top: -1.5rem;
        }
        svg:hover{
        padding-left: 1rem;
        transition: .5s;
        }
      }
    }
    .instructions{

      .step{
        display: flex;
        align-items: center;
        align-content: center;
        margin-bottom: 2rem;
        justify-content: center;
        
        button {
          display:flex;
          margin: auto;
          padding: 1rem;
        }
      }
        .finding-an-issue { 
          display: block;
          margin: 0 auto;
          text-align: center; 
          margin-top:1rem;
        }

        svg {
          max-height: 22rem;
          width: 21.875rem;
          .layer5-contributor_svg__colorMode1 {
            fill: ${props => props.theme.whiteToBlack};
          }
        }
      

      h3{
        display:inline;
        padding-bottom: 0.3rem;
        border-bottom: 2px solid ${props => props.theme.primaryLightColorTwo};
      }
      li{
        margin-bottom: 1rem;
      }
      p{
        margin-top: 1rem;
      }
      img{
        display: block;
        margin: 0 auto;
        width: 21.875rem;
        text-align: center; 
        margin-top:1rem;
      }
    }
    .community-collage {
      text-align: center;
      min-width: 45vmin;
      overflow: visible; /* Allow book to be fully visible */
      padding: 3rem 0; /* More padding to ensure content isn't cut off */
      position: relative;
      margin: 1rem auto;
    }
    .community-img{
      text-align: center;
      position: relative;
      z-index: 2;
    }
    .table-wrapper{
      text-align: center;
      margin-bottom: 4rem;
    }
    .book-container {
    display: flex;
    align-items: center;
    justify-content: center;
    perspective: 1500px; /* Increased perspective for better 3D effect */
    max-width: 100%; /* Ensure it doesn't exceed container width */
    margin: 0 auto; /* Center the book */
    position: relative;
    z-index: 1;
    padding: 3rem 1rem; /* More padding all around */
    height: auto; /* Allow height to adjust based on content */
    min-height: 400px; /* Minimum height to ensure book fits */
    
    @media (max-width: 992px) {
      margin-bottom: 2rem; /* Add space between book and text on mobile */
      perspective: 1200px; /* Slightly reduced perspective for mobile */
    }
  }

  @keyframes initAnimation {
    0% {
      transform: rotateY(0deg);
    }
    100% {
      transform: rotateY(-20deg);
    }
  }

  .rot-on-rel {
    transform: rotateY(0deg);
  }

  .book {
    width: 250px; /* Even wider to prevent text cutoff */
    height: 350px; /* Even taller to ensure full content visibility */
    position: relative;
    transform-style: preserve-3d;
    transform: rotateY(-20deg); /* Less rotation to show more of the cover */
    transition: 1s ease;
    animation: 1s ease 0s 1 initAnimation;
    margin: 0 auto; /* Center the book */
    display: block;
    transform-origin: center;
  }

  .book:hover {
    transform: rotateY(0deg);
  }

  .book > :first-child {
    position: absolute;
    top: 0;
    left: 0;
    background-color: #171a12;
    width: 250px;
    height: 350px;
    transform: translateZ(25px);
    border-radius: 0 2px 2px 0;
    background-size: 100% 100%; /* Make sure image content covers the entire front cover */
  }

  .book::before {
    position: absolute;
    content: " ";
    left: 0;
    top: 3px;
    width: 48px;
    height: 344px; /* Adjusted to match new height */
    transform: translateX(222px) rotateY(90deg); /* Adjusted to match new width */
    background: linear-gradient(
      90deg,
      #fff 0%,
      #f9f9f9 5%,
      #fff 10%,
      #f9f9f9 15%,
      #fff 20%,
      #f9f9f9 25%,
      #fff 30%,
      #f9f9f9 35%,
      #fff 40%,
      #f9f9f9 45%,
      #fff 50%,
      #f9f9f9 55%,
      #fff 60%,
      #f9f9f9 65%,
      #fff 70%,
      #f9f9f9 75%,
      #fff 80%,
      #f9f9f9 85%,
      #fff 90%,
      #f9f9f9 95%,
      #fff 100%
    );
  }

  .book::after {
    position: absolute;
    top: 0;
    left: 0;
    content: " ";
    width: 250px; /* Match new width */
    height: 350px; /* Match new height */
    transform: translateZ(-25px);
    background-color: #292929;
    border-radius: 0 2px 2px 0;
    box-shadow: -8px 3px 30px 5px rgba(0, 0, 0, 0.5); /* Enhanced shadow */
  }
  
  /* Fix to ensure the image on the book cover is displayed fully */
  .book img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 0 2px 2px 0;
  }
    @media only screen and (max-width: 991px) {
      .heading-start {
        margin-left: auto; margin-right: auto;
        h4 {
          font-size: 1.25rem;
        }
       img {
            margin-top: -.3rem;
            height: 2rem;
            transition: .5s;
           transform: rotate(90deg);
          }
        }
        .heading-start__arrow {
          margin-bottom: 1rem;
          margin-left: -1.25rem; margin-right: auto;
        } 
        
      .heading{
        h2 {
          margin-top: -1.5rem;
        }
      }
  }
`;

