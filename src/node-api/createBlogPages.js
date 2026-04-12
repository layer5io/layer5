const slugify = require("../utils/slugify");

const createBlogPages = async ({
  graphql,
  createPage,
  reporter,
  isCollectionEnabled,
  blogPostTemplate,
  blogCategoryListTemplate,
  blogTagListTemplate,
}) => {
  const result = await graphql(`
    {
      blogPosts: allMdx(
        filter: {
          fields: { collection: { eq: "blog" } }
          frontmatter: { published: { eq: true } }
        }
      ) {
        nodes {
          fields {
            slug
          }
          internal {
            contentFilePath
          }
        }
      }
      blogTags: allMdx(
        filter: {
          fields: { collection: { eq: "blog" } }
          frontmatter: { published: { eq: true } }
        }
      ) {
        group(field: { frontmatter: { tags: SELECT } }) {
          fieldValue
        }
      }
      blogCategory: allMdx(
        filter: {
          fields: { collection: { eq: "blog" } }
          frontmatter: { published: { eq: true } }
        }
      ) {
        group(field: { frontmatter: { category: SELECT } }) {
          fieldValue
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild("Error while running GraphQL query for blog pages.");
    return;
  }

  if (!isCollectionEnabled("blog")) {
    return;
  }

  const blogs = result.data.blogPosts.nodes;
  const blogCategory = result.data.blogCategory.group;
  const blogTags = result.data.blogTags.group;

  blogs.forEach((blog) => {
    createPage({
      path: blog.fields.slug,
      component: `${blogPostTemplate}?__contentFilePath=${blog.internal.contentFilePath}`,
      context: {
        slug: blog.fields.slug,
      },
    });
  });

  blogCategory.forEach((category) => {
    createPage({
      path: `/blog/category/${slugify(category.fieldValue)}`,
      component: blogCategoryListTemplate,
      context: {
        category: category.fieldValue,
      },
    });
  });

  blogTags.forEach((tag) => {
    createPage({
      path: `/blog/tag/${slugify(tag.fieldValue)}`,
      component: blogTagListTemplate,
      context: {
        tag: tag.fieldValue,
      },
    });
  });
};

module.exports = createBlogPages;
