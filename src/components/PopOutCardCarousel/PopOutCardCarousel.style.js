import styled, { css } from "styled-components";

const PopOutCardWrapper = styled.div`
  position: absolute;
  display: flex;
  // align-items: center;
  right: -80px;
  padding: 1.2rem;
  height: 320px;
  width: 350px;
  box-shadow: rgb(38, 57, 77, 0.5) 0px 20px 30px -10px;
  background: linear-gradient(
    266.65deg,
    #00b39f 40.19%,
    #477e96 74.31%,
    #3c494f 92.89%
  );
  transform: translate3d(0, 0, 0);
  border-radius: 20px;
  cursor: pointer;
  // transition: transform 0.4s ease-out;

  transition: all 0.6s cubic-bezier(0.725, 0.91, 0.53, 1.105); /* custom */
  transition-timing-function: cubic-bezier(
    0.725,
    0.91,
    0.53,
    1.105
  ); /* custom */

  h3 {
    opacity: 0.4;
    color: white !important;
    font-weight: bold;
    margin-bottom: 0.6rem;
  }
  p {
    opacity: 0;
    color: white !important;
  }

  .img {
    visibility: hidden;
    // margin-block: auto;
    padding-left: 3rem;
  }
  @media only screen and (max-width: 1200px) {
    right: -160px;
  }
  @media only screen and (max-width: 999px) {
    height: 280px;
  }

  //dynamic css
  ${(props) => css`
    z-index: ${100 - props.index};
    ${props.index % 2 ? "" : "background: #00B39F;"}
    // ${props.index % 2 ? "" : "background: #00B39F;"}
    transform: rotateZ(${-4 - 6 * props.index}deg) translate(-${props.index *
    36}px, ${props.index * 5}px);
  `}

  ${(props) =>
      props.active &&
    css`
      cursor: pointer;
      transform: rotateZ(0deg) translate(-45vw, 0);
      width: 800px;
      h3 {
        opacity: 1;
        font-size: 24px;
      }
      p {
        opacity: 1;
      }

      .img {
        // display: block;
        visibility: visible;
      }

      @media only screen and (max-width: 1500px) {
        // transform: rotateZ(0deg) translate(-40vw, 0);
        width: 680px;
        height: 290px;
        .img {
          padding-left: 1rem;
          max-width: 60%;
        }
      }

      @media only screen and (max-width: 1200px) {
        transform: rotateZ(0deg) translate(-50vw, 0);
        align-items: center;
        width: 620px;
        height: 290px;
        h3 {
          font-size: 22px;
        }
        p {
          font-size: 18px;
        }
  
        .img {
          margin-inline: auto;
          // width: 60%;
          padding-left: 1rem;
          // padding-top: 0.6rem;
        }
      }

      @media only screen and (max-width: 999px) {
        transform: rotateZ(0deg) translate(-70vw, 0);
        flex-direction: column;
        text-align: center;
        width: 300px;
        height: 440px;
        .img {
          margin-inline: auto;
          max-width: 80%;  
          padding-left: unset;
        }
      }
    `}

  ${(props) =>
      !props.active &&
    css`
      :hover {
        transform: rotateZ(${-1 - 6 * props.index}deg)
          translate(-${props.index * 36}px, ${props.index * 5}px);
      }
    `}

`;

export default PopOutCardWrapper;
