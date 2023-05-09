import styled from "styled-components";

export const Gnhwrapper = styled.section`
    
        svg {
                .nighthawk-colorMode_svg__colorMode1{
                    fill: ${props => props.theme.whiteToGreen3C494F}; 
                    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1); 
                }
                .smp-colorMode_svg__colorMode1{
                    fill: ${props => props.theme.whiteToGreen3C494F}; 
                    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
                }
            }     


    .hero-section{
        padding: 5rem 0rem;
        .logo{
            display: block;
            margin: 0 auto;
            width: 80%;
        }

        .hero-text{
            margin: 0 auto;
            img{
                width: 70%;
            }
            padding-top: 3.125rem;
            h1{
                transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
            }
            p{
                color: ${props => props.theme.tertiaryColor};
                transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
            }
        }
    }                       

    .stats {
        text-align: center;
        h3 {
            font-weight: 700;
        }
        p {
            color: ${props => props.theme.tertiaryColor};
            transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
        }
    }

    .explain-1 {
        padding-top: 5rem;
        text-align: center;
        p {
            color: ${props => props.theme.tertiaryColor};
            padding: 0px 3.125rem;
            transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
        }
        h1 {
            padding: 1.25rem 0px;
            transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
        }
        img {
            display: block;
            margin-left: auto;
            margin-right: auto;
            width: 80%;
            padding: 1.875rem 0;
        }
        .cards {
            margin: 3.125rem 0;
            width: 100%;
            min-height: 500px;
            padding: 5rem 1.25rem;
            border-radius: 25px;
        }
    }

    .explain-2{
        padding: 25px 0px;
        .align{
        align-items: baseline;
        }
        .text{
            padding: 1.25rem 1.25rem 0px 1.25rem;
            h2{
                font-weight: 700;
                font-size: 40px;
                padding: 1.25rem 0px;
                transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
            }
            p{
                color: ${props => props.theme.tertiaryColor};
                transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1); 
            }
        }
        img{
            display: block;
            margin-left: auto;
            margin-right: auto;
        }
        Button{
            margin: 1.25rem 0px;
            color: white;
        }
    }

    .list{
        padding: 1.875rem 0px;

        .text{
          h2{
              font-size: 2rem;
              font-weight: 700;
              padding: 1.25rem 0px;
              transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
          }
          p{
            color: ${props => props.theme.tertiaryColor};
            transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
          }
        }

        .listed{
            text-align: left;
            .table{
                .icon{
                    object-fit: cover;
                    height: 2.5rem;
                    width: 2.5rem;
                    vertical-align: top;
                }

                svg {
                    rect {
                        fill:  ${props => props.theme.grey313131ToGreenC9FCF6}; 
                        transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1); 
                      }
                    path {
                        stroke: ${props => props.theme.green00D3A9ToGreen00B39F};
                        transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
                      }
                }

                .service{
                    color: ${props => props.theme.tertiaryColor};
                    font-size: 16px;
                    padding: 0 0 1.25rem 1.875rem;
                    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);

                    h4{
                        font-weight: 600;
                        transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
                    }
                }
            }
        }
    }
   
    .distributedPerf {
        display: relative;
        float: left;
        width: 30%;
        padding-right: 1rem;
        margin-top: 1rem;
    }
    .callout{
        background: rgb(205,28,109);
        background: linear-gradient(107deg, rgba(205,28,109,1) 0%, rgba(40,43,98,1) 99%, rgba(41,44,99,1) 100%);
        padding: 5rem;
        text-align: center;
        color: ${props => props.theme.white};
        p{
            margin: 0.94rem 0;
        }
        img{
            width: 25rem;
        }
    }
    
    @media only screen and (max-width: 767px) {
        .hero-section{
            .hero-text{
                text-align:center;
            }
        }
    }

    @media only screen and (max-width: 568px) {
        .hero-section{
            padding: 3.125rem 0;
            .hero-text{
                width: 90%;
                h1{
                    margin-bottom:1rem;		
                }
	        }
        }
        .explain-1{
            padding-top: 3.125rem;
            p{
                padding: 0 1.25rem;
            }
        }
    }
`;

export const CardsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, 32%);
    grid-auto-rows: 1fr;
    justify-content: space-between;
    padding-left: 20px;
    padding-right: 20px;
    grid-gap: 10px;

    .card {
      box-shadow: rgb(0 0 0 / 5%) 2px 4px 2.5rem 0.5rem;
        margin: 2px;
        padding: 1.5rem;
        background-color: ${props => props.theme.grey212121ToWhite};
        border-radius: 25px;
        transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
        
        p {
            text-align: left;
            padding: 0px 0px;
            letter-spacing: 0;
            margin-top: 10px;
        }
        a:hover {
            color: ${props => props.theme.text};
        }
        h2 {
            text-align: left;
            font-size: 24px;
            text-transform:uppercase;
            margin-top: 10px;
            transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
        }
        .circle {
            border-radius: 50%;
            width: 4.65rem;
            height: 4.65rem;
            background-color: ${props => props.theme.secondaryLightColorTwo};
            padding: 0.35rem;
            transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
            img { 
                padding: 0.3rem 0px;
            }
        }
    }

    @media screen and (max-width: 974px) {
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: 1fr 1fr;
        grid-gap: 20px;
        padding: 20px;
        div {
          grid-column-end: span 2;
        }
        div:last-child {
          grid-column-start: 2;
        }
    }

    @media screen and (max-width: 767px) {
        display: flex;
        flex-direction: column;
    }
`;

