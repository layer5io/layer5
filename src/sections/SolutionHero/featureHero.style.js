import styled from "styled-components";

const FeatureHeroWrapper = styled.div`
  .heading-container {
    z-index: 3;
    width: 100%;
    position: relative;
    padding: 100px 0 0;

    .section-title {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .whiteboard-image{
      perspective: 1000px;
      padding: 0 1rem;
      &>img {
        width: 100%;
        margin: 2rem auto;
      }
    }

    #whiteboard-svg {
      transition: transform 0.3s ease-out;
      transform-origin: top center;
      transform: rotateX(0deg);
    }

    .whiteboard-heading {
      color: ${props => props.theme.whiteToBlack} !important;
      text-align: center;
      font-size: 4rem;
      font-weight: 600;
      max-width: 965px;
      margin: 0 auto;
      padding: 0 1rem;
    }

    .heading-image {
      margin: 0 auto;
    }

  }

  .heading-container::before {
    content: '';
    width: 15rem;
    height: 15rem;
    border-radius: 50%;
    background: #00B39F;
    filter: blur(150px);
    position: absolute;
    left: 50%;
    top: 40%;
    transform: translate(-50%, -50%);
    z-index: -3;
  }

  .whiteboard-text {
    color: ${props => props.theme.greyA0AAAAToGrey666666};
    text-align: center;
    font-size: 1.75rem;
    line-height: 2.4rem;
    max-width: 965px;
    margin: 1rem auto;
    padding: 0 1rem
  }

  @media (max-width: 768px) {
    .whiteboard-heading{
      font-size: 2.75rem !important;
    }
    .whiteboard-text {
      font-size: 1.25rem;
      line-height: 1.5rem;
    }
  }

  @media (max-width: 500px) {
    .section-title {
      margin-bottom: 1rem;
      text-align: center !important;
    }

    .whiteboard-heading{
      font-size: 2.5rem !important;
    }

    .whiteboard-text {
      font-size: 1rem;
      line-height: 1.2rem;
    }
  }
  
`;

export default FeatureHeroWrapper;