import React from "react";

export const onRenderBody = ({ setHeadComponents }) => {
  const scriptContent = `
    (function() {
      try {
        var stored = localStorage.getItem('theme');
        var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        var isDark = stored === 'dark' || (stored === null && prefersDark);
        if (isDark) {
          document.documentElement.classList.add('theme-dark');
          document.documentElement.style.backgroundColor = '#121212';
        } else {
          document.documentElement.classList.add('theme-light');
          document.documentElement.style.backgroundColor = '#FFFFFF';
        }
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
          .theme-dark body {
            background-color: #121212 !important;
          }
          .theme-light body {
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
