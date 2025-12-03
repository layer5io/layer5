import React from "react";
import { graphql } from "gatsby";
import { Container } from "../reusecore/Layout";
import { HandbookWrapper } from "../sections/Community/Handbook/Handbook.style";
import SEO from "../components/seo";
import HandbookTOC from "../components/HandbookTOC";
import HandbookPagination from "../components/HandbookPagination";
import HandbookIntraPage from "../components/HandbookIntraPage";

const HandbookTemplate = ({ data, children }) => {
    const { mdx, allMdx } = data;
    const { frontmatter, tableOfContents } = mdx;

    // Auto-detect if in-page navigation should be shown
    const hasIntraPageNav = tableOfContents?.items && tableOfContents.items.length > 0;

    return (
        <HandbookWrapper>
            <div className="page-header-section">
                <h1>{frontmatter.title}</h1>
            </div>
            <HandbookTOC allPages={allMdx.nodes} />
            <div className="page-section">
                <Container>
                    <div className="content">
                        {children}
                    </div>
                    <HandbookPagination
                        allPages={allMdx.nodes}
                        currentSlug={mdx.fields.slug}
                    />
                </Container>
                {hasIntraPageNav && (
                    <HandbookIntraPage contents={tableOfContents.items} />
                )}
            </div>
        </HandbookWrapper>
    );
};

export const Head = ({ data }) => {
    const { mdx } = data;
    return (
        <SEO
            title={mdx.frontmatter.title}
            description={mdx.frontmatter.description}
        />
    );
};

export const query = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        description
      }
      fields {
        slug
      }
      tableOfContents
    }
    allMdx(
      filter: {
        fields: { collection: { eq: "handbook" } }
        frontmatter: { published: { eq: true } }
      }
      sort: { fields: { slug: ASC } }
    ) {
      nodes {
        frontmatter {
          title
        }
        fields {
          slug
        }
      }
    }
  }
`;

export default HandbookTemplate;
