import React from "react";
import styled from "styled-components";
import { Row, Col, Container } from "../../../reusecore/Layout";
import Button from "../../../reusecore/Button";
import Cone from "../../../assets/images/gitops/conelight.svg";
import { ReactComponent as AcademyLogo } from "../../../assets/images/academy/academy.svg";
const AcademyHeaderWrapper = styled.div`  
  .academy-platform.header {
    min-height: 40rem;
    background: ${({ theme }) => theme.linearToGreen};
    display: flex;
    align-items: center;
    align-content: space-between;
    flex-direction: column;
    justify-content: center;
    
    .header__content {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .header__title {
      color: ${(props) => props.theme.primaryColor};
      padding-right: 80px;
      margin-bottom: 20px;
      
      .highlight {
        background: linear-gradient(135deg, #00b39f, #00d3a9);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }
    }
    .header__title_description {
      color: ${(props) => props.theme.tertiaryColor};
      transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
      font-weight: 400;
      font-size: 1.438rem;
      line-height: 2rem;
      margin-bottom: 30px;
    }
    .header__button_section {
      display: flex;
      gap: 1.5rem;
      align-items: center;
      flex-wrap: wrap;
    }
    .academy-visual {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 1rem 0 2.5rem 0;
      min-height: 500px;
    }
    .cards-container {
      position: relative;
      width: 100%;
      max-width: 450px;
      height: 550px;
      
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 16px;
        box-shadow: 0 20px 40px rgba(0, 179, 159, 0.15),
                    0 8px 16px rgba(0, 0, 0, 0.1);
        border: 1px solid rgba(0, 179, 159, 0.3);
        transition: all 0.3s ease;
        
        &:hover {
          transform: translateY(-5px);
          box-shadow: 0 25px 50px rgba(0, 179, 159, 0.2),
                      0 12px 24px rgba(0, 0, 0, 0.15);
        }
      }
    }
    .hero-image-container {
      height: 250px;
      width: 300px;
      position: relative;
      display:flex;
      align-items: center;
      justify-content: center;
    }

    /* Mobile Styles */
    @media screen and (max-width: 768px) {
      padding: 2rem 0;
      
      .header__content {
        text-align: center;
      }
      
      .header__title {
        font-size: 2.5rem;
        text-align: center;
        margin-bottom: 10px;
      }
      
      .header__title_description {
        font-size: 1.25rem;
        text-align: center;
        margin-bottom: 20px;
      }
      
      .header__button_section {
        display: flex;
        justify-content: center;
        
        button {
          width: 100%;
          max-width: 260px;
        }
      }
      .academy-visual {
        margin-top: 1.5rem;
        min-height: 430px;
      }
      .cards-container {
        max-width: 360px;
        height: 420px;
      }
      
      .hero-image-container {
        height: 200px;
        width: 250px;
        margin: 0 auto;
      }

    }
    /* Tablet Styles */
    @media screen and (min-width: 769px) and (max-width: 1024px) {
      padding: 3rem 0;
      
      .header__title {
        font-size: 3.5rem;
      }
      
      .header__subtitle {
        font-size: 1.5rem;
      }
      
      .cards-container {
        max-width: 420px;
        height: 520px;
      }
    }
  }
`;

const Header = ({ isDark }) => {
  return (
    <AcademyHeaderWrapper isDark={isDark}>
      <div className="academy-platform header">
        <Container>
          <Row className="row" style={{ alignItems: "center" }}>
            <Col className="col" $lg={7} $md={6}>
              <div className="header__content">
                <h1 className="header__title">
                  Learn Cloud Native, <br/><span className="highlight">the Modern Way</span>
                </h1>

                <p className="header__title_description">
                  Interactive courses and labs, real-world practices, and enterprise-ready training, transforming cloud native theory into hands-on expertise.
                </p>

                <div className="header__button_section">
                  <Button
                    $primary
                    title="Browse All Programs"
                    $external={true}
                    $url="https://cloud.layer5.io/academy"
                  />
                </div>
              </div>
            </Col>

            <Col className="hero-image" $lg={6} $md={6}>
              <div className="hero-image-container">
                <AcademyLogo className="academy-logo" style={{ position: "absolute", height: "180px", width: "180px", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}/>
                <img src={Cone} className="cone-image"/>
              </div>
            </Col>

          </Row>
        </Container>
      </div>
    </AcademyHeaderWrapper>
  );
};

export default Header;