import styled from "styled-components";

const SetupPreReqWrapper = styled.div`
    padding: 1rem 0;
    h2{
        margin: 1rem 0;
    }
    .get-started-desc{
        margin: 1rem;
    }
    .container-card {
        display: flex;
        a {
            color: black;
            margin: 1rem;
        }
        .card {
            padding: 2rem;
            background: ${props => props.theme.DarkTheme ? "#212121" : "#eee"};
            max-width: 20rem;
            min-height: 21.5rem;
            .card-header {
                display: flex;
                flex: auto;
                .setup-imgs {
                    flex: 0 0 25%;
                    align-self: center;
                    margin: 0 0.5rem;
                }
                img {
                    height: 3rem;
                    width: 3rem;
                    max-width: 3rem;
                    margin: auto;
                }
                svg {
                    font-size: 4.15rem;
                    align-self: center;
                    flex: 0 0 25%;
                    margin: 0 0.5rem;
                    filter: ${props => props.theme.invertColor};
                }
                h2 {
                    font-size: 1.75rem;
                    margin: 1rem 0;
                }
            }
            p {
                color: ${props => props.theme.text};

            }
        }
    }
    
    @media (max-width: 1200px)
    {
        padding: 1rem 0;
        .get-started-desc{
            margin: 0;
        }
        .container-card {
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            .card{
                margin: 0;
                max-width: none;
                min-height: 3rem;
                .card-header {
                    .setup-imgs {
                        flex: 0 0 10%;
                    }
                    img {
                        height: 2rem;
                        width: 2rem;
                        max-width: 2rem;
                    }
                    svg {
                        font-size: 2.15rem;
                        flex: 0 0 10%;
                    }
                }
            }
            a{
                margin: 1rem 0rem;
                width: 100%;
            }  
        } 
    }
    @media (max-width: 460px)
    {
        .container-card {
            .card {
                padding: 2rem 1rem;
                .card-header {
                    .setup-imgs {
                        flex: 0 0 15%;
                    }
                }
            }
        }

    }
`;

export default SetupPreReqWrapper;