import styled from "styled-components";

export const StepsIndicatorWrapper = styled.ul`
    padding: 0;
    margin: 0;
    list-style: none;

    & li {
        font-size: 17px;
        line-height: 28px;
        color: gray;
        margin-bottom: 16px;

        &.active {
          font-weight: 600;
          color: ${props => props.theme.text};


        }
    }
`;
