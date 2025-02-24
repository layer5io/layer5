import styled from "styled-components";

const CareersSectionWrapper = styled.div`
p {
    color: ${props => props.theme.whiteEightToBlack};
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
}
    h1{
        color: ${props => props.theme.text};
        transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
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
        margin-top: 1rem;
        display: flex;
        align-items: center;
        gap: 2rem;
    }
    .introText{
        margin-top: 10rem;
    }
    .introText h1{
        margin-bottom: 1rem;
    }
    .introText p {
        text-align: justify;
        color: ${props => props.theme.whiteEightToBlack};
        transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
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

    .opportunity-section {
 
    }
    
`;

export default CareersSectionWrapper;
