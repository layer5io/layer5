/* eslint-env node */
module.exports = {
  siteMetadata: {
    title: "Layer5 - The Service Mesh Company",
    description: "Making service meshes available to the rest of us. Open source software for management of service meshes. Allowing developers to focus on business logic, not infrastructure concerns. Empowering operators to confidentally run modern infrastructure.",
    author: "Layer5 Authors",
    permalink: "https://layer5.io",
    siteUrl: "https://layer5.io",
    image: "/images/layer5-tag-dark-bg.png",
    twitterUsername: "@layer5",
  },
  plugins: [
    "gatsby-plugin-sitemap",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-google-gtag",
      options: {
        trackingIds: [
          "G-MDVP5FT6JY",
        ],
        gtagConfig: {
          anonymize_ip: true,
        },
        pluginConfig: {
          head: false,
        },
      },
    },
    {
      resolve: "gatsby-plugin-feed-mdx",
      options: {
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
          {
            serialize: ({ query: { site, allPosts }}) => {
              return allPosts.nodes.map( node => {
                return Object.assign({}, node.frontmatter, {
                  title: node.frontmatter.title,
                  author: node.frontmatter.author,
                  description: node.body,
                  date: node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + node.fields.slug,
                  guid: site.siteMetadata.siteUrl + node.fields.slug,
                  enclosure: node.frontmatter.thumbnail && {
                    url: site.siteMetadata.siteUrl + node.frontmatter.thumbnail.publicURL,
                  },
                  custom_elements: [{ "content:encoded": node.html }],
                });
              });
            },
            query: `
              {
                allPosts: allMdx(
                  sort: { fields: [frontmatter___date], order: DESC }
                  filter: { fields: { collection: { in: ["blog", "news"] } }, frontmatter: { published: { eq: true } } }
                  limit: 100
                ) {
                  nodes {
                    body
                    html
                    frontmatter {
                      title
                      author
                      date(formatString: "MMM DD YYYY")
                      thumbnail {
                        publicURL
                      }
                    }
                    fields {
                      collection
                      slug
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "Layer5"
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-styled-components",
      options: {
        minify: false,
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
        name: "communityImageSlider",
        path: `${__dirname}/src/assets/images/Community-pictures`,
      },
    },

    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/collections/blog`,
        name: "blog",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/collections/news`,
        name: "news",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/collections/projects`,
        name: "projects",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/collections/service-mesh-books`,
        name: "service-mesh-books",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/collections/programs`,
        name: "programs",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/collections/careers`,
        name: "careers",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/collections/members`,
        name: "members",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/collections/service-mesh-workshops`,
        name: "service-mesh-workshops",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/collections/service-mesh-labs`,
        name: "service-mesh-labs",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/collections/events`,
        name: "events",
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
    "gatsby-plugin-sharp",
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
        icon: "src/assets/images/favicon.png", // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-redirect-from",
      options: {
        query: "allMdx"
      }
    },
    "gatsby-plugin-meta-redirect" // make sure this is always the last one
  ],
};
