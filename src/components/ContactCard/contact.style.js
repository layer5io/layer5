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
        color: ${props => props.theme.primaryColor};
    }
    img {
        max-width: 100px;
        height: auto;
    }
    form{
        text-align: center;
        background: linear-gradient(122.25deg, #eee -2.45%, #fff 52.7%, #eee 96.5%);
        border-radius: 10px 10px 0px 0px;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
        padding: 25px;
        border-radius: 10px;
    }
    .inputrow{
        margin-bottom: 5px;
    }
    .firstcol {
        padding-right: 0;
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
    }
    .section-title{
        h3 {
            margin-bottom: 2rem;
        }
    }
    @media only screen and (max-width: 912px) {
        padding: 0px 0 80px 0;
        form{
            padding: 50px;
            input{
                width: 70%;
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