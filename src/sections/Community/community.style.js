import styled from "styled-components";

const CommunitySectionWrapper = styled.div`
    margin-bottom: 3.25rem;
    .community-header{
        color: white;
        height: 35rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        h1,h2{
            color: white;
        }
        h2{
            font-size: 1.75rem;
            font-weight: 500;
        }
    }

    .community-section-wrapper{
        margin-bottom: 3.125rem;
    }

    .service-mesh-projects{
        margin-top: 2rem;
        h2{
            line-height: 3.1rem;
            margin-bottom: 1rem;
            @media (max-width: 62rem) {
                line-height: 2.5rem;
            }
            transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);  
        }

        img{
            display:block;
            margin:auto;
        }
        @media (max-width: 62rem) {
             text-align:center;
        }
    }

    .open-source-projects{
        margin-top: 5rem;
        margin-bottom: 5rem;
        text-align: center;

        h2{
            margin:auto;
            margin-bottom: 1rem;
        }
        p{
            max-width: 60rem;
            margin: auto;
        }
    }

    .our-community-members{
        margin-top: 2rem;
        color: white;
        background: linear-gradient(to right, ${props => props.theme.secondaryColor} 50%, ${props => props.theme.black} 50%);
        transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
        @media (max-width: 991px) {
            background: linear-gradient(to bottom, ${props => props.theme.secondaryColor} 42rem, ${props => props.theme.black} 42rem);
        }
        @media (max-width: 550px) {
            background: linear-gradient(to bottom, ${props => props.theme.secondaryColor} 48rem, ${props => props.theme.black} 42rem);
        }
        @media (max-width: 440px) {
            background: linear-gradient(to bottom, ${props => props.theme.secondaryColor} 55rem, ${props => props.theme.black} 42rem);
        }

        .our-community-members_row {
            margin: auto 3rem;
            align-items: center;

            @media (max-width: 650px) {
                margin: auto 1.25rem;
            }
        }

        .community{
            margin: 5rem auto;
            @media (max-width: 62rem) {
                margin: 5rem auto 8rem;
                text-align:center;
            }
            @media (max-width: 600px) {
                margin: 2.5rem auto;
            }
            h3{
                margin: 0.5rem auto 0.5rem auto;
                color: white;
            }
            h1{
                color: white;
                margin: 1rem auto 1rem auto;
            }
            button{
                margin-top: 2.5rem;
            }
        }

        .slider {
            padding: 0 3rem;
        }
    }
    .meshmate{
        margin-top: 5rem;
        .content{
            h1, h3, h4 {
                transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
            }
            h3{
                margin: 0.5rem auto 0.5rem auto;
            }
            h4{
                margin: 1rem auto 1rem auto;
            }
            h1.onboarding{
                margin: 0.5rem auto 0.5rem auto;
                font-size: 1.75rem;
                font-weight: 500;
            }
            @media (max-width: 62rem) {
              text-align:center;
            }
        }
        .meshmate-img{
            max-width: 25rem;
            display:block;
            margin: auto;
            background-color: ${props => props.theme.secondaryLightColorTwo};
            transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
        }

        .meshmate-img-transparent {
            background-color: transparent;
        }

        svg {
            max-width: 25rem;
            .meshmate-stack-colorMode_svg__colorMode1 {
              fill: ${props => props.theme.whiteToGreen3C494F};
              transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
            }
          }

        .meshmate-link{
            background-color: ${props => props.theme.secondaryLightColorTwo};
            padding-bottom: 2rem;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
            .icon{
                align-items: center;
                width: 40px;
                height: 40px;
                min-width: auto;
                align-self: center;
                margin: auto 1rem auto 1rem;
                padding: 0;
                font-size: 1.25rem;
                border: 0px;
                border-radius: 1rem;
                left: 0;
                background: ${props => props.theme.secondaryColor};
                border-color: ${props => props.theme.secondaryColor};
                color: white;
            }
            .icon svg {
              display: flex;
              margin: auto;
            }
            h2 {
                font-size: 1.75rem;
                font-weight: 500;
            }

            @media (max-width: 36rem) {
               h4{
                  font-size: 18px;
               }
            }

            &:hover{
                h4{
                    color: ${props => props.theme.primaryLightColorTwo};
                }
                .icon{
                    background: ${props => props.theme.primaryLightColorTwo};
                    border-color: ${props => props.theme.primaryLightColorTwo};
                    cursor: pointer;
                }
            }
        }

        .meshmate-link-transparent {
            background-color: transparent;
        }
    }

    .newcomers-section {
        width:100%;
        margin: 5rem 0;
        padding: 2rem 0;
        .text{
            h2{
                font-size: 1.75rem;
                font-weight: 500;
            }
            text-align: center;
        }
        h4{
            padding: 1rem auto;
        }

        .newcomers-arrow {
            align-items: center;
                min-width: auto;
                vertical-align:middle;
                align-self: center;
                font-size: 1.25rem;
                color: ${props => props.theme.secondaryColor};
        }
        h3 {
            margin: 1.5rem auto 1.5rem auto;
        }
        .invitation {
            margin: 2rem 0rem 2rem 0rem;
            a {
                font-weight: 600;
                transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
            }
        }
    }

    @media screen and (max-width: 992px) {
        .newcomers-section {
            .text {
                margin-top: 1.5rem;
            }
        }
    }

    .Callout {
        display: flex;
        flex-direction: column; 
        align-items: center;

        @media screen and (min-width: 768px) {
            flex-direction: row; 
            justify-content: center; 
            align-items: flex-start; 
            gap: 2rem; 
        }
    }
    .recognition-program {
    margin-top: 5rem;
    .recognition-content {
      display: grid;
      grid-template-columns: minmax(18.75rem, 40%) 1fr;
      min-height: 31.25rem;
      position: relative;
      gap: 2rem;
      .badges-section {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        .badge-stack {
          position: relative;
          width: 100%;
          height: 100%;
          max-width: 25rem;
          .badge-item {
            position: absolute;
            width: 11.25rem;
            height: 11.25rem;
            transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
            img {
              width: 140%;
              height: 140%;
              object-fit: contain;
              filter: drop-shadow(0 0.25rem 0.5rem rgba(0, 0, 0, 0.2));
            }
            &:nth-child(1) {
              top: 0;
              left: 0;
              z-index: 3;
            }
            &:nth-child(2) {
              top: 5.625rem;
              left: 5.625rem;
              z-index: 2;
            }
            &:nth-child(3) {
              top: 11.25rem;
              left: 11.25rem;
              z-index: 1;
            }
          }
        }
      }
      .content {
        h1.subtitle {
          margin: 0.5rem auto;
          font-size: 1.75rem;
          font-weight: 500;
          color: ${(props) => props.theme.primaryColor};
        }
      }
    }
    @media (max-width: 62rem) {
      .recognition-content {
        grid-template-columns: 1fr;
        .badges-section {
          min-height: 18.75rem;
          padding: 1.25rem;
          .badge-stack {
            height: 16.25rem;
            .badge-item {
              width: 9.375rem;
              height: 9.375rem;
              img {
                width: 120%;
                height: 120%;
              }
              &:nth-child(1) {
                top: 0;
                left: calc(50% - 3.75rem);
              }
              &:nth-child(2) {
                top: 8.75rem;
                left: calc(50% - 7.5rem);
              }
              &:nth-child(3) {
                top: 8.75rem;
                left: calc(50% + 0rem);
              }
            }
          }
        }
      }
    }
    @media (max-width: 30rem) {
      .recognition-content {
        .badges-section .badge-stack .badge-item {
          width: 7.5rem;
          height: 7.5rem;
          &:nth-child(1) {
            left: calc(50% - 3.125rem);
          }
          &:nth-child(2) {
            top: 6.875rem;
            left: calc(50% - 6.25rem);
          }
          &:nth-child(3) {
            top: 6.875rem;
            left: calc(50% + 0rem);
          }
        }
      }
    }
  }
`;

export default CommunitySectionWrapper;
