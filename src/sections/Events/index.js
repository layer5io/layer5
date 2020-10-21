import React from "react";
import { MeetupStyle } from "./meetups.style";
import Card from "../../components/EventCard";
import {Col, Container, Row} from "../../reusecore/Layout";

const Meetup = (data) =>{
    return(
        <MeetupStyle>
            <br></br>
            <h1>Events</h1>
            <p>Want to learn more about our projects? Find out which events the layer5 team is speaking at in your area!</p>
            <div>
                <Container>
                    <div>
                        <Row>
                            {data.data.events.nodes.map(({id,frontmatter, fields }) => (
                                <Col xs={12} sm={6} lg={4} key={id}>
                                    <Card frontmatter={frontmatter} fields={fields}/>
                                </Col>
                            ))}
                        </Row>
                    </div>
                </Container>
            </div>
            <h1>Meetups</h1>
            <div>
                <Container>
                    <div>
                        <Row>
                            {data.data.meetups.nodes.map(({id,frontmatter, fields }) => (
                                <Col xs={12} sm={6} lg={6} key={id}>
                                    <Card frontmatter={frontmatter} fields={fields}/>
                                </Col>
                            ))}
                        </Row>
                    </div>
                </Container>
            </div>
        </MeetupStyle>
    );
};

export default Meetup;
