import React from "react";
import PropTypes from "prop-types";

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        <script dangerouslySetInnerHTML={{ __html:
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
					})();`, }}
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
