import styled from "styled-components";

const DesignDefaultWrapper = styled.section`
    max-width: 90%;
    .row {
        margin: 2rem;

        @media only screen and (max-width: 767px) {
          display: flex;
          flex-direction: column;
        }

    }
    .left-col {
        padding-left: 0px;
        padding-right: 0px;
        flex: 0 0 70%;
        max-width: 70%;
    }
    .left {
        display: flex;
        height: 100%;
    }
    .left-child {
        position: relative;
        align-self: center;
    }
    .right-col {
        display: flex;
        padding-left: 0px;
        padding-right: 0px;
        flex: 0 0 30%;
        max-width: 30%;
    }
    h2.statement {
        color: ${props => props.theme.green00B39FToGreyB3B3B3};
        margin-bottom: 1rem;
        font-size: clamp(12px, 20px + .8vw, 50px);
        line-height: clamp(14px, 22px + .8vw, 50px);
    }
    h3.statement {
        color: ${props => props.theme.primaryColor};
        margin-left: 0rem;
        /* text-indent: -3.5rem; */
        margin-bottom: 2rem;
        font-size: clamp(10px, 12px + .8vw, 50px);
        line-height: clamp(10px, 12px + .8vw, 50px);

        &:before {
            content: "";
            display: inline-block;
            width: 3rem;
            margin-right: 0.5rem;
            vertical-align: middle;
            border-bottom: 1px solid;
        }
        .description {
            margin-top: 1rem;
        }
    }
    h4.statement {
        font-weight: bold;
        display: flex;
        color: ${props => props.theme.primaryColor};
    }
    .description a {
        color: ${props => props.theme.white};
        font-style: italic;
        :hover {
            cursor: hand;
            color: #111111;

        }
    }
    .demo {
        color: ${props => props.theme.primaryColor};
        margin-bottom: 1rem;
        font-size: clamp(12px, 20px + .8vw, 50px);
        line-height: clamp(14px, 22px + .8vw, 50px);
    }
    .demo span {
        font-weight: 600;
    }
    .hero {
        margin: auto;
        object-fit: cover;
        width: inherit;
        box-shadow: -0.25rem 0.25rem 1.25rem rgba(0, 0, 0, 0.25);
        border-top-left-radius: 0.5rem;
        border-bottom-left-radius: 0.5rem;

    }
    .section-title {
        padding: 3rem 4rem;
        border-radius: 2rem 0 0 2rem;
        background:${props => props.theme.linearToLinear};
    }
    .svg-background {
        position: absolute;
        top: 0px;
        right: 0px;
        overflow: hidden;
        height: 20rem;
        width: 15rem;
        img {
            filter: brightness(1.3);
            transform: scale(2);
            transform-origin: 0rem 0rem;
        }
    }

    .diagram-hidden {
        opacity: 0;
        transition: 0.5s ease-out;
    }
    .diagram-visible {
        opacity: 1;
        transition: 0.5s ease-in;
    }

    @media screen and (max-width: 1600px) {

        .section {
            margin: 0 auto;
        }

        .left-col {
            flex: 0 0 75%;
            max-width: 85%;
        }

        .right-col {
            flex: 0 0 25%;
            max-width: 45%;
        }

        .hero {
            height: 125%;
            margin-top: -4.5rem;
        }
    }


    @media only screen and (max-width: 1440px) {
        .section-title {
            padding: 2rem 3rem;
        }
    }

    @media screen and (max-width: 1200px) {

        .section {
            margin: 6rem auto 8rem;
        }

        .left-col {
            flex: 0 0 70%;
            max-width: 70%;
        }

        .right-col {
            flex: 0 0 30%;
            max-width: 30%;
        }

        .hero {
            height: 125%;
            margin-top: -4.5rem;
        }
    }

    @media only screen and (max-width: 767px) {
        .section {
            margin: 10% auto 5%;
        }

        .right-col {
            /* display: none; */
            justify-content: center;
            margin-top: 10%;
            max-width: 100%;
        }
        .join-community {
            text-align: center;
        }
        .left-col {
            flex: 0 0 100%;
            max-width: 100%;
        }
    }
    @media only screen and (max-width: 576px) {
        .section-title {
        padding: 2rem 1rem;
        }
    }
`;

export default DesignDefaultWrapper;
