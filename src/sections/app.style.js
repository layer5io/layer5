import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

@font-face {
    font-family: "QanelasSoft";
    src: url('../assets/fonts/qanelas-soft/QanelasSoftBlack.otf');
    font-weight: normal;
}

@font-face {
    font-family: "Qanelas Soft";
    src: url('../assets/fonts/qanelas-soft/QanelasSoftBold.otf');
    font-weight: bold;
}

@font-face {
    font-family: "Qanelas Soft";
    src: url('../assets/fonts/qanelas-soft/QanelasSoftBlackItalic.otf');
    font-style: italic, oblique;
}

@font-face {
    font-family: "Qanelas Soft";
    src: url('../assets/fonts/qanelas-soft/QanelasSoftBoldItalic.otf');
    font-weight: bold;
    font-style: italic, oblique;
}

@font-face {
    font-family: "Qanelas Soft";
    src: url('../assets/fonts/qanelas-soft/QanelasSoftExtraBold.otf');
    font-weight: 800;
}

@font-face {
    font-family: "Qanelas Soft";
    src: url('../assets/fonts/qanelas-soft/QanelasSoftExtraBoldItalic.otf');
    font-weight: 800;
    font-style: italic, oblique;
}

@font-face {
    font-family: "Qanelas Soft";
    src: url('../assets/fonts/qanelas-soft/QanelasSoftHeavy.otf');
    font-weight: 900;
}

@font-face {
    font-family: "Qanelas Soft";
    src: url('../assets/fonts/qanelas-soft/QanelasSoftHeavyItalic.otf');
    font-weight: 900;
    font-style: italic, oblique;
}

@font-face {
    font-family: "Qanelas Soft";
    src: url('../assets/fonts/qanelas-soft/QanelasSoftLight.otf');
    font-weight: 300;
}

@font-face {
    font-family: "Qanelas Soft";
    src: url('../assets/fonts/qanelas-soft/QanelasSoftLightItalic.otf');
    font-weight: 300;
    font-style: italic, oblique;
}

@font-face {
    font-family: "Qanelas Soft";
    src: url('../assets/fonts/qanelas-soft/QanelasSoftMedium.otf');
    font-weight: 500;
}

@font-face {
    font-family: "Qanelas Soft";
    src: url('../assets/fonts/qanelas-soft/QanelasSoftMediumItalic.otf');
    font-weight: 500;
    font-style: italic, oblique;
}

@font-face {
    font-family: "Qanelas Soft";
    src: url('../assets/fonts/qanelas-soft/QanelasSoftRegular.otf');
    font-weight: 400;
}

@font-face {
    font-family: "Qanelas Soft";
    src: url('../assets/fonts/qanelas-soft/QanelasSoftRegularItalic.otf');
    font-weight: 400;
    font-style: italic, oblique;
}

@font-face {
    font-family: "Qanelas Soft";
    src: url('../assets/fonts/qanelas-soft/QanelasSoftSemiBold.otf');
    font-weight: 600;
}

@font-face {
    font-family: "Qanelas Soft";
    src: url('../assets/fonts/qanelas-soft/QanelasSoftSemiBoldItalic.otf');
    font-weight: 600;
    font-style: italic, oblique;
}

@font-face {
    font-family: "Qanelas Soft";
    src: url('../assets/fonts/qanelas-soft/QanelasSoftThin.otf');
    font-weight: 100;
}

@font-face {
    font-family: "Qanelas Soft";
    src: url('../assets/fonts/qanelas-soft/QanelasSoftThinItalic.otf');
    font-weight: 100;
    font-style: italic, oblique;
}

@font-face {
    font-family: "Qanelas Soft";
    src: url('../assets/fonts/qanelas-soft/QanelasSoftUltraLight.otf');
    font-weight: 200;
}

@font-face {
    font-family: "Qanelas Soft";
    src: url('../assets/fonts/qanelas-soft/QanelasSoftUltraLightItalics.otf');
    font-weight: 200;
    font-style: italic, oblique;
}

::selection {
    background: #3c494f;
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
    
    margin: 0px;

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
    font-family: 'Qanelas Soft', 'Open Sans';
    color: #1E2117;
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
    font-style: oblique;
}


p {
    margin: 0 0 1rem 0;
    font-size: 1.125rem;
    font-weight: 400;
    @media (max-width: 62rem) {
      font-size: 1rem;
    }
}

a{
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
`;

export { GlobalStyle };
