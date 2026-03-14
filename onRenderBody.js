import React from "react";

const MagicScriptTag = () => {
  const codeToRunOnClient = `
    (function() {
      try {
        var stored = localStorage.getItem('theme');
        var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        var isDark = stored === 'dark' || (stored === null && prefersDark);
        var root = document.documentElement;
        root.setAttribute('data-theme', isDark ? 'dark' : 'light');
        if (isDark) {
          root.classList.add('theme-dark');
          root.classList.remove('theme-light');
        } else {
          root.classList.add('theme-light');
          root.classList.remove('theme-dark');
        }
      } catch(e) {}
    })();
  `;
  return (
    <script dangerouslySetInnerHTML={{ __html: codeToRunOnClient }} />
  );
};

export const onRenderBody = ({ setPreBodyComponents, setHeadComponents }) => {
  setHeadComponents([
    <style
      key="critical-theme-css"
      dangerouslySetInnerHTML={{
        __html: `
          html[data-theme="dark"] body {
            background-color: #121212;
          }
          html[data-theme="light"] body {
            background-color: #FFFFFF;
          }
        `,
      }}
    />,
  ]);
  setPreBodyComponents(<MagicScriptTag key="magic-script" />);
};
