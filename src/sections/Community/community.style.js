import styled from "styled-components";

const CommunitySectionWrapper = styled.div`
    .community-section-wrapper{
        margin-bottom: 3.125rem;
    }
    
    .service-mesh-projects{
        margin-top: 2rem;
        h1{
            line-height: 3.1rem;
            margin-bottom: 1rem;
        }
        
        img{
            margin-left: 5rem;
            max-height: 18.75rem;
             @media (max-width: 62rem) {
                display:block;
                margin:auto;
            }
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
            }
            @media (max-width: 36rem) {
                margin-top: 5rem;
                margin-bottom: auto;
            }
            
            h5{
                color: white;
                margin-bottom : 1.5rem;
            }
            h1{
                margin-bottom: 2.5rem;
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
            h1{
                margin-top: 1.5rem;
                margin-bottom: 2.5rem;
            }
        }
        img{
            max-height: 15.625rem;
            margin-top: 5.938rem;
            margin-bottom: 2.5rem;
        }
        .meshmate-link{
            display: flex;
            align-items: center;
            justify-content: center;
            h2{
                margin-right: 2.5rem;
            }
            .icon{
                align-items: center;
                width: 40px;
                height: 40px;
                min-width: auto;
                align-self: center;
                margin: auto 1rem auto 0.5rem;
                padding: 0;
                font-size: 1.25rem;
                border: 0px;
                border-radius: 1rem;        
                left: 0;
                background: ${props => props.theme.secondaryColor};
                border-color: ${props => props.theme.secondaryColor};
                color: white;
            }
            
            &:hover{
                h2{
                    color: ${props => props.theme.primaryLightColorTwo};
                }
                .icon{
                    background: ${props => props.theme.primaryLightColorTwo};
                    border-color: ${props => props.theme.primaryLightColorTwo};
                }
            }
        }
    }
    
    .newcomers-button{
        margin: 5rem auto;
    }
   
`;

export default CommunitySectionWrapper;
