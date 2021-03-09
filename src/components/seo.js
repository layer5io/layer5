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
  const metaImage = `${site.siteMetadata.siteUrl}${image || site.siteMetadata.image}`;
  const url = `${site.siteMetadata.siteUrl}${pathname}`;

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
          content: metaImage,
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
          content: metaImage,
        },
      ].concat(meta)}
    />
  );
}

SEO.defaultProps = {
  title: null,
  lang: "en",
  meta: [],
  description: "",
  image: null,
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
};

export default SEO;
