const createKanvasLabPages = async ({ graphql, createPage, reporter, labTemplate }) => {
  const result = await graphql(`
    {
      labs: allMdx(
        filter: { fields: { collection: { eq: "kanvas-labs" } } }
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
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild("Error while running GraphQL query for Kanvas labs pages.");
    return;
  }

  const labs = result.data.labs.nodes;

  labs.forEach((lab) => {
    createPage({
      path: lab.fields.slug,
      component: `${labTemplate}?__contentFilePath=${lab.internal.contentFilePath}`,
      context: {
        slug: lab.fields.slug,
      },
    });
  });
};

module.exports = createKanvasLabPages;
