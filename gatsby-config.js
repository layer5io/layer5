/* eslint-env node */

const isDevelopment = process.env.NODE_ENV === "development";
const isProduction = process.env.NODE_ENV === "production";
const isFullSiteBuild = process.env.BUILD_FULL_SITE === "true";
const HEAVY_COLLECTIONS = ["members", "integrations"];
const collectionIgnoreGlobs = isFullSiteBuild
  ? []
  : HEAVY_COLLECTIONS.map((name) => `**/${name}/**`);
const devFlags = isDevelopment
  ? {
    PARALLEL_SOURCING: false,
    PRESERVE_FILE_DOWNLOAD_CACHE: true,
  }
  : {};
console.info(`Build Environment: "${process.env.NODE_ENV}"`);
collectionIgnoreGlobs == [] ?
  console.info(`Build Scope exludes: "${process.env.BUILD_FULL_SITE}"`)
  :
  console.info("Build Scope includes all collections");
module.exports = {
  siteMetadata: {
    title: "Layer5 - Expect more from your infrastructure",
    description:
      "Expect more from your infrastructure. Cloud native, open source software for your internal development platforms, your DevOps, platform engineering and site reliability engineering teams. Less finger-pointing and more collaborating. Allowing developers to focus on business logic, not infrastructure concerns. Empowering operators to confidently run modern infrastructure.",
    author: "Layer5 Authors",
    permalink: "https://layer5.io",
    siteUrl: "https://layer5.io",
    image: "/images/layer5-gradient.webp",
    twitterUsername: "@layer5",
  },
  flags: {
    FAST_DEV: false,
    DEV_SSR: false,
    ...devFlags,
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
        disable: true,
      },
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
    // Start of Production-only Plugins
    ...(isProduction
      ? [
        {
          resolve: "gatsby-plugin-feed",
          options: {
            // Lightweight global query - only site metadata
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
          }
        `,
            feeds: [
              // FEED 1: News - individual query per feed
              {
                output: "/news/feed.xml",
                title: "Layer5 News",
                query: `
              {
                site {
                  siteMetadata {
                    title
                    siteUrl
                  }
                }
                allMdx(
                  sort: {frontmatter: {date: DESC}}
                  limit: 20
                  filter: {
                    frontmatter: { published: { eq: true } }
                    fields: { collection: { eq: "news" } }
                  }
                ) {
                  nodes {
                    excerpt
                    frontmatter {
                      title
                      author
                      description
                      date
                      thumbnail {
                        publicURL
                      }
                    }
                    fields {
                      slug
                    }
                  }
                }
              }
            `,
                serialize: ({ query: { site, allMdx } }) => {
                  return allMdx.nodes.map((node) => {
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
              // FEED 2: Resources - individual query
              //   {
              //     output: "/resources/feed.xml",
              //     title: "Layer5 Resources",
              //     query: `
              //   {
              //     site {
              //       siteMetadata {
              //         title
              //         siteUrl
              //       }
              //     }
              //     allMdx(
              //       sort: {frontmatter: {date: DESC}}
              //       limit: 20
              //       filter: {
              //         frontmatter: { published: { eq: true } }
              //         fields: { collection: { eq: "resources" } }
              //       }
              //     ) {
              //       nodes {
              //         excerpt
              //         frontmatter {
              //           title
              //           author
              //           description
              //           date
              //           thumbnail {
              //             publicURL
              //           }
              //         }
              //         fields {
              //           slug
              //         }
              //       }
              //     }
              //   }
              // `,
              //     serialize: ({ query: { site, allMdx } }) => {
              //       return allMdx.nodes.map((node) => {
              //         return Object.assign({}, node.frontmatter, {
              //           title: node.frontmatter.title,
              //           author: node.frontmatter.author,
              //           description: node.frontmatter.description,
              //           date: node.frontmatter.date,
              //           url: site.siteMetadata.siteUrl + node.fields.slug,
              //           guid: site.siteMetadata.siteUrl + node.fields.slug,
              //           enclosure: node.frontmatter.thumbnail && {
              //             url: site.siteMetadata.siteUrl + node.frontmatter.thumbnail.publicURL,
              //           },
              //           custom_elements: [{ "content:encoded": node.excerpt }],
              //         });
              //       });
              //     },
              //   },
              // FEED 3: Meshery Community - targeted query with filters
              {
                output: "/meshery-community-feed.xml",
                title: "Meshery RSSFeed",
                query: `
              {
                site {
                  siteMetadata {
                    title
                    siteUrl
                  }
                }
                allMdx(
                  sort: {frontmatter: {date: DESC}}
                  limit: 50
                  filter: {
                    frontmatter: {
                      published: { eq: true }
                      category: { in: ["Meshery", "Announcements", "Events"] }
                    }
                    fields: { collection: { in: ["blog", "resources", "news", "events"] } }
                  }
                ) {
                  nodes {
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
                    }
                    fields {
                      slug
                      collection
                    }
                  }
                }
              }
            `,
                serialize: ({ query: { site, allMdx } }) => {
                  const targetTags = ["Community", "Meshery", "mesheryctl"];

                  return allMdx.nodes
                    .filter((node) => {
                      const hasTag = node.frontmatter.tags && node.frontmatter.tags.some(t => targetTags.includes(t));
                      return hasTag;
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
              // FEED 4: Blog - individual query
              {
                output: "/blog/feed.xml",
                title: "Layer5 Blog",
                query: `
              {
                site {
                  siteMetadata {
                    title
                    siteUrl
                  }
                }
                allMdx(
                  sort: {frontmatter: {date: DESC}}
                  limit: 20
                  filter: {
                    frontmatter: { published: { eq: true } }
                    fields: { collection: { eq: "blog" } }
                  }
                ) {
                  nodes {
                    excerpt
                    frontmatter {
                      title
                      author
                      description
                      date
                      thumbnail {
                        publicURL
                      }
                    }
                    fields {
                      slug
                    }
                  }
                }
              }
            `,
                serialize: ({ query: { site, allMdx } }) => {
                  return allMdx.nodes.map((node) => {
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
              // FEED 5: Events - individual query
              {
                output: "/events/feed.xml",
                title: "Layer5 Events",
                query: `
              {
                site {
                  siteMetadata {
                    title
                    siteUrl
                  }
                }
                allMdx(
                  sort: {frontmatter: {date: DESC}}
                  limit: 20
                  filter: {
                    frontmatter: { published: { eq: true } }
                    fields: { collection: { eq: "events" } }
                  }
                ) {
                  nodes {
                    excerpt
                    frontmatter {
                      title
                      author
                      description
                      date
                      thumbnail {
                        publicURL
                      }
                    }
                    fields {
                      slug
                    }
                  }
                }
              }
            `,
                serialize: ({ query: { site, allMdx } }) => {
                  return allMdx.nodes.map((node) => {
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
          resolve: "gatsby-plugin-purgecss",
          options: {
            printRejected: true,
          }
        },
      ]
      : []),
    // End of Production-only Plugins
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
        ignore: collectionIgnoreGlobs,
      },
    },
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
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/assets/images`,
        // eslint-disable-next-line no-useless-escape, quotes
        ignore: [`**/\.svg`],
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
    "gatsby-plugin-meta-redirect",
    // make sure this is always the last one
  ],
};
