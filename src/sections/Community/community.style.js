import styled from "styled-components";
import BookmarkImage from "./bookmark.png";

const CommunitySectionWrapper = styled.div`
    margin-bottom: 3.25rem;
    .community-header{
        color: white;
        height: 25rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        background: url(${BookmarkImage});
        background-size: cover;
        background-position: center;
        h1,h3{
            color: white;
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
        margin-top: 3rem;
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
                margin: 1.5rem auto 1.5rem auto;
                color: white;
            }
            h1{
                color: white;
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
            h3{
                margin: 1.5rem auto 1.5rem auto;

            }
            @media (max-width: 62rem) {
              text-align:center;
            }
        }
        img{
            max-height: 25rem;
            display:block;
            margin: auto;
            background-color: ${props => props.theme.secondaryLightColorTwo};
        }
        .meshmate-link{
            background-color: ${props => props.theme.secondaryLightColorTwo};
            padding-bottom: 2rem;
            display: flex;
            align-items: center;
            justify-content: center;
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
            
            @media (max-width: 36rem) {
               h3{
                  font-size: 18px;
               }
            }

            &:hover{
                h3{
                    color: ${props => props.theme.primaryLightColorTwo};
                }
                .icon{
                    background: ${props => props.theme.primaryLightColorTwo};
                    border-color: ${props => props.theme.primaryLightColorTwo};
                    cursor: pointer;
                }
            }
        }
    }

    .newcomers-section {
        background: ${props => props.theme.secondaryLightColor};
        padding-top: 4rem;
        width:100%;
        margin: 5rem 0;
        .map {
            padding-top: 0rem;
            margin-top:0rem;
            max-width:40rem;
            padding-bottom: 2rem;
        }
        h4{
            padding: 1rem auto;
        }
        text-align:center;

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
        }
    }

`;

export default CommunitySectionWrapper;
