/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const { createFilePath } = require(`gatsby-source-filesystem`);
const path = require(`path`);
const _ = require("lodash");

// You can delete this file if you're not using it
// Replacing '/' would result in empty string which is invalid
const replacePath = path => (path === `/` ? path : path.replace(/\/$/, ``))
// Implement the Gatsby API “onCreatePage”. This is
// called after every page is created.
exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions
  const oldPage = Object.assign({}, page)
  // Remove trailing slash unless page is /
  page.path = replacePath(page.path)
  if (page.path !== oldPage.path) {
    // Replace new page with old page
    deletePage(oldPage)
    createPage(page)
  }
}

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve(
      'src/templates/blog-single.js'
  );
  const blogListTemplate = path.resolve(
      'src/templates/blog-list.js'
  );
  const projectPostTemplate = path.resolve(
    'src/templates/project-single.js'
);

  const blogposts = await graphql(`
    {
      allMdx(
        filter: { frontmatter: { published: { eq: true } } }
      ) {
        group(field: frontmatter___tags) {
          fieldValue
          totalCount
        }
        nodes {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  `);

  const projectposts = await graphql(`
    {
      allMdx(
        filter: { fileAbsolutePath: { regex: "//posts/projects/[0-9]+.*--/"}, frontmatter: { published: { eq: true } } }
      ) {
        group(field: frontmatter___tags) {
          fieldValue
          totalCount
        }
        nodes {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  `);

  // handle errors
  if (blogposts.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return
  }

  const blogs = blogposts.data.allMdx.nodes;
  blogs.forEach(blog => {
    createPage({
      path: blog.fields.slug,
      component: blogPostTemplate,
      context: {
        slug: blog.fields.slug,
      },
    })
  });

  const projects = projectposts.data.allMdx.nodes;
  projects.forEach(project => {
    createPage({
      path: project.fields.slug,
      component: projectPostTemplate,
      context: {
        slug: project.fields.slug,
      },
    })
  });

  const tags = blogposts.data.allMdx.group;
  tags.forEach(tag => {
    createPage({
      path: `/blogs/tag/${_.kebabCase(tag.fieldValue)}`,
      component: blogListTemplate,
      context: {
        tag: tag.fieldValue,
        allTags: tags
      },
    })
  })

};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
};
