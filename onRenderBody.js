import React from "react";
import { DarkThemeKey, ThemeSetting } from "./src/theme/app/ThemeManager.js";
import lighttheme, { darktheme } from "./src/theme/app/themeStyles";

const themes = { light: lighttheme, dark: darktheme };

const MagicScriptTag = (props) => {
  const codeToRunOnClient = `
    (function() {
      try {
        const themeFromLocalStorage = localStorage.getItem('${DarkThemeKey}') || '${ThemeSetting.SYSTEM}';
        const systemLightModeSetting = () => window.matchMedia ? window.matchMedia('(prefers-color-scheme: light)') : null;
        const isLightModeActive = () => !!systemLightModeSetting()?.matches;

        let colorMode;
        switch (themeFromLocalStorage) {
          case '${ThemeSetting.SYSTEM}':
            colorMode = isLightModeActive() ? '${ThemeSetting.LIGHT}' : '${ThemeSetting.DARK}';
            break;
          case '${ThemeSetting.DARK}':
          case '${ThemeSetting.LIGHT}':
            colorMode = themeFromLocalStorage;
            break;
          default:
            colorMode = '${ThemeSetting.DARK}';
        }

        const root = document.documentElement;
        const iterate = (obj) => {
          if (!obj) return;
          Object.keys(obj).forEach(key => {
            if (typeof obj[key] === 'object') {
              iterate(obj[key]);
            } else {
              root.style.setProperty('--' + key, obj[key]);
            }
          });
        };

        const parsedTheme = JSON.parse('${JSON.stringify(props.theme)}');
        const theme = parsedTheme[colorMode];
        iterate(theme);
        root.style.setProperty('--initial-color-mode', colorMode);
        root.setAttribute('data-theme', colorMode);

        const bg = colorMode === '${ThemeSetting.DARK}' ? '#121212' : '#ffffff';
        root.style.backgroundColor = bg;

      } catch(e) {
        const sysDark = !window.matchMedia('(prefers-color-scheme: light)').matches;
        document.documentElement.style.backgroundColor = sysDark ? '#121212' : '#ffffff';
      }
    })()
  `;
  return <script dangerouslySetInnerHTML={{ __html: codeToRunOnClient }} />;
};

export const onRenderBody = ({ setPreBodyComponents, setHtmlAttributes }) => {
  setHtmlAttributes({
    style: { backgroundColor: "#121212" }
  });
  setPreBodyComponents(<MagicScriptTag key="theme-injection" theme={themes} />);
};
