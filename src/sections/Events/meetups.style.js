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
            color: #00b39f;
            font-weight: 300;
            background: white;
            cursor: pointer;
        }
        .active{
            border-bottom: 2px solid lightseagreen;
        }
    }
`;
