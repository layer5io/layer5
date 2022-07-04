import styled from "styled-components";

const CareerPageWrapper = styled.div`
    .single-post-wrapper{
        padding: 2.5rem 0.75rem 1rem;
        margin: 2rem auto;
        border: 1px solid rgba(0, 0, 0, 0.4);
        border-radius: 0.6rem;
        max-width: 65%;
    }

    .job-header-row {
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    }

    @media screen and (max-width: 767px) {
        .job-header-row {
            flex-direction: column-reverse;
        }
    }

    .job-details {
        h5 {
            font-weight: 600;

            svg {
                vertical-align: top;
                color: ${props => props.theme.primaryLightColorTwo};
                width: 2rem;
            }
        }

        p {
            margin-left: 2.25rem;
            color: ${props => props.theme.DarkTheme? "rgba(255, 255, 255, 0.5)": "rgba(0, 0, 0, 0.5)"};

        }
    }

    @media screen and (min-width: 1370px) {
        .job-details-col {
            flex: 0 0 25%;
            max-width: 25%;
        }
    }

    .layer5-logo {
        width: 15rem;
        margin: auto;
    }

    @media screen and (max-width: 1200px) and (min-width: 768px) {
        .layer5-logo {
            margin-top: 8%;
        }
    }

    @media screen and (max-width: 900px) {
        .layer5-logo {
            width: 13.5rem;
        }
    }

    @media screen and (max-width: 767px) {
        .layer5-logo {
                margin: 0 auto 1.5rem;
        }
    }

    @media screen and (min-width: 2100px) {
        .single-post-wrapper{
            max-width: 55%;
        }
    }

    @media screen and (max-width: 1850px) {
        .single-post-wrapper{
            max-width: 70%;
        }
    }

    @media screen and (max-width: 500px) {
        .single-post-wrapper{
            max-width: 90%;
        }
    }
`;
export default CareerPageWrapper;
