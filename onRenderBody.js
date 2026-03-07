import React from "react";

export const onRenderBody = ({ setHeadComponents, setPreBodyComponents }) => {
  const scriptContent = `
    (function() {
      try {
        var mode = localStorage.getItem('theme');

        // If the user has already set a theme, use that.
       // Otherwise, default to dark (it will always open in dark mode)
        var isDark;
        if (mode === 'light') {
          isDark = false;
        } else {
          isDark = true; // dark ya system dono mein dark hi dikhao
        }

        var bg = isDark ? '#121212' : '#FFFFFF';
        document.documentElement.style.backgroundColor = bg;
        document.documentElement.style.setProperty('--initial-color-mode', isDark ? 'dark' : 'light');
        document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
      } catch(e) {
        // Even if an error occurs, show dark mode
        document.documentElement.style.backgroundColor = '#121212';
        document.documentElement.setAttribute('data-theme', 'dark');
      }

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
