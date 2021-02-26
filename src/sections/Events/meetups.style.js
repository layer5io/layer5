import styled from "styled-components";

export const MeetupStyle = styled.div`

    margin-bottom: 4rem;

    .event-subhead{
        text-align: center;
        margin: 0 auto 2rem;
    }

    .filterBtns{
        display: flex;
        margin-bottom: 1.25rem;
        border-bottom: 1px solid #BEC2C5;
        margin-top: 3rem;


        button{
            font-size: 1.25rem;
            color: ${props => props.theme.secondaryColor};
            min-width: auto;
            border: none;
            border-bottom: 2px solid transparent;
            border-radius: 0;
            cursor: pointer;
            padding: 0.5rem 2rem;
            background: white;
            transition: all 0.2s ease-in;
        }
        .active{
            color: #1E2117;
            border-bottom: 2px solid #1E2117;
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
            button{
                margin-right: 10px;
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

    .post-content-block{
        height: 6rem;
    }

    .post-title{
        text-align: center;
    }

    .post-meta-block{
        display: inline-block;
        margin-top: 0.5rem;
        p{
            font-size: 1rem;
        }
    }

    .readmore-btn-wrapper{
        display: inline-block;
        float: right;
        margin-top: 0.5rem;
    }

    .external-link-btn::after{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: 0 1rem 2rem;
    }
`;
