import React, { useState } from "react";
import { MeetupStyle } from "./meetups.style";
import Card from "../../components/Card";
import { Col, Container, Row } from "../../reusecore/Layout";
import Pager from "../../components/pager";
import UpcomingEvents from "../../components/UpcomingEventCard";
import PageHeader from "../../reusecore/PageHeader";
import Button from "../../reusecore/Button";

const Meetups = ({ data, pageContext }) => {
  const [active, setActive] = useState("all");

  return(
    <MeetupStyle>
      <PageHeader title="Upcoming Events" path="Community/Events"/>
      {/* <h3 className="event-subhead">Join us</h3> */}
      <UpcomingEvents data={data.allUpcoming} />
      <Container>
        <div className="filterBtns">
          <Button className={active == "all" ? "active" : ""} onClick={() => setActive("all")} title="All" />
          <Button className={active == "events" ? "active" : ""} onClick={() => setActive("events")} title="Events" />
          <Button className={active == "workshops" ? "active" : ""} onClick={() => setActive("workshops")} title="Workshops" />
          <Button className={active == "meetups" ? "active" : ""} onClick={() => setActive("meetups")}  title="MeetUps"/>
        </div>
        <div>
          <Row>
            {active == "all" ? data.allCategories.nodes.map(category => {
              return(
                <Col xs={12} sm={6} lg={4} key={category.id}>
                  <Card frontmatter={category.frontmatter} fields={false} />
                </Col>
              );
            }) : <></> }
            {active == "events" ? data.allEvents.nodes.map(event => {
              return(
                <Col xs={12} sm={6} lg={4} key={event.id}>
                  <Card frontmatter={event.frontmatter} fields={false} />
                </Col>
              );
            }) : <></>}
            {active == "workshops" ? data.allWorkshops.nodes.map(workshop => {
              return(
                <Col xs={12} sm={6} lg={4} key={workshop.id}>
                  <Card frontmatter={workshop.frontmatter} fields={false} />
                </Col>
              );
            }) : <></>}
            {active == "meetups" ? data.allMeetups.nodes.map(meetup => {
              return(
                <Col xs={12} sm={6} lg={4} key={meetup.id}>
                  <Card frontmatter={meetup.frontmatter} fields={false} />
                </Col>
              );
            }) : <></>}
          </Row>
        </div>
        {active == "all" ? <Pager pageContext={pageContext} text={"Events"} /> : <></>}
      </Container>
    </MeetupStyle>
  );
};

export default Meetups;
