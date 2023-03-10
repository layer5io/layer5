import styled, { keyframes } from "styled-components";

export const BackToTopButton = styled.button`
    width: 2.3rem;
    height: 2.3rem;
    position : fixed;
    bottom: 6.2rem;
    right : 0rem;
    outline : none;
    border-radius:  50%;
    border : none;
    animation-name : ${props => props.isMounted ? onMountBtnAnimation : onUnmountBtnAnimation};
    animation-duration: ${props => `${props.delay}ms`};
    background-color: #3c494f;
    box-shadow: 0 2px 5px 0 rgba(0,0,0,.26);
    cursor: pointer;
    z-index: 999
`;

const onMountBtnAnimation = keyframes`
    0% { 
        transform: translateY(100px);
        opacity: 0;
    }
    100%{
        transform: translateY(0);
        opacity: 1;
    }
`;
const onUnmountBtnAnimation = keyframes`
     0% { 
        transform: translateY(0);
        opacity: 1;
    }
    100%{
        transform: translateY(100px);
        opacity: 0;
    }
`;
