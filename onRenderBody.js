import React from "react";
import { DarkThemeKey, ThemeSetting } from "./src/theme/app/ThemeManager.js";
import lighttheme, { darktheme } from "./src/theme/app/themeStyles";

const themes = {
  [ThemeSetting.LIGHT]: lighttheme,
  [ThemeSetting.DARK]: darktheme,
};

const MagicScriptTag = (props) => {
  const codeToRunOnClient = `
    (function() {
      try {
        const themeFromLocalStorage = localStorage.getItem('${DarkThemeKey}') || '${ThemeSetting.SYSTEM}';
        const isLightModeActive = () => window.matchMedia ? window.matchMedia('(prefers-color-scheme: light)').matches : false;
        
        let colorMode;
        if (themeFromLocalStorage === '${ThemeSetting.SYSTEM}') {
          colorMode = isLightModeActive() ? '${ThemeSetting.LIGHT}' : '${ThemeSetting.DARK}';
        } else {
          colorMode = themeFromLocalStorage;
        }

        const root = document.documentElement;

        if (colorMode === '${ThemeSetting.DARK}') {
          root.classList.add('dark-theme-init');
          root.style.backgroundColor = '#121212';
        } else {
          root.classList.remove('dark-theme-init');
          root.style.backgroundColor = '#ffffff';
        }

        const iterate = (obj) => {
          if (!obj) return;
          Object.keys(obj).forEach((key) => {
            if (typeof obj[key] === 'object') iterate(obj[key]);
            else root.style.setProperty('--' + key, obj[key]);
          });
        };

        const parsedTheme = ${JSON.stringify(props.theme)};
        const theme = parsedTheme[colorMode];
        if (theme) iterate(theme);

        root.style.setProperty('--initial-color-mode', colorMode);
      } catch (e) {}
    })()
  `;
  return <script key="theme-injection" dangerouslySetInnerHTML={{ __html: codeToRunOnClient }} />;
};

export const onRenderBody = ({ setPreBodyComponents, setHeadComponents }) => {
  setHeadComponents([
    <style key="ssr-background-fix" dangerouslySetInnerHTML={{
      __html: `
        html.dark-theme-init, 
        html.dark-theme-init body { 
          background-color: #121212 !important; 
        }
      `
    }} />
  ]);

  setPreBodyComponents([
    <MagicScriptTag key="theme-injection" theme={themes} />
  ]);
};
