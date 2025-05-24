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

  if (!data || !data.allCategories || !data.allCategories.nodes) {
    return (
      <MeetupStyle>
        <PageHeader title="Events" path="Community/Events" img={RssFeedIcon} feedlink="/events/feed.xml" />
        <h2 className="event-subhead">Join Layer5 at these events</h2>
        <Container>
          <p style={{ textAlign: "center", margin: "2rem 0" }}>No events available.</p>
        </Container>
      </MeetupStyle>
    );
  }

  const sortEvents = (nodes) => {
    if (!nodes || !Array.isArray(nodes)) return [];
    return nodes.slice().sort((first, second) => {
      const date1 = first?.frontmatter?.date?.replace(/(st|nd|rd|th),/g, "");
      const date2 = second?.frontmatter?.date?.replace(/(st|nd|rd|th),/g, "");
      if (!date1 || !date2) return 0;
      return new Date(date2) - new Date(date1);
    });
  };

  const getFilteredEvents = () => {
    const nodes = data.allCategories.nodes;
    if (!nodes || !Array.isArray(nodes)) return [];

    switch (active) {
      case "events":
        return sortEvents(nodes.filter(node => node?.frontmatter?.type === "Event"));
      case "workshops":
        return sortEvents(nodes.filter(node => node?.frontmatter?.type === "Workshop"));
      case "meetups":
        return sortEvents(nodes.filter(node => node?.frontmatter?.type === "Meetups"));
      default:
        return sortEvents(nodes);
    }
  };

  const filteredEvents = getFilteredEvents();
  const previousUrl = pageContext?.currentPage > 2
    ? `/community/events/${pageContext.currentPage - 1}`
    : "/community/events";
  const nextUrl = `/community/events/${(pageContext?.currentPage || 1) + 1}`;

  return (
    <MeetupStyle>
      <PageHeader title="Events" path="Community/Events" img={RssFeedIcon} feedlink="/events/feed.xml" />
      <h2 className="event-subhead">Join Layer5 at these events</h2>
      {data.allUpcoming?.nodes?.length > 0 && <UpcomingEvents data={data.allUpcoming} />}
      <Container>
        <div className="filterBtns">
          <Button className={active === "all" ? "active" : ""} onClick={() => setActive("all")} title="All" />
          <Button className={active === "events" ? "active" : ""} onClick={() => setActive("events")} title="Events" />
          <Button className={active === "workshops" ? "active" : ""} onClick={() => setActive("workshops")} title="Workshops" />
          <Button className={active === "meetups" ? "active" : ""} onClick={() => setActive("meetups")} title="MeetUps" />
        </div>
        <div>
          <Row style={{ flexWrap: "wrap" }}>
            {filteredEvents.length === 0 ? (
              <Col $xs={12}>
                <p style={{ textAlign: "center", margin: "2rem 0" }}>No events found.</p>
              </Col>
            ) : (
              filteredEvents.map(item => (
                <Col $xs={12} $sm={6} $lg={4} key={item.id}>
                  <Card frontmatter={item.frontmatter} fields={item.fields} />
                </Col>
              ))
            )}
          </Row>
        </div>
        {pageContext?.numberOfPages > 1 && active === "all" && filteredEvents.length > 0 && (
          <Pager
            previousUrl={previousUrl}
            nextUrl={nextUrl}
            currentPage={pageContext.currentPage || 1}
            totalPages={pageContext.numberOfPages}
          />
        )}
      </Container>
    </MeetupStyle>
  );
};

export default Meetups;
