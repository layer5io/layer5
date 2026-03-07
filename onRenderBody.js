import React from "react";

export const onRenderBody = ({ setHeadComponents, setPreBodyComponents }) => {
  const scriptContent = `
    (function() {
      try {
        var mode = localStorage.getItem('theme');
        var isSystemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

        var isDark;
        if (!mode || mode === 'system') {
          isDark = isSystemDark;
        } else {
          isDark = mode === 'dark';
        }

        var bg = isDark ? '#121212' : '#FFFFFF';
        document.documentElement.style.backgroundColor = bg;
        document.documentElement.style.setProperty('--initial-color-mode', isDark ? 'dark' : 'light');
        document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
      } catch(e) {}

      // Remove visibility block — theme is now set
      document.documentElement.style.visibility = 'visible';
    })();
  `;

  setHeadComponents([
    <style
      key="critical-theme-css"
      dangerouslySetInnerHTML={{
        __html: `
          html {
            visibility: hidden;
            background-color: #121212;
          }
          body {
            background-color: #121212;
          }
        `,
      }}
    />,
  ]);

  setPreBodyComponents([
    <script
      key="critical-theme-script"
      dangerouslySetInnerHTML={{ __html: scriptContent }}
    />,
  ]);
};
