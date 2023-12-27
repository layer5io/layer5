import styled from "styled-components";

export const TopBannercontainer = styled.div`
    background: ${props => props.theme.saffronColor};
    position: sticky;
    .content {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 1rem;
        font-weight: 500;
        line-height: 1.1875rem;
        color: ${props => props.theme.body};
        padding: 0.75rem 1rem;

       & > img {
        width: 3rem;
        margin-right: 0.5rem;
       }

       & > span {
        font-weight: 700;
        margin-left: 0.5rem;
        &:hover {
            text-decoration: underline;
        }
       }
    }
`;


