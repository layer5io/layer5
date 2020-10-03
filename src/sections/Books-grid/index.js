import React from "react";
import { Container, Row, Col } from "../../reusecore/Layout";
import Card from "../../components/Card";
import PageHeader from "../../reusecore/PageHeader";

import { BooksPageWrapper } from "./BooksGrid.style";

const BooksGrid = ({data}) => {
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
