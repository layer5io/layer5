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

    @media (max-width: 850px) {
        .next-chapter-btn {
            min-width: 100%;
        }
    }

    @media (max-width: 510px) {
        .paginate-section {
            .next-chapter-heading {
                flex: 0 0 60%;
            }
            .chapter-link {
                flex: 0 0 40%;
                text-align: center;
            }
        }
    }

    @media (max-width: 425px) {
        .paginate-section {
            flex-direction: column;

            .next-chapter-heading {
                margin-bottom: 1rem;
                margin-top: 1rem;
            }
        }
    }
`;

export const QuizWrapper = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 2rem;
`;
