import React from "react";

export const onRenderBody = ({ setPreBodyComponents, setHtmlAttributes }) => {
  setHtmlAttributes({
    style: { backgroundColor: "#1e2129" }
  });

  setPreBodyComponents([
    <script
      key="theme-init"
      dangerouslySetInnerHTML={{
        __html: `
          (function() {
            document.documentElement.style.visibility = 'hidden';

            try {
              var stored = localStorage.getItem('theme');
              var parsed = stored ? JSON.parse(stored) : null;
              var themeSetting = parsed && parsed.themeSetting 
                ? parsed.themeSetting 
                : null;

              var isDark;

              if (themeSetting === 'dark') {
                isDark = true;
              } else if (themeSetting === 'light') {
                isDark = false;
              } else {
                isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
              }

              document.documentElement.style.backgroundColor = 
                isDark ? '#1e2129' : '#ffffff';
              document.documentElement.setAttribute(
                'data-theme', isDark ? 'dark' : 'light'
              );

            } catch(e) {
              var sysDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
              document.documentElement.style.backgroundColor = 
                sysDark ? '#1e2129' : '#ffffff';
            }
            document.documentElement.style.visibility = 'visible';
          })();
        `
      }}
    />
  ]);
};
