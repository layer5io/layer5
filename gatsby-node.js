/* eslint-env node */
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require("path");
const fs = require("fs");
const slugify = require("./src/utils/slugify");
const { paginate } = require("gatsby-awesome-pagination");
const { createFilePath } = require("gatsby-source-filesystem");
const config = require("./gatsby-config");
const isDevelopment = process.env.NODE_ENV === "development";
const isProduction = process.env.NODE_ENV === "production";
const {
  componentsData,
} = require("./src/sections/Projects/Sistent/components/content");

const HEAVY_COLLECTIONS = new Set(["members", "integrations"]);
const isFullSiteBuild = process.env.BUILD_FULL_SITE !== "false";
const shouldIncludeCollection = (collection) => isFullSiteBuild || !HEAVY_COLLECTIONS.has(collection);

if (process.env.CI === "true") {
  // All process.env.CI conditionals in this file are in place for GitHub Pages, if webhost changes in the future, code may need to be modified or removed.
  //Replacing '/' would result in empty string which is invalid
  const replacePath = (url) =>
    url === "/" || url.includes("/404") || url.endsWith(".html") ? url : `${url}.html`;

  exports.onCreatePage = ({ page, actions }) => {
    const { createPage, deletePage, createRedirect } = actions;
    const oldPage = Object.assign({}, page);
    page.matchPath = page.path;
    page.path = replacePath(page.path);

    if (page.path !== oldPage.path) {
      // Replace new page with old page
      deletePage(oldPage);
      createPage(page);

      createRedirect({
        fromPath: `/${page.matchPath}/`,
        toPath: `/${page.matchPath}`,
        redirectInBrowser: true,
        isPermanent: true,
      });
    }
  };
}


const { loadRedirects } = require("./src/utils/redirects.js");

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createRedirect } = actions;
  const redirects = loadRedirects();
  redirects.forEach(redirect => createRedirect(redirect)); // Handles all hardcoded ones dynamically
  // Create Pages
  const { createPage } = actions;

  const envCreatePage = (props) => {
    if (process.env.CI === "true") {
      const { path, matchPath, ...rest } = props;
      const isHandbookPage = path.startsWith("/community/handbook/");
      createRedirect({
        fromPath: `/${path}/`,
        toPath: `/${path}`,
        redirectInBrowser: true,
        isPermanent: true,
      });

      return createPage({
        path: isHandbookPage ? path : `${path}.html`,
        matchPath: matchPath || path,
        ...rest,
      });
    }
    return createPage(props);
  };

  const blogPostTemplate = path.resolve("src/templates/blog-single.js");
  const blogCategoryListTemplate = path.resolve(
    "src/templates/blog-category-list.js"
  );
  const blogTagListTemplate = path.resolve("src/templates/blog-tag-list.js");

  const EventsTemplate = path.resolve("src/templates/events.js");

  const EventTemplate = path.resolve("src/templates/event-single.js");

  const NewsPostTemplate = path.resolve("src/templates/news-single.js");

  const BookPostTemplate = path.resolve("src/templates/book-single.js");

  const ProgramPostTemplate = path.resolve("src/templates/program-single.js");

  const MultiProgramPostTemplate = path.resolve(
    "src/templates/program-multiple.js"
  );

  const CareerPostTemplate = path.resolve("src/templates/career-single.js");

  const MemberTemplate = path.resolve("src/templates/member-single.js");

  const MemberBioTemplate = path.resolve("src/templates/executive-bio.js");

  const WorkshopTemplate = path.resolve("src/templates/workshop-single.js");

  const LabTemplate = path.resolve("src/templates/lab-single.js");

  const resourcePostTemplate = path.resolve("src/templates/resource-single.js");
  const integrationTemplate = path.resolve("src/templates/integrations.js");
  const LitePlaceholderTemplate = path.resolve("src/templates/lite-placeholder.js");

  const memberBioQuery = isFullSiteBuild
    ? `
      memberBio: allMdx(
        filter: {
          fields: { collection: { eq: "members" } }
          frontmatter: { published: { eq: true }, executive_bio: { eq: true } }
        }
      ) {
        nodes {
          frontmatter {
            name
            permalink
          }
          fields {
            slug
            collection
          }
          internal {
            contentFilePath
          }
        }
      }
    `
    : "";

  const HandbookTemplate = path.resolve("src/templates/handbook-template.js");


  const res = await graphql(`
    {
      allPosts: allMdx(filter: { frontmatter: { published: { eq: true } } }) {
        nodes {
          frontmatter {
            program
            programSlug
          }
          fields {
            collection
            slug
          }
          internal {
            contentFilePath
          }
        }
      }
      handbookPages: allMdx(
        filter: { fields: { collection: { eq: "handbook" } } }
      ) {
        nodes {
          fields {
            slug
            collection
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
          nodes {
            id
          }
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
          nodes {
            id
          }
          fieldValue
        }
      }
      ${memberBioQuery}
      singleWorkshop: allMdx(
        filter: { fields: { collection: { eq: "workshops" } } }
      ) {
        nodes {
          fields {
            slug
            collection
          }
          internal {
            contentFilePath
          }
        }
      }
      labs: allMdx(
        filter: { fields: { collection: { eq: "kanvas-labs" } } }
      ) {
        nodes {
          fields {
            slug
            collection
          }
          internal {
            contentFilePath
          }
        }
      }
      learncontent: allMdx(
        filter: { fields: { collection: { eq: "content-learn" } } }
      ) {
        nodes {
          fields {
            learnpath
            slug
            course
            section
            chapter
            pageType
            collection
          }
          internal {
            contentFilePath
          }
        }
      }
    }
  `);

  // handle errors
  if (res.errors) {
    reporter.panicOnBuild("Error while running GraphQL query.");
    return;
  }

  const allNodes = res.data.allPosts.nodes;

  const filterByCollection = (collection) => {
    if (!shouldIncludeCollection(collection)) {
      return [];
    }
    return allNodes.filter((node) => node.fields.collection === collection);
  };

  const blogs = filterByCollection("blog");
  const resources = filterByCollection("resources");
  const news = filterByCollection("news");
  const books = filterByCollection("service-mesh-books");
  const events = filterByCollection("events");
  const programs = filterByCollection("programs");
  const careers = filterByCollection("careers");
  const members = filterByCollection("members");
  const integrations = filterByCollection("integrations");

  const handbook = res.data.handbookPages.nodes;


  const singleWorkshop = res.data.singleWorkshop.nodes;
  const labs = res.data.labs.nodes;

  paginate({
    createPage: envCreatePage,
    items: events,
    itemsPerPage: 9,
    pathPrefix: "/community/events",
    component: EventsTemplate,
  });

  blogs.forEach((blog) => {
    envCreatePage({
      path: blog.fields.slug,
      component: `${blogPostTemplate}?__contentFilePath=${blog.internal.contentFilePath}`,
      context: {
        slug: blog.fields.slug,
      },
    });
  });

  const blogCategory = res.data.blogCategory.group;
  blogCategory.forEach((category) => {
    envCreatePage({
      path: `/blog/category/${slugify(category.fieldValue)}`,
      component: blogCategoryListTemplate,
      context: {
        category: category.fieldValue,
      },
    });
  });

  const BlogTags = res.data.blogTags.group;
  BlogTags.forEach((tag) => {
    envCreatePage({
      path: `/blog/tag/${slugify(tag.fieldValue)}`,
      component: blogTagListTemplate,
      context: {
        tag: tag.fieldValue,
      },
    });
  });

  resources.forEach((resource) => {
    envCreatePage({
      path: resource.fields.slug,
      component: `${resourcePostTemplate}?__contentFilePath=${resource.internal.contentFilePath}`,
      context: {
        slug: resource.fields.slug,
      },
    });
  });

  news.forEach((singleNews) => {
    envCreatePage({
      path: singleNews.fields.slug,
      component: `${NewsPostTemplate}?__contentFilePath=${singleNews.internal.contentFilePath}`,
      context: {
        slug: singleNews.fields.slug,
      },
    });
  });

  books.forEach((book) => {
    envCreatePage({
      path: book.fields.slug,
      component: `${BookPostTemplate}?__contentFilePath=${book.internal.contentFilePath}`,
      context: {
        slug: book.fields.slug,
      },
    });
  });

  events.forEach((event) => {
    envCreatePage({
      path: event.fields.slug,
      component: `${EventTemplate}?__contentFilePath=${event.internal.contentFilePath}`,
      context: {
        slug: event.fields.slug,
      },
    });
  });

  programs.forEach((program) => {
    envCreatePage({
      path: program.fields.slug,
      component: `${ProgramPostTemplate}?__contentFilePath=${program.internal.contentFilePath}`,
      context: {
        slug: program.fields.slug,
      },
    });
  });

  careers.forEach((career) => {
    envCreatePage({
      path: career.fields.slug,
      component: `${CareerPostTemplate}?__contentFilePath=${career.internal.contentFilePath}`,
      context: {
        slug: career.fields.slug,
      },
    });
  });

  if (isFullSiteBuild) {
    members.forEach((member) => {
      envCreatePage({
        path: member.fields.slug,
        component: `${MemberTemplate}?__contentFilePath=${member.internal.contentFilePath}`,
        context: {
          slug: member.fields.slug,
        },
      });
    });
  }

  const MemberBio = res.data.memberBio?.nodes || [];
  if (isFullSiteBuild) {
    MemberBio.forEach((memberbio) => {
      envCreatePage({
        path: `${memberbio.fields.slug}/bio`,
        component: `${MemberBioTemplate}?__contentFilePath=${memberbio.internal.contentFilePath}`,
        context: {
          member: memberbio.frontmatter.name,
        },
      });
    });
  }

  singleWorkshop.forEach((workshop) => {
    envCreatePage({
      path: workshop.fields.slug,
      component: `${WorkshopTemplate}?__contentFilePath=${workshop.internal.contentFilePath}`,
      context: {
        slug: workshop.fields.slug,
      },
    });
  });

  labs.forEach((lab) => {
    envCreatePage({
      path: lab.fields.slug,
      component: `${LabTemplate}?__contentFilePath=${lab.internal.contentFilePath}`,
      context: {
        slug: lab.fields.slug,
      },
    });
  });

  if (isFullSiteBuild) {
    integrations.forEach((integration) => {
      envCreatePage({
        path: `/cloud-native-management/meshery${integration.fields.slug}`,
        component: `${integrationTemplate}?__contentFilePath=${integration.internal.contentFilePath}`,
        context: {
          slug: integration.fields.slug,
          name: "_images/" + integration.fields.slug.split("/")[2],
        },
      });
    });
  }

  handbook.forEach((page) => {
    envCreatePage({
      path: page.fields.slug,
      component: `${HandbookTemplate}?__contentFilePath=${page.internal.contentFilePath}`,
      context: {
        slug: page.fields.slug,
      },
    });
  });


  programs.forEach((program) => {
    envCreatePage({
      path: `/programs/${program.frontmatter.programSlug}`,
      component: `${MultiProgramPostTemplate}?__contentFilePath=${program.internal.contentFilePath}`,
      context: {
        program: program.frontmatter.program,
      },
    });
  });

  if (!isFullSiteBuild) {
    const litePlaceholderPages = [
      {
        path: "/community/members/__lite__",
        matchPath: "/community/members/*",
        context: {
          entity: "member profile",
          heading: "Member profiles disabled in lite mode",
          description:
            "The members collection is intentionally skipped when BUILD_FULL_SITE=false to keep local builds fast.",
        },
      },
      {
        path: "/cloud-native-management/meshery/__lite__",
        matchPath: "/cloud-native-management/meshery/*",
        context: {
          entity: "integration",
          heading: "Integrations disabled in lite mode",
          description:
            "Integrations are heavy to source, so this route shows a placeholder during lightweight builds.",
        },
      },
    ];

    litePlaceholderPages.forEach((page) =>
      envCreatePage({
        ...page,
        component: LitePlaceholderTemplate,
      })
    );

    const graphqlPlaceholderPages = [
      {
        path: "/__placeholders/integration",
        component: integrationTemplate,
        context: {
          slug: "/integrations/__placeholder__",
          name: "__placeholder__",
        },
      },
      {
        path: "/__placeholders/member",
        component: MemberTemplate,
        context: {
          slug: "/members/__placeholder__",
        },
      },
      {
        path: "/__placeholders/executive-bio",
        component: MemberBioTemplate,
        context: {
          member: "__placeholder__",
        },
      },
    ];

    graphqlPlaceholderPages.forEach((page) => envCreatePage(page));
  }

  const learnNodes = res.data.learncontent.nodes;

  learnNodes.forEach((node) => {
    if (node.fields) {
      const { pageType } = node.fields;

      if (pageType === "learnpath") {
        createCoursesListPage({ envCreatePage, node });
        return;
      }

      if (pageType === "course") {
        createCourseOverviewPage({ envCreatePage, node });
        return;
      }

      if (pageType === "chapter") {
        createChapterPage({ envCreatePage, node });
        return;
      }

      if (pageType === "section") {
        createSectionPage({ envCreatePage, node });
        return;
      }
    }
  });

  const components = componentsData.map((component) => component.src.replace("/", ""));
  const createComponentPages = (createPage, components) => {
    const pageTypes = [
      { suffix: "", file: "index.js" },
      { suffix: "/guidance", file: "guidance.js" },
      { suffix: "/code", file: "code.js" },
    ];

    components.forEach((name) => {
      pageTypes.forEach(({ suffix, file }) => {
        const pagePath = `/projects/sistent/components/${name}${suffix}`;
        const componentPath = `./src/sections/Projects/Sistent/components/${name}/${file}`;
        if (fs.existsSync(path.resolve(componentPath))) {
          try {
            createPage({
              path: pagePath,
              component: require.resolve(componentPath),
            });
          } catch (error) {
            console.error(`Error creating page for "${pagePath}":`, error);
          }
        } else {
          console.info(`Skipping creating page "${pagePath}" - file not found: "${componentPath}"`);
        }
      });
    });
  };

  createComponentPages(createPage, components);
};

// slug starts and ends with '/' so parts[0] and parts[-1] will be empty
const getSlugParts = (slug) => slug.split("/").filter((p) => !!p);

const onCreatePathNode = ({ actions, node, slug }) => {
  const { createNodeField } = actions;
  const parts = getSlugParts(slug);
  const [learnpath] = parts;

  createNodeField({ node, name: "learnpath", value: learnpath });
  createNodeField({ node, name: "slug", value: `learn/learning-paths${slug}` });
  createNodeField({
    node,
    name: "permalink",
    value: `${config.siteMetadata.permalink}${slug}`,
  });
  createNodeField({ node, name: "pageType", value: "learnpath" });
};

const onCreateCourseNode = ({ actions, node, slug }) => {
  const { createNodeField } = actions;
  const parts = getSlugParts(slug);
  const [learnpath, course] = parts;

  createNodeField({ node, name: "learnpath", value: learnpath });
  createNodeField({ node, name: "slug", value: `learn/learning-paths${slug}` });
  createNodeField({
    node,
    name: "permalink",
    value: `${config.siteMetadata.permalink}${slug}`,
  });
  createNodeField({ node, name: "course", value: course });
  createNodeField({ node, name: "pageType", value: "course" });
};

const onCreateSectionNode = ({ actions, node, slug }) => {
  const { createNodeField } = actions;
  const parts = getSlugParts(slug);
  const [learnpath, course, section] = parts;

  createNodeField({ node, name: "learnpath", value: learnpath });
  createNodeField({ node, name: "slug", value: `learn/learning-paths${slug}` });
  createNodeField({
    node,
    name: "permalink",
    value: `${config.siteMetadata.permalink}${slug}`,
  });
  createNodeField({ node, name: "course", value: course });
  createNodeField({ node, name: "section", value: section });
  createNodeField({ node, name: "pageType", value: "section" });
};

const onCreateChapterNode = ({ actions, node, slug }) => {
  const { createNodeField } = actions;
  const parts = getSlugParts(slug);
  const [learnpath, course, section, chapter] = parts;

  createNodeField({ node, name: "learnpath", value: learnpath });
  createNodeField({ node, name: "slug", value: `learn/learning-paths${slug}` });
  createNodeField({
    node,
    name: "permalink",
    value: `${config.siteMetadata.permalink}${slug}`,
  });
  createNodeField({ node, name: "chapter", value: chapter });
  createNodeField({ node, name: "course", value: course });
  createNodeField({ node, name: "section", value: section });
  createNodeField({ node, name: "pageType", value: "chapter" });
};

// Add this helper function to determine if we should process a node
const shouldOnCreateNode = ({ node }) => {
  return node.internal.type === "Mdx";
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  // Check if we should process this node
  if (!shouldOnCreateNode({ node })) {
    return;
  }

  const { createNodeField } = actions;
  const parent = getNode(node.parent);
  let collection = parent.sourceInstanceName;

  // --- CHANGED: Consolidated Source Logic ---
  // If the source is "collections", we determine the actual collection
  // from the parent directory name (e.g., "blog", "news", etc.)
  if (collection === "collections") {
    collection = parent.relativeDirectory.split("/")[0];
  }
  // ------------------------------------------

  createNodeField({
    name: "collection",
    node,
    value: collection,
  });

  if (collection !== "content-learn") {
    let slug = "";
    if (node.frontmatter.permalink) {
      slug = `/${collection}/${node.frontmatter.permalink}`;
    } else {
      switch (collection) {
        case "blog":
          if (node.frontmatter.published)
            slug = `/${collection}/${slugify(
              node.frontmatter.category
            )}/${slugify(node.frontmatter.title)}`;
          break;
        case "news":
          slug = `/company/${collection}/${slugify(node.frontmatter.title)}`;
          break;
        case "service-mesh-books":
        case "workshops":
        case "kanvas-labs":
          slug = `/learn/${collection}/${slugify(node.frontmatter.title)}`;
          break;
        case "resources":
          if (node.frontmatter.published)
            slug = `/${collection}/${slugify(
              node.frontmatter.category
            )}/${slugify(node.frontmatter.title)}`;
          break;
        case "members":
          if (node.frontmatter.published)
            slug = `/community/members/${node.frontmatter.permalink ?? slugify(node.frontmatter.name)}`;
          break;
        case "handbook":
          slug = `/community/handbook/${slugify(node.frontmatter.title)}`;
          break;
        case "events":
          if (node.frontmatter.title)
            slug = `/community/events/${slugify(node.frontmatter.title)}`;
          break;
        default:
          slug = `/${collection}/${slugify(node.frontmatter.title)}`;
      }
    }
    createNodeField({
      name: "slug",
      node,
      value: slug,
    });
  } else {
    const slug = createFilePath({
      node,
      getNode,
      basePath: "content-learn",
      trailingSlash: false,
    });

    // slug starts and ends with '/' so parts[0] and parts[-1] will be empty
    const parts = slug.split("/").filter((p) => !!p);

    if (parts.length === 1) {
      onCreatePathNode({ actions, node, slug });
      return;
    }

    if (parts.length === 2) {
      onCreateCourseNode({ actions, node, slug });
      return;
    }

    if (parts.length === 3) {
      onCreateSectionNode({ actions, node, slug });
      return;
    }

    if (parts.length === 4) {
      onCreateChapterNode({ actions, node, slug });
      return;
    }
  }
};

const createCoursesListPage = ({ envCreatePage, node }) => {
  const { learnpath, slug, pageType, permalink } = node.fields;

  envCreatePage({
    path: `${slug}`,
    component: `${path.resolve("src/templates/courses-list.js")}?__contentFilePath=${node.internal.contentFilePath}`,
    context: {
      // Data passed to context is available in page queries as GraphQL variables.
      learnpath,
      slug,
      permalink,
      pageType,
    },
  });
};

const createCourseOverviewPage = ({ envCreatePage, node }) => {
  const { learnpath, slug, course, pageType, permalink,section } = node.fields;

  envCreatePage({
    path: `${slug}`,
    component: `${path.resolve("src/templates/course-overview.js")}?__contentFilePath=${node.internal.contentFilePath}`,
    context: {
      learnpath,
      section,
      slug,
      course,
      pageType,
      permalink,
    },
  });
};

const createChapterPage = ({ envCreatePage, node }) => {
  const { learnpath, slug, course, section, chapter, pageType, permalink } =
    node.fields;

  envCreatePage({
    path: `${slug}`,
    component: `${path.resolve("src/templates/learn-chapter.js")}?__contentFilePath=${node.internal.contentFilePath}`,
    context: {
      learnpath,
      slug,
      course,
      section,
      chapter,
      pageType,
      permalink,
    },
  });
};

const createSectionPage = ({ envCreatePage, node }) => {
  const { learnpath, slug, course, section, pageType, permalink } = node.fields;

  envCreatePage({
    path: `${slug}`,
    component: `${path.resolve("src/sections/Learn-Layer5/Section/index.js")}?__contentFilePath=${node.internal.contentFilePath}`,
    context: {
      learnpath,
      slug,
      course,
      section,
      pageType,
      permalink,
    },
  });
};

exports.onCreateWebpackConfig = ({ actions, stage, getConfig }) => {
  actions.setWebpackConfig({
    resolve: {
      fallback: {
        path: false,
        process: false,
        url: false,
      },
    },
  });

  // Reduce memory pressure by disabling sourcemaps in dev and build
  if (stage === "develop" || stage === "develop-html" || stage === "build-javascript" || stage === "build-html") {
    const config = getConfig();
    config.devtool = false;
    const miniCssExtractPlugin = config.plugins.find(
      (plugin) => plugin.constructor.name === "MiniCssExtractPlugin"
    );

    if (miniCssExtractPlugin) {
      miniCssExtractPlugin.options.ignoreOrder = true;
    }

    actions.replaceWebpackConfig(config);
  }
};

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
     type Mdx implements Node {
       frontmatter: Frontmatter
     }

     type FrontmatterComponent {
       name: String
       description: String
       colorIcon: File @fileByRelativePath
       whiteIcon: File @fileByRelativePath
     }

     type Frontmatter {
       title: String
       subtitle: String
       abstract: String
       description: String
       eurl: String
       twitter: String
       github: String
       layer5: String
       meshmate: String
       maintainer: String
       emeritus: String
       published: Boolean
       link: String
       labs: String
       slides: String
       slack: String
       video: String
       community_manager: String
       docURL: String
       permalink: String
       slug: String
       redirect_from: [String]
       category: String
       subcategory: String
       registrant: String
       featureList: [String]
       howItWorks: String
       howItWorksDetails: String
       components: [FrontmatterComponent]
       integrationIcon: File @fileByRelativePath
       darkModeIntegrationIcon: File @fileByRelativePath
       workingSlides: [File] @fileByRelativePath
       name: String
       position: String
        email: String
        profile: String
       linkedin: String
       location: String
        badges: [String]
        status: String
        bio: String
        executive_bio: Boolean
        executive_position: String
        company: String
        executive_image: File @fileByRelativePath
       image_path: File @fileByRelativePath
     }
   `;
  createTypes(typeDefs);
};



exports.onPostBuild = async ({ graphql, reporter }) => {
  const result = await graphql(`
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
  `);

  if (result.errors) {
    reporter.panicOnBuild("Error while running GraphQL query.");
    return;
  }

  // Log the result to the console
  console.log("GraphQL query result:", JSON.stringify(result, null, 2));

  // Optionally, write the result to a file for easier inspection
  const outputPath = path.resolve(__dirname, "public", "query-result.json");
  fs.writeFileSync(outputPath, JSON.stringify(result, null, 2));
};