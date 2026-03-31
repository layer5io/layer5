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
const {
  getExcludedCollections,
  isFullSiteBuild,
} = require("./src/utils/build-collections");

const shouldBuildFullSite = isFullSiteBuild();
const excludedCollections = new Set(
  getExcludedCollections({ isFullSiteBuild: shouldBuildFullSite }),
);
const isCollectionEnabled = (collection) =>
  !excludedCollections.has(collection);

const { loadRedirects } = require("./src/utils/redirects.js");
const dev404PageSource =
  require.resolve("gatsby/dist/internal-plugins/dev-404-page/raw_dev-404-page.js");

const ensureDev404PageCache = (siteRoot) => {
  if (process.env.NODE_ENV !== "development") {
    return;
  }

  const dev404PageDestination = path.join(
    siteRoot,
    ".cache",
    "dev-404-page.js",
  );

  if (fs.existsSync(dev404PageDestination)) {
    return;
  }

  fs.mkdirSync(path.dirname(dev404PageDestination), { recursive: true });
  fs.copyFileSync(dev404PageSource, dev404PageDestination);
};

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createRedirect } = actions;
  const redirects = loadRedirects();
  redirects.forEach((redirect) => createRedirect(redirect)); // Handles all hardcoded ones dynamically
  // Create Pages
  const { createPage } = actions;

  const envCreatePage = (props) => {
    const pageProps = {
      ...props,
    };

    if (process.env.CI === "true") {
      const { path } = pageProps;
      createRedirect({
        fromPath: `/${path}/`,
        toPath: `/${path}`,
        redirectInBrowser: true,
        isPermanent: true,
      });
    }

    return createPage(pageProps);
  };

  const blogPostTemplate = path.resolve("src/templates/blog-single.js");
  const blogCategoryListTemplate = path.resolve(
    "src/templates/blog-category-list.js",
  );
  const blogTagListTemplate = path.resolve("src/templates/blog-tag-list.js");

  const EventsTemplate = path.resolve("src/templates/events.js");

  const EventTemplate = path.resolve("src/templates/event-single.js");

  const NewsPostTemplate = path.resolve("src/templates/news-single.js");

  const BookPostTemplate = path.resolve("src/templates/book-single.js");

  const MultiProgramPostTemplate = path.resolve(
    "src/templates/program-multiple.js",
  );

  const CareerPostTemplate = path.resolve("src/templates/career-single.js");

  const MemberTemplate = path.resolve("src/templates/member-single.js");

  const MemberBioTemplate = path.resolve("src/templates/executive-bio.js");

  const WorkshopTemplate = path.resolve("src/templates/workshop-single.js");

  const LabTemplate = path.resolve("src/templates/lab-single.js");

  const resourcePostTemplate = path.resolve("src/templates/resource-single.js");
  const integrationTemplate = path.resolve("src/templates/integrations.js");
  const LitePlaceholderTemplate = path.resolve(
    "src/templates/lite-placeholder.js",
  );

  const HandbookTemplate = path.resolve("src/templates/handbook-template.js");

  const res = await graphql(`
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
      resourcePosts: allMdx(
        filter: {
          fields: { collection: { eq: "resources" } }
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
      newsPosts: allMdx(
        filter: {
          fields: { collection: { eq: "news" } }
          frontmatter: { published: { eq: true } }
        }
      ) {
        nodes {
          frontmatter {
            category
          }
          fields {
            slug
          }
          internal {
            contentFilePath
          }
        }
      }
      bookPosts: allMdx(
        filter: {
          fields: { collection: { eq: "service-mesh-books" } }
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
      eventPosts: allMdx(
        filter: {
          fields: { collection: { eq: "events" } }
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
      programPosts: allMdx(
        filter: {
          fields: { collection: { eq: "programs" } }
          frontmatter: { published: { eq: true } }
        }
      ) {
        nodes {
          frontmatter {
            program
            programSlug
          }
          fields {
            slug
          }
          internal {
            contentFilePath
          }
        }
      }
      careerPosts: allMdx(
        filter: {
          fields: { collection: { eq: "careers" } }
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
      ${
        shouldBuildFullSite
          ? `memberPosts: allMdx(
        filter: {
          fields: { collection: { eq: "members" } }
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
      integrationPosts: allMdx(
        filter: {
          fields: { collection: { eq: "integrations" } }
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
      }`
          : ""
      }
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

  // handle errors
  if (res.errors) {
    reporter.panicOnBuild("Error while running GraphQL query.");
    return;
  }

  const blogs = res.data.blogPosts.nodes;
  const resources = res.data.resourcePosts.nodes;
  const news = res.data.newsPosts.nodes;

  const VALID_NEWS_CATEGORIES = new Set(["Coverage", "Press Release"]);
  const invalidNewsItems = news.filter(
    ({ frontmatter }) => !VALID_NEWS_CATEGORIES.has(frontmatter.category),
  );
  if (invalidNewsItems.length > 0) {
    invalidNewsItems.forEach(({ frontmatter, internal }) => {
      reporter.error(
        `Invalid news category "${frontmatter.category}" in ${internal.contentFilePath}. Must be one of: ${[...VALID_NEWS_CATEGORIES].join(", ")}.`,
      );
    });
    reporter.panicOnBuild(
      "News category validation failed. Fix the categories listed above.",
    );
    return;
  }
  const books = res.data.bookPosts.nodes;
  const events = res.data.eventPosts.nodes;
  const programs = res.data.programPosts.nodes;
  const careers = res.data.careerPosts.nodes;
  const members = res.data.memberPosts?.nodes || [];
  const integrations = res.data.integrationPosts?.nodes || [];

  const handbook = res.data.handbookPages.nodes;

  const singleWorkshop = res.data.singleWorkshop.nodes;
  const labs = res.data.labs.nodes;

  if (isCollectionEnabled("events") && events.length > 0) {
    paginate({
      createPage: envCreatePage,
      items: events,
      itemsPerPage: 9,
      pathPrefix: "/community/events",
      component: EventsTemplate,
    });
  }

  if (isCollectionEnabled("blog")) {
    blogs.forEach((blog) => {
      envCreatePage({
        path: blog.fields.slug,
        component: `${blogPostTemplate}?__contentFilePath=${blog.internal.contentFilePath}`,
        context: {
          slug: blog.fields.slug,
        },
      });
    });
  }

  const blogCategory = res.data.blogCategory.group;
  if (isCollectionEnabled("blog")) {
    blogCategory.forEach((category) => {
      envCreatePage({
        path: `/blog/category/${slugify(category.fieldValue)}`,
        component: blogCategoryListTemplate,
        context: {
          category: category.fieldValue,
        },
      });
    });
  }

  const BlogTags = res.data.blogTags.group;
  if (isCollectionEnabled("blog")) {
    BlogTags.forEach((tag) => {
      envCreatePage({
        path: `/blog/tag/${slugify(tag.fieldValue)}`,
        component: blogTagListTemplate,
        context: {
          tag: tag.fieldValue,
        },
      });
    });
  }

  if (isCollectionEnabled("resources")) {
    resources.forEach((resource) => {
      envCreatePage({
        path: resource.fields.slug,
        component: `${resourcePostTemplate}?__contentFilePath=${resource.internal.contentFilePath}`,
        context: {
          slug: resource.fields.slug,
        },
      });
    });
  }

  if (isCollectionEnabled("news")) {
    news.forEach((singleNews) => {
      envCreatePage({
        path: singleNews.fields.slug,
        component: `${NewsPostTemplate}?__contentFilePath=${singleNews.internal.contentFilePath}`,
        context: {
          slug: singleNews.fields.slug,
        },
      });
    });
  }

  books.forEach((book) => {
    envCreatePage({
      path: book.fields.slug,
      component: `${BookPostTemplate}?__contentFilePath=${book.internal.contentFilePath}`,
      context: {
        slug: book.fields.slug,
      },
    });
  });

  if (isCollectionEnabled("events")) {
    events.forEach((event) => {
      envCreatePage({
        path: event.fields.slug,
        component: `${EventTemplate}?__contentFilePath=${event.internal.contentFilePath}`,
        context: {
          slug: event.fields.slug,
        },
      });
    });
  }

  programs.forEach((program) => {
    envCreatePage({
      path: program.fields.slug,
      component: `${MultiProgramPostTemplate}?__contentFilePath=${program.internal.contentFilePath}`,
      context: {
        slug: program.fields.slug,
        program: program.frontmatter.program,
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

  if (shouldBuildFullSite) {
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
  if (shouldBuildFullSite) {
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

  if (shouldBuildFullSite) {
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

  const latestProgramsBySlug = new Map();
  programs.forEach((program) => {
    const slug = program.frontmatter.programSlug;
    if (!latestProgramsBySlug.has(slug)) {
      latestProgramsBySlug.set(slug, program);
    } else {
      const currentLatest = latestProgramsBySlug.get(slug);
      if ((program.fields?.slug || "") > (currentLatest.fields?.slug || "")) {
        latestProgramsBySlug.set(slug, program);
      }
    }
  });

  latestProgramsBySlug.forEach((program, slug) => {
    envCreatePage({
      path: `/programs/${slug}`,
      component: `${MultiProgramPostTemplate}?__contentFilePath=${program.internal.contentFilePath}`,
      context: {
        program: program.frontmatter.program,
        slug: program.fields?.slug,
      },
    });
  });

  if (!shouldBuildFullSite) {
    const litePlaceholderPages = [
      {
        collection: "members",
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
        collection: "integrations",
        path: "/cloud-native-management/meshery/__lite__",
        matchPath: "/cloud-native-management/meshery/*",
        context: {
          entity: "integration",
          heading: "Integrations disabled in lite mode",
          description:
            "Integrations are heavy to source, so this route shows a placeholder during lightweight builds.",
        },
      },
      {
        collection: "blog",
        path: "/blog/__lite__",
        matchPath: "/blog/*",
        context: {
          entity: "blog post",
          heading: "Blog posts disabled in lite mode",
          description:
            "The default lightweight build skips the blog collection to keep local builds responsive.",
        },
      },
      {
        collection: "news",
        path: "/company/news/__lite__",
        matchPath: "/company/news/*",
        context: {
          entity: "news article",
          heading: "News posts disabled in lite mode",
          description:
            "The default lightweight build skips the news collection to reduce local memory consumption.",
        },
      },
      {
        collection: "resources",
        path: "/resources/__lite__",
        matchPath: "/resources/*",
        context: {
          entity: "resource",
          heading: "Resources disabled in lite mode",
          description:
            "The default lightweight build skips the resources collection to reduce local memory consumption.",
        },
      },
      {
        collection: "events",
        path: "/community/events",
        matchPath: "/community/events/*",
        context: {
          entity: "event",
          heading: "Events disabled in lite mode",
          description:
            "The default lightweight build skips the events collection to keep local builds responsive.",
        },
      },
    ];

    litePlaceholderPages
      .filter((page) => excludedCollections.has(page.collection))
      .forEach((page) =>
        envCreatePage({
          path: page.path,
          matchPath: page.matchPath,
          context: page.context,
          component: LitePlaceholderTemplate,
        }),
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

  // Create Sistent component pages dynamically from MDX
  // Use grouping to identify which sub-pages (Tabs) exist for each component
  const sistentGroups = res.data.sistentComponents.group;
  const sistentTemplate = path.resolve("src/templates/sistent-component.js");

  sistentGroups.forEach((group) => {
    const componentName = group.fieldValue;
    // content-learn uses different fields, sistent uses componentName.

    const availablePages = group.nodes.map((node) => node.fields.pageType);

    group.nodes.forEach((node) => {
      createPage({
        path: node.fields.slug,
        component: `${sistentTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
        context: {
          slug: node.fields.slug,
          componentName: componentName,
          availablePages: availablePages,
        },
      });
    });
  });
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

  // If the source is "collections", we determine the actual collection
  // from the parent directory name (e.g., "blog", "news", etc.)
  if (collection === "collections") {
    collection = parent.relativeDirectory.split("/")[0];
  }

  createNodeField({
    name: "collection",
    node,
    value: collection,
  });

  let dateForSort = "1970-01-01T00:00:00.000Z";
  if (node.frontmatter?.date != null) {
    try {
      const parsed = new Date(node.frontmatter.date).toISOString();
      if (!Number.isNaN(Date.parse(parsed))) dateForSort = parsed;
    } catch {
      // Keep fallback.
    }
  }
  createNodeField({
    name: "dateForSort",
    node,
    value: dateForSort,
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
              node.frontmatter.category,
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
              node.frontmatter.category,
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
        case "sistent": {
          // For sistent components, create slug from directory structure
          const componentSlug = parent.relativeDirectory.split("/").pop();
          const fileName = parent.name;
          const suffix = fileName === "index" ? "" : `/${fileName}`;

          slug = `/projects/sistent/components/${componentSlug}${suffix}`;

          createNodeField({
            name: "componentName",
            node,
            value: componentSlug,
          });

          // "index" -> "overview", others match filename
          const pageType = fileName === "index" ? "overview" : fileName;
          createNodeField({
            name: "pageType",
            node,
            value: pageType,
          });
          break;
        }
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
  const { learnpath, slug, course, pageType, permalink, section } = node.fields;

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

exports.onPreExtractQueries = ({ store }) => {
  // Restore Gatsby's generated dev 404 entry if an incremental rebuild drops it.
  ensureDev404PageCache(store.getState().program.directory);
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
  if (
    stage === "develop" ||
    stage === "develop-html" ||
    stage === "build-javascript" ||
    stage === "build-html"
  ) {
    const config = getConfig();
    config.devtool = false;
    const miniCssExtractPlugin = config.plugins.find(
      (plugin) => plugin.constructor.name === "MiniCssExtractPlugin",
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

     type FrontmatterMeshesYouLearn {
       name: String
       imagepath: File @fileByRelativePath
     }

     type FrontmatterAttribute {
       name: String
       url: String
     }

     type Frontmatter {
       title: String
       subtitle: String
       abstract: String
       description: String
       author: String
       date: Date @dateformat
       cardImage: File @fileByRelativePath
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
      tags: [String]
      type: String
      product: String
      technology: String
      mesh: String
      featured: Boolean
      upcoming: Boolean
      resource: Boolean
      presskit: String
      source_url: String
      attribute: [FrontmatterAttribute]
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
       thumbnail: File @fileByRelativePath
       darkthumbnail: File @fileByRelativePath
       thumbnail_svg: File @fileByRelativePath
       darkthumbnail_svg: File @fileByRelativePath
       meshesYouLearn: [FrontmatterMeshesYouLearn]
     }
   `;
  createTypes(typeDefs);
};

exports.onPostBuild = async ({ graphql, reporter }) => {
  if (process.env.GATSBY_LOG_POSTBUILD_PAGES !== "true") {
    return;
  }

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

  const outputPath = path.resolve(__dirname, "public", "query-result.json");
  fs.writeFileSync(outputPath, JSON.stringify(result, null, 2));
  reporter.info(`Wrote post-build page graph to ${outputPath}`);
};
