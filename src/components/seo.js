/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { useLocation } from "@reach/router";
import { useStaticQuery, graphql } from "gatsby";
// import defaultImage from "../assets/images/layer5/layer5-tagline/png/layer5-tag-dark-bg.png";

function SEO({ description, lang, meta, title, image }) {
  const { pathname } = useLocation();
  const { site } = useStaticQuery(
    graphql`
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
    `
  );

  const metaDescription = description || site.siteMetadata.description;
  const defaultmetaImage = `${site.siteMetadata.siteUrl}${image || site.siteMetadata.image}`;
  const url = `${site.siteMetadata.siteUrl}${pathname}`;

  // PAGE-SPECIFIC IMAGE AND CONDITIONAL LOGIC NEEDED
  // const metaImage = `${site.siteMetadata.siteUrl}${site.siteMetadata.Image}`;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: "description",
          content: metaDescription,
        },
        {
          property: "og:title",
          content: title,
        },
        {
          property: "og:description",
          content: metaDescription,
        },
        {
          property: "og:url",
          content: url,
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          property: "og:image",
          content: defaultmetaImage,
        },
        {
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          name: "twitter:creator",
          content: site.siteMetadata.twitterUsername,
        },
        {
          name: "twitter:title",
          content: title,
        },
        {
          name: "twitter:description",
          content: metaDescription,
        },{
          name: "twitter:image",
          content: defaultmetaImage,
        },
      ].concat(meta)}
    />
  );
}

SEO.defaultProps = {
  title: "Layer5",
  lang: "en",
  meta: [],
  description: "",
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
};

export default SEO;
