import React from "react";
import combined from "./combined.svg";
import { Row, Col } from "../../reusecore/Layout";

const Card = ({ title, info, link }) => {
    return (
        <a href={link} target="_blank" rel="noreferrer">
            <div className="lab-card-block">
                <Row>
                    <Col xs={12} lg={6}>
                        <div className="cover">
                            <img src={combined} className="book-image" />
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
    );
};

export default Card;
