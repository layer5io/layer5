import styled from "styled-components";
const BlockquoteStyle = styled.div`
  .blockquote-wrapper {
    display: flex;
    height: 100%;
    padding: 0 1.25rem;
  }
  .blockquote-container {
    position: relative;
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
      color: ${(props) => props.theme.keppelColor};
      font-family: Copperplate;
      font-size: 10rem;
      line-height: 0;
      bottom: -2.125rem;
      right: 1.875rem;
    }
  }
  .blockquote-quote {
    position: relative;
    color: ${(props) => props.theme.keppelColor};
    font-size: 1.85rem;
    font-weight: 700;
    line-height: 1;
    margin: 0;
  }
  .blockquote-person {
    position: relative;
    color: ${(props) => props.theme.tertiaryColor};
    font-size: 1.3rem;
    font-weight: 300;
    line-height: 1rem;
    margin: 0;
    padding-top: 1.2rem;
    z-index: 1;
  }
  .blockquote-title {
    line-height: 1rem;
    position: relative;
    font-size: 1.1rem;
    color: ${(props) => props.theme.tertiaryColor};
    line-height: 1.1.rem;
    font-weight: 300;
    font-style: italic;
    margin: 0;
    z-index: 1;
    margin-top: .25rem;
    margin-left: 1.4rem;
  }
  /* increase header size after 600px */
  @media all and (max-width: 600px) {
    .blockquote-quote {
      font-size: 1.25rem;     
    }
    .blockquote-title {
      font-size: .9rem;
    }
    .blockquote-person {
      font-size: 1.1
    }
    
  }
`;
BlockquoteStyle.displayName = "BlockquoteStyle";

export default BlockquoteStyle;
