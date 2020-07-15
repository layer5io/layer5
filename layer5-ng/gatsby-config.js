module.exports = {
  siteMetadata: {
    title: `Layer5 - The Service Mesh Company`,
    description: `Making service meshes available to the rest of us. Open source software for management of service meshes. Allowing developers to focus on business logic, not infrastructure concerns. Empowering operators to confidentally run modern infrastructure.`,
    author: `Layer5 Authors`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-styled-components`,
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
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#3c494f`,
        theme_color: `#00b39f`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
