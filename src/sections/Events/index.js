import React, { useState } from "react";
import { MeetupStyle } from "./meetups.style";
import Card from "../../components/EventCard";
import { Col, Container, Row } from "../../reusecore/Layout";
import Pagination from "../../reusecore/Pagination";
import UpcomingEvents from "../../components/UpcomingEventCard";

const Meetups = ({ data, pageContext }) =>{
    const [active, setActive] = useState("all");

    return(
        <MeetupStyle>
            <br></br>
            <h1>Events</h1>
            <p>Want to learn more about our projects? Find out which events the layer5 team is speaking at in your area!</p>
            <UpcomingEvents data={data.allUpcoming} />
            <div>
                <Container>
                    <div className="filterBtns">
                        <button className={active == "all" ? "active" : ""} onClick={() => setActive("all")}>All</button>
                        <button className={active == "events" ? "active" : ""} onClick={() => setActive("events")}>Events</button>
                        <button className={active == "workshops" ? "active" : ""} onClick={() => setActive("workshops")}>Workshops</button>
                        <button className={active == "meetups" ? "active" : ""} onClick={() => setActive("meetups")}>Meetups</button>
                    </div>
                    <div>
                        <Row>
                            {active == "all" ? data.allCategories.nodes.map(category => {
                                return(
                                    <Col xs={12} sm={6} lg={4} key={category.id}>
                                        <Card frontmatter={category.frontmatter} fields={category.fields} />
                                    </Col>
                                );
                            }) : <></> }
                            {active == "events" ? data.allEvents.nodes.map(event => {
                                return(
                                    <Col xs={12} sm={6} lg={4} key={event.id}>
                                        <Card frontmatter={event.frontmatter} fields={event.fields} />
                                    </Col>
                                );
                            }) : <></>}
                            {active == "workshops" ? data.allWorkshops.nodes.map(workshop => {
                                return(
                                    <Col xs={12} sm={6} lg={4} key={workshop.id}>
                                        <Card frontmatter={workshop.frontmatter} fields={workshop.fields} />
                                    </Col>
                                );
                            }) : <></>}
                            {active == "meetups" ? data.allMeetups.nodes.map(meetup => {
                                return(
                                    <Col xs={12} sm={6} lg={4} key={meetup.id}>
                                        <Card frontmatter={meetup.frontmatter} fields={meetup.fields} />
                                    </Col>
                                );
                            }) : <></>}
                        </Row>
                    </div>
                    {active == "all" ? <Pagination pageContext={pageContext} /> : <></>}
                </Container>
            </div>
        </MeetupStyle>
    );
};

export default Meetups;
