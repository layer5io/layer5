import styled from "styled-components";

const CommunitySectionWrapper = styled.div`
    .community-section-wrapper{
        margin-bottom: 50px;
    }
    
    .service-mesh-projects{
        margin-top: 2rem;
        h1{
            line-height: 51px;
            margin-bottom: 1rem;
        }
        
        img{
            margin-left: 5rem;
            max-height: 300px;
             @media (max-width: 992px) {
                display:block;
                margin:auto;
            }
        }
    }
    
    .open-source-projects{
        margin-top: 2rem;
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
        @media (max-width: 992px) {
            background: linear-gradient(to bottom, ${props => props.theme.secondaryColor} 50%, ${props => props.theme.black} 50%);
        }
        
        .community{
            margin: 180px auto 224px auto;
            @media (max-width: 992px) {
                margin-bottom: 200px;
            }
            @media (max-width: 576px) {
                margin-top: 80px;
                margin-bottom: auto;
            }
            
            h5{
                color: white;
                margin-bottom : 24px;
            }
            h1{
                margin-bottom: 40px;
                color: white;
            }
            button{
                margin-top: 40px;
            }       
        }        
    }
    .meshmate{
        margin-top: 80px;
        .content{
            h1{
                margin-top: 24px;
                margin-bottom: 40px;
            }
        }
        img{
            max-height: 250px;
            margin-top: 95px;
            margin-bottom: 40px;
        }
    }
    
    .newcomers-button{
        margin: 80px auto;
    }
`;

export default CommunitySectionWrapper;
