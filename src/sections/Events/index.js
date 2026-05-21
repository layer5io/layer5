import React, { useState } from "react";
import { MeetupStyle } from "./meetups.style";
import Card from "../../components/Card";
import { Col, Container, Row } from "../../reusecore/Layout";
import Pager from "../../components/pager";
import UpcomingEvents from "../../components/UpcomingEventCard";
import PageHeader from "../../reusecore/PageHeader";
import Button from "../../reusecore/Button";
import RssFeedIcon from "../../assets/images/socialIcons/rss-sign.svg";

const Meetups = ({ data, pageContext }) => {
  const [active, setActive] = useState("all");

  const sortEvents = (nodes) => {
    return nodes
      .slice()
      .sort(
        (first, second) =>
          new Date(second.frontmatter.date.replace(/(st|nd|rd|th),/g, "")) -
          new Date(first.frontmatter.date.replace(/(st|nd|rd|th),/g, "")),
      );
  };

  return (
    <MeetupStyle>
      <main>
        <PageHeader
          title="Events"
          path="Community/Events"
          img={RssFeedIcon}
          feedlink="/events/feed.xml"
        />
        <h2 className="event-subhead">Join Layer5 at these events</h2>
        <UpcomingEvents data={data.allUpcoming} />
        <Container>
          <div
            className="filterBtns"
            role="group"
            aria-label="Filter events by type"
          >
            <Button
              className={active === "all" ? "active" : ""}
              onClick={() => setActive("all")}
              title="All"
              aria-pressed={active === "all"}
            />
            <Button
              className={active === "events" ? "active" : ""}
              onClick={() => setActive("events")}
              title="Events"
              aria-pressed={active === "events"}
            />
            <Button
              className={active === "workshops" ? "active" : ""}
              onClick={() => setActive("workshops")}
              title="Workshops"
              aria-pressed={active === "workshops"}
            />
            <Button
              className={active === "meetups" ? "active" : ""}
              onClick={() => setActive("meetups")}
              title="MeetUps"
              aria-pressed={active === "meetups"}
            />
          </div>
          <div>
            <Row style={{ flexWrap: "wrap" }}>
              {active === "all" &&
                sortEvents(data.allCategories.nodes).map((category) => (
                  <Col $xs={12} $sm={6} $lg={4} key={category.id}>
                    <Card
                      frontmatter={category.frontmatter}
                      fields={category.fields}
                    />
                  </Col>
                ))}
              {active === "events" &&
                sortEvents(data.allEvents.nodes).map((event) => (
                  <Col $xs={12} $sm={6} $lg={4} key={event.id}>
                    <Card
                      frontmatter={event.frontmatter}
                      fields={event.fields}
                    />
                  </Col>
                ))}
              {active === "workshops" &&
                sortEvents(data.allWorkshops.nodes).map((workshop) => (
                  <Col $xs={12} $sm={6} $lg={4} key={workshop.id}>
                    <Card
                      frontmatter={workshop.frontmatter}
                      fields={workshop.fields}
                    />
                  </Col>
                ))}
              {active === "meetups" &&
                sortEvents(data.allMeetups.nodes).map((meetup) => (
                  <Col $xs={12} $sm={6} $lg={4} key={meetup.id}>
                    <Card
                      frontmatter={meetup.frontmatter}
                      fields={meetup.fields}
                    />
                  </Col>
                ))}
            </Row>
          </div>
          {active === "all" && (
            <Pager pageContext={pageContext} text={"Events"} />
          )}
        </Container>
      </main>
    </MeetupStyle>
  );
};

export default Meetups;
