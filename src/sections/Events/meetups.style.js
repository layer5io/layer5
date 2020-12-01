import styled from "styled-components";

export const MeetupStyle = styled.div`
    h1{
        text-align: center;
        padding: 100px 0px 40px 0px;
    }
    h2{
        text-align: center;
    }
    p{
        text-align: center;
    }

    .filterBtns{
        display: flex;
        align-items: center;
        margin-bottom: 20px;
        border-bottom: 1px solid #a0aaaa;
        margin-top: 50px;


        button{
            outline: none;
            border: none;
            border-bottom: 2px solid transparent;
            padding: 10px 20px;
            transition: 0.5s ease-in-out all;
            height: 100%;
            font-size: 20px;
            color: #00d3a9;
            font-weight: 300;
            background: white;
            filter: grayscale(0.7);
            cursor: pointer;
            margin-right: 40px;
            transition: 0.5s ease-in all;
            
            &:hover{
                background-color: rgba(0,0,0,0.02);
            }
        }
        .active{
            border-bottom: 2px solid lightseagreen;
            filter: grayscale(0);
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
`;
