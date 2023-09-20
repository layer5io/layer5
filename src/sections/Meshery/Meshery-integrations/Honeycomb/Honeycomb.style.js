import styled from "styled-components";

export const HoneycombGrid = styled.div`
  display: flex;
  text-align: left;
  ul {
    font-size: 0;
    line-height: 0;
    height: ${(props) => props.height === 0 ? "unset" : `calc(${props.height}px + 46px)`};
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


  @media(min-width: 426px) and (max-width: 550px) {
    ul {
      font-size: 0;
      line-height: 0;
      margin: 2rem 0 0 5px;
      padding-left: 31px;
      padding-right: 20px;
      margin-top: 1rem;
      height:  ${(props) => props.DiffScreenHeight === 0 ? "unset" : `calc(${props.DiffScreenHeight}px + 46px)`};
      li {
        margin: 2px;
        width: 85px;
        height: calc(85px * 1.1547);
        margin-bottom: calc(2px - 85px * 0.2885);
        }
     ::before {
        width: calc(85px / 2 + 2px);
        float: left;
        shape-outside: repeating-linear-gradient(
          #0000 0 calc(calc(1.732 * 85px + 4 * 2px - 1px) - 2px),
          #000 0 calc(1.732 * 85px + 4 * 2px - 1px)
        );
      }
    }
  }
  
  @media (max-width: 425px){
    ul {
      font-size: 0;
      line-height: 0;
      height: ${(props) => props.heightMobile === 0 ? "unset" : `calc(${props.heightMobile}px + 40px )`};
      margin: 2rem 0 0 5px;
      @media (min-width: 261px) and (max-width: 338px) {
        margin-top: 1rem;
        height: ${(props) => props.heightMobile === 0 ? "unset" : `calc(${props.heightMobile}px - 4.5rem)`};
      }
      @media (max-width: 290px){
        margin: -3rem 0 0 5px; 
      }
      padding-left:20px;
      padding-right:20px;
      li {
        margin: 2px;
        width: 52px;
        height: calc(52px * 1.1547);
        margin-bottom: calc(2px - 52px * 0.2885);
        }
     ::before {
        width: calc(52px / 2 + 2px);
        float: left;
        shape-outside: repeating-linear-gradient(
          #0000 0 calc(calc(1.732 * 52px + 4 * 2px - 1px) - 2px),
          #000 0 calc(1.732 * 52px + 4 * 2px - 1px)
        );
      }
    }
  }
`;
