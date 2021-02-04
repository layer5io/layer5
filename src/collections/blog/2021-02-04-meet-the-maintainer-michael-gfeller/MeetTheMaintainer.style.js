import styled from "styled-components";
export const MeetTheMaintainer = styled.div`
    
    div.intro {
        padding-left: 3rem;
        padding-right: 3rem;
        font-style: italic;
        font-size: .8rem;
    }

    div.interviewer {
        margin-top: 1rem;
        text-align:left;
        span {
            font-weight: 600;
        }
    }
    div.interviewee {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        color: #222;
        font-style: italic;
        text-align:left;
        border-left: 2px solid ${props => props.theme.primaryColor};
        padding-left: 2rem;
        span {
            font-weight: 600;
        }
    }
`;
