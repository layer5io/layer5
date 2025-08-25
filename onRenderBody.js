import React from "react";
import { DarkThemeKey, ThemeSetting } from "./src/theme/app/ThemeManager.js";
import lighttheme, { darktheme } from "./src/theme/app/themeStyles";

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
                colorMode = isDarkModeActive() ? '${ThemeSetting.DARK}' : '${ThemeSetting.LIGHT}';
                break;
              case '${ThemeSetting.DARK}':
              case '${ThemeSetting.LIGHT}':
                colorMode = themeFromLocalStorage;
                break;
              default:
                  colorMode = '${ThemeSetting.LIGHT}';
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
          const parsedTheme = JSON.parse('${JSON.stringify(props.theme)}');
          const theme = parsedTheme[colorMode];
          iterate(theme)
          root.style.setProperty('--initial-color-mode', colorMode);  
       })()
  `;
  return <script dangerouslySetInnerHTML={{ __html: codeToRunOnClient }} />;
};

const AntiClickjackStyle = (
  <style
    key="anti-clickjack-style"
    id="antiClickjack"
    dangerouslySetInnerHTML={{
      __html: "body{display:none !important;}",
    }}
  />
);

const AntiClickjackScript = (
  <script
    key="anti-clickjack-script"
    type="text/javascript"
    dangerouslySetInnerHTML={{
      __html: `
        if (self === top) {
          var antiClickjack = document.getElementById("antiClickjack");
          if (antiClickjack && antiClickjack.parentNode) {
            antiClickjack.parentNode.removeChild(antiClickjack);
          }
        } else {
          top.location = self.location;
        }
      `,
    }}
  />
);

export const onRenderBody = ({ setHeadComponents, setPreBodyComponents }) => {
  setHeadComponents([
    AntiClickjackStyle,
    AntiClickjackScript,
  ]);
  setPreBodyComponents([
    <MagicScriptTag key="theme-injection" theme={themes} />,
  ]);
};