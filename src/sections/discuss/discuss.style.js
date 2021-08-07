import styled from "styled-components";
import Discuss from "./layer5-discuss-white.png"
import DiscussDark from "./layer_discuss.png"

const DiscussWrapper = styled.div`
    background-color:${props => props.theme.secondaryLightColor};
    padding: 0 0.625rem 1.125rem 0.625rem;
    overflow: hidden;
    h2{
        font-weight: 600;
        font-size:1.875rem;
        margin:1.25rem 0;
    }
    h2 span{
        color:${props => props.theme.secondaryColor};
    }
    #callout_discuss:hover{
        color:black;
        box-shadow:0 2px 10px rgba(0,0,0,0.4);
    }
    .logo{
        height: 35px;
        width: auto;
        margin: 0;
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
            margin: 0rem 0rem 0rem 0;
            width: 100%;
            padding: 3rem 25rem 3rem 25rem;
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
                height: 15rem;
                margin: 2px;
                padding: 1.25rem;
                background-color: #1E2117; 
                border-style: solid;
                border-color: #00d3a9;
                border-radius: 25px;
                p {
                    text-align: center;
                    padding: 0px 0px 5px 0px;
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
                }
            }
        }
    }

    button{
        color: #1E2117;
        padding: 0.2em 1em;
        border: 2px solid;
        background: none;
        font-size: 1em;
        transition: color 0.25s,border-color 0.25s,transform 0.25s,box-shadow 0.25s;
    }
    
    button:hover{
        border-color: #00d3a9;
        color: #00d3a9;
        background: none;
        box-shadow: 0 0.5em 0.5em -0.4em #00d3a9 ; 
        transform: translateY(-0.35em); 
        cursor: pointer;  
    }
`;

export default DiscussWrapper;
