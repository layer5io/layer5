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
            background-color: #eee;
            max-width: 350px;
            min-height: 200px;
            .card-header {
                display: flex;
                flex: auto;
                img {
                    height: 3rem;
                    align-self: center;
                    flex: 0 0 25%;
                }
                svg {
                    font-size: 4.15rem;
                    align-self: center;
                    flex: 0 0 25%;
                }
                h2 {
                    font-size: 1.75rem;
                    margin: 1rem 0;
                }
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
                .card-header {
                    img {
                        height: 2rem;
                        flex: 0 0 10%;
                    }
                    svg {
                        font-size: 2.15rem;
                        flex: 0 0 10%;
                    }
                }
            }
            a{
                margin: 1rem 0rem;
            }  
        } 
    }
    @media (max-width: 400px)
    {
        .container-card {
            .card {
                padding: 2rem 1rem;
            }
        }

    }
`;

export default SetupPreReqWrapper;