import styled from "styled-components";

export const TooltipWrapper = styled.div`
    position: relative;
    display: block;
`;

export const TooltipText = styled.span`
    display: none;
    width: 80px;
    font-size: 0.725rem;
    line-height: 1.2;
    background-color: #555;
    color: ${(props) => props.theme.white};
    text-align: center;
    border-radius: 0.325rem;
    padding: 0.325rem 0;
    position: absolute;
    z-index: 1;
    top: 145%;
    left: 50%;
    margin-left: -40px;
    opacity: 0;
    transition: opacity 0.3s;
    &::before {
        content: "";
        position: absolute;
        bottom: 100%;
        left: 50%;
        margin-left: -5px;
    }
    &.first {
        top: 140%;
        left: 100%;
    }
    ${TooltipWrapper}:hover & {
        display: block;
        opacity: 1;
    }
`;