import React from "react";
import PropTypes from "prop-types";
import { useLocation } from "@reach/router";
import { useStaticQuery, graphql,Script } from "gatsby";
import FavIcon from "../assets/images/favicon.png";


export const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author
          siteUrl
          image
          twitterUsername
        }
      }
    }
  `);

  return data.site.siteMetadata;
};


const SEO = ({ canonical, description,image, schemaMarkup, title,children }) => {
  const { pathname } = useLocation();
  const { title: defaultTitle, description: defaultDescription, image: siteMetadataImage, siteUrl, twitterUsername } = useSiteMetadata();
  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image || siteMetadataImage}`,
    url: `${siteUrl}${pathname.replace(".html", "")  || ""}`,
    twitterUsername
  };
  if (!canonical) {
    canonical = seo.url;
  }

  return (
    <>
      <html lang="en" />
      <title>{seo.title}</title>
      <meta name="description" property="og:description" content={seo.description} />
      <meta name="og:description" content={seo.description} />
      <meta name="image" property="og:image" content={seo.image} />
      <meta name="og:image" content={seo.image} />
      <meta name="og:title" content={seo.title} />
      <meta name="og:url" content={seo.url} />
      <meta name="url" property="og:url" content={seo.url} />
      <meta name="og:type" content="website" />
      <meta name="author" content="Layer5, Inc."></meta>
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="twitter:creator" content={seo.twitterUsername} />
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="shortcut icon" type="image/x-icon" href={FavIcon} />
      <link rel="preconnect" href="https://fonts.gstatic.com/" />
      <link
        rel="preload"
        href="https://fonts.googleapis.com/css?family=Open%20Sans:300,400,500,600,700,800&display=swap"
        media="print"
        onLoad="this.media='all'"
        as="font"
        crossOrigin
      />
      <noscript>
        {`${
          <link
            rel="preload"
            href="https://fonts.googleapis.com/css?family=Open%20Sans:300,400,500,600,700,800&display=swap"
            as="font"
            crossOrigin
          />
          }`}
      </noscript>
      <link rel="canonical" href={canonical} />
      {schemaMarkup &&
        <Script type="application/ld+json">{JSON.stringify(schemaMarkup)}</Script>}
      {children}
    </>
  );
};

SEO.defaultProps = {
  title: null,
  lang: "en",
  meta: [],
  description: "",
  image: null,
};

SEO.propTypes = {
  canonical: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
};

export default SEO;
