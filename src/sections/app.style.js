import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

::selection {
    background: ${(props) => props.theme.primaryColor};
    color: #ffffff;
}

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  *:focus {
    outline: none;
  }

html{
    box-sizing: border-box;
    -ms-overflow-style: scrollbar;
}

body,html {
    margin: 0;
}

body {
  font-size: 1.125rem;
  line-height: 28px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: 'Open Sans', sans-serif;
  color: ${(props) => props.theme.textColor};
  overflow-x: hidden !important;
  font-weight: 400 !important;
  margin: 0;
  padding: 0;
  @media (max-width: 62rem) {
      font-size: 1rem;
  }
}
h1,
h2,
h3,
h4,
h5,
h6 {
    font-family: 'Qanelas Soft', 'Open Sans', sans-serif;
    color: ${(props) => props.theme.tertiaryColor};
    margin: 0;
    line-height: normal;
}

h1 {
    font-size: 3.125rem;
    font-weight: 700;
    @media (max-width: 62rem) {
      font-size: 2.125rem;
    }
}

h2 {
    font-size: 2.125rem;
    font-weight: 600;
    @media (max-width: 62rem) {
      font-size: 1.75rem;
    }
}

h3 {
    font-size: 1.75rem;
    font-weight: 500;
    @media (max-width: 62rem) {
      font-size: 1.5rem;
    }
}

h4 {
    font-size: 1.5rem;
    font-weight: 400;
    @media (max-width: 62rem) {
      font-size: 1.25rem;
    }
}

h5 {
    font-size: 1.25rem;
    font-weight: 300;
    @media (max-width: 62rem) {
      font-size: 1.1rem;
    }
}

h6 {
    font-weight: 200;
    font-size: 1rem;
}

h2.sub-heading, h3.sub-heading {
    color: gray;
    text-align: center;
    font-style: italic;
    margin-bottom: 1.25rem;
}

p {
    margin: 0 0 1rem 0;
    font-size: 1.125rem;
    font-weight: 400;
    @media (max-width: 62rem) {
      font-size: 1rem;
    }
}

a {
    text-decoration: none;
    color: ${(props) => props.theme.linkColor};
    &:hover{
        color: ${(props) => props.theme.primaryColor};
    }
  }
  img{
    max-width: 100%;
  }


section{
    position: relative;
}

/* Modal styling needs to be applied to the global CSS */

.Modal {
    position: absolute;
    inset: 50% auto auto 50%;
    border: 1px solid rgb(204, 204, 204);
    background: rgb(255, 255, 255);
    overflow: hidden;
    border-radius: 0.5rem;
    outline: none;
    padding: 20px;
    margin-right: -50%;
    transform: translate(-50%, -50%);

    .close-modal-btn {
        min-width: 2rem;
        height: 2rem;
        padding: 0.25rem;
        position: absolute;
        right: 0.5rem;
        top: 0.75rem;

        svg {
            font-size: 2rem;
            width: 1.75rem;

        }
    }

    .modal-heading {
        text-align: center;

    }
}

.Overlay {
    position: fixed;
    inset: 0px;
    background-color: rgba(255, 255, 255, 0.75);
    z-index: 9999;
}

.contact-form {
    margin: auto -1rem;
}

.form-frame {
    height: 36rem;
    width: 35rem;
    border: none;
    overflow: hidden;
}

@media screen and (max-width: 765px) {
    .form-frame {
        width: 25rem;
        height: 30rem;
    }
}
@media screen and (max-width: 500px) {
    .form-frame {
        width: 22rem;
        height: 26rem;
    }
}

/* Modal CSS Ends */
`;

export { GlobalStyle };
