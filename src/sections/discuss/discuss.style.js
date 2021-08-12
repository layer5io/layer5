import styled from "styled-components";

const DiscussWrapper = styled.div`
    background-color:${props => props.theme.secondaryLightColor};
    padding: 0 0.625rem 1.125rem 0.625rem;
    overflow: hidden;
    h2{
        font-weight: 500;
    }
    h2 span{
        color:${props => props.theme.secondaryColor};
    }
    .logo{
        height: 2.5rem;
        width: auto;
    }
    .explain-1 {
        padding-top: 0rem;
        text-align: center;
        p { 
            text-align: center;
            color: ${props => props.theme.white};
            padding: 0px 3.125rem;
        }
        h2 {
            color: ${props => props.theme.white};  
        }
        h1 {
            padding: 1.25rem 0px;
        }
        .cards {
            margin: 0.15rem auto;
            max-width: 50rem;
            padding: 1rem 2rem 3rem 2rem;
            background-color: ${props => props.theme.white};
            border-radius: 25px;
            .card {
                box-shadow:
                0 2.8px 2.2px rgba(0, 0, 0, 0.034),
                0 6.7px 5.3px rgba(0, 0, 0, 0.048),
                0 12.5px 10px rgba(0, 0, 0, 0.06),
                0 10.3px 17.9px rgba(0, 0, 0, 0.072),
                0 20.8px 33.4px rgba(0, 0, 0, 0.086),
                0 3.125rem 80px rgba(0, 0, 0, 0.12)
                ;
                margin: 2px;
                padding: 1.25rem;
                background-color: #1E2117; 
                border-radius: 25px;
                p {
                    text-align: center;
                    padding: 0px 0px 1px 0px;
                    letter-spacing: 0;
                    font-size: 16px;
                }
                h2 {
                    text-align: center;
                    font-size: 28px;
                    text-transform:uppercase;
                    clear: both;
                    margin-bottom: 0rem;
                    margin-top: 1rem;
                }
                &:hover{
                    border-color: #00d3a9;
                    border: 2px solid;
                    color: #00d3a9;
                    box-shadow: 0 0.5em 0.5em -0.4em #00d3a9 ; 
                    transform: translateY(-0.30em); 
                    cursor: pointer; 
                }
                }
            }
        }
    }

    button{
        color: #1E2117;
        padding: 0.2em 1em;
        border: 2px solid;
        background: none;
        transition: color 0.25s,border-color 0.25s,transform 0.25s,box-shadow 0.25s;
        cursor: pointer;
    }
    @media only screen and (max-width: 450px){
        .explain-1 {
            .cards {
                padding: 1rem 1rem 3rem 1rem;
                .card {
                    padding: 0.5rem;
                    h2 {
                        font-size: 25px;
                    }
                    p{
                        font-size: 15px;  
                    }
                }
            }
        }
    }
    @media only screen and (max-width: 375px){
        .explain-1 {
            .cards {
                padding: 1rem .5rem 3rem .5rem;
                h2 {
                    font-size: 22px;
                }
                p{
                    font-size: 13px;  
                }
            }
        }
        .logo{
            height: 1.7rem;
            width: auto;  
        }
    } 
`;

export default DiscussWrapper;
