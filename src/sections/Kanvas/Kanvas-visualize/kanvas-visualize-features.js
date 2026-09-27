import React, { useState, useEffect, useRef } from "react";
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
import { useStyledDarkMode } from "../../../theme/app/useStyledDarkMode";
import DocsIcon from "../../Pricing/icons/docs.js";

const VisualizerFeaturesWrapper = styled.div`
  display: flex;
  width: 80%;
  justify-content: center;
  align-items: center;
  z-index: 10;

  .project__block__wrap {
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
    position: relative;
    display: flex;
    flex-direction: column;
    background: ${(props) => props.theme.grey212121ToWhite};
    box-shadow: 0px 0px ${(props) => props.theme.projectShadowsize}
      ${(props) => props.theme.whiteToGreyE6E6E6};
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);

    &:hover {
      box-shadow: 0px 0px 5px ${(props) => props.theme.green00D3A9ToGreen3C494F};
    }
    padding: 10% 8%;
    height: 25rem;
    border-radius: 4%;
    text-align: center;
    justify-content: center;
    align-items: center;
    transition: all 0.5s ease;
    margin: 5% 0%;

    h3 {
      margin: auto;
      font-weight: 700;
      font-size: 1.5rem;
      color: ${(props) => props.theme.secondaryColor};
      text-align: center;
      justify-content: center;
      margin-bottom: 2%;
    }
    p {
      font-weight: 300;
      color: ${(props) => props.theme.text};
      margin: auto;
      transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
    }

    img {
      height: auto;
      width: 70%;
    }

    .gatsby-image-wrapper {
      margin: 10px auto;
      min-height: 40px;
    }
  }

  .darken {
    background: ${(props) => props.theme.grey121212ToWhite};
    /* scale:1.1; */
    /* transition: all 0.5s ease; */
    opacity: 0.85;
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  }

  .feature-image {
    position: relative;
    padding: 0% 0% 10%;

    svg {
      .service-performance-meter-colorMode_svg__colorMode1 {
        fill: ${(props) => props.theme.grey212121ToGreyF3F3F3};
        transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
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
      transition:
        opacity 0.5s ease-in-out,
        transform 0.5s ease-in-out 0.3s;
      /* transition: transform 1s ease-in-out 0.2s; */
    }
  }

  .docs-icon-wrapper {
    position: absolute;
    top: 16px;
    right: 16px;
    color: ${(props) => props.theme.secondaryColor};
  }
`;

const KanvasVisualizerFeatures = () => {
  const [isHovered, setisHovered] = useState(false);
  const [hoveredFeature, sethoveredFeature] = useState("");
  const [inViewFeatures, setInViewFeatures] = useState(() => new Set());
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const cardRefs = useRef([]);
  const { isDark } = useStyledDarkMode();

  useEffect(() => {
    if (typeof window === "undefined" || !("matchMedia" in window)) return;

    const mediaQuery = window.matchMedia("(max-width: 992px), (hover: none)");
    const updateMatches = () => setIsSmallScreen(mediaQuery.matches);

    updateMatches();

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", updateMatches);
      return () => mediaQuery.removeEventListener("change", updateMatches);
    } else if (mediaQuery.addListener) {
      mediaQuery.addListener(updateMatches);
      return () => mediaQuery.removeListener(updateMatches);
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined" || !("IntersectionObserver" in window))
      return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute("data-feature-id");
          if (!id) return;

          if (entry.isIntersecting) {
            setInViewFeatures((prev) => {
              if (prev.has(id)) return prev;
              const next = new Set(prev);
              next.add(id);
              return next;
            });
          } else {
            setInViewFeatures((prev) => {
              if (!prev.has(id)) return prev;
              const next = new Set(prev);
              next.delete(id);
              return next;
            });
          }
        });
      },
      {
        threshold: 0.25,
      },
    );

    cardRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleMouseOver = (num) => {
    setisHovered(true);
    sethoveredFeature(`${"Feature"}${num}`);
  };

  const handleMouseOut = () => {
    setisHovered(false);
    sethoveredFeature("");
  };

  const isFeatureActive = (featureId) => {
    return (
      hoveredFeature === featureId ||
      (isSmallScreen && inViewFeatures.has(featureId))
    );
  };

  return (
    <VisualizerFeaturesWrapper>
      <Row>
        <div className="project__block__wrap">
          <Col $sm={12} $md={6} $lg={4}>
            <a
              href="https://docs.layer5.io/kanvas/getting-started/import-designs/"
              style={{
                textDecoration: "none",
                color: "inherit",
                display: "block",
              }}
            >
              <div
                ref={(el) => {
                  cardRefs.current[0] = el;
                }}
                data-feature-id="Feature1"
                className={
                  isHovered && hoveredFeature != "Feature1"
                    ? "project__block__inner darken"
                    : "project__block__inner"
                }
                onMouseOver={() => handleMouseOver(1)}
                onMouseOut={handleMouseOut}
              >
                <div className="docs-icon-wrapper">
                  <DocsIcon />
                </div>
                <div className="feature-image">
                  <img
                    src={ApplicationImportBoxes}
                    alt="Application Import"
                    style={{ position: "absolute" }}
                  />
                  <img
                    src={ApplicationImportArrows}
                    alt=""
                    className={
                      isFeatureActive("Feature1")
                        ? "secondary-image-visible"
                        : "secondary-image"
                    }
                  />
                </div>
                <h3>Application Import</h3>
                <p>
                  Import your existing Kubernetes, Helm, or Docker Compose
                  applications.
                </p>
              </div>
            </a>
          </Col>
          <Col $sm={12} $md={6} $lg={4}>
            <a
              href="https://docs.layer5.io/kanvas/operator/resource-details/"
              style={{
                textDecoration: "none",
                color: "inherit",
                display: "block",
              }}
            >
              <div
                ref={(el) => {
                  cardRefs.current[1] = el;
                }}
                data-feature-id="Feature2"
                className={
                  isHovered && hoveredFeature != "Feature2"
                    ? "project__block__inner darken"
                    : "project__block__inner"
                }
                onMouseOver={() => handleMouseOver(2)}
                onMouseOut={handleMouseOut}
              >
                <div className="docs-icon-wrapper">
                  <DocsIcon />
                </div>
                <div className="feature-image">
                  <img
                    src={PerformanceMetrics}
                    alt="Performance Metrics"
                    style={{ position: "absolute" }}
                  />
                  <img
                    src={PerformanceMetricsGraph}
                    alt=""
                    className={
                      isFeatureActive("Feature2")
                        ? "secondary-image-visible"
                        : "secondary-image"
                    }
                  />
                </div>
                <h3>Real-time performance metrics</h3>
                <p>
                  Monitor your clusters performing in action, set alerts and
                  work with object-specific metrics.
                </p>
              </div>
            </a>
          </Col>
          <Col $sm={12} $md={6} $lg={4}>
            <a
              href="https://docs.layer5.io/kanvas/operator/#understanding-interactive-terminal"
              style={{
                textDecoration: "none",
                color: "inherit",
                display: "block",
              }}
            >
              <div
                ref={(el) => {
                  cardRefs.current[2] = el;
                }}
                data-feature-id="Feature3"
                className={
                  isHovered && hoveredFeature != "Feature3"
                    ? "project__block__inner darken"
                    : "project__block__inner"
                }
                onMouseOver={() => handleMouseOver(3)}
                onMouseOut={handleMouseOut}
              >
                <div className="docs-icon-wrapper">
                  <DocsIcon />
                </div>
                <div className="feature-image">
                  <img
                    src={InteractiveTerminal}
                    alt="Interactive Terminal"
                    style={{ position: "absolute", width: "80%", zIndex: "0" }}
                  />
                  <img
                    src={InteractiveTerminalCode}
                    alt=""
                    className={
                      isFeatureActive("Feature3")
                        ? "secondary-image-visible"
                        : "secondary-image"
                    }
                    style={{ position: "relative", width: "80%", zIndex: "10" }}
                  />
                </div>
                <h3>Interactive Terminal</h3>
                <p>Establish sessions with one or more pods at a time.</p>
              </div>
            </a>
          </Col>
          <Col $sm={12} $md={6} $lg={4}>
            <div
              ref={(el) => {
                cardRefs.current[3] = el;
              }}
              data-feature-id="Feature4"
              className={
                isHovered && hoveredFeature != "Feature4"
                  ? "project__block__inner darken"
                  : "project__block__inner"
              }
              onMouseOver={() => handleMouseOver(4)}
              onMouseOut={handleMouseOut}
            >
              <div className="feature-image">
                <img
                  src={TimelineDVRClock}
                  alt="Timeline"
                  style={{ position: "absolute", width: "80%" }}
                />
                <img
                  src={TimelineDVR}
                  alt=""
                  className={
                    isFeatureActive("Feature4")
                      ? "secondary-image-visible"
                      : "secondary-image"
                  }
                  style={{ width: "80%" }}
                />
              </div>
              <h3>Timeline (DVR)</h3>
              <p>
                Playback service transactions. Scrub over the history of changes
                to your deployments.
              </p>
            </div>
          </Col>
          <Col $sm={12} $md={6} $lg={4}>
            <div
              ref={(el) => {
                cardRefs.current[4] = el;
              }}
              data-feature-id="Feature5"
              className={
                isHovered && hoveredFeature != "Feature5"
                  ? "project__block__inner darken"
                  : "project__block__inner"
              }
              onMouseOver={() => handleMouseOver(5)}
              onMouseOut={handleMouseOut}
            >
              <div className="feature-image">
                <img
                  src={
                    isDark
                      ? ServicePerformanceGearDark
                      : ServicePerformanceGearLight
                  }
                  alt="Service Performance"
                  style={{ position: "absolute", zIndex: "0" }}
                />
                <ServicePerformanceMeter
                  alt=""
                  className={
                    isFeatureActive("Feature5")
                      ? "meter-visible"
                      : "secondary-image"
                  }
                  style={{
                    height: "auto",
                    width: "70%",
                    position: "relative",
                    zIndex: "10",
                    transformOrigin: "center center",
                  }}
                />
              </div>
              <h3>Service Performance</h3>
              <p>
                Continuous visibility across all of your clusters and workloads
                metrics.
              </p>
            </div>
          </Col>
          <Col $sm={12} $md={6} $lg={4}>
            <a
              href="https://docs.layer5.io/kanvas/operator/#understanding-log-streamer"
              style={{
                textDecoration: "none",
                color: "inherit",
                display: "block",
              }}
            >
              <div
                ref={(el) => {
                  cardRefs.current[5] = el;
                }}
                data-feature-id="Feature6"
                className={
                  isHovered && hoveredFeature != "Feature6"
                    ? "project__block__inner darken"
                    : "project__block__inner"
                }
                onMouseOver={() => handleMouseOver(6)}
                onMouseOut={handleMouseOut}
              >
                <div className="docs-icon-wrapper">
                  <DocsIcon />
                </div>
                <div className="feature-image">
                  <img
                    src={LogStream}
                    alt="Log Stream"
                    style={{ position: "absolute" }}
                  />
                  <img
                    src={LogStreamSearch}
                    alt=""
                    className={
                      isFeatureActive("Feature6")
                        ? "secondary-image-visible"
                        : "secondary-image"
                    }
                  />
                </div>
                <h3>Log Stream</h3>
                <p>
                  Stream and filter through the logs using keywords for multiple
                  Kubernetes Pods simultaneously.
                </p>
              </div>
            </a>
          </Col>
        </div>
      </Row>
    </VisualizerFeaturesWrapper>
  );
};

export default KanvasVisualizerFeatures;
