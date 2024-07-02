import styled from "styled-components";

export const Section = styled.div`
    display: flex;
    gap: 2rem;
    align-items: flex-start;
    @media screen and (max-width: 968px) {
        flex-direction: column;
      }
`;

export const Container = styled.div`
  border-radius: 1rem;
  background: ${(props) => props.theme.grey191919ToGreyF2F5F7};
  position: relative;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  margin-bottom: 4rem;
  opacity: 0;
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  &.left-slide-in {
    transform: translateX(-100px); /* Initially positioned to the left */
  }
  
  &.right-slide-in {
    transform: translateX(100px); /* Initially positioned to the right */
  }
  &.fade-in {
    opacity: 1;
    transform: translateX(0); /* Move to original position */
  }
  @media screen and (max-width: 968px) {
    margin-bottom: 2rem;
  }
  @keyframes waveAnimation {
    0%,
    100% {
      transform: scale(1) rotate(0deg);
    }
    12.5% {
      transform: scale(2.25) rotate(-15deg);
    }
    37.5% {
      transform: scale(2.5) rotate(15deg);
    }
    62.5% {
      transform: scale(3) rotate(-15deg);
    }
    87.5% {
      transform: scale(2.5) rotate(15deg);
    }
  }
  .small-card-container {
    display: flex;
    gap: 1rem;
  }
  .small-card {
    padding: 0.75rem 1.25rem;
    display: flex;
    gap: 0.75rem;
    align-items: center;
    width: fit-content;
    border-radius: 0.25rem;
    cursor: pointer;
    color: ${(props) => props.theme.text};
    border: 2px solid ${(props) => props.theme.whiteZeroEightToBlackZeroEight};
    &:hover {
      background-color: ${(props) => props.theme.whiteZeroEightToBlackZeroEight};
    }

    @media screen and (max-width: 500px) {
      flex-direction: column;
      justify-content: center;
      text-align: center;
    }
  }
`;

export const ContentWrapper = styled.div`
  position: relative;
  padding: 2rem 2rem;
  opacity: 0; 
  transform: translateY(20px); 
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  &.fade-in {
    opacity: 1; 
    transform: translateY(0); 
  }
  .text {
    color: ${(props) => props.theme.greyA0AAAAToGrey666666};
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
  transform: translate(170px, 0px);
  transition: transform 1s ease 0s;
  height: 325px;
  & > a > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  &:hover {
    transform: translate(0px, 0px);
  }

  @media screen and (max-width: 968px) {
    padding: 1rem;
    height: fit-content;
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
