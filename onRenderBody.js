import React from "react";
import { DarkThemeKey, ThemeSetting } from "./src/theme/app/ThemeManager.js";
import lighttheme, { darktheme } from "./src/theme/app/themeStyles";

const themes = { light: lighttheme, dark: darktheme };

const MagicScriptTag = (props) => {
  // FIX: Stringify the theme object outside the template literal to prevent syntax errors caused by unescaped quotes inside theme values.
  const themeJSON = JSON.stringify(props.theme);
  
  // Injects CSS variables and theme state strictly before the first paint to prevent FOUC.
  const codeToRunOnClient = `
      (function() {
          try {
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
                    colorMode = isLightModeActive() ? '${ThemeSetting.LIGHT}' : '${ThemeSetting.DARK}';
                    break;
                  case '${ThemeSetting.DARK}':
                  case '${ThemeSetting.LIGHT}':
                    colorMode = themeFromLocalStorage;
                    break;
                  default:
                      // 3. Fallback to DARK in case of error
                      colorMode = '${ThemeSetting.DARK}';
              }

              const root = document.documentElement;
              const iterate = (obj) => {
                if (!obj) return;
                Object.keys(obj).forEach(key => {
                  if (typeof obj[key] === 'object') {
                    iterate(obj[key]);
                  } else {
                    root.style.setProperty("--" + key, obj[key]);
                  }
                });
              };
              
              // FIX: Inject the JSON object directly to avoid JSON.parse breaking on nested quotes.
              const parsedTheme = ${themeJSON};
              const theme = parsedTheme[colorMode];
              
              if (theme) {
                iterate(theme);
              }
              
              root.style.setProperty('--initial-color-mode', colorMode);  
              
              // FIX: Setting data-theme is required for global CSS styles to apply correctly before React hydration.
              root.setAttribute('data-theme', colorMode);
              
              // Sync the calculated theme globally so ThemeManager can pick it up seamlessly.
              window.__theme = colorMode;
              
          } catch (e) {
              console.error('Dark mode injection failed:', e);
          }
       })();
  `;
  return <script dangerouslySetInnerHTML={{ __html: codeToRunOnClient }} />;
};

// FIX: Using setHeadComponents instead of setPreBodyComponents ensures the script runs
// strictly in the <head>, blocking the first paint until the theme is applied and completely eliminating FOUC.
export const onRenderBody = ( { setHeadComponents }) => {
  setHeadComponents([<MagicScriptTag key="theme-injection" theme={themes} />]);
};