import styled from "styled-components";

export const HoneycombGrid = styled.div`
  display: flex;
  text-align: left;
  ul {
    font-size: 0;
    line-height: 0;
    height: ${(props) => props.$height === 0 ? "unset" : `calc(${props.$height}px + 46px)`};
    &:before {
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

  /* Media query for screens with maximum width of 320px */
  @media (max-width: 335px) {
    ul {
      height: ${(props) =>
  props.height === 0 ? "unset" : `calc(${props.heightforSmall}px)`};
      li {
        width: 100px; 
        margin-top: 0px;
        margin-right: 1px;
        height: calc(100px * 1.1547);
        margin-bottom: calc(3px - 100px * 0.2885);
        filter: drop-shadow(rgba(0, 0, 0, 0.1) 0px 4px 20px);
      }

      ::before {
        content: "";
        width: calc(100px / 2 + 3px);
        float: left;
        height: 100%;
        shape-outside: repeating-linear-gradient(
          #0000 0 calc(sqrt(3) * 100px - 3px),
          #000 0 calc(sqrt(3) * 100px)
        );        
      }
      
    }
  }
`;
