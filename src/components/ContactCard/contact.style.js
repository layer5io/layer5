import styled from "styled-components";

const ContactWrapper = styled.section`
    padding: 4rem 0 6rem;
    overflow: hidden;
    align-items: center;
    .parentcard{
        max-width: 90%;
        width: 600px;
        margin: auto;
    }
    .contact-icon {
        color: ${props => props.theme.green00B39FToGreen3C494F};
        transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
    }
    img {
        max-width: 100px;
        height: auto;
    }
    form{
        text-align: center;
        background: ${props => props.theme.grey212121ToLinear};
        border-radius: 10px 10px 0px 0px;
        box-shadow: ${props => props.theme.boxShadowGreen00D3A9ToBlackTwoFive};
        padding: 25px;
        border-radius: 10px;
        transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
    }
    .inputrow{
        margin-bottom: 10px;
    }
    .firstcol {
        padding-right: 5px;
    }
    .lastcol {
        padding-left: 5px;
    }
    .nopad {
        padding-left: 10px;
        padding-right: 0;
    }
    input{
        display: block;
        padding: 10px;
        width: 100%;
        height: 35px;
        font-size: 1rem;
        border-radius: 5px;
        margin: 0 auto 0px auto;
        box-shadow: none;
        transition: 450ms all;
        border: 1px solid transparent;
        &:hover,&:focus{
            border-color: ${props => props.theme.secondaryColor};
        }
    }
    button{
        transition: 450ms all;
        background: #ebc017;
        color: #000000;
        height: 35px;
        &:hover{
            background: #ebc017;
            color: #000000;
        }
        margin-top: 12px;
    }
    .section-title{
        h3 {
            margin-bottom: 2rem;
            color: ${props => props.theme.green00B39FToGreen3C494F};
            transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
        }
    }
    @media only screen and (max-width: 912px) {
        padding: 0px 0 80px 0;
        form{
            padding: 50px;
            input{
                width: 100%;
            }
        }

    }
    @media only screen and (max-width: 568px) {
        form{
            padding: 30px;
            display: block;
            input{
                width: 100%;
                margin-bottom: 30px;
            }
        }
    }
    @media only screen and (max-width: 480px) {
        form{
            padding: 30px 15px;
            input{
                width: 100%;
            }
        }
    }
    
`;

export default ContactWrapper;