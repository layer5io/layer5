import React from "react";

export const onRenderBody = ({ setPreBodyComponents, setHtmlAttributes }) => {
  setHtmlAttributes({
    style: { backgroundColor: "#121212" }
  });

  setPreBodyComponents([
    <script
      key="theme-init"
      dangerouslySetInnerHTML={{
        __html: `
          (function() {
            try {
              var stored = localStorage.getItem('theme');
              var isDark;
              if (stored === 'dark') {
                isDark = true;
              } else if (stored === 'light') {
                isDark = false;
              } else {
                isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
              }
              var bg = isDark ? '#121212' : '#ffffff';
              document.documentElement.style.backgroundColor = bg;
              document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
            } catch(e) {
              var sysDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
              document.documentElement.style.backgroundColor = sysDark ? '#121212' : '#ffffff';
            }
          })();
        `
      }}
    />
  ]);
};
