import styled from "styled-components";

const PartnerWrapper = styled.section`
    position: relative;
    min-height: 100%;
    top: 0px;
    .partnerHeader {
        padding: 6rem 0;
        background: ${props => props.theme.tertiaryColor};
        text-align: center;
        h1{
            color: ${props => props.theme.white};
        }
        p{
            margin: 1.5rem auto 4rem;
            max-width: 60%;
            text-align: center;
            color: ${props => props.theme.white};
        }
    }
    .container {
        position: relative;
        text-align: justify;
        margin: 0 auto;
        margin-bottom: 40px;
        max-width: 1280px;
        z-index: 1;
        padding: 1em;
        h1 {
            font-weight: 5;
            text-algin: left;
            font-size: 35px;
        }
    }
    .card-content {
        position: relative;
        float: right;
        width: 40%;
        margin: 20px 20px 20px 35px;
        vertical-align: bottom;
        a {
            width: auto;
            text-align: center;
        }
    }

    .heading {
        text-align: center;
        font-size: 45px;
        margin-bottom: 50px;
        margin-top: 50px;
        font-weight: 500;
        font-size: 2.75rem;
    }
    h2 {
        font-weight: 300;
    }
    .img1 {
        max-height: 160px;
        max-width: 130px;
        position: relative;
        margin: auto;
        text-align: center;
    }
    .para {
        text-align: center;
        font-weight: bold;
    }

    .forklift-section {
        float: left;
        width: 130px;
    }

    .img2 {
        width: auto;
        height: 100%;
        min-width: 150px;
        margin-right: 60px;
        padding-right: 50px;
    }
    .icon1 {
        font-size: 32px;
        vertical-align:  middle;
    }
    form {
        text-align: center;
    }
    .input-text {
        font-size: 15px;
        box-sizing: border-box;
        display: inline-block;
        padding: 0px 1px;
        height: 32px;
        width: 34.5%;
        border: 1px solid #d0d0d0;
        border-radius: 3px;
        margin-right: 5px; 
    }
    .input-email {
        font-size: 15px;
        box-sizing: border-box;
        display: inline-block;
        padding: 0px 1px;
        height: 32px;
        border: 1px solid #d0d0d0;
        border-radius: 3px;
        width: 70%;
    }
    .subscribe-form {
        padding: 10px 0px 10px 0px;
        text-align: center;
    }
    .btn {
        font-size: inherit;
        min-width: 240px;
        max-width: 300px;
        width: 100%;
        float: center;
    }
    .btn-section {
        
        display: flex;
        
        text-align: center;
        margin: auto;
        vertical-align: middle;

    }
    .partner-button-row {
        justify-content: center;
    }
    .partner-button {
        text-align: center;
    }

    @media only screen and (max-width: 420px) {
        .img1 {
            max-height: 160px;
            max-width: 130px;
            position: relative;
            margin: auto;
            text-align: center;
        }
    }
`;

export default PartnerWrapper;