import styled from "styled-components";

const PartnerWrapper = styled.section`
    position: relative;
    min-height: 100%;
    top: 0px;
    .partner-container{
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        background-color: ${props => props.theme.darkJungleGreenColor};
        color: white;
        padding: 4rem 0;
        .partner-container-head{
            padding:2rem;
            text-align: center;
            h1{
                color:white;
            }
            
        }
        .partner-container-body{
            width:60%;
            display: flex;
            justify-content: center;
            padding:2rem;
        }
    }
    
    .container {
        position: relative;
        text-align: justify;
        margin: 0 2rem;
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
        margin-bottom: 30px;
        margin-top: 30px;
        font-weight: 500;
        font-size: 2.75rem;
    }
    h2 {
        font-weight: 600;
        margin: 1rem 0rem;
    }
    .img1 {
        max-height: 256px;
        width: 256px;
        position: relative;
        margin: auto;
        
        object-fit: cover;
        paddingTop: 1.0625em 
    }

    .custom-col{
        display: flex;
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
    .partner-button-cont{
        text-align: center;
        padding:2rem;
        margin:1rem;
        .partner-btn-cont-head{
            padding: 2rem;
        }
        .partner-btn-cont-body{
            padding: 1rem;
        }
    }
    .partner-button{
        margin: auto 0;
    }
    .custom-btn{
        margin:1rem 0;
    }
    .academic-container{
        display: flex;
        justify-content: center;
        padding: 2rem;
        margin: 1rem;
        .acad-container-body{
            width:78%;
            text-align: center;
        }
    }
    .partner-btn{
        border-radius: 50%;
        display: flex;
        height: 140px;
        flex-direction: column;
        p{
            margin:0;   
            color:white;
        }
    }
    .cont-row-reverse{
        flex-direction: row-reverse;
    }
    .cont-row{
        flex-direction: row;
    }
    @media only screen and (max-width: 1500px) {
        .partner-container{
            .partner-container-body{
                width:70%;
            }
        }
    }
    @media only screen and (max-width: 1100px) {
        .partner-container{
            .partner-container-body{
                width:90%;
            }
        }
        .academic-container{
            .acad-container-body{
                width:90%;
            }
        }
        .container{
            margin: 0;
        }
        .partner-btn{
            height: 130px;
        }
    }
    @media only screen and (max-width: 768px) {
        .partner-container{
            .partner-container-body{
                width:100%;
                padding:1rem;
            }
            .partner-button{
                display: none;
            }
        }
        .academic-container{
            padding:0rem;
            .acad-container-body{
                width:100%;        
            }
        }   
        .cont-row-reverse{
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        .cont-row{
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        .container{
            padding:1rem 0;
            margin:1rem 0;
        }
        .custom-col{
            flex:0 0 30%;
            max-width:30%;
        }
        .partner-button-cont{
            
            padding:2rem 0;
            margin:1rem 0;
            .partner-btn-cont-head{
                padding: 2rem 0;
            }
            .partner-btn-cont-body{
                padding: 1rem 0;
            }
        }
    }
    @media only screen and (max-width:576px){
        .custom-col{
            flex: 0 0 35%;
            max-width: 35%;
        }
    }
    @media only screen and (max-width:476px){
        .custom-col{
            flex: 0 0 40%;
            max-width: 40%;
        }
    }
    @media only screen and (max-width:376px){
        .custom-col{
            flex: 0 0 50%;
            max-width: 50%;
        }
    }
`;

export default PartnerWrapper;
