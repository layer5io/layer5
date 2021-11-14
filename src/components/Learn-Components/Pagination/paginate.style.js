import styled from "styled-components";
export const PaginationWrapper = styled.div`
    margin: 3rem auto;
    padding: 1rem;
    box-shadow: 0 5px 16px 1px rgba(0, 0, 0, 0.1);

    .next-chapter {
        filter: invert(0.5);
        font-weight: 600;
    }
    .paginate-section {
        margin-top: 0.5rem;
        display: flex;

        .next-chapter-heading {
            flex: 0 0 70%;
            align-self: center;
            font-size: 1.6rem;
        }
        .chapter-link {
            flex: 0 0 30%;
            text-align: center;
        }
    }
`;
