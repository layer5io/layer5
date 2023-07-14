import styled from "styled-components";

export const TooltipWrapper = styled.div`
    position: relative;
    display: block;
`;

export const TooltipText = styled.span`
    display: none;
    // width: 80px;
    padding: 0.325rem 0.5rem; // add some horizontal padding
    font-size: 0.725rem;
    line-height: 1.2;
    background-color: #555;
    color: ${(props) => props.theme.white};
    text-align: center;
    border-radius: 0.325rem;
    padding: 0.325rem 0.5rem;
    position: absolute;
    z-index: 11;
    top: 145%;
    left: 50%;
    transform: translateX(-50%);
    opacity: 0;
    transition: opacity 0.3s;
    &::before {
        content: "";
        position: absolute;
        bottom: 100%;
        left: 50%;
        transform: translateX(-50%);
        border-width: 5px;
        border-style: solid;
        border-color: #555 transparent transparent transparent;
    }
    
    ${TooltipWrapper}:hover & {
        display: block;
        opacity: 1;
    }

    li:first-child & {
        margin-left: 10px;
        &::before {
            left: 25%;
        }
    }

`;
