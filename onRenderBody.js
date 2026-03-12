import React from "react";

export const onRenderBody = ({ setHeadComponents, setPreBodyComponents }) => {
  const scriptContent = `
    (function() {
      try {
        var stored = localStorage.getItem('theme');
        var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        var isDark = stored === 'dark' || (stored === null && prefersDark);
        
        document.documentElement.style.backgroundColor = isDark ? '#121212' : '#FFFFFF';
        document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
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
