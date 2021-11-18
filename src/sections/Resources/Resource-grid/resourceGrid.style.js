import styled from "styled-components";
export const ResourcePageWrapper = styled.div`

    .resource-grid-wrapper{
        margin: 5rem auto;
    }

    @media only screen and (max-width: 992px) {
        .resource-page-wrapper{
            margin-bottom: 5rem;
        }
    }

    @media only screen and (max-width: 575px) {
        .resource-grid-wrapper{
            margin: 0 auto 5rem;
        }
    }
`;
