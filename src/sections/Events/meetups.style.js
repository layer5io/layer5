import styled from "styled-components";

export const MeetupStyle = styled.div`

    margin-bottom: 4rem;
    Button:hover {
        box-shadow: none;
    }
    .event-subhead{
        text-align: center;
        margin: 1rem auto 2rem;
    }

    .filterBtns{
        display: flex;
        margin-bottom: 1.25rem;
        border-bottom: 1px solid #BEC2C5;
        margin-top: 5rem;


        button{
            font-size: 1.25rem;
            color: ${props => props.theme.secondaryColor};
            min-width: auto;
            border: none;
            border-bottom: 2px solid transparent;
            border-radius: 0;
            cursor: pointer;
            padding: 0.5rem 2rem;
            background: ${props => props.theme.body};;
            transition: all 0.2s ease-in;
        }
        .active{
            color: ${props => props.theme.text};
            border-bottom: 2px solid ${props => props.theme.text};
        }
    }

    .prevAndNextBtns{
        display: block;
        width: 100%;
        height: auto;
        margin: 40px auto;
    }

    @media (max-width: 560px){
        .filterBtns{
            overflow: hidden;
            button{
                padding: 0.5rem 1.5rem;
                font-size: 18px;
            }
        }
    }

    @media (max-width: 420px){
        .filterBtns{
            button{
                margin-right: 0px;
                font-size: 18px;
                padding: 10px;
            }
        }
    }

    .post-title{
        text-align: center;
    }
`;
