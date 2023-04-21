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
    color: ${props => props.theme.white };
    background-color: #00B39F;
    z-index: 999;
    &:hover,
    &:focus {
        color: white;
        background: ${props => props.theme.activeColor}; 
        box-shadow: 0 2px 10px ${props => props.theme.whiteFourToBlackFour};
    }
    &:active{
        box-shadow: 0 2px 10px ${props => props.theme.blackFourToWhiteFour};
        transform: scale(0.98);
    }
    .icon-left{
        margin-right: 8px;
    }
    .icon-right{
        margin-left: 8px;
    }

    ${props => props.primary && css`
        color: ${props => props.theme.black};
        background: ${props => props.theme.highlightColor};

        &:hover{
            color: ${props.theme.black};
            background: ${props.theme.highlightColor}; 
            box-shadow: 0 2px 10px ${props.theme.whiteFourToBlackFour};
        }
        &:active{
            background: ${props => props.theme.saffronColor};
            box-shadow: 0 2px 10px ${props.theme.blackFourToWhiteFour};
            transform: scale(0.98);
        }
        
    `}
    ${props => props.secondary && css`
        color: white; 
        background: ${props.theme.secondaryColor}; 
        &:hover{
            background: ${props.theme.caribbeanGreenColor};
            box-shadow: 0 2px 10px ${props.theme.whiteFourToBlackFour};
        }
        &:active{
            color: #326d62;
            background: ${props.theme.secondaryColor};
            box-shadow: 0 2px 10px ${props.theme.blackFourToWhiteFour};
            transform: scale(0.98);
        }
    `}
`;
ButtonStyle.displayName = "ButtonStyle";

export default ButtonStyle;
