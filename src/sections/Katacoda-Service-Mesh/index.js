import React from "react";
import { KatacodaWrapper } from "./KatacodaWrapper.style";
import PageHeader from "../../reusecore/PageHeader";
import CourseCard from "../../components/CourseCard";
import { Container, Row, Col } from "../../reusecore/Layout";
import Button from "../../reusecore/Button";
import cover from "./cover.svg";

const data = [
  { title: "Meshery - Learn how to manage your service mesh", info: "Learn how to run Meshery, install service meshes and deploy sample apps", link: "https://www.katacoda.com/layer5/courses/meshery-adapters" },
  { title: "Meshery - Performance Testing", info: "Learn how to do Performance Testing with Meshery", link: "https://www.katacoda.com/layer5/courses/performance-testing-with-meshery" }
];


const KatacodaServiceMesh = () => {
  return (
    <KatacodaWrapper>
      <PageHeader title="We build projects to provide learning environments, deployment and operational best practices"/>
      <div className="Katacoda-section-wrapper">
        <Container>
          <Row>
            {data.map(({ id, title, info, link }) => (
              <Col key={id} xs={12} sm={6}>
                <CourseCard title={title} info={info} link={link} cover={cover}/>
              </Col>
            ))}
          </Row>
        </Container>
        <div className="join-community">
          <div className="join-community_text-and_button">
            <h1>Don't Learn Alone</h1>
            <p>Check Out the Layer5 community, join us on Slack and learn with the community</p>
            <Button primary title="Join Our Community" url="http://slack.layer5.io/" />
          </div>
        </div>
      </div>
    </KatacodaWrapper>
  );
};

export default KatacodaServiceMesh;