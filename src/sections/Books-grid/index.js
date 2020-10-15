import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Container, Row, Col } from "../../reusecore/Layout";
import Card from "../../components/Card";
import PageHeader from "../../reusecore/PageHeader";

import { BooksPageWrapper } from "./BooksGrid.style";

const BooksGrid = () => {
    const data = useStaticQuery(
        graphql`
            query allBooks {
                allMdx(
                    filter: { fields: { collection: { eq: "books" } }, frontmatter: { published: { eq: true } } }
                    sort: { fields: [frontmatter___date], order: ASC }
                ) {
                    nodes {
                        id
                        frontmatter {
                            title
                            author
                            abstract
                            thumbnail{
                                childImageSharp{
                                    fluid(maxWidth: 1000){
                                        ...GatsbyImageSharpFluid_withWebp
                                    }
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
    return (
        <BooksPageWrapper>
            <PageHeader title="Books" path="Books"/>
            <div className="books-page-wrapper">
                <Container>
                    <div className="books-grid-wrapper">
                        <Row>
                            {data.allMdx.nodes.map(({id, frontmatter, fields }) => (
                                <Col xs={12} sm={6} lg={4} key={id}>
                                    <Card frontmatter={frontmatter} fields={fields}/>
                                </Col>
                            ))}
                        </Row>
                    </div>
                </Container>
            </div>
        </BooksPageWrapper>
    );
};

export default BooksGrid;
