import styled from "styled-components";

const PartnerWrapper = styled.section`
    position: relative;
    min-height: 100%;
    top: 0px;
    .container {
        position: relative;
        margin: 0 auto;
        max-width: 1280px;
        z-index: 1;
        padding: 1em;
        h1 {
            font-weight: 300;
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
        font-size: 35px;
        margin-bottom: 30px;
        margin-top: 30px;
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
        float: center;
        display: inline-block;
        clear: left;
        text-align: center;
        position: relative;
        vertical-align: middle;
        margin: 20px auto;
        min-width: 240px;
        max-width: 300px;
        width: 100%;
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
`

export default PartnerWrapper