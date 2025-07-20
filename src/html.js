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
        <meta
          httpEquiv="Content-Security-Policy"
          content="frame-ancestors 'self'; default-src 'self'; script-src 'self' 'unsafe-inline' https://fonts.gstatic.com https://v8hx52m354g0.statuspage.io; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https:; frame-src 'self' https://www.youtube.com https://w.soundcloud.com https://calcotestudios.com https://docs.google.com https://us15.list-manage.com https://hook.us1.make.com https://hook.us2.make.com https://calcotestudios.us15.list-manage.com;"
        />
        {/* eslint-disable-next-line react/no-unknown-property*/}
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
        <script dangerouslySetInnerHTML={{
          __html:
            `(function() {
              // Prevent clickjacking by blocking iframe embedding
              if (window.top !== window.self) {
                window.top.location = window.self.location;
              }
              
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
