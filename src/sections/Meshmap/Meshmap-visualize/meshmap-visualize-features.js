import React from "react";
import styled from "styled-components";
import { Row, Col } from "../../../reusecore/Layout";
import PerformanceMetrics from "./images/performance-metrics-bars.svg";
import PerformanceMetricsGraphDark from "./images/performance-metrics-graph-dark.svg";
import PerformanceMetricsGraphLight from "./images/performance-metrics-graph-light.svg";
import { useState, useEffect } from "react";

const VisualizerFeaturesWrapper = styled.div`

display: flex;
width: 80%;
justify-content: center;
align-items: center;

.project__block__wrap{
        position: relative;
        width: 100%;
        height: fit-content;
        display: flex;
        flex-wrap: wrap;
        margin-bottom: 2rem;
        &:before {
            position: absolute;
            right: -2rem;
            bottom: 0;
        }
    }
    .project__block__inner {
        display: flex;
        flex-direction: column;
        background: ${props => props.theme.DarkTheme ? "#212121" : "#ffffff"};
        box-shadow: 0px 0px ${props => props.theme.projectShadowsize} ${props => props.theme.DarkTheme ? "#00D3A9" : "#E6E6E6"};
        &:hover{
            box-shadow: 0px 0px 5px ${props => props.theme.DarkTheme ? "#FFFFFF" : "#3c494f"};
        }
        padding: 10% 8%;
        height: fit-content;
        border-radius: 4%;
        text-align: center;
        justify-content: center;
        align-items: center;
        transition: all 0.5s ease;
        margin: 5% 0%;

        h3{
            margin: auto;
            font-weight: 700;
            font-size: 1.5rem;
            color: ${props => props.theme.secondaryColor};
            text-align: left;
            justify-content: left;
            margin-bottom: 2%;
        }
        p{
            font-weight: 300;
            color: ${props => props.theme.text};
            margin: auto;
        }

        img{
            height: auto;
            width: 70%;
            padding: 0% 0% 10%;
        }
        .gatsby-image-wrapper{
            margin: 10px auto;
            min-height: 40px;
        }
    }

    .darken {
      background: ${props => props.theme.DarkTheme ? "#121212" : "#ffffff"};
      /* scale:1.1; */
      /* transition: all 0.5s ease; */
      opacity: 0.7;
    }

    .feature-image {
      position: relative;
    }

    .secondary-image {
      opacity: 0;
      transition: all 0.5s ease-in-out;
    }

    .secondary-image-visible {
      opacity: 1;
      transition: all 0.5s ease-in-out;
    }
`;

const MeshmapVisualizerFeatures = ({ theme }) => {
  const [isHovered, setisHovered] = useState(false);
  const [hoveredFeature, sethoveredFeature] = useState("");

  const handleMouseOver = (num) => {
    setisHovered(true);
    sethoveredFeature(`${"Feature"}${num}`);
  };

  const handleMouseOut = () => {
    setisHovered(false);
    sethoveredFeature("");
  };

  return (
    <VisualizerFeaturesWrapper>
      <Row>
        <div className="project__block__wrap">
          <Col sm={12} md={6} lg={4}>
            <div className={(isHovered && hoveredFeature != "Feature3") ? "project__block__inner darken" : "project__block__inner"} onMouseOver={() => handleMouseOver(3)} onMouseOut={handleMouseOut}>
              <h3>Application Import</h3>
              <p>Import your existing Kubernetes, Helm, or Docker Compose applications.</p>
            </div>
          </Col>
          <Col sm={12} md={6} lg={4}>
            <div className={(isHovered && hoveredFeature != "Feature1") ? "project__block__inner darken" : "project__block__inner"} onMouseOver={() => handleMouseOver(1)} onMouseOut={handleMouseOut}>
              <div className="feature-image">
                <img src={PerformanceMetrics} alt="MeshMap Logo" style={{ position: "absolute" }} />
                <img src={theme == "dark" ? PerformanceMetricsGraphDark : PerformanceMetricsGraphLight} alt="MeshMap Logo" className={hoveredFeature == "Feature1" ? "secondary-image-visible" : "secondary-image"} />
              </div>
              <h3>Real-time performance metrics</h3>
              <p>Monitor your clusters performing in action, set alerts and work with object-specific metrics.</p>
            </div>
          </Col>
          <Col sm={12} md={6} lg={4}>
            <div className={(isHovered && hoveredFeature != "Feature2") ? "project__block__inner darken" : "project__block__inner"} onMouseOver={() => handleMouseOver(2)} onMouseOut={handleMouseOut}>
              <h3>Interactive Terminal</h3>
              <p>Establish sessions with one or more pods at a time.</p>
            </div>
          </Col>
          <Col sm={12} md={6} lg={4}>
            <div className={(isHovered && hoveredFeature != "Feature4") ? "project__block__inner darken" : "project__block__inner"} onMouseOver={() => handleMouseOver(4)} onMouseOut={handleMouseOut}>
              <h3>Timeline (DVR)</h3>
              <p>Playback service transactions. Scrub over the history of changes to your deployments.</p>
            </div>
          </Col>
          <Col sm={12} md={6} lg={4}>
            <div className={(isHovered && hoveredFeature != "Feature5") ? "project__block__inner darken" : "project__block__inner"} onMouseOver={() => handleMouseOver(5)} onMouseOut={handleMouseOut}>
              <h3>Service Performance</h3>
              <p>Continuous visibility across all of your clusters and workloads metrics.</p>
            </div>
          </Col>
          <Col sm={12} md={6} lg={4}>
            <div className={(isHovered && hoveredFeature != "Feature6") ? "project__block__inner darken" : "project__block__inner"} onMouseOver={() => handleMouseOver(6)} onMouseOut={handleMouseOut}>
              <h3>Log Stream</h3>
              <p>Stream and filter through the logs using keywords for multiple Kubernetes Pods simultaneously.</p>
            </div>
          </Col>
        </div>
      </Row>
    </VisualizerFeaturesWrapper>

  );
};

export default MeshmapVisualizerFeatures;