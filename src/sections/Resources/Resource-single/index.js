import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { SRLWrapper } from "simple-react-lightbox";
import { Container } from "../../../reusecore/Layout";
import PageHeader from "../../../reusecore/PageHeader";
import RelatedResources from "../../../components/Related-Resources";
import ResourcePageWrapper from "./resourceSingle.style";
import RelatedResourcesFactory from "../../../components/Related-Resources/relatedResourcesFactory";
import { IoIosArrowDropleftCircle } from "@react-icons/all-files/io/IoIosArrowDropleftCircle";
import CTA_Bottom from "../../../components/Call-To-Actions/CTA_Bottom";


const ResourceSingle = ({ data }) => {
  const { frontmatter, body, fields } = data.mdx;
  const resourceData = useStaticQuery(
    graphql`query relatedResources {
  allMdx(
    sort: {fields: [frontmatter___date], order: DESC}
    filter: {fields: {collection: {eq: "resources"}}, frontmatter: {published: {eq: true}}}
  ) {
    nodes {
      frontmatter {
        title
        date(formatString: "MMM Do YYYY")
        author
        category
        tags
        thumbnail {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
          extension
          publicURL
        }
        darkthumbnail {
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
`
  );

  const resources = resourceData.allMdx.nodes;
  const relatedResources = new RelatedResourcesFactory(
    resources, fields.slug
  ).setMaxResources(6)
    .setCategory(frontmatter.category)
    .setTags(frontmatter.tags)
    .getResources();

  return (
    <ResourcePageWrapper>
      <PageHeader
        title={frontmatter.title}
        subtitle={frontmatter.subtitle}

        thumbnail={frontmatter.thumbnail}
      />
      <div className="single-resource-wrapper">
        <Container>
          <SRLWrapper>
            <MDXRenderer>{body}</MDXRenderer>
          </SRLWrapper>

          <CTA_Bottom
            category={"MeshMap"}
          />

          <div className="backBtn">
            <Link to="/resources">
              <IoIosArrowDropleftCircle />
              <h4>All Resources</h4>
            </Link>
          </div>
          <RelatedResources
            resourceType="resources"
            relatedResources={relatedResources}
            mainHead="Related Resources"
            lastCardHead="All Resources"
            linkToAllItems="/resources"
          />
        </Container>
      </div>
    </ResourcePageWrapper>
  );
};

export default ResourceSingle;
