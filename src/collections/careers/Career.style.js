import styled from "styled-components";
import List_Icon from "../../assets/images/careers/list-icon.svg";

export const CareerWrapper = styled.div`
    .body-sections {
        position: relative;
        p {
            margin-top: 0.25rem;
        }
    }
    .body-headers {
        margin: 1rem 0;
        width: fit-content;
        :after {
            content: '';
            position: absolute;
            left: 0;
            margin-top: 2.75rem;
            width: 6rem;
            height: 0.2rem;
            border-bottom: 0.25rem solid ${props => props.theme.secondaryColor};
            border-radius: 0.2rem;
        }
    }
    @media screen and (max-width: 992px) {
        .body-headers:after {
            margin-top: 2.25rem;
        }
    }
    .qualification-section {
        display: flex;
        flex-wrap: wrap;
        margin-top: 5rem;
        border-top: 1px solid rgba(0, 0, 0, 0.2);
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);
        .qualification-col {
            padding: 0 0.75rem 0 0;
        }
    }
    li {
        list-style-type: none;
        margin: 2rem 0;
        line-height: 2rem;
        :before {
            content: url(${List_Icon});
            position: absolute;
            margin: 0rem 0rem 0rem -2.8rem;
        }
    }
    .job-details-footer {
        margin: 1rem 0;
        span {
            display: flex;
            line-height: 1.5rem;
            color: ${props => props.theme.DarkTheme? "rgba(255, 255, 255, 0.75)": "rgba(0, 0, 0, 0.75)"};
            h5 {
                font-weight: 600;
            }
            p {
                margin: 0 0 0 0.35rem;
            }
        }
    }
`;
