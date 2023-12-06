import styled from "styled-components";

const FeatureHeroWrapper = styled.div`
  .heading-container {
    z-index: 3;
    width: 100%;
    overflow: hidden;
    position: relative;
    padding: 100px 50px 0 50px ;

    .section-title {
      text-align: left;
    }

    .whiteboard-image{
      perspective: 1000px;
    }

    #whiteboard-svg {
      transition: transform 0.3s ease-out;
      transform-origin: top center;
      min-width: 400px;
    }

    h2 {
      margin: 0 0 10px 0;
    }

    .whiteboard-heading {
      color: ${props => props.theme.whiteToBlack} !important;
    }

    .heading-image {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: center;
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
    color: ${props => props.theme.greyA0AAAAToGrey666666}
  }

  @media (max-width: 500px) {
    .heading-image {
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
    }

    .section-title {
      margin-bottom: 1rem;
      text-align: center !important;
    }

    .whiteboard-heading{
      font-size: 2rem;
    }
  
`;

export default FeatureHeroWrapper;