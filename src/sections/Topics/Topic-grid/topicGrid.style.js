import styled from "styled-components";
export const TopicPageWrapper = styled.div`

    .topic-grid-wrapper{
        margin: 5rem auto;
    }

    @media only screen and (max-width: 992px) {
        .topic-page-wrapper{
            margin-bottom: 5rem;
        }
    }

    @media only screen and (max-width: 575px) {
        .topic-grid-wrapper{
            margin: 0 auto 5rem;
        }
    }
`;
