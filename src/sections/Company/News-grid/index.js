import React from "react";
import { Container, Row, Col } from "../../../reusecore/Layout";
import Card from "../../../components/Card";
import PageHeader from "../../../reusecore/PageHeader";
import { NewsPageWrapper } from "./NewsGrid.style";

const NewsGrid = ({data}) => {
  return (
    <NewsPageWrapper>
      <PageHeader title="News" path="News"/>
      <div>
        <Container>
          <div className="news-grid-wrapper">
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
    </NewsPageWrapper>
  );
};

export default NewsGrid;
