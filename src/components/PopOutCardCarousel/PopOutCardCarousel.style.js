import styled, { css } from "styled-components";

const PopOutCardWrapper = styled.div`
  position: absolute;
  right: -80px;
  padding: 1.2rem;
  height: 320px;
  width: 350px;
  box-shadow: rgb(38, 57, 77, 0.5) 0px 20px 30px -10px;
  // box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
  //   rgba(0, 0, 0, 0.22) 0px 15px 12px;
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

  //dynamic css
  ${(props) => css`
    z-index: ${100 - props.index};
    ${props.index % 2 ? "background: #00B39F;" : ""}
    transform: rotateZ(${-4 - 6 * props.index}deg) translate(-${props.index *
    36}px, ${props.index * 5}px);
  `}

  ${(props) =>
      props.active &&
    css`
      cursor: pointer;
      // left: 50%;
      // transform: rotateZ(0deg) translateX(-50%);
      transform: rotateZ(0deg) translate(-500px, 0);
      h3 {
        opacity: 1;
      }
      p {
        opacity: 1;
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
