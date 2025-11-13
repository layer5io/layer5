import React from "react";
import PropTypes from "prop-types";

export default function HTML(props) {
  return (
    <html lang="en" {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        { }
        <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin="anonymous" />
        <link
          rel="preload"
          as="style"
          href="https://fonts.googleapis.com/css?family=Open%20Sans:300,400,500,600,700,800&display=swap" />
        <link rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Open%20Sans:300,400,500,600,700,800&display=swap"
          media="print" onLoad="this.media='all'" />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {/* Script for theme initialization - needs to run before React renders to prevent flicker */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  // Theme initialization
                  const darkThemeKey = 'theme';
                  let initialTheme = 'system';
                  try {
                    initialTheme = localStorage.getItem(darkThemeKey) || 'system';
                  } catch (e) {}
                  
                  // Determine initial dark mode
                  let isDarkMode = false;
                  if (initialTheme === 'dark') {
                    isDarkMode = true;
                  } else if (initialTheme === 'system') {
                    isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
                  }
                  
                  // Set initial color mode
                  document.documentElement.style.setProperty(
                    '--initial-color-mode',
                    isDarkMode ? 'dark' : 'light'
                  );
                  
                  // Banner initialization
                  var banner = sessionStorage.getItem('banner');
                  if (banner === null)
                    document.body.classList.add('banner1');
                  else
                    document.body.classList.add('banner' + banner);
                } catch (e) {
                  console.error('Error in theme initialization:', e);
                }
              })();
            `,
          }}
        />
        {props.preBodyComponents}
        <div
          key={"body"}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  );
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
};
