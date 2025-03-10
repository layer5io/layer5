import React from "react";
import PropTypes from "prop-types";
import { useLocation } from "@reach/router";
import { useStaticQuery, graphql } from "gatsby";
import FavIcon from "../assets/images/favicon.webp";


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
    url: `${siteUrl}${pathname.replace(".html", "")  || ""}`.replace(/\/$/, ""),
    twitterUsername
  };
  if (!canonical) {
    canonical = seo.url;
  }

  return (
    <>
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
      <link rel="canonical" href={canonical} />
      {schemaMarkup &&
        <script type="application/ld+json">{JSON.stringify(schemaMarkup)}</script>}
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
