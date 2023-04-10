import React from "react";
import styled from "styled-components";
import { Row, Col } from "../../../reusecore/Layout";
import PerformanceMetrics from "./images/performance-metrics-bars.svg";
import PerformanceMetricsGraph from "./images/performance-metrics-graph.svg";
import TimelineDVR from "./images/timeline-dvr.svg";
import TimelineDVRClock from "./images/timeline-dvr-clock.svg";
import ServicePerformanceGearDark from "./images/service-performance-gear-dark.svg";
import ServicePerformanceGearLight from "./images/service-performance-gear-light.svg";
import { ReactComponent as ServicePerformanceMeter } from "./images/service-performance-meter-colorMode.svg";
import ApplicationImportBoxes from "./images/application-import-boxes.svg";
import ApplicationImportArrows from "./images/application-import-arrows.svg";
import InteractiveTerminal from "./images/interactive-terminal.svg";
import InteractiveTerminalCode from "./images/interactive-terminal-code.svg";
import LogStream from "./images/log-stream.svg";
import LogStreamSearch from "./images/log-stream-search.svg";
import { useState } from "react";
import { useStyledDarkMode } from "../../../theme/app/useStyledDarkMode";

const VisualizerFeaturesWrapper = styled.div`

display: flex;
width: 80%;
justify-content: center;
align-items: center;
z-index: 10;

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
        background: ${props => props.theme.grey212121ToWhite};
        box-shadow: 0px 0px ${props => props.theme.projectShadowsize} ${props => props.theme.whiteToGreyE6E6E6};
        &:hover{
            box-shadow: 0px 0px 5px ${props => props.theme.green00D3A9ToGreen3C494F};
        }
        padding: 10% 8%;
        height: 25rem;
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
            text-align: center;
            justify-content: center;
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
        }

        .gatsby-image-wrapper{
            margin: 10px auto;
            min-height: 40px;
        }
    }

    .darken {
      background: ${props => props.theme.grey121212ToWhite};
      /* scale:1.1; */
      /* transition: all 0.5s ease; */
      opacity: 0.85;
    }

    .feature-image {
      position: relative;
      padding: 0% 0% 10%;

      svg {
        .service-performance-meter-colorMode_svg__colorMode1{
          fill: ${props => props.theme.grey212121ToGreyF3F3F3};
      }
    }

    .secondary-image {
      opacity: 0;
      transition: all 0.5s ease-in-out;
    }

    .secondary-image-visible {
      opacity: 1;
      transition: all 0.5s ease-in-out;
    }

    .meter-visible {
      opacity: 1;
      transform-origin: center center;
      transform: rotateZ(200deg);
      transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out 0.3s;
      /* transition: transform 1s ease-in-out 0.2s; */
    }
`;

const MeshmapVisualizerFeatures = () => {
  const [isHovered, setisHovered] = useState(false);
  const [hoveredFeature, sethoveredFeature] = useState("");

  const { isDark } = useStyledDarkMode();
  const theme = isDark ? "dark" : "light";

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
            <div className={(isHovered && hoveredFeature != "Feature1") ? "project__block__inner darken" : "project__block__inner"} onMouseOver={() => handleMouseOver(1)} onMouseOut={handleMouseOut}>
              <div className="feature-image">
                <img src={ApplicationImportBoxes} alt="Application Import" style={{ position: "absolute" }} />
                <img src={ApplicationImportArrows} alt="" className={hoveredFeature == "Feature1" ? "secondary-image-visible" : "secondary-image"} />
              </div>
              <h3>Application Import</h3>
              <p>Import your existing Kubernetes, Helm, or Docker Compose applications.</p>
            </div>
          </Col>
          <Col sm={12} md={6} lg={4}>
            <div className={(isHovered && hoveredFeature != "Feature2") ? "project__block__inner darken" : "project__block__inner"} onMouseOver={() => handleMouseOver(2)} onMouseOut={handleMouseOut}>
              <div className="feature-image">
                <img src={PerformanceMetrics} alt="Performance Metrics" style={{ position: "absolute" }} />
                <img src={PerformanceMetricsGraph} alt="" className={hoveredFeature == "Feature2" ? "secondary-image-visible" : "secondary-image"} />
              </div>
              <h3>Real-time performance metrics</h3>
              <p>Monitor your clusters performing in action, set alerts and work with object-specific metrics.</p>
            </div>
          </Col>
          <Col sm={12} md={6} lg={4}>
            <div className={(isHovered && hoveredFeature != "Feature3") ? "project__block__inner darken" : "project__block__inner"} onMouseOver={() => handleMouseOver(3)} onMouseOut={handleMouseOut}>
              <div className="feature-image">
                <img src={InteractiveTerminal} alt="Interactive Terminal" style={{ position: "absolute", width: "80%", zIndex: "0" }} />
                <img src={InteractiveTerminalCode} alt="" className={hoveredFeature == "Feature3" ? "secondary-image-visible" : "secondary-image"} style={{ position: "relative", width: "80%", zIndex: "10" }} />
              </div>
              <h3>Interactive Terminal</h3>
              <p>Establish sessions with one or more pods at a time.</p>
            </div>
          </Col>
          <Col sm={12} md={6} lg={4}>
            <div className={(isHovered && hoveredFeature != "Feature4") ? "project__block__inner darken" : "project__block__inner"} onMouseOver={() => handleMouseOver(4)} onMouseOut={handleMouseOut}>
              <div className="feature-image">
                <img src={TimelineDVRClock} alt="Timeline" style={{ position: "absolute", width: "80%" }} />
                <img src={TimelineDVR} alt="" className={hoveredFeature == "Feature4" ? "secondary-image-visible" : "secondary-image"} style={{ width: "80%" }} />
              </div>
              <h3>Timeline (DVR)</h3>
              <p>Playback service transactions. Scrub over the history of changes to your deployments.</p>
            </div>
          </Col>
          <Col sm={12} md={6} lg={4}>
            <div className={(isHovered && hoveredFeature != "Feature5") ? "project__block__inner darken" : "project__block__inner"} onMouseOver={() => handleMouseOver(5)} onMouseOut={handleMouseOut}>
              <div className="feature-image">
                <img src={theme == "dark" ? ServicePerformanceGearDark : ServicePerformanceGearLight} alt="Service Performance" style={{ position: "absolute", zIndex: "0" }} />
                <ServicePerformanceMeter alt="" className={hoveredFeature == "Feature5" ? "meter-visible" : "secondary-image"}
                  style={{ height: "auto", width: "70%",position: "relative", zIndex: "10", transformOrigin: "center center" }}
                />
              </div>
              <h3>Service Performance</h3>
              <p>Continuous visibility across all of your clusters and workloads metrics.</p>
            </div>
          </Col>
          <Col sm={12} md={6} lg={4}>
            <div className={(isHovered && hoveredFeature != "Feature6") ? "project__block__inner darken" : "project__block__inner"} onMouseOver={() => handleMouseOver(6)} onMouseOut={handleMouseOut}>
              <div className="feature-image">
                <img src={LogStream} alt="Log Stream" style={{ position: "absolute" }} />
                <img src={LogStreamSearch} alt="" className={hoveredFeature == "Feature6" ? "secondary-image-visible" : "secondary-image"} />
              </div>
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