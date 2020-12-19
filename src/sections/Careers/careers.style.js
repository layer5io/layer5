import styled from "styled-components";
import Lee_giveaway from "../../assets/images/careers/Lee-giving-away-free-t-shirts-at-UT-Austin.jpeg";

const CareersSectionWrapper = styled.div`
    .careers-section-wrapper{
        padding: 50px 0;
    }

    h1{
        color: black;
    }

    .centerTexts{
        margin-top: -2.5rem;
        text-align: center;
    }

    .videoText {
        flex-wrap: nowrap;
        margin: auto;
        margin-top: 4rem;
    }
    .introText{
        width: 50%;
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
            width: 25rem;
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
        margin-top: 2rem;
        text-align: center;
        background: #00B39F;
        color: white;
    }
    .opensource-section-text{
        padding-top: 50px;
    }
    .opensource-section-text > h1{
        margin-bottom: 0.5rem;
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
        width: 52rem;
    }
    @media only screen and (max-width:600px){
        .opensource-section-img img{
            height: 18rem;
        }
    }

    .opportunity-section {
        margin-top: 13rem; 
    }

    .join-community{
        width: 50rem;
        max-width: 100%;
        height: 25rem;
        background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${Lee_giveaway});
        background-size: cover;
        background-position: center;
        margin: auto;
        margin-bottom: 5rem;
    }
    .join-community_text-and_button{
        position: relative;
        top: 6.5rem;
        text-align: center;
        h1{
            margin-top: 1rem;
            color: white;
        }
        p{
            margin: auto;
            margin-top: 1rem;
            max-width: 18rem;
            color: white;
        }
        button{
            background: #00B39F;
            color: white;
            margin-top: 1.5rem;

            &:hover{
                color: black;
            }
        }
    }
`;

export default CareersSectionWrapper;
