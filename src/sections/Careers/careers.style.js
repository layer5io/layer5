import styled from "styled-components";

const CareersSectionWrapper = styled.div`
    h1{

        color: ${props => props.theme.text};
    }
    .page-header{
        margin:4rem auto;
    }
    .centerTexts{
        margin-top: -3rem;
        text-align: center;
    }
    .center{
        text-align: center;
    }

    .videoText {
        flex-wrap: nowrap;
        margin: auto;
        margin-top: 4rem;
    }
    .introText{
        width: 50%;
        clear:both;
        margin-top: 9rem;
    }
    .introText h1{
        margin-bottom: 1rem;
    }
    .introText p {
        text-align: justify
    }
    .introVideo{
        width: 50%;
        margin: auto;
        text-align: center;

        iframe{
            width: 26rem;
        }
    }
    @media only screen and (max-width:996px){
        .videoText{
            flex-wrap: wrap;
        }
        .introText{
            width: 100%;
        }
        .introVideo{
            width: 100%;
            margin: auto;
            text-align: center;
        }
    }

    @media only screen and (max-width:420px){
        .introVideo{
            iframe{
                width: 20rem;
            }
        }
    }

    .opensource-section{
        margin-top: 6rem;
        text-align: center;
        background: #00B39F;
        color: white;
    }
    .opensource-section-text{
        padding-top: 4rem;
    }
    .opensource-section-text > h1{
        margin-bottom: 1rem;
        color: white;
    }
    .opensource-section-text > p{
        max-width: 60rem;
        margin: auto;
    }
    .opensource-section-img{
        margin-top: -8rem;
        position: relative;
        top: 10rem;
    }
    .opensource-section-img img{
        height: 30rem;
        box-shadow: 0px 8px 20px -10px black;
    }
    @media only screen and (max-width:600px){
        .opensource-section-img img{
            height: 18rem;
        }
    }

    .opportunity-section {
 
    }
    
`;

export default CareersSectionWrapper;
