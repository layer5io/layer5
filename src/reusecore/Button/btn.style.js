import styled, {css} from 'styled-components';
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
    border-radius: 3px;
    -webkit-transition: 450ms all;
    transition: 450ms all;
    position: relative;
    color: ${props => props.theme.primaryColor};
    background-color: ${props => props.theme.primaryLightColor};
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
        color: ${props.theme.primaryLightColor};
        background: ${props.theme.primaryColor};

        &:hover{
            color: ${props.theme.primaryColor};
            background: ${props.theme.primaryLightColor}; 
        }
    `}
    ${props => props.secondary && css`
        color: ${props.theme.secondaryColor};
        background: ${props.theme.secondaryLightColor};

        &:hover{
            color: ${props.theme.secondaryLightColor};
            background: ${props.theme.secondaryColor}; 
        }
    `}
`
ButtonStyle.displayName = 'ButtonStyle';

export default ButtonStyle;