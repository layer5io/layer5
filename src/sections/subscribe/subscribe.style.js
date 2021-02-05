import styled from "styled-components";

const SubscribeWrapper = styled.div`
    background-color:${props => props.theme.secondaryLightColor};
    padding: 50px 10px;
    overflow: hidden;
    h2{
        font-weight: 600;
        margin:0px;
        font-size:30px;
        margin:20px 0px;
    }
    h2 span{
        color:${props => props.theme.secondaryColor};
    }
    
    input{
        display: block;
        padding: 15px;
        width: 90%;
        height: 48px;
        font-size: 1rem;
        border-radius: 5px;
        margin: 0 auto 0px auto;
        box-shadow: none;
        transition: 450ms all;
        border: 1px solid #000;
        margin:25px;
        &:hover,&:focus{
            border-color: ${props => props.theme.secondaryColor};
        }
        
    }
    #mc-embedded-subscribe{
        background-color:${props => props.theme.secondaryColor};
        color:white;
        margin: 24px 5px 0px;
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
            padding:0px 30px;
            h2{
                font-size:28px;
                margin: 25px 0px;
            }
            input{
                width:90%;
                height: 50px;
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
                height: 50px;
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
            margin:25px 0px;
            width:100%;
        }
        .email-cont div{
            padding:0px;
        }

    }
    @media only screen and (max-width:500px){
        #mce-EMAIL{
            margin:25px 0px;
            width:100%;
        }
    }
`;

export default SubscribeWrapper;