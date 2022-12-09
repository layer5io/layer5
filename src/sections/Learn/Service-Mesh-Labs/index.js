import React, { useState } from "react";
import { LabsWrapper } from "./LabsWrapper.style";
import PageHeader from "../../../reusecore/PageHeader";
import ScenarioCard from "../../../components/ScenarioCard";
import { Container, Row, Col } from "../../../reusecore/Layout";
import Button from "../../../reusecore/Button";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { data } from "./courseData";


const ServiceMeshLabs = ({ selectedIndex, setSelectedIndex }) => {

  const [content, setContent] = useState(false);
  const [open, setOpen] = useState(false);
  const [ID, setID] = useState("");

  const toggleActive = (subId) => {
    if (open) {
      if (ID === subId) {
        setOpen(false);
        setContent(false);
        setID("");
      } else {
        setOpen(false);
        setContent(false);
        setID(subId);
        setContent(true);
        setOpen(true);
      }
    } else {
      setID(subId);
      setContent(true);
      setOpen(true);
    }
  };

  return (
    <LabsWrapper>
      <PageHeader title="Learn how to service mesh" subtitle="with interactive labs" />
      <div className="Labs-section-wrapper">
        <Container>
          <Tabs className="course-tabs"
            selectedIndex={selectedIndex}
            onSelect={tabIndex => setSelectedIndex(tabIndex)}
          >
            <TabList className="course-tab-list">
              {data.map(({ id, title }) => (
                <Tab className="course-tab" key={id}>
                  <div className="title">
                    <h5 className="menu_title">{title}</h5>
                  </div>
                </Tab>
              ))}
            </TabList>
            {data.map(({ id, courseLink, scenarios }) => (
              <TabPanel className="content" key={id}>
                <Row className="row-wrapper">
                  {scenarios.map(({ subId, title, cover, info, embed, link }) => (
                    <Col {...content && ID === subId ? { xs: 12, sm: 12, lg: 12 } : { xs: 12, sm: 6 }} key={subId}>
                      <ScenarioCard
                        title={title}
                        info={info}
                        cover={cover}
                        content={content}
                        embed={embed}
                        courseLink={courseLink}
                        link={link}
                        subId={subId}
                        ID={ID}
                        toggleActive={(subId) => {
                          toggleActive(subId);
                        }}
                      />
                    </Col>
                  ))}
                </Row>
              </TabPanel>
            ))}
          </Tabs>
        </Container>
        <div className="join-community">
          <div className="join-community_text-and_button">
            <h1>Use Service Mesh Patterns</h1>
            <p>Service mesh patterns help you get the most out of any service mesh. Each pattern can be used as a template and is customizable.</p>
            <Button primary title="Visit Service Mesh Patterns website" url="https://service-mesh-patterns.github.io/service-mesh-patterns/" external="true" />
          </div>
        </div>
      </div>
    </LabsWrapper>
  );
};

export default ServiceMeshLabs;
