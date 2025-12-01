/* eslint-env node */

module.exports = {
  siteMetadata: {
    title: "Layer5 - Expect more from your infrastructure",
    description:
      "Expect more from your infrastructure. Cloud native, open source software for your cloud native infrastructure and applications. Allowing developers to focus on business logic, not infrastructure concerns. Empowering operators to confidently run modern infrastructure.",
    author: "Layer5 Authors",
    permalink: "https://layer5.io",
    siteUrl: "https://layer5.io",
    image: "/images/layer5-gradient.webp",
    twitterUsername: "@layer5",
  },
  flags: {
    FAST_DEV: true,
    PARALLEL_SOURCING: false, // Disable parallel sourcing to reduce memory pressure
    DEV_SSR: false,
  },
  trailingSlash: "never",
  plugins: [
    {
      resolve: "gatsby-plugin-netlify",
      options: {
        headers: {
          "/*": [
            "X-Frame-Options: SAMEORIGIN",
            "Content-Security-Policy: frame-ancestors 'self'",
          ],
        },
        mergeSecurityHeaders: true,
        mergeCachingHeaders: true,
      },
    },
    {
      resolve: "gatsby-plugin-webpack-bundle-analyser-v2",
      options: {
        devMode: true,
        disable: process.env.NODE_ENV !== "production",
        analyzerMode: "server",
        reportFilename: "./report.html",
        openAnalyzer: true,
        analyzerPort: "8888",
        analyzerHost: "http://localhost",
        defaultSizes: "gzip"
      }
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        query: `
        {
          allSitePage {
            nodes {
              path
              matchPath
            }
          }
          site {
            siteMetadata {
              siteUrl
              }
          }
        }
      `,
        resolvePages: ({ allSitePage: { nodes: allPages } }) => {
          return allPages.map((page) => {
            return { ...page };
          });
        },
        serialize: ({ path, matchPath }) => {
          let url = matchPath ? matchPath : path;
          url = url.startsWith("/") ? url : `/${url}`;
          return {
            url: url,
            changefreq: "daily",
            priority: 0.7,
          };
        },
      },
    },
    {
      resolve: "gatsby-plugin-svgr",
      options: {
        svgo: true,
        svgoConfig: {
          plugins: [
            "prefixIds",
            "removeDimensions",
            {
              name: "preset-default",
              params: {
                overrides: {
                  // or disable plugins
                  inlineStyles: false,
                  cleanupIds: false,
                  removeViewBox: false,
                },
              },
            },
          ],
        },
      },
    },
    {
      resolve: "gatsby-plugin-feed",
      options: {
        // 1. GLOBAL QUERY: Runs ONCE. Fetches all heavy data (allMdx).
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
            allMdx(
              sort: {frontmatter: {date: DESC}}
              limit: ${process.env.NODE_ENV === "development" ? 25 : 1000}
              filter: { frontmatter: { published: { eq: true }${process.env.NODE_ENV === "development" ? ", date: { gte: \"2024-01-01\" }" : ""} } }
            ) {
              nodes {
                # Using excerpt instead of html because gatsby-plugin-mdx v5+ removed the html field
                excerpt
                frontmatter {
                  title
                  author
                  description
                  subtitle
                  date
                  type
                  category
                  tags
                  thumbnail {
                    publicURL
                  }
                  darkthumbnail {
                    publicURL
                  }
                }
                fields {
                  slug
                  collection
                }
              }
            }
          }
        `,
        feeds: [
          // FEED 1: Technical Posts
          {
            output: "/rss.xml",
            title: "Layer5 Technical Posts",
            // REQUIRED: We add this lightweight query to satisfy the plugin validator.
            // The 'allMdx' data from the global query above is merged into this,
            // so 'serialize' can still access it.
            query: "{ site { siteMetadata { title } } }",
            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.nodes
                .filter((node) =>
                  ["blog", "resources", "news"].includes(node.fields.collection) &&
                  !["Programs", "Community", "Events", "FAQ"].includes(node.frontmatter.category)
                )
                .slice(0, 20)
                .map((node) => {
                  return Object.assign({}, node.frontmatter, {
                    title: node.frontmatter.title,
                    author: node.frontmatter.author,
                    description: node.frontmatter.description,
                    date: node.frontmatter.date,
                    url: site.siteMetadata.siteUrl + node.fields.slug,
                    guid: site.siteMetadata.siteUrl + node.fields.slug,
                    enclosure: node.frontmatter.thumbnail && {
                      url: site.siteMetadata.siteUrl + node.frontmatter.thumbnail.publicURL,
                    },
                    custom_elements: [{ "content:encoded": node.excerpt }],
                  });
                });
            },
          },
          // FEED 2: News
          {
            output: "/news/feed.xml",
            title: "Layer5 News",
            query: "{ site { siteMetadata { title } } }", // Lightweight query
            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.nodes
                .filter((node) => node.fields.collection === "news")
                .slice(0, 20)
                .map((node) => {
                  return Object.assign({}, node.frontmatter, {
                    title: node.frontmatter.title,
                    author: node.frontmatter.author,
                    description: node.frontmatter.description,
                    date: node.frontmatter.date,
                    url: site.siteMetadata.siteUrl + node.fields.slug,
                    guid: site.siteMetadata.siteUrl + node.fields.slug,
                    enclosure: node.frontmatter.thumbnail && {
                      url: site.siteMetadata.siteUrl + node.frontmatter.thumbnail.publicURL,
                    },
                    custom_elements: [{ "content:encoded": node.excerpt }],
                  });
                });
            },
          },
          // FEED 3: Resources
          {
            output: "/resources/feed.xml",
            title: "Layer5 Resources",
            query: "{ site { siteMetadata { title } } }", // Lightweight query
            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.nodes
                .filter((node) => node.fields.collection === "resources")
                .slice(0, 20)
                .map((node) => {
                  return Object.assign({}, node.frontmatter, {
                    title: node.frontmatter.title,
                    author: node.frontmatter.author,
                    description: node.frontmatter.description,
                    date: node.frontmatter.date,
                    url: site.siteMetadata.siteUrl + node.fields.slug,
                    guid: site.siteMetadata.siteUrl + node.fields.slug,
                    enclosure: node.frontmatter.thumbnail && {
                      url: site.siteMetadata.siteUrl + node.frontmatter.thumbnail.publicURL,
                    },
                    custom_elements: [{ "content:encoded": node.excerpt }],
                  });
                });
            },
          },
          // FEED 4: Contributors
          {
            output: "/rss-contributors.xml",
            title: "Layer5 Contributor Feed",
            query: "{ site { siteMetadata { title } } }", // Lightweight query
            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.nodes
                .filter((node) => ["blog", "news"].includes(node.fields.collection))
                .slice(0, 20)
                .map((node) => {
                  return Object.assign({}, node.frontmatter, {
                    title: node.frontmatter.title,
                    author: node.frontmatter.author,
                    description: node.frontmatter.description,
                    date: node.frontmatter.date,
                    url: site.siteMetadata.siteUrl + node.fields.slug,
                    guid: site.siteMetadata.siteUrl + node.fields.slug,
                    enclosure: node.frontmatter.thumbnail && {
                      url: site.siteMetadata.siteUrl + node.frontmatter.thumbnail.publicURL,
                    },
                    custom_elements: [{ "content:encoded": node.excerpt }],
                  });
                });
            },
          },
          // FEED 5: Meshery Community
          {
            output: "/meshery-community-feed.xml",
            title: "Meshery RSSFeed",
            query: "{ site { siteMetadata { title } } }", // Lightweight query
            serialize: ({ query: { site, allMdx } }) => {
              const targetCategories = ["Meshery", "Announcements", "Events"];
              const targetTags = ["Community", "Meshery", "mesheryctl"];

              return allMdx.nodes
                .filter((node) => {
                  const inCollection = ["blog", "resources", "news", "events"].includes(node.fields.collection);
                  const hasCategory = targetCategories.includes(node.frontmatter.category);
                  const hasTag = node.frontmatter.tags && node.frontmatter.tags.some(t => targetTags.includes(t));
                  return inCollection && hasCategory && hasTag;
                })
                .slice(0, 30)
                .map((node) => {
                  return Object.assign({}, node.frontmatter, {
                    title: node.frontmatter.title,
                    author: node.frontmatter.author,
                    description: node.frontmatter.description || node.frontmatter.subtitle,
                    date: node.frontmatter.date,
                    url: site.siteMetadata.siteUrl + node.fields.slug,
                    guid: site.siteMetadata.siteUrl + node.fields.slug,
                    enclosure: node.frontmatter.thumbnail && {
                      url: site.siteMetadata.siteUrl + node.frontmatter.thumbnail.publicURL,
                    },
                    custom_elements: [
                      { "content:encoded": node.excerpt },
                      { "content:type": node.frontmatter.type },
                      { "content:category": node.frontmatter.category },
                      { "content:tags": node.frontmatter.tags?.join(", ") || "" },
                    ],
                  });
                });
            },
          },
          // FEED 6: Blog
          {
            output: "/blog/feed.xml",
            title: "Layer5 Blog",
            query: "{ site { siteMetadata { title } } }", // Lightweight query
            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.nodes
                .filter((node) => node.fields.collection === "blog")
                .slice(0, 20)
                .map((node) => {
                  return Object.assign({}, node.frontmatter, {
                    title: node.frontmatter.title,
                    author: node.frontmatter.author,
                    description: node.frontmatter.description,
                    date: node.frontmatter.date,
                    url: site.siteMetadata.siteUrl + node.fields.slug,
                    guid: site.siteMetadata.siteUrl + node.fields.slug,
                    enclosure: node.frontmatter.thumbnail && {
                      url: site.siteMetadata.siteUrl + node.frontmatter.thumbnail.publicURL,
                    },
                    custom_elements: [{ "content:encoded": node.excerpt }],
                  });
                });
            },
          },
          // FEED 7: Events
          {
            output: "/events/feed.xml",
            title: "Layer5 Events",
            query: "{ site { siteMetadata { title } } }", // Lightweight query
            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.nodes
                .filter((node) => node.fields.collection === "events")
                .slice(0, 20)
                .map((node) => {
                  return Object.assign({}, node.frontmatter, {
                    title: node.frontmatter.title,
                    author: node.frontmatter.author,
                    description: node.frontmatter.description,
                    date: node.frontmatter.date,
                    url: site.siteMetadata.siteUrl + node.fields.slug,
                    guid: site.siteMetadata.siteUrl + node.fields.slug,
                    enclosure: node.frontmatter.thumbnail && {
                      url: site.siteMetadata.siteUrl + node.frontmatter.thumbnail.publicURL,
                    },
                    custom_elements: [{ "content:encoded": node.excerpt }],
                  });
                });
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-styled-components",
      options: {
        minify: true,
      },
    },
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -50,
      },
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [".mdx", ".md"],
        gatsbyRemarkPlugins: [],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/collections`,
        name: "collections",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/sections/Meshery/Meshery-platforms/supported-icons`,
        name: "integration-images",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/content-learn`,
        name: "content-learn",
      },
    },
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-sharp",
      options: {
        defaults: {
          placeholder: "blurred",
        },
      },
    },
    {
      resolve: "gatsby-transformer-sharp",
      options: {
        checkSupportedExtensions: false, // suppress warning about childImageSharp being null
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "gatsby-starter-default",
        short_name: "starter",
        start_url: "/",
        background_color: "#3c494f",
        theme_color: "#00b39f",
        display: "minimal-ui",
        icon: "src/assets/images/favicon.webp", // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-redirect-from",
      options: {
        query: "allMdx",
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://layer5.io",
        sitemap: "https://layer5.io/sitemap-index.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: "gatsby-plugin-purgecss",
      options: {
        printRejected: true,
      }
    },
    "gatsby-plugin-meta-redirect",
    // make sure this is always the last one
  ],
};