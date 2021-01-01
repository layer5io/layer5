import styled from "styled-components";
import BookmarkImage from "./bookmark.png";

const CommunitySectionWrapper = styled.div`
    
    .community-header{
        color: white;
        height: 25rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
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
        }
        
        img{
            display:block;
            margin:auto;
            max-height: 18.75rem;
        }
        @media (max-width: 62rem) {
             text-align:center;
        }
    }
    
    .open-source-projects{
        margin-top: 3rem;
        text-align: center;
        
        h1{
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
        @media (max-width: 62rem) {
            background: linear-gradient(to bottom, ${props => props.theme.secondaryColor} 50%, ${props => props.theme.black} 50%);
        }
        
        .community{
            margin: 11.25rem auto 14rem auto;
            @media (max-width: 62rem) {
                margin-bottom: 12.5rem;
                 text-align:center;
            }
            @media (max-width: 36rem) {
                margin-top: 5rem;
                margin-bottom: auto;
            }
            h5{
                margin: 1.5rem auto 2.5rem auto;
                color: white;
                font-weight: 600;
            }
            h1{
                color: white;
            }
            button{
                margin-top: 2.5rem;
            }       
        }        
    }
    .meshmate{
        margin-top: 5rem;
        .content{
            h5{
                margin: 1.5rem auto 2.5rem auto;
                font-weight: 600;
            }
            @media (max-width: 62rem) {
              text-align:center;
            }
        }
        img{
            max-height: 25rem;
            display:block;
            margin: auto;
        }
        .meshmate-link{
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
                }
            }
        }
    }
    
    .newcomers-section{
        h4{
            margin: 1rem auto;
        }
        text-align:center;
        margin: 5rem auto;
    }
   
`;

export default CommunitySectionWrapper;
