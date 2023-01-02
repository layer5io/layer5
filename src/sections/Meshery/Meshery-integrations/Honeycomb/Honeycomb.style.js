import styled from "styled-components";

export const HoneycombGrid = styled.div`
  display: flex;
  text-align: left;
  ul {
    font-size: 0;
    line-height: 0;
    height: ${(props) =>
  props.height === 0 ? "unset" : `calc(${props.height}px + 46px)`};
    li {
      width: 150px;
      margin: 3px;
      height: calc(150px * 1.1547);
      display: inline-block;
      font-size: initial;
      margin-bottom: calc(3px - 150px * 0.2885);
      filter: drop-shadow(rgba(0, 0, 0, 0.1) 0px 4px 20px);
    }

    ::before {
      content: "";
      width: calc(150px / 2 + 3px);
      float: left;
      height: 100%;
      shape-outside: repeating-linear-gradient(
        #0000 0 calc(calc(1.732 * 150px + 4 * 3px - 1px) - 3px),
        #000 0 calc(1.732 * 150px + 4 * 3px - 1px)
      );
    }
  }
`;
