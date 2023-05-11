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
        {/* eslint-disable-next-line react/no-unknown-property*/}
        <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin />
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
        <script dangerouslySetInnerHTML={{
          __html:
            `(function() {
							try {
                var banner = sessionStorage.getItem('banner');
                if (banner === null)
                  document.body.classList.add('banner1');
                else
                  document.body.classList.add('banner' + banner);
							} catch (e) {
								return;
							}
					})();`,
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
