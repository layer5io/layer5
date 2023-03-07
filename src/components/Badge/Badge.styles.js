import styled from "styled-components";

export const TooltipWrapper = styled.div`
    position: relative;
    display: inline-block;
`;

export const TooltipText = styled.span`
    visibility: visible;
    width: 120px;
    font-size: 0.725rem;
    line-height: 1.2;
    background-color: #555;
    color: #fff;
    text-align: center;
    border-radius: 0.325rem;
    padding: 0.325rem 0;
    position: absolute;
    z-index: 1;
    top: 125%;
    left: 50%;
    margin-left: -60px;
    opacity: 0;
    transition: opacity 0.3s;
    &::before {
        content: "";
        position: absolute;
        bottom: 100%;
        left: 50%;
        margin-left: -5px;
        border-width: 5px;
        border-style: solid;
        border-color: transparent transparent #555 transparent;
    }
    ${TooltipWrapper}:hover & {
        visibility: visible;
        opacity: 1;
    }
`;