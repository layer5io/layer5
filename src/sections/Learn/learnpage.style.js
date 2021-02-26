import styled from "styled-components";

export const LearnPageWrapper = styled.div`
    .page-header-section {
        height: 35rem;
        text-align: center;
        background: rgb(71,126,150);
        background: linear-gradient(250deg, rgba(71,126,150,1) 0%, rgba(0,179,159,1) 35%, rgba(60,73,79,1) 100%);
        h1 {
            line-height: 35rem;
            color: white;
        }
    }

    .join-community{
        width: 100%;
        height: 28rem;
        background-position: bottom;

        @media screen and (min-width: 1800px) {
            height: 34rem;
            background-position-y: -56vw;
        }
    }
`;