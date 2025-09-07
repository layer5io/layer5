import React from "react";
import styled from "styled-components";
import { Row, Col, Container } from "../../../reusecore/Layout";
import Button from "../../../reusecore/Button";
import Five from "../image/hero-section.png";


const AcademyHeaderWrapper = styled.div`
  font-family: "Qanelas Soft", sans-serif;
  
  .academy-platform.header {
    background: linear-gradient(135deg, #0a1a1a 0%, #1a2d2d 25%, #2d4a47 50%, #1a2d2d 75%, #0a1a1a 100%);
    padding: 2rem 0;
    position: relative;
    overflow: hidden;
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: radial-gradient(circle at 20% 80%, rgba(0, 179, 159, 0.15) 0%, transparent 60%),
                  radial-gradient(circle at 80% 20%, rgba(0, 179, 159, 0.1) 0%, transparent 60%);
      pointer-events: none;
    }
    
    .container {
      position: relative;
      z-index: 2;
    }
    
    .header__content {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .header__title {
      color: #ffffff;
      font-size: 4rem;
      font-weight: 600;
      line-height: 1.15;
      margin-bottom: 1.5rem;
      letter-spacing: -0.02em;
      
      .highlight {
        background: linear-gradient(135deg, #00b39f, #00d3a9);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }
    }
    .header__subtitle {
      font-size: 1.75rem;
      font-weight: 500;
      color: #b8d4d1;
      margin-bottom: 2rem;
      line-height: 1.4;
    }
    .header__buttons {
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


    /* Mobile Styles */
    @media screen and (max-width: 768px) {
      padding: 2rem 0;
      
      .header__content {
        text-align: center;
      }
      
      .header__title {
        font-size: 2.5rem;
      }
      
      .header__subtitle {
        font-size: 1.25rem;
      }
      
      
      .header__buttons {
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

                <p className="header__subtitle">
                  Interactive courses and labs, real-world practices, and enterprise-ready training, transforming cloud native theory into hands-on expertise.
                </p>

                <div className="header__buttons">
                  <Button
                    $primary
                    title="Browse All Programs"
                    $external={true}
                    $url="https://cloud.layer5.io/academy"
                  />
                </div>
              </div>
            </Col>

            <Col className="col academy-visual" $lg={5} $md={6}>
              <div className="cards-container">
                <img src={Five} alt="Academy Hero Section" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </AcademyHeaderWrapper>
  );
};

export default Header;