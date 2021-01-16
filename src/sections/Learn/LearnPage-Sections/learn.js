import React from "react";
import { Col } from "../../../reusecore/Layout";
import Button from "../../../reusecore/Button";
import {FaArrowRight} from "react-icons/fa";
import Meshery_Logo from "../../../assets/images/meshery/meshery-logo-light.svg";
import styled from "styled-components";

const LearnSectionWrapper = styled.div`

    background: #000000;
    padding: 8rem 6rem 6rem;
    min-height: 25rem;

    .learn-particle-img {
        width: 35rem;
        height: 27rem;
        overflow: hidden;
        margin-top: -8rem;
        position: absolute;
        right: 0;

        img {
            position: absolute;
            top: -8rem;
            right: -6rem;
        }
    }

    @media screen and (max-width: 1700px) {
        .learn-particle-img {
            width: 25rem;
            height: 18rem;

            img {
                top: -7rem;
                right: -5rem;
            }
        }
    }
    @media screen and (max-width: 1150px) {
        .learn-particle-img {
            width: 20rem;
            height: 16rem;

            img {
                top: -6rem;
                right: -4rem;
            }
        }
    }
    @media screen and (max-width: 992px) {
        .learn-particle-img {
            display: none;
        }

        padding: 5rem 3rem;
    }

    .learn-heading {
        color: ${props => props.theme.white};
        max-width: 40rem;
        margin: auto;
        text-align: center;
        span {
            color: ${props => props.theme.secondaryColor};
        }
    }

    .learn-buttons-section {
        text-align: center;
        margin: 3rem 0 5rem;

        .learn-mesh-buttons {
            display: flex;
            flex-wrap: wrap;
            width: 100%;
            margin: 2.5rem 0;
            justify-content: center;

            button {
                display: flex;
                flex: 0 0 40%;
                margin: 1rem;
                border-radius: 1rem;
                min-width: 16rem;
                min-height: 3.5rem;
                background: rgba(0, 179, 159, 0.2);

                &:hover {
                    background: ${props => props.theme.secondaryColor};
                }
            }
        }
    }
    @media screen and (max-width: 600px) {
        .learn-buttons-section {
            .learn-mesh-buttons {
                button {
                    flex: auto;
                }
            }
        }
    }

    .learn-cards-section {
        h2 {
            color: rgba(255, 255, 255, 0.5);
            text-align: center;
            margin: 3.5rem auto;
        }

        .cards-row {
            display: flex;
            flex-wrap: wrap;
            flex: auto;
            justify-content: center;

            .learn-card {
                max-width: 18rem;
                border: 1px solid white;
                padding: 1rem 0.75rem;
                margin: 1rem auto;
                transition: all 0.2s ease;

                h2, p{
                    text-align: left;
                    margin: 0.5rem 0;
                    color: white;
                }
                p {
                    font-size: 1rem;
                }
                .card-link {
                    margin-top: 1.5rem;

                    a {
                        display: inline-flex;

                        &:after {
                            content: '';
                            position: absolute;
                            top: 0;
                            right: 0;
                            left: 0;
                            bottom: 0;
                            margin: 1rem;
                        }
                    }
                    h5 {
                        display: inline-block;
                        font-weight: 500;
                        color: white;
                        margin-right: 0.5rem;
                    }
                    svg {
                        color: white;
                        position: relative;
                        height: 1.5rem;
                        left: 0;
                        transition: all 0.2s ease;
                    }
                }
                &:hover {
                    border-color: ${props => props.theme.secondaryColor};

                    .card-link {
                        svg {
                            left: 0.25rem;
                        }
                    }
                }
            }
        }
    }

    @media screen and (max-width: 1400px) and (min-width: 993px) {
        .learn-cards-section {
            .cards-row {
                .col{
                    flex: 0 0 33.33%;
                    max-width: 33.33%;
                }
            }
        }
    }
    @media screen and (max-width: 800px) and (min-width: 576px) {
        .learn-cards-section {
            .cards-row {
                .learn-card{
                    min-height: 17rem;

                    .card-link {
                        position: absolute;
                        bottom: 2rem;
                    }
                }
            }
        }
    }
`;

const LearnSection = () => {
    return (
        <LearnSectionWrapper>
            <div className="learn-particle-img">
                <img src={Meshery_Logo} alt="Meshery Logo"/>
            </div>
            <div>
                <h1 className="learn-heading"><span>Meshery - </span> Learn how to manage your service mesh</h1>
                <div className="learn-buttons-section">
                    <div className="learn-mesh-buttons">
                        <Button secondary title="Learn how to run Meshery" url="/projects/meshery" />
                        <Button secondary title="Install service meshes" url="/" />
                        <Button secondary title="Deploy sample apps" url="/" />
                    </div>
                    <Button primary title="Start Learning" url="/service-mesh" />
                </div>
                <div className="learn-cards-section">
                    <h2>Learn to Service Mesh through interactive labs</h2>
                    <div className="cards-row">
                        <Col xs={12} sm={6} xl={3}>
                            <div className="learn-card">
                                <h2>Working with Meshery and Istio</h2>
                                <p>Learn how to run Meshery, install Istio and deploy a sample app</p>
                                <div className="card-link">
                                    <a href="/" target="_blank" rel="noreferrer">
                                        <h5>Start Scenario</h5>
                                        <FaArrowRight />
                                    </a>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} sm={6} xl={3}>
                            <div className="learn-card">
                                <h2>Working with Meshery and Linkerd</h2>
                                <p>Learn how to run Meshery, install Linkerd and deploy a sample app</p>
                                <div className="card-link">
                                    <a href="/" target="_blank" rel="noreferrer">
                                        <h5>Start Scenario</h5>
                                        <FaArrowRight />
                                    </a>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} sm={6} xl={3}>
                            <div className="learn-card">
                                <h2>Working with Meshery and Consul</h2>
                                <p>Learn how to run Meshery, install Consul and deploy a sample app</p>
                                <div className="card-link">
                                    <a href="/" target="_blank" rel="noreferrer">
                                        <h5>Start Scenario</h5>
                                        <FaArrowRight />
                                    </a>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} sm={6} xl={3}>
                            <div className="learn-card">
                                <h2>Working with Meshery and Kuma</h2>
                                <p>Learn how to run Meshery, install Kuma and deploy a sample app</p>
                                <div className="card-link">
                                    <a href="/" target="_blank" rel="noreferrer">
                                        <h5>Start Scenario</h5>
                                        <FaArrowRight />
                                    </a>
                                </div>
                            </div>
                        </Col>
                    </div>
                </div>
            </div>
        </LearnSectionWrapper>
    );
};

export default LearnSection;
