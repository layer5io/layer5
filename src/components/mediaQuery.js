import { css } from "styled-components";
const sizes = {
  grandpabear: 1980,
  papabear: 1000,
  brotherbear: 900,
  mamabear: 700,
  babybear: 400,
};

export default Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media screen and (max-width: ${sizes[label]}px) {
      ${css(...args)};
    }
  `;
  return acc;
}, {});

// import as media, where you want to use.
// refer: https://medium.com/@samuelresua/easy-media-queries-in-styled-components-690b78f50053
