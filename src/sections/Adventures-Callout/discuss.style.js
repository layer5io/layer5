import styled from "styled-components";

const AdventuresWrapper = styled.div`
    background-color:none;
    padding: 1.5rem 1.25rem 1rem;
    overflow: hidden;
    h2{
        font-weight: 500;
    }
    h2 span{
        color:${(props) => props.theme.secondaryColor};
    }
    .logo{
        width: 100%;
        margin-top: 1rem;
    }
    .explain {
        padding-top: 0rem;
        text-align: center;
        p { 
            text-align: center;
            color: ${(props) => props.theme.white};
            padding: 0px 3.125rem;
        }
        h2 {
            color: ${(props) => props.theme.white}; 
            line-height: 1.2;
        }
        h1 {
            padding: 1.25rem 0px;
        }
        .cards {
            margin: 0.15rem auto 0 ;
            max-width: 50rem;
            padding: 1.5rem 2rem 0rem 2rem;
            background-color: none;
            border-radius: 25px;
            .card {
                -webkit-transition: 450ms all;
                transition: 450ms all;
                margin: auto;
                padding: 1.25rem;
                background-color: #1E2117; 
                border-radius: 25px;
                overflow: hidden;
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
                &:hover,
                &:focus:not(:focus-visible) {
                   outline: none;
                }
                &:hover{
                    transform: translateY(0.03rem);
                    box-shadow: 0 2px 10px #00d3a9;
                }
                }
            }
        }
    }

    @media only screen and (min-width: 768px){
        @media only screen and (min-width: 1211px){
            .explain {
                .cards {
                    padding: 0;
                    .card {
                        min-height: 20rem;
                        height: 100%;
                        max-width: 23.8rem;
                    }  
                }
            }
        }
        @media only screen and (max-width: 1211px){
            .explain {
                .cards {
                    padding: 0; 
                    h2 {
                        font-size: 24px;
                        line-height: 33px;
                    }
                    p {
                        font-size: 14px;
                    }
                    .card{
                        max-width: 22.5rem;
                        min-height: 20rem;
                        height: 100%;
                    }
                }
            }
        }
       
        @media only screen and (max-width: 992px){
            .explain {
                .cards {
                    padding: 0;
                    .card {
                        h2 {
                            font-size: 21px;
                            line-height: 28px;
                        }
                        p {
                            font-size: 13.5px;
                            line-height: 20px;
                        }
                        .logo {
                            margin-top: 0.75rem;
                        }
                        max-width: 22rem;
                        min-height: 20rem;
                        height: 100%;
                    }
                }
            }
        }
    }
    @media only screen and (max-width: 450px){
        .explain {
            .cards {
                padding: 1rem 1rem 1rem 1rem;
                .card {
                    padding: 0.5rem;
                    h2 {
                        font-size: 22px;
                    }
                    p{
                        font-size: 14px;  
                    }
                }
            }
        }
    }
    @media only screen and (max-width: 375px){
        .explain {
            .cards {
                padding: 1rem .5rem 1rem .5rem;
                h2 {
                    font-size: 20px;
                }
                p{
                    font-size: 13px;  
                }
            }
        }
    } 
`;

export default AdventuresWrapper;
