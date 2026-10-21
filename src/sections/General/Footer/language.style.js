import styled from "styled-components";

const LanguageWrapper = styled.section`
  .icons {
    margin: 0px;
    padding-left: 15px;
    padding-right: 15px;
    .flag {
      padding: 2px;
      -webkit-filter: grayscale(80%);
      filter: grayscale(80%);
      img {
        height: 22px;
        width: 33px;
      }
    }
  }
  .title {
    color: ${(props) => props.theme.white};
    font-size: 24px;
    margin-bottom: 20px;
  }
`;

export default LanguageWrapper;
