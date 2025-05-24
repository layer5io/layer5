import React from "react";
import { ServerStyleSheet } from "styled-components";
import { DarkThemeKey, ThemeSetting } from "./src/theme/app/ThemeManager.js";
import lighttheme, { darktheme } from "./src/theme/app/themeStyles";
import createEmotionServer from "@emotion/server/create-instance";
import createEmotionCache from "./src/utils/createEmotionCache";

const themes = { light: lighttheme, dark: darktheme };

const MagicScriptTag = (props) => {
  const codeToRunOnClient = `
      (function() {
          const themeFromLocalStorage = localStorage.getItem('${DarkThemeKey}') || '${ThemeSetting.SYSTEM}';
          const systemDarkModeSetting = () => window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null;
          const isDarkModeActive = () => {
              return !!systemDarkModeSetting()?.matches;
          };
          let colorMode;
          switch (themeFromLocalStorage) {
              case '${ThemeSetting.SYSTEM}':
                colorMode = isDarkModeActive() ? '${ThemeSetting.DARK}' : '${ThemeSetting.LIGHT}'
                break
              case '${ThemeSetting.DARK}':
              case '${ThemeSetting.LIGHT}':
                colorMode = themeFromLocalStorage
                break
              default:
                  colorMode = '${ThemeSetting.LIGHT}'
            }
          const root = document.documentElement;
          const iterate = (obj) => {
              Object.keys(obj).forEach(key => {
                 if (typeof obj[key] === 'object') {
                      iterate(obj[key])
                 } else {
                   root.style.setProperty("--" + key, obj[key])
                 }
                 })
          }
          const parsedTheme = JSON.parse('${JSON.stringify(props.theme)}')
          const theme = parsedTheme[colorMode]
          iterate(theme)
          root.style.setProperty('--initial-color-mode', colorMode);  
       })()
  `;
  return <script dangerouslySetInnerHTML={{ __html: codeToRunOnClient }} />;
};

export const onRenderBody = ({ setPreBodyComponents, setHeadComponents }) => {
  // Initialize styled-components
  const sheet = new ServerStyleSheet();

  // Initialize emotion cache
  const cache = createEmotionCache();
  const { extractCriticalToChunks } = createEmotionServer(cache);

  try {
    // Get styled-components styles
    const styledComponentsStyleTags = sheet.getStyleElement();
    // Get emotion styles
    let emotionStyleTags = [];
    try {
      const emotionStyles = extractCriticalToChunks(
        "<div id=\"___gatsby\"></div>" // Mock content for emotion
      );

      emotionStyleTags = emotionStyles.styles.map((style) => (
        <style
          data-emotion={`${style.key} ${style.ids.join(" ")}`}
          key={style.key}
          dangerouslySetInnerHTML={{ __html: style.css }}
        />
      ));
    } catch (err) {
      console.error("Error extracting emotion styles:", err);
    }

    // Combine all style elements
    setHeadComponents([...styledComponentsStyleTags, ...emotionStyleTags]);
  } finally {
    sheet.seal();
  }

  // Initialize theme
  setPreBodyComponents(<MagicScriptTag key="theme-injection" theme={themes} />);
};