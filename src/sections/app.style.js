import { createGlobalStyle } from "styled-components";



const GlobalStyle = createGlobalStyle`

@font-face {
    font-family: "Qanelas Soft";
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
  font-size: 16px;
  line-height: 28px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: 'Open Sans', sans-serif;
  color: ${props => props.theme.textColor};
  overflow-x: hidden !important;
  font-weight: 400 !important;
  margin: 0;
  padding: 0;
}
h1,
h2,
h3,
h4,
h5,
h6 {
    font-family: 'Qanelas Soft', sans-serif;
    color: #1E2117; 
    margin: 0;
}

p{
    margin: 0 0 1rem 0;
    font-weight: 400 !important;
}

a{
    text-decoration: none;
    color: ${props => props.theme.headingColor};
  }
  img{
    max-width: 100%;
  }


section{
    position: relative;
}
`;


export { GlobalStyle };
