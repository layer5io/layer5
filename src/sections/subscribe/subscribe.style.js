import styled from "styled-components";

const SubscribeWrapper = styled.div`
    background-color:${props => props.theme.DarkTheme ? "#1D1D1D" : "FAFAFA"};
    padding: 3.125rem 0.625rem;
    overflow: hidden;
    h2{
        font-weight: 600;
        font-size:1.875rem;
        margin:1.25rem 0;
        color:${props => props.theme.text};

    }
    h2 span{
        color:${props => props.theme.secondaryColor};
    }
    
    input{
        display: block;
        padding: 0.9375rem;
        width: 90%;
        height: 3rem;
        font-size: 1rem;
        border-radius: 5px;
        box-shadow: none;
        transition: 450ms all;
        border: 1px solid #000;
        margin:1.5625rem;
        &:hover,&:focus{
            border-color: ${props => props.theme.secondaryColor};
        }
        
    }
    #mc-embedded-subscribe{
        margin: 1.5rem 0.3125rem 0;
    }
    #mc-embedded-subscribe:hover{
        color:black;
        box-shadow:0 2px 10px rgba(0,0,0,0.4);
    }
    @media only screen and (max-width: 1050px) {
        .email-cont{
            justify-content:center;
            display:flex;
        }

    }
    @media only screen and (max-width: 912px) {
        form{
            padding:0 1.875rem;
            h2{
                font-size:1.75rem;
                margin: 1.5625rem 0;
            }
            input{
                width:90%;
                height: 3.125rem;
            }
        }
        .email-cont{
            justify-content:center;
            display:flex;
        }


    }
    @media only screen and (max-width: 568px) {
        form{
            
            input{
                width: 90%;
                margin-bottom: 30px;
                height: 3.125rem;
            }
        }
        .email-cont{
            justify-content:center;
            display:flex;
        }
    }
    @media only screen and (max-width: 480px) {
        form{
            
            input{
                width: 90%;
            }
        }
        .email-cont{
            display:flex;
            justify-content:center;
            
        }
    }
    @media only screen and (min-width:768px) and (max-width:800px)
    {
        #mce-EMAIL{
            margin:1.5625rem 0;
            width:100%;
        }
        .email-cont div{
            padding:0;
        }

    }
    @media only screen and (max-width:500px){
        #mce-EMAIL{
            margin:1.5625rem 0;
            width:100%;
        }
    }
`;

export default SubscribeWrapper;
