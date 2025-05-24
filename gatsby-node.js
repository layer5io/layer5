/* eslint-env node */
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require("path");
const slugify = require("./src/utils/slugify");
const { paginate } = require("gatsby-awesome-pagination");
const { createFilePath } = require("gatsby-source-filesystem");
const config = require("./gatsby-config");
const {
  componentsData,
} = require("./src/sections/Projects/Sistent/components/content");

if (process.env.CI === "true") {
  // All process.env.CI conditionals in this file are in place for GitHub Pages, if webhost changes in the future, code may need to be modified or removed.
  //Replacing '/' would result in empty string which is invalid
  const replacePath = (url) =>
    url === "/" || url.includes("/404") ? url : `${url}.html`;

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

exports.createPages = async ({ actions, graphql, reporter }) => {
  // Create client-side redirects (these only work in prod deployment)
  const { createRedirect } = actions;
  createRedirect({
    fromPath: "/books",
    toPath: "/learn/service-mesh-books",
    redirectInBrowser: true,
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/books/the-enterprise-path-to-service-mesh-architectures",
    toPath:
      "/learn/service-mesh-books/the-enterprise-path-to-service-mesh-architectures",
    redirectInBrowser: true,
    isPermanent: true,
  });
  createRedirect({
    fromPath:
      "/books/the-enterprise-path-to-service-mesh-architectures-2nd-edition",
    toPath:
      "/learn/service-mesh-books/the-enterprise-path-to-service-mesh-architectures-2nd-edition",
    redirectInBrowser: true,
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/books/istio-up-and-running",
    toPath: "/learn/service-mesh-books/istio-up-and-running",
    redirectInBrowser: true,
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/workshops",
    toPath: "/learn/service-mesh-workshops",
    redirectInBrowser: true,
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/labs",
    toPath: "/learn/service-mesh-labs",
    redirectInBrowser: true,
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/meshery",
    toPath: "/cloud-native-management/meshery",
    redirectInBrowser: true,
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/service-mesh-management/meshery",
    toPath: "/cloud-native-management/meshery",
    redirectInBrowser: true,
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/service-mesh-management/meshery/operating-service-meshes",
    toPath: "/cloud-native-management/meshery/operating-cloud-native-infra",
    redirectInBrowser: true,
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/cloud-native-management/meshery/operating-service-meshes",
    toPath: "/cloud-native-management/meshery/operating-cloud-native-infra",
    redirectInBrowser: true,
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/service-mesh-management/meshery/getting-started",
    toPath: "/cloud-native-management/meshery/getting-started",
    redirectInBrowser: true,
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/landscape",
    toPath: "/service-mesh-landscape",
    redirectInBrowser: true,
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/events",
    toPath: "/community/events",
    redirectInBrowser: true,
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/programs",
    toPath: "/careers/programs",
    redirectInBrowser: true,
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/about",
    toPath: "/company/about",
    redirectInBrowser: true,
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/brand",
    toPath: "/company/brand",
    redirectInBrowser: true,
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/contact",
    toPath: "/company/contact",
    redirectInBrowser: true,
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/news",
    toPath: "/company/news",
    redirectInBrowser: true,
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/service-meshes",
    toPath: "/service-mesh-landscape",
    redirectInBrowser: true,
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/calendar",
    toPath: "/community/calendar",
    redirectInBrowser: true,
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/smi",
    toPath: "/projects/service-mesh-interface-conformance",
    redirectInBrowser: true,
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/projects/getnighthawk",
    toPath: "/projects/nighthawk",
    redirectInBrowser: true,
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/projects/getnighthawk",
    toPath: "/projects/nighthawk",
    redirectInBrowser: true,
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/projects/service-mesh-performance",
    toPath: "/projects/cloud-native-performance",
    redirectInBrowser: true,
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/blog/category/service-mesh-performance",
    toPath: "/blog/category/service-mesh",
    redirectInBrowser: true,
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/blog/category/service-mesh-performance/",
    toPath: "/blog/category/service-mesh",
    redirectInBrowser: true,
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/blog/tag/smi",
    toPath: "/blog/tag/service-mesh-interface",
    redirectInBrowser: true,
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/catalog",
    toPath: "/cloud-native-management/catalog",
    redirectInBrowser: true,
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/cloud-native-management/meshery/integrations/argocd-operator",
    toPath: "/cloud-native-management/meshery/integrations/argo-cd-operator",
    redirectInBrowser: true,
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/cloud-native-management/meshery/integrations/argocd-operator/",
    toPath: "/cloud-native-management/meshery/integrations/argo-cd-operator",
    redirectInBrowser: true,
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/blog/category/landscape",
    toPath: "/blog/tag/landscape",
    redirectInBrowser: true,
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/blog/category/landscape/",
    toPath: "/blog/tag/landscape",
    redirectInBrowser: true,
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/blog/category/service-mesh-specifications",
    toPath: "/blog/category/service-mesh",
    redirectInBrowser: true,
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/orchestration-management",
    toPath: "/solutions/orchestration-management",
    redirectInBrowser: true,
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/cloud-native-management/gitops",
    toPath: "/solutions/gitops",
    redirectInBrowser: true,
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/cloud-native-management/gitops/snapshot",
    toPath: "/solutions/gitops/snapshot",
    redirectInBrowser: true,
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/cloud-native-management/gitops/performance-management",
    toPath: "/solutions/gitops/performance-management",
    redirectInBrowser: true,
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/blog/announcements/meshery-5000-star-milestone",
    toPath: "/blog/announcements/mesherys-5000-star-milestone",
    redirectInBrowser: true,
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/blog/meshery/getting-started-with-meshery-wsl2-and-k3d",
    toPath: "/blog/2019/07/09/getting-started-with-meshery-wsl2-k3d",
    redirectInBrowser: true,
    isPermanent: true,
  });

  //****
  // External Resource Redirects
  //****

  // New Community Member (Google Form)
  createRedirect({
    fromPath: "/newcomer",
    toPath: "/newcomers",
    redirectInBrowser: true,
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/kanvas",
    toPath: "/cloud-native-management/kanvas",
    redirectInBrowser: true,
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/cloud-native-management/meshmap",
    toPath: "/cloud-native-management/kanvas",
    redirectInBrowser: true,
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/meshmap",
    toPath: "/cloud-native-management/kanvas",
    redirectInBrowser: true,
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/go/meshmap",
    toPath: "/cloud-native-management/kanvas",
    redirectInBrowser: true,
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/cloud-native-management/kanvas/visualize",
    toPath: "/cloud-native-management/kanvas/operate",
    redirectInBrowser: true,
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/kanvas/visualize",
    toPath: "/cloud-native-management/kanvas/operate",
    redirectInBrowser: true,
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/kanvas/operate",
    toPath: "/cloud-native-management/kanvas/operate",
    redirectInBrowser: true,
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/resources/cloud-native/hpes-adoption-of-meshery-and-meshmap",
    toPath: "/resources/case-study/hpes-adoption-of-meshery-and-meshmap",
    redirectInBrowser: true,
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/sitemap.xml",
    toPath: "/sitemap-index.xml",
    redirectInBrowser: true,
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/products/nighthawk",
    toPath: "/projects/nighthawk",
    redirectInBrowser: true,
    isPermanent: true,
  });

  createRedirect({
    fromPath: "/products/service-mesh-performance",
    toPath: "/projects/cloud-native-performance",
    redirectInBrowser: true,
    isPermanent: true,
  });

  createRedirect({
    fromPath: "/products/service-mesh-performance-specification",
    toPath: "/projects/cloud-native-performance",
    redirectInBrowser: true,
    isPermanent: true,
  });

  createRedirect({
    fromPath: "/cloud-native-management/meshmap/collaborate",
    toPath: "/cloud-native-management/kanvas/collaborate",
    redirectInBrowser: true,
    isPermanent: true,
  });

  createRedirect({
    fromPath: "/blog/tag/meshery-open-source",
    toPath: "/blog/tag/open-source",
    redirectInBrowser: true,
    isPermanent: true,
  });

  createRedirect({
    fromPath: "/blog/category/opensource",
    toPath: "/blog/category/open-source",
    redirectInBrowser: true,
    isPermanent: true,
  });

  createRedirect({
    fromPath: "/cloud-native-management/meshmap/design",
    toPath: "/cloud-native-management/kanvas/design",
    redirectInBrowser: true,
    isPermanent: true,
  });

  createRedirect({
    fromPath: "/cloud-native-management/meshmap/collaborate/peer-reviews",
    toPath: "/cloud-native-management/kanvas/collaborate/peer-reviews",
    redirectInBrowser: true,
    isPermanent: true,
  });
  // Create Pages
  const { createPage } = actions;

  const envCreatePage = (props) => {
    if (process.env.CI === "true") {
      const { path: pagePath, ...rest } = props;

      // Ensure path is properly formatted
      const normalizedPath = pagePath.endsWith("/") ? pagePath.slice(0, -1) : pagePath;
      const htmlPath = normalizedPath === "" ? "index.html" : `${normalizedPath}.html`;

      // Create redirect
      createRedirect({
        fromPath: pagePath.endsWith("/") ? pagePath : `${pagePath}/`,
        toPath: pagePath,
        redirectInBrowser: true,
        isPermanent: true,
      });

      // Create the actual page
      return createPage({
        ...rest,
        path: htmlPath,
        matchPath: pagePath,
      });
    }
    return createPage(props);
  };

  const blogPostTemplate = path.resolve("src/templates/blog-single.js");
  const blogCategoryListTemplate = path.resolve(
    "src/templates/blog-category-list.js"
  );
  const blogTagListTemplate = path.resolve("src/templates/blog-tag-list.js");



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
        }
      }
      singleWorkshop: allMdx(
        filter: { fields: { collection: { eq: "service-mesh-workshops" } } }
      ) {
        nodes {
          fields {
            slug
            collection
          }
        }
      }
      labs: allMdx(
        filter: { fields: { collection: { eq: "service-mesh-labs" } } }
      ) {
        nodes {
          fields {
            slug
            collection
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

  const blogs = allNodes.filter((node) => node.fields.collection === "blog");

  const resources = allNodes.filter(
    (node) => node.fields.collection === "resources"
  );

  const news = allNodes.filter((node) => node.fields.collection === "news");

  const books = allNodes.filter(
    (node) => node.fields.collection === "service-mesh-books"
  );

  const events = allNodes.filter((node) => node.fields.collection === "events");

  const programs = allNodes.filter(
    (node) => node.fields.collection === "programs"
  );

  const careers = allNodes.filter(
    (node) => node.fields.collection === "careers"
  );

  const members = allNodes.filter(
    (node) => node.fields.collection === "members"
  );

  const integrations = allNodes.filter(
    (nodes) => nodes.fields.collection === "integrations"
  );

  const singleWorkshop = res.data.singleWorkshop.nodes;
  const labs = res.data.labs.nodes;

  // Create Events List Pages with pagination
  const publishedEvents = events.filter(event => event.frontmatter.published === true);
  paginate({
    createPage: envCreatePage,
    items: publishedEvents,
    itemsPerPage: 9,
    pathPrefix: "/community/events",
    component: path.resolve("./src/templates/events.js"),
    context: {
      basePath: "/community/events",
      numEventPages: Math.ceil(publishedEvents.length / 9),
      currentPage: 1,
      skip: 0,
      limit: 9
    }
  });

  // Create Individual Event Pages
  publishedEvents.forEach((event, index) => {
    const previous = index === events.length - 1 ? null : events[index + 1];
    const next = index === 0 ? null : events[index - 1];

    createPage({
      path: event.fields.slug,
      component: EventTemplate,
      context: {
        slug: event.fields.slug,
        previous,
        next,
      },
    });
  });

  blogs.forEach((blog) => {
    envCreatePage({
      path: blog.fields.slug,
      component: blogPostTemplate,
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
      component: resourcePostTemplate,
      context: {
        slug: resource.fields.slug,
      },
    });
  });

  news.forEach((singleNews) => {
    envCreatePage({
      path: singleNews.fields.slug,
      component: NewsPostTemplate,
      context: {
        slug: singleNews.fields.slug,
      },
    });
  });

  books.forEach((book) => {
    envCreatePage({
      path: book.fields.slug,
      component: BookPostTemplate,
      context: {
        slug: book.fields.slug,
      },
    });
  });

  programs.forEach((program) => {
    envCreatePage({
      path: program.fields.slug,
      component: ProgramPostTemplate,
      context: {
        slug: program.fields.slug,
      },
    });
  });

  careers.forEach((career) => {
    envCreatePage({
      path: career.fields.slug,
      component: CareerPostTemplate,
      context: {
        slug: career.fields.slug,
      },
    });
  });

  members.forEach((member) => {
    envCreatePage({
      path: member.fields.slug,
      component: MemberTemplate,
      context: {
        slug: member.fields.slug,
      },
    });
  });

  const MemberBio = res.data.memberBio.nodes;
  MemberBio.forEach((memberbio) => {
    envCreatePage({
      path: `${memberbio.fields.slug}/bio`,
      component: MemberBioTemplate,
      context: {
        member: memberbio.frontmatter.name,
      },
    });
  });

  singleWorkshop.forEach((workshop) => {
    envCreatePage({
      path: workshop.fields.slug,
      component: WorkshopTemplate,
      context: {
        slug: workshop.fields.slug,
      },
    });
  });

  labs.forEach((lab) => {
    envCreatePage({
      path: lab.fields.slug,
      component: LabTemplate,
      context: {
        slug: lab.fields.slug,
      },
    });
  });

  integrations.forEach((integration) => {
    envCreatePage({
      path: `/cloud-native-management/meshery${integration.fields.slug}`,
      component: integrationTemplate,
      context: {
        slug: integration.fields.slug,
        name: "_images/" + integration.fields.slug.split("/")[2],
      },
    });
  });

  let programsArray = [];
  programs.forEach((program) => {
    if (
      programsArray.indexOf(program.frontmatter.program) >= 0 &&
      program.frontmatter.program === "Layer5"
    ) {
      return false;
    } else {
      programsArray.push(program.frontmatter.program);
      envCreatePage({
        path: `/programs/${program.frontmatter.programSlug}`,
        component: MultiProgramPostTemplate,
        context: {
          program: program.frontmatter.program,
        },
      });
    }
  });

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

  // Create pages for components
  const components = componentsData.map((component) => component.src.replace("/", ""));
  const createComponentPages = (createPage, components) => {
  // Define which components should only have index pages
    const indexOnlyComponents = ["icons"];
    const pageTypes = [
      { suffix: "", file: "index.js" },
      { suffix: "/guidance", file: "guidance.js" },
      { suffix: "/code", file: "code.js" },
    ];

    components.forEach((name) => {
      pageTypes.forEach(({ suffix, file }) => {

        // Skip guidance and code pages for specific components
        if (indexOnlyComponents.includes(name) && file !== "index.js") {
          return;
        }
        const path = `/projects/sistent/components/${name}${suffix}`;
        const componentPath = `./src/sections/Projects/Sistent/components/${name}/${file}`;

        
          try {
            // Check if the file exists before trying to create the page
        if (require.resolve(componentPath)) {
           createPage({
              path,
              component: require.resolve(componentPath),
            })
        }
          } catch (error) {
            if (file === "index.js") {
            console.error(`Error:Required Index file not found for ${path}`);
          } else {
            console.warn(`Warning:Component File not Found ${path}. Skipping Page Creation.`);
          }
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
  const collection = getNode(node.parent).sourceInstanceName;
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
        case "service-mesh-workshops":
        case "service-mesh-labs":
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

// Add or replace the onCreateWebpackConfig export with this enhanced version
exports.onCreateWebpackConfig = ({ actions, stage, getConfig, loaders }) => {
  // Base webpack configuration that applies to all stages
  actions.setWebpackConfig({
    module: {
      rules: [
        // Application CSS files with CSS modules support
        {
          test: /\.css$/,
          exclude: [/node_modules\/.*\.css$/, /fonts\.css$/],
          use: [
            stage === 'develop' ? 'style-loader' : loaders.miniCssExtract(),
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                sourceMap: stage === 'develop',
                modules: {
                  auto: true,
                  localIdentName: '[name]__[local]--[hash:base64:5]',
                },
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  parser: 'postcss-safe-parser',
                  plugins: [
                    require('postcss-flexbugs-fixes'),
                    require('postcss-preset-env')({
                      autoprefixer: { flexbox: 'no-2009' },
                      stage: 3,
                    }),
                  ],
                },
                sourceMap: stage === 'develop',
              },
            },
          ],
        },
        // Node modules CSS files - simpler processing
        {
          test: /\.css$/,
          include: [/node_modules\/.*\.css$/, /fonts\.css$/],
          use: [
            stage === 'develop' ? 'style-loader' : loaders.miniCssExtract(),
            'css-loader',
          ],
        },
        // Shader files
        {
          test: /\.(glsl|vert|frag)$/,
          use: 'raw-loader',
        },
      ],
    },
    resolve: {
      fallback: {
        path: require.resolve('path-browserify'),
        process: require.resolve('process/browser'),
        url: require.resolve('url/'),
        fs: false,
        crypto: false,
      },
      // Ensure node_modules are properly resolved
      modules: ['node_modules'],
      alias: {
        'three': require.resolve('three'),
      },
    },
    ignoreWarnings: [
      { module: /node_modules\/gatsby-plugin-mdx\/dist\/cache-helpers.js/ },
      { message: /Mini CSS Extract Plugin/ },
      { message: /Unknown word/ },
      { message: /Critical dependency/ },
    ],
  });

  // Stage-specific configurations
  if (stage === "build-javascript" || stage === "build-html" || stage === "develop-html") {
    const config = getConfig();
    
    // Handle CSS extraction plugin
    const miniCssExtractPlugin = config.plugins.find(
      (plugin) => plugin.constructor.name === "MiniCssExtractPlugin"
    );

    if (miniCssExtractPlugin) {
      miniCssExtractPlugin.options.ignoreOrder = true;
    }

    // Special handling for HTML build stages
    if (stage === "build-html" || stage === "develop-html") {
      actions.setWebpackConfig({
        module: {
          rules: [
            {
              // This prevents issues with Three.js and canvas during SSR
              test: /canvas|three|webgl|pixi|gsap|animejs/,
              use: 'null-loader',
            },
          ],
        },
      });
    }

    actions.replaceWebpackConfig(config);
  }
};

// Add or enhance the onPostBuild export with this version
exports.onPostBuild = async ({ graphql, reporter }) => {
  reporter.info('Build completed successfully');
  
  // Log build stats
  try {
    const result = await graphql(`
      {
        allSitePage {
          totalCount
        }
      }
    `);
    
    if (result.data) {
      reporter.info(`Total pages built: ${result.data.allSitePage.totalCount}`);
    }
    
    // Write build stats for performance analysis
    const buildStats = {
      timestamp: new Date().toISOString(),
      totalPages: result.data?.allSitePage?.totalCount || 0,
    };

    const publicDir = path.resolve('public');
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true });
    }

    fs.writeFileSync(
      path.resolve(publicDir, 'build-stats.json'),
      JSON.stringify(buildStats, null, 2)
    );
    
    reporter.info('Build stats written to public/build-stats.json');
  } catch (error) {
    reporter.warn(`Error generating build stats: ${error.message}`);
  }
};


const createCoursesListPage = ({ envCreatePage, node }) => {
  const { learnpath, slug, pageType, permalink } = node.fields;

  envCreatePage({
    path: `${slug}`,
    component: path.resolve("src/templates/courses-list.js"),
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
    component: path.resolve("src/templates/course-overview.js"),
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
    component: path.resolve("src/templates/learn-chapter.js"),
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
    component: path.resolve("src/sections/Learn-Layer5/Section/index.js"),
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

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
     type Mdx implements Node {
       frontmatter: Frontmatter
     }
     type Frontmatter {
       subtitle: String,
       abstract: String,
       eurl: String,
       twitter: String,
       github: String,
       layer5: String,
       meshmate: String,
       maintainer:String,
       emeritus: String,
       link: String,
       labs: String,
       slides: String,
       slack: String,
       video: String,
       community_manager: String,
       docURL: String,
       permalink: String,
     }
   `;
  createTypes(typeDefs);
};

const fs = require("fs");

exports.onPostBuild = async ({ graphql, reporter }) => {
  reporter.info('Build completed successfully');
  
  // Log build stats
  try {
    const result = await graphql(`
      {
        allSitePage {
          totalCount
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
    
    if (result.data) {
      reporter.info(`Total pages built: ${result.data.allSitePage.totalCount}`);
    }
    
    // Write build stats for performance analysis
    const buildStats = {
      timestamp: new Date().toISOString(),
      totalPages: result.data?.allSitePage?.totalCount || 0,
    };

    const publicDir = path.resolve('public');
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true });
    }

    fs.writeFileSync(
      path.resolve(publicDir, 'build-stats.json'),
      JSON.stringify(buildStats, null, 2)
    );
    
    reporter.info('Build stats written to public/build-stats.json');
    
    // Log the result to the console
    console.log("GraphQL query result:", JSON.stringify(result, null, 2));

    // Optionally, write the result to a file for easier inspection
    const outputPath = path.resolve(__dirname, "public", "query-result.json");
    fs.writeFileSync(outputPath, JSON.stringify(result, null, 2));

    // Additional error handling for CI builds
    if (process.env.CI === "true") {
      // Ensure public directory exists
      if (!fs.existsSync("public")) {
        reporter.panic("Public directory does not exist");
      }

      // Validate generated HTML files
      const htmlFiles = fs.readdirSync("public").filter(file => file.endsWith(".html"));
      if (htmlFiles.length === 0) {
        reporter.panic("No HTML files were generated in the public directory");
      }

      // Log build completion for CI
      reporter.info(`Build completed successfully with ${htmlFiles.length} HTML files`);

      // Write build stats for Lighthouse CI
      const ciStats = {
        timestamp: new Date().toISOString(),
        totalPages: result.data.allSitePage.nodes.length,
        htmlFiles: htmlFiles.length
      };

      fs.writeFileSync(
        path.resolve(__dirname, "public", "ci-build-stats.json"),
        JSON.stringify(ciStats, null, 2)
      );
    }
  } catch (error) {
    reporter.warn(`Error generating build stats: ${error.message}`);
  }
};
