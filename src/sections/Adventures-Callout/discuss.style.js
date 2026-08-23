import styled from "styled-components";

const AdventuresWrapper = styled.div`
    background-color: none;
    padding: 0;
    width: 100%;
    max-width: 25rem;
    display: flex;
    flex-direction: column;
    align-self: stretch;

    .explain {
        padding-top: 0;
        text-align: center;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;

        .cards {
            margin: 0 auto;
            width: 100%;
            height: 100%;
            padding: 0;
            display: flex;
            flex-direction: column;
            flex: 1;

            a {
                display: flex;
                flex-direction: column;
                height: 100%;
                width: 100%;
                text-decoration: none;
                flex: 1;
            }

            .card {
                -webkit-transition: 450ms all;
                transition: 450ms all;
                margin: 0 auto;
                padding: 1.75rem 1.25rem;
                background-color: #1E2117;
                border-radius: 25px;
                overflow: hidden;
                width: 100%;
                max-width: 25rem;
                min-height: 22rem;
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                box-sizing: border-box;
                flex: 1;

                .parentcard, .section-title, .card-content {
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    align-items: center;
                    height: 100%;
                    width: 100%;
                    margin: 0;
                    padding: 0;
                }

                h2 {
                    text-align: center;
                    font-size: 25px;
                    line-height: 34px;
                    font-weight: 500;
                    text-transform: uppercase;
                    clear: both;
                    margin: 0 0 0.75rem 0;
                    padding: 0;
                    color: ${(props) => props.theme.white};
                }

                p {
                    text-align: center;
                    color: ${(props) => props.theme.white};
                    padding: 0 0.5rem;
                    margin: 0 0 1.25rem 0;
                    letter-spacing: 0;
                    font-size: 15px;
                    line-height: 22px;
                }

                .logo {
                    width: 100%;
                    max-width: 260px;
                    height: auto;
                    margin-top: auto;
                    border-radius: 12px;
                }

                &:focus:not(:focus-visible) {
                   outline: none;
                }
                &:hover {
                    transform: translateY(-0.15rem);
                    box-shadow: 0 4px 15px #00d3a9;
                }
            }
        }
    }

    @media only screen and (max-width: 992px) {
        .explain .cards .card {
            h2 {
                font-size: 22px;
                line-height: 30px;
            }
            p {
                font-size: 14px;
                line-height: 20px;
            }
        }
    }

    @media only screen and (max-width: 450px) {
        .explain .cards .card {
            padding: 1.25rem 0.75rem;
            h2 {
                font-size: 20px;
                line-height: 28px;
            }
            p {
                font-size: 13.5px;
                line-height: 19px;
            }
        }
    }
`;

export default AdventuresWrapper;
