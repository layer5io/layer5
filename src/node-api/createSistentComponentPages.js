const path = require("path");

const createSistentComponentPages = async ({ graphql, createPage, reporter }) => {
  const result = await graphql(`
    {
      sistentComponents: allMdx(
        filter: {
          fields: { collection: { eq: "sistent" } }
        }
      ) {
        group(field: { fields: { componentName: SELECT } }) {
          fieldValue
          nodes {
            fields {
              slug
              componentName
              pageType
            }
            internal {
              contentFilePath
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(
      "Error while running GraphQL query for Sistent component pages.",
    );
    return;
  }

  const sistentTemplate = path.resolve("src/templates/sistent-component.js");
  const sistentGroups = result.data.sistentComponents.group;

  sistentGroups.forEach((group) => {
    const componentName = group.fieldValue;
    const availablePages = group.nodes.map((node) => node.fields.pageType);

    group.nodes.forEach((node) => {
      createPage({
        path: node.fields.slug,
        component: `${sistentTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
        context: {
          slug: node.fields.slug,
          componentName,
          availablePages,
        },
      });
    });
  });
};

module.exports = createSistentComponentPages;
