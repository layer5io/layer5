import React from "react";
import styled from "styled-components";
import { Row, Col, Container } from "../../reusecore/Layout";
import HeroImage from "./images/hero-image.svg";
import Button from "../../reusecore/Button";

const SolutionsHeaderWrapper = styled.div`
  .solutions.header {
    min-height: 35rem;
    background: ${({ theme }) => theme.linearToGreen};
    display: flex;
    align-items: center;
    align-content: space-between;
    flex-direction: column;
    justify-content: center;
    .header__detail {
      display: flex;
      flex-direction: column;
    }
    .header__title {
      color: ${(props) => props.theme.primaryColor};
      padding-right: 80px;
      margin-bottom: 20px;
    }
    .header__title_description {
      color: ${(props) => props.theme.tertiaryColor};
      transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
      font-weight: 400;
      font-size: 1.438rem;
      line-height: 2rem;
      padding-right: 80px;
      margin-bottom: 30px;
    }
    .solution-hero {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      img {
        max-width: 70%;
      }
    }

    @media screen and (max-width: 992px) {
      padding-bottom: 100px;
      .solution-hero {
        margin: 50px 0 0 0;
      }
    }

    @media screen and (max-width: 768px) {
      padding: 50px 0;
      .header__detail {
        display: flex;
        flex-direction: column;
      }
      .header__title {
        padding-right: 0;
        text-align: center;
        margin-bottom: 10px;
      }
      .header__title_description {
        padding-right: 0;
        text-align: center;
        margin-bottom: 20px;
      }
      .header__button_section {
        display: flex;
        justify-content: center;
      }
    }
  }
`;

const Hero = () => {
  return (
    <SolutionsHeaderWrapper>
      <div className="solutions header">
        <Container>
          <Row className="row">
            <Col className="col header__detail" md={6}>
              <h1 className="header__title">Cost, incident and chaos oversight</h1>
              <p className="header__title_description">
                Save cost, reduce risk and manage  infrastructure failure.
              </p>
              <div className="header__button_section">
                <Button
                  $secondary
                  title="Book a demo"
                  $external={true}
                  $url="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3pmcApaDP4xd8hvG5fy8ylxuFxD3akIRc5vpWJ60q-HemQi80SFFAVftbiIsq9pgiA2o8yvU56?gv=true"
                />
              </div>
            </Col>
            <Col className="col solution-hero" $md={6}>
              <img src={HeroImage} alt="hero image" />
            </Col>
          </Row>
        </Container>
      </div>
    </SolutionsHeaderWrapper>
  );
};

export default Hero;
