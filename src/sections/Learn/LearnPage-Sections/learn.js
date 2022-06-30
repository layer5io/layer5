import React from "react";
import { Link } from "gatsby";
import { Col, Container, Row } from "../../../reusecore/Layout";
import Button from "../../../reusecore/Button";
import { FaArrowRight } from "@react-icons/all-files/fa/FaArrowRight";
import Meshery_Logo from "../../../assets/images/meshery/icon-only/meshery-logo-light.svg";
import OReillyLogo from "./OReilly_logo_rgb.svg";
import { data } from "../Service-Mesh-Labs/courseData";
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
        margin: 4rem 0 2rem;
        &.labs{
          button{
            max-width: 20rem;
            padding-left: 2rem;
            padding-right: 2rem;
            border-radius: 20px;
            font-weight: 700;
            margin-bottom: 1rem;
          }
          
          img{
            margin-top: 3rem;
            opacity: 0.5;
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
            justify-content: space-evenly;

            .link {
                display: block;
                max-width: 20rem;
                margin: auto;
            }

            .learn-card {
                max-width: 20rem;
                height: 18.5rem;
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
                    display: inline-flex;
                    margin-top: 1.5rem;
                    position: absolute;
                    bottom: 2rem;
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

    @media screen and (max-width: 992px) and (min-width: 675px) {
        .learn-cards-section {
            .cards-row {
                .learn-card{
                    height: 15rem;
                }
            }
        }
    }
    @media screen and (max-width: 576px) and (min-width: 425px) {
        .learn-cards-section {
            .cards-row {
                .learn-card{
                    height: 14rem;
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
        <Container>
          <Row Hcenter className="learn-buttons-section labs">
            <Col xs={12} lg={6}>
              <Link to="/learn/service-mesh-labs" state={{ selectedIndex: 0 }}>
                <Button secondary title="Getting started with any service mesh"/>
              </Link>
            </Col>
            <Col xs={12} lg={6}>
              <Link to="/learn/service-mesh-labs" state={{ selectedIndex: 1 }}>
                <Button secondary title="Managing the performance of your service mesh"/>
              </Link>
            </Col>
            <img src={OReillyLogo} alt="OReilly Logo"/>
          </Row>
        </Container>
        <div className="learn-cards-section">
          <h2>Learn to Service Mesh through interactive labs</h2>
          <div className="cards-row">
            {data[0].scenarios.map(({ subId, title, info, link }, index) => (
              index < 4 && (
                <Col xs={12} sm={6} lg={4} xl={3} key={subId}>
                  <Link className="link" to={link}>
                    <div className="learn-card">
                      <h2>{title}</h2>
                      <p>{info}</p>
                      <div className="card-link">
                        <h5>Start Scenario</h5>
                        <FaArrowRight />
                      </div>
                    </div>
                  </Link>
                </Col>
              )
            ))}
          </div>
        </div>
      </div>
      <div className="learn-buttons-section">
        <Button primary title="Checkout all the labs" url="/learn/service-mesh-labs" />
      </div>
    </LearnSectionWrapper>
  );
};

export default LearnSection;
