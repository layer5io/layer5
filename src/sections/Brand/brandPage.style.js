import styled from "styled-components";

const BrandPageWrapper = styled.section`
  position: relative;
  overflow: hidden;

  .post-content {
    margin: 5rem auto;
    width: 70%;
  }
  .bookmarks {
    width:50%;
  }
  .logo {
    padding: 15px;
  }
  .download-button {
    text-align: end;
    margin: 0 0 1rem 0;
  }
  .ImgDiv, .color-code-wrapper {
    width: 100%;
    justify-content: space-around;
  }
  .layerH3 {
    text-align: start;
    margin-bottom: 1em;
  }
  .in{
    margin-top: 2rem;
  }

  .white-color-box {
    .PalletBox {
        border: 1px solid black;
        color: black;

        .color-name {
            color: black;
        }
    }
  }
  .blond-color-box {
    .PalletBox {
        color: ${props => props.theme.tertiaryColor};

        .color-name {
            color: ${props => props.theme.tertiaryColor};
        }
    }
  }

  @media screen and (max-width: 575px) {
    .download-button {
      text-align: start;
    }
  }
`;

export default BrandPageWrapper;
