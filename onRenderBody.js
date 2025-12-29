import React from "react";
import { DarkThemeKey, ThemeSetting } from "./src/theme/app/ThemeManager.js";
import lighttheme, { darktheme } from "./src/theme/app/themeStyles";

const themes = { light: lighttheme, dark: darktheme };

const MagicScriptTag = (props) => {
  const codeToRunOnClient = `
      (function() {
          // 1. Keeps SYSTEM as the priority preference
          const themeFromLocalStorage = localStorage.getItem('${DarkThemeKey}') || '${ThemeSetting.SYSTEM}';

          // 2. We change the check to look for LIGHT mode explicitly
          const systemLightModeSetting = () => window.matchMedia ? window.matchMedia('(prefers-color-scheme: light)') : null;
          
          const isLightModeActive = () => {
              return !!systemLightModeSetting()?.matches;
          };

          let colorMode;
          switch (themeFromLocalStorage) {
              case '${ThemeSetting.SYSTEM}':
                // LOGIC CHANGE: If Light is active -> Light. Otherwise (Dark, No Preference, or Error) -> Dark.
                colorMode = isLightModeActive() ? '${ThemeSetting.LIGHT}' : '${ThemeSetting.DARK}'
                break
              case '${ThemeSetting.DARK}':
              case '${ThemeSetting.LIGHT}':
                colorMode = themeFromLocalStorage
                break
              default:
                  // 3. Fallback to DARK in case of error
                  colorMode = '${ThemeSetting.DARK}'
            }

          const root = document.documentElement;
          const iterate = (obj) => {
            if (!obj) return;
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

export const onRenderBody = ( { setPreBodyComponents }) => {
  setPreBodyComponents(<MagicScriptTag key="theme-injection" theme={themes} />);
};
