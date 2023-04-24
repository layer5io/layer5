import styled, { css } from "styled-components";

const PopOutCardWrapper = styled.div`
  position: absolute;
  display: flex;
  // align-items: center;
  right: -100px;
  // padding: 2rem 2.6rem;
  padding: 2.5rem 3rem;
  height: 360px;
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
  align-items: center ;

  h3 {
    opacity: 0.5;
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
    width: 0;
    text-align: center;
    max-width: 60%;
    // margin-block: auto;
  }

  @media only screen and (max-width: 1300px) {
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
      transform: rotateZ(0deg) translate(-33vw, 0);
      width: 1100px;
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
        padding-left: 3rem;
        width: unset;
      }

      @media only screen and (max-width: 1600px) {
        transform: rotateZ(0deg) translate(-38vw, 0);
        width: 920px;
      }

      @media only screen and (max-width: 1400px) {
        transform: rotateZ(0deg) translate(-40vw, 0);
        width: 820px;
        padding: 1.25rem;
      }
      @media only screen and (max-width: 1300px) {
        transform: rotateZ(0deg) translate(-42vw, 0);
        width: 820px;
        padding: 1.25rem;
      }

      @media only screen and (max-width: 1200px) {
        transform: rotateZ(0deg) translate(-50vw, 0);
        width: 620px;
        height: 320px;
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
          max-width: 100%;
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
        h3 {
          opacity: 1;
          transition: opacity .95s; 
        }
    `}

`;

export default PopOutCardWrapper;
