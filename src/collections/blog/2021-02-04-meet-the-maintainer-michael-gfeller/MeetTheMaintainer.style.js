import styled from "styled-components";
export const MeetTheMaintainer = styled.div`
    
    img.right {
        width: 25%;
        display: inline;
        position: relative;
        float: right;
    }
    img.left {
        width: 25%;
        display: inline;
        position: relative;
        float: left;
    }
    div.intro {
        padding-left: 3rem;
        padding-right: 3rem;
        font-style: italic;
        font-size: .8rem;
        border-bottom: 1px dashed ${props => props.theme.primaryLightColor};

    }

    div.interviewer {
        margin-top: 1rem;
        text-align:left;
        span {
            font-weight: 600;
            font-style: normal;
        }
    }
    div.interviewee {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        color: #222;
        font-style: italic;
        text-align:left;
        border-left: 2px solid ${props => props.theme.primaryLightColor};
        padding-left: 2rem;
        span {
            font-weight: 600;
            font-style: normal;
        }
    }
    div.note {
        margin: 1rem;
        padding: 2rem;
        display: flex;
        border: 1px solid ${props => props.theme.primaryLightColor};
        img {
            margin-right: 3rem;
        }
    }
    .centered-text {
        padding-top: 2rem;
        padding-bottom: 2rem;
        font-size: 1.2rem;
        font-weight: 600;
    }
    a {
        color: ${props => props.theme.primaryColor};
        background-color: #eeeeee;
        border-radius: 8px;
        padding-left: .5rem;
        padding-right: .5rem;
        &:hover {
            color: ${props => props.theme.keppelColor}; 
        }
    }
`;
