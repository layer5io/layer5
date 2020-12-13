/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */


const path = require(`path`);
const slugify = require("./src/utils/slugify");
const { paginate } = require("gatsby-awesome-pagination");

// Replacing '/' would result in empty string which is invalid
const replacePath = path => (path === `/` ? path : path.replace(/\/$/, ``));
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
    createPage(page)
  }
};

exports.createPages = async ({ actions, graphql, reporter }) => {

  // Create client-side redirects (these only work in prod deployment)
  const { createRedirect } = actions
  createRedirect({ fromPath: '/books', toPath: '/learn/books', redirectInBrowser: true, isPermanent: true })
  createRedirect({ fromPath: '/workshops', toPath: '/learn/workshops', redirectInBrowser: true, isPermanent: true })
  createRedirect({ fromPath: '/meshery', toPath: '/projects/meshery', redirectInBrowser: true, isPermanent: true })
  createRedirect({ fromPath: '/landscape', toPath: '/projects/landscape', redirectInBrowser: true, isPermanent: true })

  // Create Pages
  const { createPage } = actions;
  const blogPostTemplate = path.resolve(
      'src/templates/blog-single.js'
  );
  const blogListTemplate = path.resolve(
      'src/templates/blog-list.js'
  );
  const blogViewTemplate = path.resolve(
      'src/templates/blog.js'
  );

  const EventsTemplate = path.resolve(
    'src/templates/events.js'
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

  const ProgramPostTemplate = path.resolve(
      'src/templates/program-single.js'
  );

  const CareerPostTemplate = path.resolve(
      'src/templates/career-single.js'
  );

  const MemberTemplate = path.resolve(
      'src/templates/member-single.js'
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
            totalCount
          }
        }
      allCollections: allMdx(
        filter: {fields: {collection: {eq: "events"}}}
      ){
        nodes{
          fields{
            slug
            collection
          }
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

  const programs = allNodes.filter(
      node => node.fields.collection === `programs`
  );

  const careers = allNodes.filter(
      node => node.fields.collection === `careers`
  );

  const members = allNodes.filter(
      node => node.fields.collection === `members`
  );

  const events = res.data.allCollections.nodes;

  paginate({
    createPage,
    items: blogs,
    itemsPerPage: 8,
    pathPrefix: `/blog`,
    component: blogViewTemplate
  });

  paginate({
    createPage,
    items: events,
    itemsPerPage: 9,
    pathPrefix: `/community/events`,
    component: EventsTemplate
  });

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
    paginate({
      createPage,
      items: tag.nodes,
      itemsPerPage: 4,
      pathPrefix: `/blog/tag/${slugify(tag.fieldValue)}`,
      component: blogListTemplate,
      context: {
        tag: tag.fieldValue,
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

  programs.forEach(program => {
    createPage({
      path: program.fields.slug,
      component: ProgramPostTemplate,
      context: {
        slug: program.fields.slug,
      },
    })
  });

  careers.forEach(career => {
    createPage({
      path: career.fields.slug,
      component: CareerPostTemplate,
      context: {
        slug: career.fields.slug,
      },
    })
  });

  members.forEach(member => {
    createPage({
      path: member.fields.slug,
      component: MemberTemplate,
      context: {
        slug: member.fields.slug,
      },
    })
  });

};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `Mdx`) {
    const collection = getNode(node.parent).sourceInstanceName;
    createNodeField({
      name: "collection",
      node,
      value: collection
    });
    let slug = "";
    if(node.frontmatter.permalink) {
      slug = `/${collection}/${node.frontmatter.permalink}`;
    }
    else{
      switch(collection){
        case `blog`:
          slug = `/${collection}/${node.frontmatter.category}/${slugify(node.frontmatter.title)}`;
          break;
        case `members`:
          slug = `/community/members/${slugify(node.frontmatter.name)}`;
          break;
        default:
          slug = `/${collection}/${slugify(node.frontmatter.title)}`;
      }
    }
    createNodeField({
      name: `slug`,
      node,
      value: slug,
    });
  }
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
    }
  `;
  createTypes(typeDefs)
};
