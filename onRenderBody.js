import React from "react";

export const onRenderBody = ({ setPreBodyComponents, setHeadComponents }) => {
  setHeadComponents([
    <style key="theme-vars" dangerouslySetInnerHTML={{ __html: `
      :root {
        --color-background: #FFFFFF;
        --color-text: #161617;
      }
      html[data-theme="dark"] {
        --color-background: #121212;
        --color-text: #FFFFFF;
      }
      html[data-theme="light"] {
        --color-background: #FFFFFF;
        --color-text: #161617;
      }
      body {
        background-color: var(--color-background);
        color: var(--color-text);
      }
    `}} />,
  ]);

  setPreBodyComponents([
    <script key="theme-script" dangerouslySetInnerHTML={{ __html: `
      (function() {
        try {
          var stored = localStorage.getItem('theme');
          var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
          var isDark = stored === 'dark' || (stored === null && prefersDark);
          document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
        } catch(e) {
          document.documentElement.setAttribute('data-theme', 'dark');
        }
      })();
    `}} />,
  ]);
};
