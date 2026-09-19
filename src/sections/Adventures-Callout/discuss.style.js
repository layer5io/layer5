import styled from "styled-components";

const AdventuresWrapper = styled.div`
    background-color: none;
    padding: 1rem 0;
    width: 100%;
    max-width: 23rem;
    margin: 0 auto;

    a {
        display: block;
        text-decoration: none;
        height: 100%;
    }

    .explain {
        text-align: center;
        height: 100%;

        .cards {
            height: 100%;

            .card {
                -webkit-transition: 450ms all;
                transition: 450ms all;
                padding: 1.5rem 1.25rem;
                background-color: ${(props) => props.theme.darkJungleGreenColor};
                border-radius: 25px;
                overflow: hidden;
                height: 100%;
                min-height: 20rem;
                box-sizing: border-box;
                display: flex;
                flex-direction: column;

                .parentcard {
                    display: flex;
                    flex-direction: column;
                    height: 100%;
                }

                .section-title {
                    width: 100% !important;
                    margin: 0;
                    display: flex;
                    flex-direction: column;
                    height: 100%;
                }

                .card-content {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    height: 100%;
                }

                h2 {
                    text-align: center;
                    font-size: 25px;
                    line-height: 34px;
                    font-weight: 500;
                    text-transform: uppercase;
                    clear: both;
                    margin: 0 0 0.5rem 0;
                    color: ${(props) => props.theme.white};
                }

                p {
                    text-align: center;
                    color: ${(props) => props.theme.white};
                    padding: 0 0.25rem;
                    margin: 0;
                    letter-spacing: 0;
                    font-size: 15px;
                    line-height: 22px;
                }

                .logo {
                    width: 100%;
                    max-width: 240px;
                    height: auto;
                    margin-top: auto;
                    padding-top: 0.75rem;
                    border-radius: 10px;
                }

                &:focus:not(:focus-visible) {
                   outline: none;
                }
                &:hover {
                    transform: translateY(-0.1rem);
                    box-shadow: 0 2px 10px #00d3a9;
                }
            }
        }
    }

    @media only screen and (max-width: 767px) {
        max-width: 23rem;
        margin: 0 auto;
    }

    @media only screen and (max-width: 450px) {
        .explain .cards .card {
            padding: 1.25rem 0.75rem;
            h2 {
                font-size: 22px;
                line-height: 30px;
            }
            p {
                font-size: 14px;
            }
        }
    }
`;

export default AdventuresWrapper;
