import styled from "styled-components";

export const LearnLayer5GridWrapper = styled.div`

    margin: 3rem auto 6rem;

    .page-header {
        margin: 0rem auto 0.5rem !important;
    }
    .learn-subtitle {
        text-align: center;
    }

    .learning-path-cards{
        margin: auto;
        justify-content: center;
        padding: 6rem 0;
    }

    @media(max-width:500px){
        .learning-path-cards{
            padding: 6rem 2rem;
        }
    }
`;
