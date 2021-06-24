import styled from "styled-components";

const GetStartedWrapper = styled.div`
    padding: 1rem 3rem;
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
            padding: 2rem 1.5rem;
            
            background-color: #eee;
            max-width: 350px;
            min-height: 200px;
            h2 {
                font-size: 1.6rem;
                margin: 1rem 0;
            }
        }
    }
    @media (max-width: 1470px)
    {
        padding: 1rem 0;
        .container-card {
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            
        }
    }
    @media (max-width: 1049px)
    { 
        .container-card {
            .card{
                margin: 0;
                max-width: none;
            }
            a{
                margin: 1rem 0rem;
            }
        }
    }
`;

export default GetStartedWrapper;