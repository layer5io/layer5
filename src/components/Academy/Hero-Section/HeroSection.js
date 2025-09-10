import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Row, Col, Container } from "../../../reusecore/Layout";
import Button from "../../../reusecore/Button";

import Card1Image from "../images/hero1.png";
import Card2Image from "../images/hero4.png";
import Card3Image from "../images/hero3.png";

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

    .header__description {
      color: #d4e6e4;
      font-weight: 300;
      font-size: 1.25rem;
      line-height: 1.6;
      margin-bottom: 2.5rem;
      max-width: 90%;
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
    }

    .card {
      position: absolute;
      width: 320px;
      height: 160px;
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 20px 40px rgba(0, 179, 159, 0.15);
      transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      border: 1px solid rgba(0, 179, 159, 0.2);

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.4s ease;
      }

    }

    .card-1 {
      top: 20px;
      left: 0;
      z-index: 3;
      opacity: 0;
      transform: translateX(-150%);
      animation: ${props => props.isVisible ? "slideInLeft 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards" : "none"};
      animation-delay: 0.3s;
    }

    .card-2 {
      top: 200px;
      right: 0;
      z-index: 2;
      opacity: 0;
      transform: translateX(150%);
      animation: ${props => props.isVisible ? "slideInRight 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards" : "none"};
      animation-delay: 0.6s;
    }

    .card-3 {
      bottom: 20px;
      left: 0;
      z-index: 1;
      opacity: 0;
      transform: translateX(-150%);
      animation: ${props => props.isVisible ? "slideInLeft 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards" : "none"};
      animation-delay: 0.9s;
    }

    @keyframes slideInLeft {
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }

    @keyframes slideInRight {
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }

    @keyframes float {
      0%, 100% {
        transform: translateY(0px);
      }
      50% {
        transform: translateY(-10px);
      }
    }

    .card-1, .card-3 {
      animation: ${props => props.isVisible ? "slideInLeft 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards, float 4s ease-in-out infinite 2s" : "none"};
    }

    .card-2 {
      animation: ${props => props.isVisible ? "slideInRight 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards, float 4s ease-in-out infinite 2.3s" : "none"};
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
      
      .header__description {
        font-size: 1rem;
        max-width: 100%;
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

      .card {
        width: 230px;
        height: 115px;
      }

      .card-1 {
        top: 20px;
        left: 0;
      }

      .card-2 {
        top: 155px;
        right: 0;
        left: auto;
      }

      .card-3 {
        bottom: 20px;
        left: 0;
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
      
      .header__description {
        font-size: 1.125rem;
      }

      .cards-container {
        max-width: 420px;
        height: 520px;
      }

      .card {
        width: 300px;
        height: 150px;
      }

      .card-2 {
        top: 185px;
      }
    }
  }
`;

const Header = ({ isDark }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AcademyHeaderWrapper isDark={isDark} isVisible={isVisible}>
      <div className="academy-platform header">
        <Container>
          <Row className="row" style={{ alignItems: "center" }}>
            <Col className="col" $lg={7} $md={6}>
              <div className="header__content">
                <h1 className="header__title">
                  Cloud <span className="highlight">Mastery</span>
                </h1>

                <p className="header__subtitle">
                  Master Modern Infrastructure
                </p>

                <p className="header__description">
                  Master cloud native technologies through hands-on courses, interactive labs, and real-world projects. Join thousands of practitioners advancing their careers with industry-proven skills.
                </p>

                <div className="header__buttons">
                  <Button
                    $primary
                    title="Get Started"
                    $external={true}
                    $url="https://cloud.layer5.io/academy"
                  />
                </div>
              </div>
            </Col>

            <Col className="col academy-visual" $lg={5} $md={6}>
              <div className="cards-container">
                <div className="card card-1">
                  <img src={Card1Image} alt="Academy Card 1" />
                </div>
                <div className="card card-2">
                  <img src={Card2Image} alt="Academy Card 2" />
                </div>
                <div className="card card-3">
                  <img src={Card3Image} alt="Academy Card 3" />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </AcademyHeaderWrapper>
  );
};

export default Header;