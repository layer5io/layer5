import styled from "styled-components";

const MultiplayerTeachingWrapper = styled.div`
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

    .multiplayer-heading {
      color: ${props => props.theme.whiteToBlack} !important;
      text-align: center;
      font-size: 3rem;;
      font-weight: 600;
      max-width: 965px;
      margin: 0 auto;
      padding: 0 1rem;
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

  .multiplayer-text {
    color: ${props => props.theme.greyA0AAAAToGrey666666};
    text-align: center;
    font-size: 1.5rem;
    line-height: 2.4rem;
    max-width: 965px;
    margin: 1rem auto;
    padding: 0 1rem
  }

  @media (max-width: 768px) {
    .multiplayer-heading{
      font-size: 2.75rem !important;
    }
    .multiplayer-text {
      font-size: 1.25rem;
      line-height: 1.5rem;
    }
  }

  @media (max-width: 500px) {
    .section-title {
      margin-bottom: 1rem;
      text-align: center !important;
    }

    .multiplayer-heading{
      font-size: 2.5rem !important;
    }

    .multiplayer-text {
      font-size: 1rem;
      line-height: 1.2rem;
    }
  }
  
`;

export default MultiplayerTeachingWrapper;
