import styled from "styled-components";

const SeeYouWrapper = styled.div`
  .see-you {
    margin-top: 100px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 100px 0;

    .headings {
      z-index: 3;
    }

    img {
      animation-name: floating;
      animation-iteration-count: infinite;
      animation-timing-function: ease-in-out;
      position: absolute;
    }

    .square {
      animation-duration: 5s;
      top: 5%;
      left: 5%;
      height: 75px;
    }

    .pentagon {

      animation-duration: 4s;
      top: 0;
      right: 30%;
      height: 75px;
    }

    .hexagon {
      animation-duration: 3s;
      bottom: 20%;
      right: 10%;
      height: 75px;

    }

    .heptagon {

      animation-duration: 2s;
      bottom: -37.5px;
      left: 30%;
      height: 75px;

    }

    .cursor_1 {
      animation-duration: 4s;
      bottom: 14%;
      right: 15%;
      height: 50px;

    }

    .cursor_2 {
      animation-duration: 5s;
      bottom: 5%;
      left: 40%;
      height: 50px;

    }

    .playground-button {
      margin: 70px 0 5px 0;
    }

  }

  @keyframes floating {
    from {
      transform: translate(0, 0px);
    }
    50% {
      transform: translate(0, 5px);
    }
    to {
      transform: translate(0, -0px);
    }
  }

  @media (max-width: 500px) {
    .cursor_2 {
      visibility: hidden;
    }
  }
  
`;

export default SeeYouWrapper;