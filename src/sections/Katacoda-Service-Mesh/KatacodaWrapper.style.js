import styled from "styled-components";

export const KatacodaWrapper=styled.div`
    h1 {
        text-align: center;
        width: 70rem;
        max-width: 100%;
        margin: auto;
    }
    .lab-card-block {
        margin-bottom: 2rem;
        border-radius: 0.5rem;
        box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 6px 0px;
        padding: 1rem;
        cursor: pointer;
        transition: all 0.3s ease-in 0s;
        &:hover {
            box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 15px 4px;
        }
    }
    .cover {
        overflow: hidden;
        border: 1px solid transparent;
        height: 100%;
    }
    .book-image {
        margin: auto 0;
        height: 100%;
    }
    .description {
        display: flex;
        flex-direction: column;
        padding: 1rem 0;
    }
    h4 {
        font-weight: bold;
        font-size: 1.5rem;
        line-height: 1.5rem;
    }
    p {
        font-weight: normal;
        font-size: 1.125rem;
        line-height: 1.6875rem;
        color: rgba(0, 0, 0, 0.6);
    }
    .join-community {
        height: 25rem;
        background: #fafafa;
        margin: auto;
    }
    .join-community_text-and_button {
        position: relative;
        top: 6.5rem;
        text-align: center;
        h1{
            margin-top: 1rem;
            color: ${props => props.theme.black};
        }
        p{
            margin: auto;
            margin-top: 1rem;
            color: ${props => props.theme.black};
        }
        button{
            color: color: ${props => props.theme.black};
            margin-top: 1.5rem;
            &:hover{
                color: ${props => props.theme.white};
            }
        }
    }
`;