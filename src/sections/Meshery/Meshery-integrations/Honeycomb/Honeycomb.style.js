import styled from "styled-components";

export const HoneycombGrid = styled.div`
  width: 100%;

  display: flex;
  text-align: left;
  margin: 0;

  ul {
    font-size: 0;
    line-height: 0;
    height: ${(props) => (props.$height === 0 ? "unset" : `${props.$height}px`)};

    &:before {
      content: "";
      width: calc(var(--hex-size, 150px) / 2 + 3px);
      float: left;
      height: 100%;
      shape-outside: repeating-linear-gradient(
        #0000 0 calc(calc(1.732 * var(--hex-size, 150px) + 4 * 3px - 1px) - 3px),
        #000 0 calc(1.732 * var(--hex-size, 150px) + 4 * 3px - 1px)
      );
    }
  }

  li {
    width: var(--hex-size, 150px);
    margin: 3px;
    height: calc(var(--hex-size, 150px) * 1.1547);
    display: inline-block;
    font-size: initial;
    margin-bottom: calc(3px - var(--hex-size, 150px) * 0.2885);
    filter: drop-shadow(rgba(0, 0, 0, 0.1) 0px 4px 20px);
  }

  /* Scale the integration logos with the hexagon so they stay centered and
     legible at every responsive width. */
  li .integration-icon {
    width: calc(var(--hex-size, 150px) * 0.4667);
    height: calc(var(--hex-size, 150px) * 0.4667);
  }
`;
