import React from "react";

export const onRenderBody = ({ setHeadComponents }) => {
  const scriptContent = `
    (function() {
      try {
        var stored = localStorage.getItem('theme');
        var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        var isDark = stored === 'dark' || (stored === null && prefersDark);
        var bg = isDark ? '#121212' : '#FFFFFF';
        document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
        document.documentElement.style.backgroundColor = bg;
        document.documentElement.style.setProperty('--initial-color-mode', isDark ? 'dark' : 'light');
      } catch(e) {
        document.documentElement.style.backgroundColor = '#121212';
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
          html[data-theme="dark"] body {
            background-color: #121212 !important;
          }
          html[data-theme="light"] body {
            background-color: #FFFFFF !important;
          }
        `,
      }}
    />,
    <script
      key="critical-theme-script"
      dangerouslySetInnerHTML={{ __html: scriptContent }}
    />,
  ]);
};
