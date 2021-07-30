import styled from "styled-components";

const WhatAwaitsWrapper = styled.div`
    padding: 1rem;
    margin: 1rem auto 6rem;

    .what-await-section {
        margin: 0;
    }

    .what-await-section-info {
        align-self: center;
        padding: 2rem 1rem;
        flex: 0 0 50%;
        max-width: 50%;
        h2{
            margin: 1rem auto;
            max-width: 75%;
        }
        p {
            max-width: 75%;
            margin: auto;
        }
    }

    .what-await-section-image {
        flex: 0 0 50%;
        max-width: 50%;
        overflow: hidden;
        div {
            margin: auto;
        }
    }

    @media screen and (max-width: 1200px) {
        .what-await-section-info, .what-await-section-image {
            flex: 0 0 100%;
            max-width: 100%;
        }
    }
`;

export default WhatAwaitsWrapper;