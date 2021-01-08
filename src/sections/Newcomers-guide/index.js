import React from "react";
import {Col, Container, Row} from "../../reusecore/Layout";
import PageHeader from "../../reusecore/PageHeader";
import { NewcomersGuideWrapper } from "./NewcomersPageWrapper.style";
import NewcomersJourney from "./newcomers.svg";
import CommunityImage1 from "./community-image1.png";
import CommunityImage2 from "./community-image2.png";
import CommunityImage3 from "./community-image3.png";
import TutorialsTable from "../Tutorials-table";


const NewcomersGuide = () => {
    return (
        <NewcomersGuideWrapper>
            <PageHeader title="Welcome Newcomers!"/>
            <Container>
                <div className="newcomers-welcome">
                    <p>
                        Whether you are a first time contributor or an open source veteran,you are welcome to
                        contribute to and actively engage in the development of projects at Layer5.
                        Here are some instructions to get you started and if you haven’t joined yet,
                        join the Slack workspace to collaborate with the community.
                        Also, you can check the quick-links below for jumping straight into things.
                    </p>
                    <Row className="newcomers-journey">
                        <Col className="heading" sm={12} lg={6}>
                            <h2>Contributor's Journey</h2>
                        </Col>
                        <Col sm={12} lg={6}>
                            <img src={NewcomersJourney} alt="Newcomers Journey"/>
                        </Col>
                    </Row>
                    <Row className="how-to-contribute">
                        <h3>How to Contribute?</h3>
                        <p>
                            The following set of steps outlines the process by which you can openly engage,
                            learn, and participate in the broad set of open source projects at Layer5.
                            If at any time you get stuck, please seek help in the #newcomers channel in the Layer5 (joining instructions below).
                            Our MeshMates and community members are here to help!
                        </p>
                    </Row>
                </div>
                <div className="instructions">
                    <Row className="step">
                        <Col sm={12} lg={6}>
                            <img src={CommunityImage1} alt="Community Image"/>
                        </Col>
                        <Col sm={12} lg={6}>
                            <h3>Finding an Issue to Work On</h3>
                            <ol type="i">
                                <li>
                                    Browse the list of Layer5 org issues bearing the “ good first issue ” label, “ first timers only ” or the“  help wanted ” label.
                                </li>
                                <li>
                                    Alternatively, find an area of interest by reviewing/browsing the Layer5 Repository Overview document.
                                </li>
                                <li>
                                    After identifying the issue you wish to work on, check whether
                                    it has been assigned or not by taking a look at the assignee section on the issue.
                                    If it hasn't been, signal your interest by commenting on the issue so that it can be assigned to you.
                                </li>
                            </ol>
                        </Col>
                    </Row>
                    <Row className="step">
                        <Col sm={12} lg={6}>
                            <h3>Working on Your Issue</h3>
                            <ol type="i">
                                <li>
                                    Once an issue has been assigned to you, it’s time to get started! Make sure you take a look at the Contributing Guidelines .
                                </li>
                                <li>
                                    Be sure to sign-off on your commits .
                                </li>
                                <li>
                                    Contributions of all sizes are welcome.
                                </li>
                                <li>
                                    If you need some additional help, please join Layer5 Slack
                                    workspace at http://slack.layer5.io and find your way to the #newcomers channel.
                                    Feel free to ask questions.
                                </li>
                            </ol>
                        </Col>
                        <Col sm={12} lg={6}>
                            <img src={CommunityImage2} alt="Community Image"/>
                        </Col>
                    </Row>
                    <Row className="step">
                        <Col sm={12} lg={6}>
                            <img src={CommunityImage3} alt="Community Image"/>
                        </Col>
                        <Col sm={12} lg={6}>
                            <h3>While Your Issue is under Review</h3>
                            <p>
                                Be patient. There are a large number of contributors and only a small number of maintainers/reviewers.
                                All contributors are equally important to us, and we'll be sure to get to you as soon as possible.
                                In the meanwhile, you are welcome to join our Slack workspace and take a look at all our projects.
                            </p>
                        </Col>
                    </Row>
                </div>
                <div className="table-wrapper">
                    <h2>Tutorials</h2>
                    <h5>Checkout some of the resources to get going</h5>
                    <TutorialsTable/>
                </div>
            </Container>
        </NewcomersGuideWrapper>
    );
};

export default NewcomersGuide;
