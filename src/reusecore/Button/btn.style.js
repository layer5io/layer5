import styled, { css } from "styled-components";
const ButtonStyle = styled.button` 
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center; 
    font-family: inherit; 
    font-size: 16px;
    text-decoration: none;
    text-transform: capitalize; 
    border: 0; 
    min-width: 170px;
    padding: 14px;
    border-radius: 5px;
    -webkit-transition: 450ms all;
    transition: 450ms all;
    position: relative;
    color: ${props => props.active ? props.theme.white : props.theme.headingColor};
    background-color: ${props => props.active ? props.theme.primaryColor : props.theme.primaryLightColor};
    z-index: 999;
    &:hover,
    &:focus {
        outline: none;
        background: ${props => props.theme.primaryColor};
        color: ${props => props.theme.white};
    }
    .icon-left{
        margin-right: 8px;
    }
    .icon-right{
        margin-left: 8px;
    }

    ${props => props.primary && css`
        color: ${props.active ? props.theme.headingColor : props.theme.black};
        background: ${props.active ? props.theme.highlightColor : props.theme.highlightColor};

        &:hover{
            color: ${props.theme.black};
            background: ${props.theme.highlightColor}; 
            box-shadow: 0 2px 10px ${props.theme.DarkTheme ? "rgb(255 255 255 / 40%)" : "rgb(0 0 0 / 40%)"};
        }
    `}
    ${props => props.secondary && css`
        color: white; 
        background: #00b39f; 

        &:hover{
            color: #111111; 
            background: #00b39f; 
            box-shadow: 0 2px 10px ${props.theme.DarkTheme ? "rgb(255 255 255 / 40%)" : "rgb(0 0 0 / 40%)"};
        }
    `}
`;
ButtonStyle.displayName = "ButtonStyle";

export default ButtonStyle;
