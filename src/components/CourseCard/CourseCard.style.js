import styled from "styled-components";

export const CourseCardWrapper = styled.div`
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
    .image {
        margin: auto 0;
        height: 100%;
    }
    .description {
        display: flex;
        flex-direction: column;
        padding: 1rem 0;
    }
    h4 {
        line-height: 1.5rem;
    }
    p {
        color: rgba(0, 0, 0, 0.6);
    }
`;