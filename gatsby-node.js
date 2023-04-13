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

// Replacing '/' would result in empty string which is invalid
const replacePath = path => (path === "/" ? path : path.replace(/\/$/, ""));
// Implement the Gatsby API “onCreatePage”. This is
// called after every page is created.
exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions;
  const oldPage = Object.assign({}, page);
  // Remove trailing slash unless page is /
  page.path = replacePath(page.path);
  if (page.path !== oldPage.path) {
    // Replace new page with old page
    deletePage(oldPage);
    createPage(page);
  }
};

exports.createPages = async ({ actions, graphql, reporter }) => {

  // Create client-side redirects (these only work in prod deployment)
  const { createRedirect } = actions;
  createRedirect({ fromPath: "/books", toPath: "/learn/service-mesh-books", redirectInBrowser: true, isPermanent: true });
  createRedirect({ fromPath: "/workshops", toPath: "/learn/service-mesh-workshops", redirectInBrowser: true, isPermanent: true });
  createRedirect({ fromPath: "/labs", toPath: "/learn/service-mesh-labs", redirectInBrowser: true, isPermanent: true });
  createRedirect({ fromPath: "/meshery", toPath: "/cloud-native-management/meshery", redirectInBrowser: true, isPermanent: true });
  createRedirect({ fromPath: "/service-mesh-management/meshery", toPath: "/cloud-native-management/meshery", redirectInBrowser: true, isPermanent: true });
  createRedirect({ fromPath: "/service-mesh-management/meshery/operating-service-meshes", toPath: "/cloud-native-management/meshery/operating-service-meshes", redirectInBrowser: true, isPermanent: true });
  createRedirect({ fromPath: "/service-mesh-management/meshery/getting-started", toPath: "/cloud-native-management/meshery/getting-started", redirectInBrowser: true, isPermanent: true });
  createRedirect({ fromPath: "/landscape", toPath: "/service-mesh-landscape", redirectInBrowser: true, isPermanent: true });
  createRedirect({ fromPath: "/events", toPath: "/community/events", redirectInBrowser: true, isPermanent: true });
  createRedirect({ fromPath: "/programs", toPath: "/careers/programs", redirectInBrowser: true, isPermanent: true });
  createRedirect({ fromPath: "/about", toPath: "/company/about", redirectInBrowser: true, isPermanent: true });
  createRedirect({ fromPath: "/brand", toPath: "/company/brand", redirectInBrowser: true, isPermanent: true });
  createRedirect({ fromPath: "/contact", toPath: "/company/contact", redirectInBrowser: true, isPermanent: true });
  createRedirect({ fromPath: "/news", toPath: "/company/news", redirectInBrowser: true, isPermanent: true });
  createRedirect({ fromPath: "/service-meshes", toPath: "/service-mesh-landscape", redirectInBrowser: true, isPermanent: true });
  createRedirect({ fromPath: "/calendar", toPath: "/community/calendar", redirectInBrowser: true, isPermanent: true });
  createRedirect({ fromPath: "/smi", toPath: "/projects/service-mesh-interface-conformance", redirectInBrowser: true, isPermanent: true });
  createRedirect({ fromPath: "/projects/getnighthawk", toPath: "/projects/nighthawk", redirectInBrowser: true, isPermanent: true });

  //****
  // External Resoruce Redirects
  //****

  // New Community Member (Google Form)
  createRedirect({ fromPath: "/newcomer", toPath: "/newcomers", redirectInBrowser: true, isPermanent: true });
  createRedirect({ fromPath: "/go/meshmap", toPath: "/cloud-native-management/meshmap", redirectInBrowser: true, isPermanent: true });
  createRedirect({ fromPath: "/meshmap", toPath: "/cloud-native-management/meshmap", redirectInBrowser: true, isPermanent: true });

  // Create Pages
  const { createPage } = actions;
  const blogPostTemplate = path.resolve(
    "src/templates/blog-single.js"
  );
  const blogCategoryListTemplate = path.resolve(
    "src/templates/blog-category-list.js"
  );
  const blogTagListTemplate = path.resolve(
    "src/templates/blog-tag-list.js"
  );

  const EventsTemplate = path.resolve(
    "src/templates/events.js"
  );

  const EventTemplate = path.resolve(
    "src/templates/event-single.js"
  );

  const NewsPostTemplate = path.resolve(
    "src/templates/news-single.js"
  );

  const BookPostTemplate = path.resolve(
    "src/templates/book-single.js"
  );

  const ProgramPostTemplate = path.resolve(
    "src/templates/program-single.js"
  );

  const MultiProgramPostTemplate = path.resolve(
    "src/templates/program-multiple.js"
  );

  const CareerPostTemplate = path.resolve(
    "src/templates/career-single.js"
  );

  const MemberTemplate = path.resolve(
    "src/templates/member-single.js"
  );

  const MemberBioTemplate = path.resolve(
    "src/templates/executive-bio.js"
  );

  const WorkshopTemplate = path.resolve(
    "src/templates/workshop-single.js"
  );

  const LabTemplate = path.resolve(
    "src/templates/lab-single.js"
  );

  const resourcePostTemplate = path.resolve(
    "src/templates/resource-single.js"
  );
  const integrationTemplate = path.resolve(
    "src/templates/integrations.js"
  );

  const res = await graphql(`
    {
      allPosts:  allMdx(
        filter: { frontmatter: { published: { eq: true } } }
      ) {
        nodes {
          frontmatter{
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
        filter: { fields: { collection: { eq: "blog" } }, frontmatter: { published: { eq: true } } }
        ){
          group(field: frontmatter___tags) {
            nodes{
              id
            }
            fieldValue
          }
      }
      blogCategory: allMdx(
        filter: { fields: { collection: { eq: "blog" } }, frontmatter: { published: { eq: true } } }
        ){
          group(field: frontmatter___category) {
            nodes{
              id
            }
            fieldValue
          }
      }
      memberBio: allMdx(
        filter: { fields: { collection: { eq: "members" } }, frontmatter: { published: { eq: true }, executive_bio: { eq: true } } }
        ){
          nodes{
            frontmatter{
              name
            }
            fields{
              slug
              collection
            }
          }
      }
      singleWorkshop: allMdx(
        filter: {fields: {collection: {eq: "service-mesh-workshops"}}}
      ){
        nodes{
          fields{
            slug
            collection
          }
        }
      }
      labs: allMdx(
        filter: {fields: {collection: {eq: "service-mesh-labs"}}}
      ){
        nodes{
          fields{
            slug
            collection
          }
        }
      }
      learncontent: allMdx(
        filter: {fields: {collection: {eq: "content-learn"}}}
      ){
        nodes{
          fields{
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

  const blogs = allNodes.filter(
    node => node.fields.collection === "blog"
  );

  const resources = allNodes.filter(
    node => node.fields.collection === "resources"
  );

  const news = allNodes.filter(
    node => node.fields.collection === "news"
  );

  const books = allNodes.filter(
    node => node.fields.collection === "service-mesh-books"
  );

  const events = allNodes.filter(
    node => node.fields.collection === "events"
  );

  const programs = allNodes.filter(
    node => node.fields.collection === "programs"
  );

  const careers = allNodes.filter(
    node => node.fields.collection === "careers"
  );

  const members = allNodes.filter(
    node => node.fields.collection === "members"
  );

  const integrations = allNodes.filter(
    nodes => nodes.fields.collection === "integrations"
  );

  const singleWorkshop = res.data.singleWorkshop.nodes;
  const labs = res.data.labs.nodes;

  paginate({
    createPage,
    items: events,
    itemsPerPage: 9,
    pathPrefix: "/community/events",
    component: EventsTemplate
  });

  blogs.forEach(blog => {
    createPage({
      path: blog.fields.slug,
      component: blogPostTemplate,
      context: {
        slug: blog.fields.slug,
      },
    });
  });

  const blogCategory = res.data.blogCategory.group;
  blogCategory.forEach(category => {
    createPage({
      path: `/blog/category/${slugify(category.fieldValue)}`,
      component: blogCategoryListTemplate,
      context: {
        category: category.fieldValue,
      },
    });
  });

  const BlogTags = res.data.blogTags.group;
  BlogTags.forEach(tag => {
    createPage({
      path: `/blog/tag/${slugify(tag.fieldValue)}`,
      component: blogTagListTemplate,
      context: {
        tag: tag.fieldValue,
      },
    });
  });

  resources.forEach(resource => {
    createPage({
      path: resource.fields.slug,
      component: resourcePostTemplate,
      context: {
        slug: resource.fields.slug,
      },
    });
  });

  news.forEach(singleNews => {
    createPage({
      path: singleNews.fields.slug,
      component: NewsPostTemplate,
      context: {
        slug: singleNews.fields.slug,
      },
    });
  });

  books.forEach(book => {
    createPage({
      path: book.fields.slug,
      component: BookPostTemplate,
      context: {
        slug: book.fields.slug,
      },
    });
  });

  events.forEach(event => {
    createPage({
      path: event.fields.slug,
      component: EventTemplate,
      context: {
        slug: event.fields.slug,
      },
    });
  });

  programs.forEach(program => {
    createPage({
      path: program.fields.slug,
      component: ProgramPostTemplate,
      context: {
        slug: program.fields.slug,
      },
    });
  });

  careers.forEach(career => {
    createPage({
      path: career.fields.slug,
      component: CareerPostTemplate,
      context: {
        slug: career.fields.slug,
      },
    });
  });

  members.forEach(member => {
    createPage({
      path: member.fields.slug,
      component: MemberTemplate,
      context: {
        slug: member.fields.slug,
      },
    });
  });

  const MemberBio = res.data.memberBio.nodes;
  MemberBio.forEach(memberbio => {
    createPage({
      path: `${memberbio.fields.slug}/bio`,
      component: MemberBioTemplate,
      context: {
        member: memberbio.frontmatter.name,
      },
    });
  });

  singleWorkshop.forEach(workshop => {
    createPage({
      path: workshop.fields.slug,
      component: WorkshopTemplate,
      context: {
        slug: workshop.fields.slug,
      },
    });
  });

  labs.forEach(lab => {
    createPage({
      path: lab.fields.slug,
      component: LabTemplate,
      context: {
        slug: lab.fields.slug,
      },
    });
  });

  integrations.forEach((integration) => {
    createPage({
      path: `/cloud-native-management/meshery${integration.fields.slug}`,
      component: integrationTemplate,
      context: {
        slug: integration.fields.slug,
      },
    });
  });


  let programsArray = [];
  programs.forEach(program => {
    if (
      programsArray.indexOf(program.frontmatter.program) >= 0 &&
      program.frontmatter.program === "Layer5"
    ) {
      return false;
    } else {
      programsArray.push(program.frontmatter.program);
      createPage({
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
        createCoursesListPage({ createPage, node });
        return;
      }

      if (pageType === "course") {
        createCourseOverviewPage({ createPage, node });
        return;
      }

      if (pageType === "chapter") {
        createChapterPage({ createPage, node });
        return;
      }

      if (pageType === "section") {
        createSectionPage({ createPage, node });
        return;
      }
    }
  });
};

// slug starts and ends with '/' so parts[0] and parts[-1] will be empty
const getSlugParts = slug => slug.split("/").filter(p => !!p);

const onCreatePathNode = ({ actions, node, slug }) => {
  const { createNodeField } = actions;
  const parts = getSlugParts(slug);
  const [learnpath] = parts;

  createNodeField({ node, name: "learnpath", value: learnpath });
  createNodeField({ node, name: "slug", value: `learn/learning-paths${slug}` });
  createNodeField({ node, name: "permalink", value: `${config.siteMetadata.permalink}${slug}` });
  createNodeField({ node, name: "pageType", value: "learnpath" });
};

const onCreateCourseNode = ({ actions, node, slug }) => {
  const { createNodeField } = actions;
  const parts = getSlugParts(slug);
  const [learnpath, course] = parts;

  createNodeField({ node, name: "learnpath", value: learnpath });
  createNodeField({ node, name: "slug", value: `learn/learning-paths${slug}` });
  createNodeField({ node, name: "permalink", value: `${config.siteMetadata.permalink}${slug}` });
  createNodeField({ node, name: "course", value: course });
  createNodeField({ node, name: "pageType", value: "course" });
};

const onCreateSectionNode = ({ actions, node, slug }) => {
  const { createNodeField } = actions;
  const parts = getSlugParts(slug);
  const [learnpath, course, section] = parts;

  createNodeField({ node, name: "learnpath", value: learnpath });
  createNodeField({ node, name: "slug", value: `learn/learning-paths${slug}` });
  createNodeField({ node, name: "permalink", value: `${config.siteMetadata.permalink}${slug}` });
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
  createNodeField({ node, name: "permalink", value: `${config.siteMetadata.permalink}${slug}` });
  createNodeField({ node, name: "chapter", value: chapter });
  createNodeField({ node, name: "course", value: course });
  createNodeField({ node, name: "section", value: section });
  createNodeField({ node, name: "pageType", value: "chapter" });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  if (node.internal.type === "Mdx") {
    const collection = getNode(node.parent).sourceInstanceName;
    createNodeField({
      name: "collection",
      node,
      value: collection
    });
    if (collection !== "content-learn") {
      let slug = "";
      if (node.frontmatter.permalink) {
        slug = `/${collection}/${node.frontmatter.permalink}`;
      } else {
        switch (collection) {
          case "blog":
            if (node.frontmatter.published)
              slug = `/${collection}/${slugify(node.frontmatter.category)}/${slugify(node.frontmatter.title)}`;
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
              slug = `/${collection}/${slugify(node.frontmatter.category)}/${slugify(node.frontmatter.title)}`;
            break;
          case "members":
            if (node.frontmatter.published)
              slug = `/community/members/${slugify(node.frontmatter.name)}`;
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
        trailingSlash: false
      });

      // slug starts and ends with '/' so parts[0] and parts[-1] will be empty
      const parts = slug.split("/").filter(p => !!p);

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
  }
};

const createCoursesListPage = ({ createPage, node }) => {
  const { learnpath, slug, pageType, permalink } = node.fields;

  createPage({
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

const createCourseOverviewPage = ({ createPage, node }) => {
  const {
    learnpath,
    slug,
    course,
    pageType,
    permalink,
  } = node.fields;

  createPage({
    path: `${slug}`,
    component: path.resolve("src/templates/course-overview.js"),
    context: {
      learnpath,
      slug,
      course,
      pageType,
      permalink,
    },
  });
};

const createChapterPage = ({ createPage, node }) => {
  const {
    learnpath,
    slug,
    course,
    section,
    chapter,
    pageType,
    permalink,
  } = node.fields;

  createPage({
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

const createSectionPage = ({ createPage, node }) => {
  const {
    learnpath,
    slug,
    course,
    section,
    pageType,
    permalink,
  } = node.fields;

  createPage({
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
       meshmate: String,
       maintainer:String,
       emeritus: String,
       link: String,
       labs: String,
       slides: String,
       slack: String,
       status: String,
       video: String,
       community_manager: String,
       docURL: String, 

     }
   `;
  createTypes(typeDefs);
};
