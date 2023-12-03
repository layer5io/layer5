import styled from "styled-components";

const WhiteboardWrapper = styled.div`
  height: 100%;

  .heading-container {
    z-index: 3;
    width: 100%;
    overflow: hidden;
    position: relative;
    //height: 30rem;
    //padding: 100px 100px 0 100px;
    padding: 100px;

    .section-title {
      text-align: left;
    }
    
    .whiteboard-image{
      perspective: 1000px;
    }

    #whiteboard-svg {
      //position: fixed;
      //top: 0;
      //left: 50%;
      //transform: translateX(-50%);
      transition: transform 0.3s ease-out;
      transform-origin: top center;
      min-width: 400px;
    }

    h2 {
      margin: 0;
      margin-bottom: 10px;
    }

    .whiteboard-heading {
      color: white !important;
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


  .whiteboard-use-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    .collaboration_display {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      width: 100%;
      margin: 0 10px;
      align-items: center;
      justify-content: center;

      .display-container {
        margin-bottom: 40px;
      }

      .image-container {
        height: 15rem;
        width: 100%;
        border-radius: 0.5rem;
        border: 1px solid var(--grey-light, #A0AAAA);
        margin: 0 auto 10px auto;
        //width: 100%;
      }

    }

    .image-heading {
      font-weight: bold;
      font-size: 1.2rem;
    }

  }


  .use-heading {
    color: white !important;
    font-weight: bold;
    font-size: 1.5rem;
    text-align: center;

    .highlighted-text {
      color: white;
      padding: 0 0.5rem;
      border-radius: 0.5rem;
      background: rgba(0, 179, 159, 0.35);
      font-weight: bold;
    }

  }

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
      right: 40%;
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

  @media (max-width: 500px) {
    .heading-image {
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
    }

    .whiteboard-text {
      text-align: center;
    }

    .section-title {
      margin-bottom: 15px;
    }

    .cursor_2 {
      visibility: hidden;
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


`;

export default WhiteboardWrapper;