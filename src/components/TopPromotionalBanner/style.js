import styled from "styled-components";

export const TopBannercontainer = styled.div`
    background: ${props => props.theme.saffronColor};
    color: ${props => props.theme.body};
    position: sticky;
    & > p {
       padding: 0.75rem 1rem;
       text-align: center;
       font-weight: 500;
       line-height: 1.1875rem;

       & > a {
        font-weight: 700;
        margin-left: 1rem;
        color: ${props => props.theme.body};
       }
    }
`;


