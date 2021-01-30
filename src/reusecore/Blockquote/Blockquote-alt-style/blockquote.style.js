import styled from "styled-components";
const BlockquoteStyle = styled.div`
  .blockquote-wrapper {
    display: flex;
    height: 100%;
    padding: 0 1.25rem;
  }
  .blockquote-container {
    position: relative;
    font-family: "Montserrat", sans-serif;
    font-weight: 800;
    color: ${(props) => props.theme.keppelColor};
    padding: 1.875rem 0;
    width: 100%;
    max-width: 31.25rem;
    z-index: 1;
    margin: 3rem auto;
    align-self: center;
    border-top: solid 1px;
    border-bottom: solid 1px;
    &:after {
      position: absolute;
      content: "”";
      color: ${(props) => props.theme.primaryLightColorTwo};
      font-family: Copperplate;
      font-size: 10rem;
      line-height: 0;
      bottom: -2.125rem;
      right: 1.875rem;
    }
  }
  .blockquote-quote {
    position: relative;
    color: ${(props) => props.theme.primaryLightColorTwo};
    font-family: "Montserrat", sans-serif;
    font-size: 2.5rem;
    font-weight: 800;
    line-height: 1;
    margin: 0;
  }
  .blockquote-person {
    position: relative;
    color: ${(props) => props.theme.textColor};
    font-family: "Montserrat", sans-serif;
    font-size: 1.4rem;
    font-weight: 300;
    line-height: 1;
    margin: 0;
    padding-top: 1.25rem;
    z-index: 1;
  }
  .blockquote-title {
    line-height: 1rem;
    position: relative;
    font-size: 1.1rem;
    font-style: italic;
    margin: 0;
    z-index: 1;
    margin-left: 1.40625rem;
  }
  /* increase header size after 600px */
  @media all and (min-width: 600px) {
    .blockquote-quote {
      font-size: 3.75rem;
    }
  }
`;
BlockquoteStyle.displayName = "BlockquoteStyle";

export default BlockquoteStyle;
