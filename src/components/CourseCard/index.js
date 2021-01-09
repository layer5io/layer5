import React from "react";
import { Row, Col } from "../../reusecore/Layout";
import { CourseCardWrapper } from "./CourseCard.style";

const Card = ({ title, info, link, cover }) => {
    return (
        <CourseCardWrapper>
            <a href={link} target="_blank" rel="noreferrer">
                <div className="lab-card-block">
                    <Row>
                        <Col xs={12} lg={6}>
                            <div className="cover">
                                <img src={cover} className="image" />
                            </div>
                        </Col>
                        <Col xs={12} lg={6}>
                            <div className="description">
                                <h4>{title}</h4>
                                <p>{info}</p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </a>
        </CourseCardWrapper>
    );
};

export default Card;
