import styled from "styled-components";
export const ChapterWrapper = styled.div`

    margin: 5rem auto;

    .chapter-container {
        @media (min-width: 576px) {
            max-width: 100%;
        }
        // @media (min-width: 768px) {
        //     max-width: 720px;
        // }
        // @media (min-width: 992px) {
        //     max-width: 960px;
        }
        @media (min-width: 1200px) {
            max-width: 1270px; 
        }
    }
    .chapter-data {
        .chapter-heading {
            margin-bottom: 1.5rem;
        }
    }
`;
