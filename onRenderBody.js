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
                colorMode = isDarkModeActive() ? '${ThemeSetting.DARK}' : '{ThemeSetting.LIGHT}'
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

export const onRenderBody = ({ setPreBodyComponents, setHeadComponents }) => {
  setPreBodyComponents(<MagicScriptTag key="theme-injection" theme={themes} />);
  
  // Security headers as meta tags (fallback for when _headers file isn't supported)
  setHeadComponents([
    // X-Frame-Options
    <meta key="x-frame-options" httpEquiv="X-Frame-Options" content="DENY" />,
    
    // X-Content-Type-Options
    <meta key="x-content-type-options" httpEquiv="X-Content-Type-Options" content="nosniff" />,
    
    // X-XSS-Protection
    <meta key="x-xss-protection" httpEquiv="X-XSS-Protection" content="1; mode=block" />,
    
    // Referrer Policy
    <meta key="referrer-policy" name="referrer" content="strict-origin-when-cross-origin" />,
    
    // Content Security Policy
    <meta 
      key="csp" 
      httpEquiv="Content-Security-Policy" 
      content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https:; style-src 'self' 'unsafe-inline' https:; img-src 'self' data: https:; font-src 'self' data: https:; connect-src 'self' https:; frame-src 'self' https:; media-src 'self' https:; object-src 'none'; base-uri 'self'; form-action 'self';" 
    />,
    
    // Permissions Policy
    <meta 
      key="permissions-policy" 
      httpEquiv="Permissions-Policy" 
      content="accelerometer=(), camera=(), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), payment=(), usb=()" 
    />,
    
    // HTTP Strict Transport Security (HSTS)
    <meta 
      key="hsts" 
      httpEquiv="Strict-Transport-Security" 
      content="max-age=31536000; includeSubDomains; preload" 
    />
  ]);
};