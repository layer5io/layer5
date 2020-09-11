/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

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

  const NewsPostTemplate = path.resolve(
      'src/templates/news-single.js'
  );

  const ProjectPostTemplate = path.resolve(
    'src/templates/project-single.js'
  );

  const BookPostTemplate = path.resolve(
      'src/templates/book-single.js'
  );

  const res = await graphql(`
    {
     allPosts:  allMdx(
        filter: { frontmatter: { published: { eq: true } } }
      ) {
        nodes {
          fields {
            collection
            slug
          }
          frontmatter {
            title
          }
        }
      }
      blogTags: allMdx(
        filter: { fields: { collection: { eq: "blog" } }, frontmatter: { published: { eq: true } } }
        ){
          group(field: frontmatter___tags) {
            fieldValue
            totalCount
          }
        }
      }
  `);

  // handle errors
  if (res.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return
  }

  const allNodes = res.data.allPosts.nodes;

  const blogs = allNodes.filter(
      node => node.fields.collection === `blog`
  );

  const news = allNodes.filter(
      node => node.fields.collection === `news`
  );

  const projects = allNodes.filter(
      node => node.fields.collection === `projects`
  );

  const books = allNodes.filter(
      node => node.fields.collection === `books`
  );

  blogs.forEach(blog => {
    createPage({
      path: blog.fields.slug,
      component: blogPostTemplate,
      context: {
        slug: blog.fields.slug,
      },
    })
  });
  const BlogTags = res.data.blogTags.group;
  BlogTags.forEach(tag => {
    createPage({
      path: `/blog/tag/${_.kebabCase(tag.fieldValue)}`,
      component: blogListTemplate,
      context: {
        tag: tag.fieldValue,
        allTags: BlogTags
      },
    })
  });

  news.forEach(singleNews => {
    createPage({
      path: singleNews.fields.slug,
      component: NewsPostTemplate,
      context: {
        slug: singleNews.fields.slug,
      },
    })
  });

  projects.forEach(project => {
    createPage({
      path: project.fields.slug,
      component: ProjectPostTemplate,
      context: {
        slug: project.fields.slug,
      },
    })
  });

  books.forEach(book => {
    createPage({
      path: book.fields.slug,
      component: BookPostTemplate,
      context: {
        slug: book.fields.slug,
      },
    })
  });

};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `Mdx`) {
    const collection = getNode(node.parent).sourceInstanceName;
    const slug = `/${collection}/${_.kebabCase(node.frontmatter.title)}`;
    createNodeField({
      name: "collection",
      node,
      value: collection
    });
    createNodeField({
      name: `slug`,
      node,
      value: slug,
    });
  }
};
