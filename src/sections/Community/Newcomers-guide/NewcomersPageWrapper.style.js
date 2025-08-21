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
      text-align: center ;
      min-width: 45vmin;
      
    }
    .community-img{
      text-align:center;
    }
    .table-wrapper{
      text-align: center;
      margin-bottom: 4rem;
    }
    .book-container {
    display: flex;
    align-items: center;
    justify-content: center;
    perspective: 600px;
  }

  @keyframes initAnimation {
    0% {
      transform: rotateY(0deg);
    }
    100% {
      transform: rotateY(-30deg);
    }
  }

  .rot-on-rel {
    transform: rotateY(0deg);
  }

  .book {
    min-width: 200px;
    min-height: 300px;
    position: relative;
    transform-style: preserve-3d;
    transform: rotateY(-30deg);
    transition: 1s ease;
    animation: 1s ease 0s 1 initAnimation;
  }

  .book:hover {
    transform: rotateY(0deg);
  }

  .book > :first-child {
    position: absolute;
    top: 0;
    left: 0;
    background-color: #171a12;
    width: 200px;
    height: 300px;
    transform: translateZ(25px);
    border-radius: 0 2px 2px 0;
  }

  .book::before {
    position: absolute;
    content: " ";
    left: 0;
    top: 3px;
    width: 48px;
    height: 294px;
    transform: translateX(172px) rotateY(90deg);
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
    width: 200px;
    height: 300px;
    transform: translateZ(-25px);
    background-color: #292929;
    border-radius: 0 2px 2px 0;
    box-shadow: -2px 1px 30px 2px #666;
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

