import styled from "styled-components";

export const Container = styled.div`
    border-radius: 1rem;
    border: 2px solid ${props => props.theme.primaryLightColor};
    background: ${props => props.theme.grey191919ToGreyFAFAFA};
    position: relative;
    display: flex;
    align-items: center;
    overflow: hidden;
    margin-bottom: 4rem;
    @media screen and (max-width: 968px) {
        flex-direction: column-reverse;
        margin-bottom: 2rem;
    }
`;

export const ContentWrapper = styled.div`
    position: relative;
    flex: 1;
    padding: 2rem 1rem 2rem 3rem;
    .text {
        color: ${props => props.theme.greyA0AAAAToGrey666666};
        margin-top: 0.75rem;
    }

    @media screen and (max-width: 968px) {
        width: 100%;
        padding: 0 2rem 2rem;
    }

    @media screen and (max-width: 500px) {
        padding: 0 1rem 1rem;

    }
`;
export const ImageWrapper = styled.div`
    position: relative;
    flex: 1.5; 
    transform: perspective(1000px) scale(1.2) translate(120px, 50px) rotateY(-25deg) rotateZ(4deg);
    transition: transform 1s ease 0s;

    & > img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }

    &:hover {
        transform: translate(0px, 0px) rotateY(0deg) rotateZ(0deg);
    }

    @media screen and (max-width: 968px) {
        padding: 1rem;
        transform: perspective(1000px) scale(1.1) translate(150px, 0px) rotateY(-25deg) rotateZ(4deg);

        &:hover {
            transform: translate(0px, 0px) rotateY(0deg) rotateZ(0deg);
        }

    }

    @media screen and (max-width: 500px) {
        transform: translate(0, 0) rotateY(0deg);
        &:hover {
            transform: translate(0, 0) rotateY(0deg) rotateZ(0deg);
        }
    }
`;

export const ImageWrapperTwo = styled.div`
    position: relative;
    flex: 1.5; 
    transform: translate(120px, 50px);
    transition: transform 1s ease 0s;

    & > img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }

    &:hover {
        transform: translate(0px, 0px);
    }

    @media screen and (max-width: 968px) {
        padding: 1rem;
        transform: translate(160px, 0px);

        &:hover {
            transform: translate(0px, 0px);
        }

    }

    @media screen and (max-width: 500px) {
        transform: translate(0, 0) rotateY(0deg);
        &:hover {
            transform: translate(0, 0);
        }
    }
`;