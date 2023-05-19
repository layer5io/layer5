import React from "react";
import { graphql } from "gatsby";

import SEO from "../../components/seo";
import ProjectPage from "../../sections/Projects/Project-grid";

export const query = graphql`query allProjects {
  allMdx(
    filter: {fields: {collection: {eq: "projects"}}, frontmatter: {published: {eq: true}}}
  ) {
    nodes {
      id
      frontmatter {
        title
        thumbnail {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
          extension
          publicURL
        }
      }
      fields {
        slug
      }
    }
  }
}
`;
const ProjectGridPage = ({ data }) => {
  return (
    <ProjectPage data={data}  />
  );
};
export default ProjectGridPage;
export const Head = () => {
  return <SEO title="Innovative Cloud Native Projects"
    description="Layer5, empowerer of engineers. Layer5 is the maker of Meshery, Service Mesh Performance, Service Mesh Interface, and Nighthawk. At Layer5, we believe collaboration enables innovation, and infrastructure enables collaboration."
    image="/images/layer5-projects.png" />;
};