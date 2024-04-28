import styled from "styled-components";

export const Container = styled("div")`
    max-width: 1170px;
    margin: 0 auto;
    padding: 0 2rem;
`;

export const Wrapper = styled("div")`
    padding: 2rem 0;
    display: flex;
    gap: 1.5rem;    
    @media only screen and (max-width: 675px){
        flex-direction: column;
    }
`;

export const CardWrapper = styled("div")`
    width: 350px;
    flex: 1;
    background: ${props => props.theme.grey212121ToLinear2};
    border-radius: 0.25rem;
    box-shadow: 0px 0px ${props => props.theme.projectShadowsize} ${props => props.theme.green00D3A9ToGreyE6E6E6};
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
    &:hover {
        box-shadow: 0px 0px 5px ${props => props.theme.whiteToGreen3C494F};
    }
    @media only screen and (max-width: 675px){
        width: 100%;
    }
`;
export const CardImageContainer = styled("div")``;
export const Image = styled("img")``;
export const CardTitle = styled("h4")`
    text-align: center;
    padding: 2rem 1rem;
`;